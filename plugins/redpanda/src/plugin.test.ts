import { redpandaPlugin } from './plugin';

describe('redpanda', () => {
  it('should export plugin', () => {
    expect(redpandaPlugin).toBeDefined();
  });
});
