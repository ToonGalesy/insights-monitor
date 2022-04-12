import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

const setUpTest = () => {
  const testURL = "https://example.com";
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      href: testURL
    }
  });
  window.location.replace = jest.fn();
};

describe("Test App Component", () => {
  beforeEach(() => {
    setUpTest();
  });

  it("Should Render App Component", async () => {
    render(<App />);
    await waitFor(() => {
      return;
    });
  });
})
