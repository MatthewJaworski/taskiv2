import { decodeJWT, getTokenFromAuthrorizationHeader } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryName = searchParams.get('name');

  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/user`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['allUsers'] },
  });

  const data = await result.json();
  const regex = new RegExp(queryName || '', 'gi');
  const token = getTokenFromAuthrorizationHeader(authorization!);
  const {
    data: { id },
  } = await decodeJWT(token);

  const filteredUsers =
    queryName !== ''
      ? data.filter(
          (item: { name: string; id: string }) =>
            item.name && item.name.match(regex) && item.id !== id
        )
      : data;

  const mappedUsers = filteredUsers.map(
    (item: { name: string; id: string }) => {
      return {
        value: item.id,
        label: item.name,
      };
    }
  );
  return new Response(JSON.stringify(mappedUsers), {
    status: 200,
  });
}
