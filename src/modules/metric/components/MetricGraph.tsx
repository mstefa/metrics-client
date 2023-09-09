import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useMetrics } from '../hooks/useMetrics';
import { Container, Spinner } from 'react-bootstrap';
import { MetricsFiltersForm } from './MetricsFiltersForm';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'metrics',
    },
  },
};

export function MetricGraph() {
  const { metricGraphData, updateMetric } = useMetrics();

  return (
    <>
      <MetricsFiltersForm updateMetric={updateMetric}></MetricsFiltersForm>
      {metricGraphData ? (
        <Line options={options} data={metricGraphData} />
      ) : (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: '50vh' }}
        >
          <Spinner animation="grow" />
          <div>loading...</div>
        </Container>
      )}
    </>
  );
}
