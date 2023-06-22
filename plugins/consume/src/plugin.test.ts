import { consumePlugin } from './plugin';

describe('consume', () => {
  it('should export plugin', () => {
    expect(consumePlugin).toBeDefined();
  });
});
