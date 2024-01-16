import { headers } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const response = await fetch(`http://localhost:5025/api/user/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['allUsers'] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  console.log(result);
  return new Response(JSON.stringify({ user: result }), {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const response = await fetch(`http://localhost:5025/api/user/${userId}`, {
    method: 'DELETE',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['allUsers'] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  return new Response(JSON.stringify({ user: result }), {
    status: 200,
  });
}
