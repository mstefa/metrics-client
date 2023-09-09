import { useQueryMetricFilter } from '../hooks/useQueryMetricFilter';
import { MetricQueryFilter } from '../types/MetricQueryFilter';
import DatePicker from 'react-datepicker';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface MetricFiltersProps {
  updateMetric: (query: MetricQueryFilter) => void;
}

export function MetricsFiltersForm({ updateMetric }: MetricFiltersProps) {
  const { inputs, setInput, metricNames, intervalUnits } =
    useQueryMetricFilter();

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = Array.from(e.target.selectedOptions, (option) => {
      return option.id;
    });
    setInput({
      ...inputs,
      [e.target.name]: value,
    });
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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryFilter: MetricQueryFilter = {
      metricNames: inputs.name,
      intervalUnit: inputs.intervalUnit, //TODO
      from: inputs.selectedFromDate.toISOString(),
      to: inputs.selectedToDate.toISOString(),
    };
    updateMetric(queryFilter);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="datetimePickerFrom">
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
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="datetimePickerTo">
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
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Metric name</Form.Label>
            <Form.Select
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
        <Col>
          <Form.Group className="mb-3" controlId="intervalUnit">
            <Form.Label>Metric name</Form.Label>
            <Form.Select
              id="intervalUnit"
              name="intervalUnit"
              onChange={handleChangeOptions}
            >
              {intervalUnits.map((e) => {
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
          Apply Filter
        </Button>
      </Row>
    </Form>
  );
}
