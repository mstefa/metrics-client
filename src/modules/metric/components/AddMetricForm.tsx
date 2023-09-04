import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addMetric } from '../repository/MetricRepository';
import { Metric } from '../types/MetricTypes';

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
    console.error(value[0].id);
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

  const metricNames = [
    {
      id: 'response_time',
      name: 'response_time',
    },
    {
      id: 'cpu_usage',
      name: 'cpu_usage',
    },
    {
      id: 'memory_usage',
      name: 'memory_usage',
    },
  ];

  //TODO
  // export enum MetricNameEnum {
  //   RESPONSE_TIME = 'response_time',
  //   CPU_USAGE = 'cpu_usage',
  //   MEMORY_USAGE = 'memory_usage',
  // }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Metric name</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="name"
          name="name"
          // multiple
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
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Value</Form.Label>
        <Form.Control
          type="number"
          name="value"
          onChange={handleInputChange}
          value={input.value}
        />
      </Form.Group>
      {/* TODO */}
      {/* <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          onChange={handleInputChange}
          value={input.price}
        />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        {' '}
        Submit
      </Button>
    </Form>
  );
}
