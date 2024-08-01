import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { hackerNewsApi } from '../services/PostList';
import { useEffect } from 'react';
import Card from '../Components/Card';
import { applyTypography } from '../styles/Typography';

const Main = () => {
  const { data, isLoading, error, refetch } = hackerNewsApi.useGetNewsItemsQuery();

  useEffect(() => {
    const interval = setInterval(() => refetch(), 60000);
    return () => clearInterval(interval);
  }, [refetch]);

  const handleRefetch = () => refetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <MainContainer>
      <RefreshNewsButton onClick={handleRefetch}>Обновить новости</RefreshNewsButton>
      {data?.map((item, index) => <Card key={item.id} item={item} index={index + 1} />)}
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backGroundMain};
`;

const RefreshNewsButton = styled.button`
  ${applyTypography('primaryText')}
  background-color: grey;
  color: white;
  width: 200px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
`;

export default Main;
