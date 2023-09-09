import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About'; // Adjust the import path

describe('About Component', () => {
  it('should render the About component correctly', () => {
    render(<About />);

    // Check if the text "About Me" is present in the component
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});
