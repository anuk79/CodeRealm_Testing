
describe.only('Describe', () => {
  beforeAll(() => {
    console.log('Before all');
  });
  beforeEach(() => {
    console.log('Before each');
  });
  it('should run first test', () => {
    console.log('First test');
  });
  it('should run second test', () => {
    console.log('second test');
  });
  test('if it runs the third test', () => {
    console.log('third test');
  });
  afterEach(() => {
    console.log('After each');
  });
  afterAll(() => {
    console.log('After all');
  });
});

describe('Describe to be skipped', () => {
  it('should not run first test', () => {
    console.log('this test will be skipped');
  });
  it('should run second test', () => {
    console.log('this test will be skipped');
  });
});