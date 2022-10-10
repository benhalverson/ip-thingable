export function getClientIpFromXForwardedFor(req: any) {
  if(!req) return null;

  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}


export function getClientIp(req: any) {
  if(req.headers) {
    if(req.headers['x-client-ip']) {
      return req.headers['x-client-ip'];
    }
  }

}