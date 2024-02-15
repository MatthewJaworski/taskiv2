'use client';
import revalidateStory from '@/actions/revalidateStory';
import Button from '@/components/common/Button/Button';
import Comment from '@/components/common/Comment/Comment';
import Container from '@/components/common/Container/Container';
import TextArea from '@/components/common/TextArea/TextArea';
import { addComment } from '@/lib/api';
import { formatDate } from '@/lib/time';
import { TComment } from '@/types/comment';
import { TResponse } from '@/types/response';
import { useRef } from 'react';

interface ICommentsSectionProps {
  token: string;
  userId: string;
  storyId: string;
  comments: TComment[];
  role: string;
}
const CommentsSection = ({
  token,
  userId,
  storyId,
  comments,
  role,
}: ICommentsSectionProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isUser = role === 'User';
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('addComment') as string;

    const newComment = {
      content: comment,
      userId,
      type: 'story',
      typeId: storyId,
    };
    if (!comment) return;
    const result = (await addComment({ data: newComment, token })) as TResponse;
    if (result.success) {
      await revalidateStory();
      if (textAreaRef.current) {
        textAreaRef.current.value = '';
      }
    }
  };
  const orderedComments = comments.sort((a, b) => {
    return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
  });

  return (
    <Container className="mt-4">
      <p className="text-2xl font-semibold">Comments</p>
      <Container>
        {isUser && (
          <form onSubmit={handleSubmit}>
            <TextArea ref={textAreaRef} id="addComment" name="Add comment" />
            <Button type="submit" intent="secondary" className="w-full mt-4">
              Add comment
            </Button>
          </form>
        )}
        <div className="flex flex-col gap-4 mt-4">
          {orderedComments.map((comment) => (
            <Comment
              key={comment.id}
              contnet={comment.content}
              userName={comment.fullName}
              creationDate={formatDate(comment.createDate)}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default CommentsSection;
