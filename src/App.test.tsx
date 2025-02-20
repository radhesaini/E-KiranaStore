import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the component without errors', () => {
    render(<App />);
  });

  it('displays the Kirana Shop heading', () => {
    render(<App />);
    const headingElement = screen.getByTestId('title');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);
    const servicesLink = screen.getByText(/Services/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
  });

  it('renders the footer with quick links', () => {
    render(<App />);
    const complaintsLink = screen.getByText(/Complaints/i);
    const helpLink = screen.getByText(/Help/i);
    const feedbackLink = screen.getByText(/Feedback/i);
    const faqLink = screen.getByText(/FAQ/i);

    expect(complaintsLink).toBeInTheDocument();
    expect(helpLink).toBeInTheDocument();
    expect(feedbackLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
  });

  it('renders the copyright information in the footer', () => {
    render(<App />);
    const copyrightText = screen.getByText(
      /© 2025 Kirana Shop. All rights reserved./i,
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
