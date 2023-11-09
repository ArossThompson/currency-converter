import { render, screen, waitFor } from '@testing-library/react';
import {describe, it, expect } from 'vitest';
import { ConversionDisplay } from './ConversionDisplay';

describe('ConversionDisplay', () => {
  it('renders the component with countdown', async () => {
    render(
      <ConversionDisplay
        inputAmount="100"
        baseRate="GBP"
        targetAmount="115"
        targetRate="USD"
        initialCount={10}
      />
    );
    
    expect(screen.getByTestId('conversion-display')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('This will expire in 9 seconds')).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});