import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';

describe("Test Header Component", () => {
    it("Should Render Header Component", async () => {
      render(<Header />);
      await waitFor(() => {
        return;
      });

      await waitFor(() => {
        expect(screen.getByTestId("header")).toBeInTheDocument();
      });      
    });
  })