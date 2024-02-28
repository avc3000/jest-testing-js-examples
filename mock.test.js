test("Mock implementation of a basic function.", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  expect(mockCallback(1)).toBe(43);
  expect(mockCallback).toHaveBeenCalledWith(1);
});

test("Spying on a method of an object.", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
