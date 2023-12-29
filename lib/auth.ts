import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export const getJWTFromCookie = () => {
  return cookies().get('tokenTaski')?.value;
};

export const decodeJWT = async (jwt: any) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode('P5BsNuJR8hgfAx7ap9ZkW3jmGnC6rMDe')
  );
  return payload;
};
export const getUserIdFromCookie = async () => {
  const jwt = getJWTFromCookie();
  if (!jwt) return null;
  const { id } = await decodeJWT(jwt);
  return id;
};
