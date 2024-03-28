import { test, expect, render } from 'vitest';
import App from './App';

test('renders loading message when menu data is not available', () => {
  // Mock the apiDataFetch function to return null menuData
  jest.mock('../src/lib/apiDataFetch', () => ({
    apiDataFetch: jest.fn(() => ({ menuData: null })),
  }));

  // Render the App component
  const { getByText } = render(<App />);

  // Assert that the loading message is rendered
  expect(getByText('Loading...')).toBeInTheDocument();
});


