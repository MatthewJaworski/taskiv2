import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/projects/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: authorization || '',
    },
  });

  if (result.status === 204) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  }
  return new Response(JSON.stringify({ success: false }), { status: 404 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/projects/${id}`, {
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
