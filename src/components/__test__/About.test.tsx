import { render, screen } from '@testing-library/react';
import About from '../About';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('About Component', () => {
  it('renders the About Us heading', () => {
    render(<About />);
    const headingElement = screen.getByText(/About Us/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    render(<About />);
    const welcomeMessage = screen.getByText(
      /Welcome to {2}Shop, your number one source for all grocery needs./i,
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the founding story', () => {
    render(<About />);
    const foundingStory = screen.getByText(
      /Founded in 2020, {2}Shop has come a long way from its beginnings in a small town./i,
    );
    expect(foundingStory).toBeInTheDocument();
  });

  it('renders the mission statement', () => {
    render(<About />);
    const missionStatement = screen.getByText(
      /Our mission is to provide high-quality groceries at affordable prices, while also supporting local farmers and producers./i,
    );
    expect(missionStatement).toBeInTheDocument();
  });

  it('renders the sustainability commitment', () => {
    render(<About />);
    const sustainabilityCommitment = screen.getByText(
      /At {2}Shop, we are committed to sustainability and ethical sourcing./i,
    );
    expect(sustainabilityCommitment).toBeInTheDocument();
  });

  it('renders the team introduction', () => {
    render(<About />);
    const teamIntroduction = screen.getByText(
      /Our team is made up of dedicated professionals who are passionate about groceries and customer service./i,
    );
    expect(teamIntroduction).toBeInTheDocument();
  });

  it('renders the thank you message', () => {
    render(<About />);
    const thankYouMessage = screen.getByText(
      /Thank you for choosing {2}Shop. We appreciate your business and look forward to serving you for many years to come./i,
    );
    expect(thankYouMessage).toBeInTheDocument();
  });

  it('renders the sincerely message', () => {
    render(<About />);
    const sincerelyMessage = screen.getByText(/Sincerely,/i);
    expect(sincerelyMessage).toBeInTheDocument();
  });
});
