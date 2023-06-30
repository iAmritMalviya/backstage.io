import { kafkadashboardPlugin } from './plugin';

describe('kafkadashboard', () => {
  it('should export plugin', () => {
    expect(kafkadashboardPlugin).toBeDefined();
  });
});
