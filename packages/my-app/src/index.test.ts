import { printOne } from ".";

describe("returnOne", () => {
  it("should return 1", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();

    printOne();

    expect(spy).toHaveBeenCalledWith(1);
    spy.mockRestore();
  });
});
