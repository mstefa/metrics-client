import { Metric } from '../types/MetricTypes';
import { Nullable } from '../types/Nullable';
import { MetricQueryFilter } from '../types/MetricQueryFilter';
import { MetricsAverages } from '../types/MetricAverages';

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
  const nameUrlQuery = query.metricNames
    .map((name) => `name=${name}`)
    .toString()
    .replace(/,/g, '&');
  return fetch(
    `http://localhost:3000/metrics/?${nameUrlQuery}&from=${query.from}&to=${query.to}&intervalUnit=${query.intervalUnit}`
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
