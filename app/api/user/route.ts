import { decodeJWT } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import {getTokenFromAuthrorizationHeader} from '@/lib/auth';
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryName = searchParams.get('name');

  const authorization = headers().get('Authorization');
  const result = await fetch(`http://localhost:5025/api/user`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['allUsers'] },
  });
  
  const data = await result.json();
  const regex = new RegExp(queryName || '', 'gi');
  const token=getTokenFromAuthrorizationHeader(authorization!);
  const {id}=await decodeJWT(token);
  console.log(id,'id')
  const filteredUsers =
    queryName !== ''
      ? data.filter(
          (item: { name: string; id: string }) =>
            item.name && item.name.match(regex) && item.id!==id
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
