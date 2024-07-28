import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { hackerNewsApi } from '../services/PostList.tsx';
import { useEffect, useState } from 'react';
import { FeedItem } from '../type/FeedItem.ts';
import Card from './Card.tsx';

const Main = () => {
  const [post, setPost] = useState<FeedItem[]>([]);
  const { data } = hackerNewsApi.useGetNewsItemsQuery();
  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);
  console.log(data);
  return (
    <MainContainer>
      {post.map((item, index) => (
        <Card key={item.id} item={item} index={index + 1} />
      ))}
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backGroundMain};
`;

export default Main;
