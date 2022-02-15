import { useFetchGifs } from "../../Hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
jest.setTimeout(30000);

describe("test on useFetchGif hooks", () => {
  test("should return the initial state", async() => {
    const { result, waitForNextUpdate} = renderHook(() => useFetchGifs("dragon Ball"));
    const { data, loading } = result.current;
    await waitForNextUpdate({timeout:9000});
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an image arrays and the loading in false", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("dragon Ball"));
    await waitForNextUpdate({timeout:9000});
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });


});
