'use server';
import { cookies } from 'next/headers';
export default async function removeToken() {
  cookies().delete('tokenTaski');
}
