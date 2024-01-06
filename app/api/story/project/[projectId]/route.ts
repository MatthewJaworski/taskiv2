import { headers } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const projectId = params.projectId;
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  const response = await fetch(
    `http://localhost:5025/api/stories/project/${projectId}`,
    {
      method: 'GET',
      headers: {
        Authorization: authorization || '',
      },
      next: { tags: ['allStories'] },
    }
  );
    
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  
  console.log(result)

  return new Response(JSON.stringify({ stories: result.stories }), {
    status: 200,
  });
}
