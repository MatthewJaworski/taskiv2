import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get('tokenTaski');
  return Response.json({
    message: 'Hello world from the API',
    token: token?.value,
  });
}
