

// expect(input).matcher(output);

describe('Jest matchers', () => {
  it('shows examples', () => {
    expect(1 + 1).toBe(2);

    let shouldWeTest = true;
    expect(shouldWeTest).toBe(true);

    let testArr = ['a', 'b', 'c'];
    expect(testArr).toEqual(['a', 'b', 'c']);

    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(false).toBeFalsy();

    expect(null).not.toBeTruthy();

    expect(['React', 'Angular', 'Vue']).toContain('React');
  });
});