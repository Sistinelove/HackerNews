import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import { useGetItemsByIdQuery, useLazyGetItemsByIdQuery } from '../services/PostList';
import { Item } from '../type/Item';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [postItem, setPostItem] = useState<Item | null>(null);
  const [nestedComments, setNestedComments] = useState<{ [key: number]: Item[] }>({});
  const numericId = Number(id);
  const { data, error, isLoading } = useGetItemsByIdQuery(numericId);
  const [trigger, result] = useLazyGetItemsByIdQuery();

  useEffect(() => {
    if (data) {
      setPostItem(data);
    }
  }, [data]);

  useEffect(() => {
    if (result.data) {
      setNestedComments((prev) => ({
        ...prev,
        [result.originalArgs!]: result.data.comments,
      }));
    }
  }, [result]);

  const loadNestedComments = (commentId: number) => {
    if (!nestedComments[commentId]) {
      trigger(commentId);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!postItem) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <h1>{postItem.title}</h1>
          <p>
            by {postItem.user} on {new Date(postItem.time * 1000).toLocaleString()}
          </p>
          <Content>{parse(DOMPurify.sanitize(postItem.content))}</Content>
          <p>
            <a href={postItem.url} target="_blank" rel="noopener noreferrer">
              {postItem.domain}
            </a>
          </p>
          <CommentsTitle>Comments ({postItem.comments_count})</CommentsTitle>
          <Comments>
            {postItem.comments.map((comment) => (
              <Comment key={comment.id}>
                <p>
                  <strong>{comment.user}</strong> {comment.time_ago}
                </p>
                <CommentContent>{parse(DOMPurify.sanitize(comment.content))}</CommentContent>
                {comment.comments.length > 0 && (
                  <button onClick={() => loadNestedComments(comment.id)}>Load nested comments</button>
                )}
                {nestedComments[comment.id] && (
                  <NestedComments>
                    {nestedComments[comment.id].map((nestedComment) => (
                      <Comment key={nestedComment.id}>
                        <p>
                          <strong>{nestedComment.user}</strong> {nestedComment.time_ago}
                        </p>
                        <CommentContent>{parse(DOMPurify.sanitize(nestedComment.content))}</CommentContent>
                      </Comment>
                    ))}
                  </NestedComments>
                )}
              </Comment>
            ))}
          </Comments>
        </Card>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
`;

const Content = styled.div`
  margin: 20px 0;
`;

const CommentsTitle = styled.h2`
  margin-top: 40px;
`;

const Comments = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px 0;
`;

const CommentContent = styled.div`
  margin-top: 5px;
`;

const NestedComments = styled.div`
  margin-left: 20px;
  border-left: 1px solid #ddd;
  padding-left: 10px;
`;

export default NewsPage;
