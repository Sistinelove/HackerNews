import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import parse from 'html-react-parser';
import { applyTypography } from '../styles/Typography';
import { useGetItemsByIdQuery } from '../services/PostList.tsx';
import Comments from '../Components/Comments.tsx';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, refetch } = useGetItemsByIdQuery(Number(id));
  console.log('data', data);
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 60000);

    return () => clearInterval(interval);
  }, [refetch]);

  const handleRefreshComments = () => refetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <BackButton to="/news">Вернуться к списку новостей</BackButton>
        <RefrechCommentsButton onClick={handleRefreshComments}>Обновить комментарии</RefrechCommentsButton>
        <Card>
          <h1>{data.title}</h1>
          <p>
            by {data.user} on {new Date(data.time * 1000).toLocaleString()}
          </p>
          {data.content && <Content>{parse(data.content)}</Content>}
          <p>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.domain}
            </a>
          </p>
          <CommentsTitle>Comments ({data.comments_count})</CommentsTitle>
          <CommentsContainer>
            {data.comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </CommentsContainer>
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

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const BackButton = styled(Link)`
  ${applyTypography('primaryText')}
  background-color: grey;
  color: white;
  text-decoration: none;
  width: auto;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
`;

const RefrechCommentsButton = styled.button`
  ${applyTypography('primaryText')}
  background-color: grey;
  color: white;
  text-decoration: none;
  width: auto;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
`;

export default NewsPage;
