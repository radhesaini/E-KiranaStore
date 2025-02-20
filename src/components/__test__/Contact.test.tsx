import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  it('renders the Contact Us heading', () => {
    render(<Contact />);
    const headingElement = screen.getByTestId('contact-title');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    render(<Contact />);
    const emailElement = screen.getByText(/Email: support@shop.com/i);
    const phoneElement = screen.getByTestId('phoneno');

    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<Contact />);
    const nameLabel = screen.getByLabelText(/Name:/i);
    const emailLabel = screen.getByLabelText(/Email:/i);
    const messageLabel = screen.getByLabelText(/Message:/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('name input field is required', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name:/i);
    expect(nameInput).toBeRequired();
  });

  it('email input field is required', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/Email:/i);
    expect(emailInput).toBeRequired();
  });

  it('message textarea is required', () => {
    render(<Contact />);
    const messageTextarea = screen.getByLabelText(/Message:/i);
    expect(messageTextarea).toBeRequired();
  });
});
