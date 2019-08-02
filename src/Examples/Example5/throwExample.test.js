async function shouldRejectWithError() {
  throw new Error("An example error");
}

describe.skip("shouldRejectWithError", () => {
  it("should reject with an error", async () => {
    try {
      await shouldRejectWithError();
    } catch (err) {
      expect(err.message).toMatch(/example/);
      expect(err.message).toEqual("An example error");
    }
  });
});
