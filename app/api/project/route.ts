import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const authorization = headers().get('Authorization');
  const result = await fetch(`${process.env.API_URL}/api/projects`, {
    method: 'GET',
    headers: {
      Authorization: authorization || '',
    },
    next: { tags: ['allProjects'] },
  });

  const data = await result.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const result = await fetch(`${process.env.API_URL}/api/projects`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['allProjects'] },
  });

  const data = await result.json();
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
