import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();

  const result = await fetch(`http://localhost:5025/api/user/refresh-token`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
    },
    cache: 'no-cache',
  });
  // console.log(result, 'result.status');
  // console.log(JSON.stringify(body), 'body');
  const data = await result.json();
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
