import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe("Test Dashboard Component", () => {
    it("Should Render Dashboard Component", async () => {
      render(<Dashboard />);
      await waitFor(() => {
        return;
      });

      await waitFor(() => {
        expect(screen.getByTestId("dashboard")).toBeInTheDocument();
      });      
    });
  })