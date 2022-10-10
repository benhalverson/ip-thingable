import { getClientIpFromXForwardedFor } from '../src/index';
describe('geoip', () => {
  const req = {
    headers: {
      'x-forwarded-for': '123.123.123.255',
    },
  };


  it('should do a thing', () => {
    expect(getClientIpFromXForwardedFor).toBeDefined();
    expect(getClientIpFromXForwardedFor).toBeInstanceOf(Function);
    expect(getClientIpFromXForwardedFor(req)).toBeTruthy();

  });
});
