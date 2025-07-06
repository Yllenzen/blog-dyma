import { SquarePipe } from './square-pipe';

describe('SquarePipe', () => {
  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });

  it('should take 2 and return 4', () => {
    const pipe = new SquarePipe();
    const testNumber = 2;
    const result = pipe.transform(testNumber);
    expect(result).toBe(4);
  });
});
