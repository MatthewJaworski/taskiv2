import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const queryName = searchParams.get('name');
  const id = params.id;
  const authorization = headers().get('Authorization');
  const result = await fetch(`http://localhost:5025/api/projects/${id}/users`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['projectUsers'] },
  });
   console.log(queryName, 'queryName');

  const data = await result.json();
  const regex = new RegExp(queryName || '', 'gi');
  
  const filteredUsers =
    queryName !== ''
      ? data.filter(
          (item: { name: string; id: string }) =>
            item.name && item.name.match(regex)
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
