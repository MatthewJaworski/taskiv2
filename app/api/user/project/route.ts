import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/user/project`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['addProject'] },
  });
  const data = await result.json();

  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
export async function DELETE(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/user/project`, {
    body: JSON.stringify(body),
    method: 'DELETE',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['deleteProject'] },
  });
  const data = await result.json();
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
