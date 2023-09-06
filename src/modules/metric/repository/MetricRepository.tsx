import { debug } from 'console';
import { Metric, MetricsAverages } from '../types/MetricTypes';
import { Nullable } from '../types/Nullable';
import { MetricQueryFilter } from '../types/MetricQueryFilter';

const headers = {
  'Content-Type': 'application/json',
};

async function addMetric(metric: Metric): Promise<void> {
  // TODO: use async await
  fetch('http://localhost:3000/metric', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(metric),
  })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return;
    })
    .catch((error) => {
      console.error(error);
    });

  return;
}

async function retrieveMetrics(
  query: MetricQueryFilter
): Promise<Nullable<MetricsAverages>> {
  return fetch(
    `http://localhost:3000/metrics/?name=${query.metricName}&from=${query.from}&to=${query.to}&intervalUnit=second`
  )
    .then((response) => response.json())
    .then((json) => {
      return json as MetricsAverages;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export { addMetric, retrieveMetrics };
