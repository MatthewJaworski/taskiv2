import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { action: string } }
) {
  const action = params.action;
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = await request.json();

  if (action === 'register') {
    body.role = 'User';
  }
  const result = await fetch(`${process.env.API_URL}/api/user/${action}`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
    },
  });

  const data = await result.json();

  if (data.success) {
    const res = new Response(JSON.stringify(data), { status: 200 });
    if (data.accessToken) {
      res.headers.set(
        'Set-Cookie',
        `tokenTaski=${data.accessToken}; Path=/; HttpOnly; SameSite=None; Secure`
      );
    }
    return res;
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
