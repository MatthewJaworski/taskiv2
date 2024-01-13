import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const requestBody= Object.fromEntries(
    Object.entries(body).filter(([key, value]) => value !== "")
  );

  const result = await fetch(`http://localhost:5025/api/stories`, {
    body: JSON.stringify(requestBody),
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: authorization!,
    },
    next: { tags: ['allTasks'] },
  });
  // console.log(result, 'result.status');
  // console.log(JSON.stringify(requestBody), 'body');
  const data = await result.json();
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}

