import { TTokenUser } from '@/types/auth';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { getNewToken } from './api';

export const getJWTFromCookie = () => {
  return cookies().get('tokenTaski')?.value;
};

export const decodeJWT = async (jwt: any) => {
  let payload;
  let newToken = jwt;
  try {
    const result = await jwtVerify(
      jwt,
      new TextEncoder().encode('P5BsNuJR8hgfAx7ap9ZkW3jmGnC6rMDe')
    );
    payload = result.payload;
  } catch (error) {
    const { refreshedToken } = (await getNewToken(jwt)) as {
      refreshedToken: string;
    };
    const result = await jwtVerify(
      refreshedToken as string,
      new TextEncoder().encode('P5BsNuJR8hgfAx7ap9ZkW3jmGnC6rMDe')
    );
    newToken = refreshedToken;

    payload = result.payload;
  }
  
  return { data: payload, token: newToken };
};
export const getUserIdFromCookie = async () => {
  const jwt = getJWTFromCookie();
  if (!jwt) return null;
  const { data } = await decodeJWT(jwt);
  const id = data.id;
  return id;
};

export const getTokenFromAuthrorizationHeader = (authorization: string) => {
  return authorization.split(' ')[1];
};
export const getUserDataFromCookie = async () => {
  const jwt = getJWTFromCookie();
  if (!jwt) return null;
  const { data } = await decodeJWT(jwt);

  return data as TTokenUser;
};
