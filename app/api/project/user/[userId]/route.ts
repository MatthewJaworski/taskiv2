import { headers } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const response = await fetch(
    `http://localhost:5025/api/projects/user/${userId}`,
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

  return new Response(JSON.stringify({ projects: result.projects }), {
    status: 200,
  });
}
