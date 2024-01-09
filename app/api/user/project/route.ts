import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const authorization = headers().get('Authorization');
  const result = await fetch(`http://localhost:5025/api/user/project`, {
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
  console.log(data, 'data dodanie');
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
export async function DELETE(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const authorization = headers().get('Authorization');
  const result = await fetch(`http://localhost:5025/api/user/project`, {
    body: JSON.stringify(body),
    method: 'DELETE',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['deleteProject'] },
  });
  // console.log("body", JSON.stringify(body))
  const data = await result.json();
  console.log(data, 'data usuniecie');
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
