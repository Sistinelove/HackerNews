import { useState } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { Comment as CommentType } from '../type/Item';

const Comments = ({ comment }: { comment: CommentType }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <CommentContainer>
      <p>
        <strong>{comment.user}</strong> {comment.time_ago}
      </p>
      <CommentContent>{parse(comment.content)}</CommentContent>
      {comment.comments.length > 0 && (
        <ReplyToggle onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? 'Hide' : 'Show'} {comment.comments.length} replies
        </ReplyToggle>
      )}
      {showReplies && (
        <NestedComments>
          {comment.comments.map((nestedComment) => (
            <Comments key={nestedComment.id} comment={nestedComment} />
          ))}
        </NestedComments>
      )}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px 0;
`;

const CommentContent = styled.div`
  margin-top: 5px;
`;

const ReplyToggle = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  padding: 0;
  margin-top: 5px;
`;

const NestedComments = styled.div`
  margin-left: 20px;
  border-left: 1px solid #ddd;
  padding-left: 10px;
`;

export default Comments;
