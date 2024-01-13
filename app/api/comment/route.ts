import { TCommentRequest } from '@/types/comment';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const contentType = headers().get('Content-Type') as string;
  const accept = headers().get('Accept') as string;
  const body = (await request.json()) as TCommentRequest;
  const headersList = headers();
  const authorization = headersList.get('Authorization');
  const requestBody = {
    content: body.content,
    userId: body.userId,
    typeId: body.typeId,
  } as Exclude<TCommentRequest, 'type'>;
  const result = await fetch(
    `http://localhost:5025/api/comments/${body.type}`,
    {
      body: JSON.stringify(requestBody),
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Accept: accept,
        Authorization: authorization!,
      },
      next: { tags: ['stories'] },
    }
  );

  const data = await result.json();
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
