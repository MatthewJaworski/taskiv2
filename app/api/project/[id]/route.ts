import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const authorization = headers().get('Authorization');
  const result = await fetch(`http://localhost:5025/api/projects/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: authorization || '',
    },
  });
  console.log(id, 'id');
  console.log(result, 'result');
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
  const result = await fetch(`http://localhost:5025/api/projects/${id}`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
  });
  const data = await result.json();
  // console.log(data, 'data');
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
