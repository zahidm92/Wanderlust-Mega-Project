export const accessCookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: process.env.NODE_ENV === 'production',
  maxAge: process.env.ACCESS_COOKIE_MAXAGE,
};
export const refreshCookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: process.env.NODE_ENV === 'production',
  maxAge: process.env.REFRESH_COOKIE_MAXAGE,
};
