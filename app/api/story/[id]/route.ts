import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/stories/${id}`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
  });
  const data = await result.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const headersList = headers();
  const authorization = headersList.get('Authorization');
  const id = params.id;

  const result = await fetch(`${process.env.API_URL}/api/stories/${id}`, {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['story'] },
  });

  const data = await result.json();

  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const headersList = headers();
  const authorization = headersList.get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/stories/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: authorization!,
    },
  });
  const data = await result.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
