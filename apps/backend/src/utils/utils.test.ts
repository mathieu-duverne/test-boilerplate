import { getRandomCredits } from '../utils/utils';

describe('getRandomCredits', () => {
  test('should return a number within the correct range', () => {
    const maxCredits = 10;
    const randomCredits = getRandomCredits(maxCredits); // randomCredits value have to be between 80% and 100%
    expect(randomCredits).toBeGreaterThanOrEqual(8); // minCredits is 8
    expect(randomCredits).toBeLessThanOrEqual(10); // maxCredits is 10
  });
});