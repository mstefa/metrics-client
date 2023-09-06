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
import DatePicker from 'react-datepicker';
import { useMetrics } from '../hooks/useMetrics';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { MetricQueryFilter } from '../types/MetricQueryFilter';
import { useQueryMetricFilter } from '../hooks/useQueryMetricFilter';

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
  const { inputs, setInput, metricNames } = useQueryMetricFilter();

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = Array.from(e.target.selectedOptions, (option) => {
      return { id: option.id, name: option.value };
    });
    console.error(value[0].id);
    setInput({
      ...inputs,
      name: value[0].id, //TODO
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryFilter: MetricQueryFilter = {
      metricName: inputs.name,
      from: inputs.selectedFromDate.toISOString(),
      to: inputs.selectedToDate.toISOString(),
    };
    updateMetric(queryFilter);
  };

  const handleFromDateChange = (date: Date) => {
    setInput({
      ...inputs,
      selectedFromDate: date,
    });
  };

  const handleToDateChange = (date: Date) => {
    setInput({
      ...inputs,
      selectedToDate: date,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div>
              <Form.Label>From:</Form.Label>
              <DatePicker
                id="datetimePicker"
                selected={inputs.selectedFromDate}
                onChange={handleFromDateChange}
                showTimeSelect
                timeFormat="HH:mm:ss"
                timeIntervals={5}
                dateFormat="yyyy-MM-dd HH:mm:ss"
                timeCaption="Time"
                className="form-control"
              />
            </div>
          </Col>
          <Col>
            <div>
              <Form.Label>To:</Form.Label>
              <DatePicker
                id="datetimePicker"
                selected={inputs.selectedToDate}
                onChange={handleToDateChange}
                showTimeSelect
                timeFormat="HH:mm:ss"
                timeIntervals={1}
                dateFormat="yyyy-MM-dd HH:mm:ss"
                timeCaption="Time"
                className="form-control"
              />
            </div>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Metric name</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="name"
                name="name"
                multiple
                onChange={handleChangeOptions}
              >
                {metricNames.map((e) => {
                  return (
                    <option id={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            {' '}
            Submit
          </Button>
        </Row>
      </Form>

      {metricGraphData ? (
        <Line options={options} data={metricGraphData} />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
