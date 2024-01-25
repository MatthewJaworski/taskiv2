import { headers } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const headersList = headers();
  const authorization = headersList.get('Authorization');
  const response = await fetch(
    `${process.env.API_URL}/api/stories/user/${userId}`,
    {
      method: 'GET',
      headers: {
        Authorization: authorization || '',
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();


  return new Response(JSON.stringify({ stories: result }), {
    status: 200,
  });
}
