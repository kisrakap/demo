import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App'


describe("Testing client ", () => {
  test('navbar', () => {
    const { getByTestId } = render(<App/>)
    const searchInput = getByTestId("navbar")
    expect(searchInput).toBeInTheDocument()
  })

    test('Tv show App', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/Tv Show app/i);
      expect(linkElement).toBeInTheDocument();
    });

      test('Search', () => {
        const { getByTestId } = render(<App />);
        const searchInput = getByTestId("search-box")
        const newQuery = "arrow"

        fireEvent.change(searchInput, {target: {value: arrow}})
        expect(searchInput).toHaveValue(newQuery)
    })
})

