import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddMetricForm from './AddMetricForm';
import { addMetric } from '../repository/MetricRepository';

// Mock the addMetric function
jest.mock('../repository/MetricRepository', () => ({
  addMetric: jest.fn(),
  metricGraphData: [],
}));

describe('AddMetricForm Component', () => {
  it('should render the component', () => {
    render(<AddMetricForm />);

    expect(screen.getByLabelText(/Metric name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Value/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('should handle form submission and call addMetric', () => {
    render(<AddMetricForm />);

    const metricNameSelect = screen.getByLabelText(/Metric name/i);
    fireEvent.change(metricNameSelect, { target: { value: 'response_time' } });

    const valueInput = screen.getByLabelText(/Value/i);
    fireEvent.change(valueInput, { target: { value: '123' } });

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(addMetric).toHaveBeenCalledWith({
      timestamp: expect.any(String),
      name: 'response_time',
      value: '123',
    });
  });
});
