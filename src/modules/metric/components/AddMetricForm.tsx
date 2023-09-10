import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addMetric } from '../repository/MetricRepository';
import { Metric } from '../types/MetricTypes';
import { metricNames } from '../types/MetricNamesEnum';

export default function AddMetricForm() {
  const [input, setInput] = useState({
    name: '',
    value: 0,
    timestamp: '',
  });

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = Array.from(e.target.selectedOptions, (option) => {
      return { id: option.id, name: option.value };
    });
    setInput({
      ...input,
      name: value[0].id,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.name && input.name.length > 0) {
      const metric: Metric = {
        timestamp: new Date().toISOString(),
        name: input.name,
        value: input.value,
      };
      addMetric(metric);
    } else {
      window.alert('Please check the inputs');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Metric name</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="name"
          name="name"
          onChange={handleChangeOptions}
        >
          {metricNames.map((e) => {
            return (
              <option key={e.id} id={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Value</Form.Label>
        <Form.Control
          type="number"
          name="value"
          onChange={handleInputChange}
          value={input.value}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {' '}
        Submit
      </Button>
    </Form>
  );
}
