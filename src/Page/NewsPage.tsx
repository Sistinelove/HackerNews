import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import { hackerNewsApi } from '../services/PostList';
import { Item } from '../type/Item';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [postItem, setPostItem] = useState<Item | null>(null);
  const numericId = Number(id);
  const { data, error, isLoading } = hackerNewsApi.useGetItemsByIdQuery(numericId);

  useEffect(() => {
    if (data) {
      setPostItem(data);
    }
  }, [data]);

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

export default NewsPage;
