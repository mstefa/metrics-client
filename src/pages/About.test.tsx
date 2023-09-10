import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About Component', () => {
  it('should render the About component correctly', () => {
    render(<About />);

    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});
