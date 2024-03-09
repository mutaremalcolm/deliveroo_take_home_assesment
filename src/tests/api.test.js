import { describe, it, expect } from "vitest";
import { apiDataFetch } from "../lib/apiDataFetch"
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

test('fetches successfully data and sets menuData', async () => {
  mock.onGet(
    'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
  ).reply(200, { yourTestData: 'value' });

  const { result, waitForNextUpdate } = renderHook(() => apiDataFetch());

  await waitForNextUpdate();

  expect(result.current.menuData).toEqual({ yourTestData: 'value' });
});

test('sets error message on API call failure', async () => {
    mock.onGet(
      'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
    ).reply(500, { error: 'Server error' });
  
    const { result, waitForNextUpdate } = renderHook(() => apiDataFetch());
  
    await waitForNextUpdate();
  
    expect(result.current.error?.message).toEqual('Server error');
  });

  test('sets error message on API call failure', async () => {
    mock.onGet(
      'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
    ).reply(500, { error: 'Server error' });
  
    const { result, waitForNextUpdate } = renderHook(() => apiDataFetch());
  
    await waitForNextUpdate();
  
    expect(result.current.error?.message).toEqual('Server error');
  });

  test('setIsLoading is called appropriately', async () => {
    const setLoadingSpy = jest.fn();
  
    jest.spyOn(React, 'useEffect').mockImplementationOnce((effect) => effect());
  
    renderHook(() => apiDataFetch());
  
    expect(setLoadingSpy).toHaveBeenCalledWith(true);
  
    mock.onGet(
      'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
    ).reply(200, { yourTestData: 'value' });
  
    await act(() => Promise.resolve());
  
    expect(setLoadingSpy).toHaveBeenCalledWith(false);
  });

  test('handles errors properly', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {}); // suppress console.error output
  
    mock.onGet(
      'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
    ).reply(404);
  
    const { result, waitForNextUpdate } = renderHook(() => apiDataFetch());
  
    await waitForNextUpdate();
  
    expect(result.current.error?.message).toEqual('Network response was not ok (Status: 404)');
  
    consoleErrorSpy.mockRestore();
  });
  



