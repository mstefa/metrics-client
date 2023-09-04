import { debug } from 'console';
import { Metric } from '../types/MetricTypes';

const headers = {
  'Content-Type': 'application/json',
};

async function addMetric(metric: Metric): Promise<void> {
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
      window.alert('Something went wrong');
    });

  return;
}

export { addMetric };
