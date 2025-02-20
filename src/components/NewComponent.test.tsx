import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NewComponent from './NewComponent';

describe('NewComponent', () => {
  it('renders correctly', () => {
    render(<NewComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
