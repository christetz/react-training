import { sum } from '../src/pages/neues-fahrzeug';

describe('Unit Tests', () => {
  describe('Demo', () => {
    it('should do something and returns true', () => {
      //Arrange

      //Act
      const actual = sum(1, 1);
      expect(actual).toBe(2);
    });
  });
});
