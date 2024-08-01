import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { FeedItem } from '../type/FeedItem.ts';
import { applyTypography } from '../styles/Typography.ts';
import { Link } from 'react-router-dom';

const Card = ({ item, index }: { item: FeedItem; index: number }) => {
  return (
    <>
      <CardContainer>
        <CardId>{index}. </CardId>
        <ArrowIcon src="/public/arrowUp.svg" alt="arrowUp" />
        <CardContent>
          <CardHeader>
            <CardTitle>
              <Link to={`/news/${item.id}`}>{item.title}</Link>
            </CardTitle>
            <CardUrl>({item.domain})</CardUrl>
          </CardHeader>
          <CardFooter>
            <CardPoint>points {item.points}</CardPoint>
            <p>by</p>
            <CardUser>{item.user}</CardUser>
            <CardTime>{item.time_ago}</CardTime>
            <p>hide</p>
            <CardComments>{item.comments_count}</CardComments>
          </CardFooter>
        </CardContent>
      </CardContainer>
      <CardLine />
    </>
  );
};

const CardContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 10px;
`;

const CardId = styled.div``;

const CardContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  p {
    ${applyTypography('threeText')}
  }
`;

const CardLine = styled.div`
  height: 5px;
  background-color: ${({ theme }) => theme.colors.backGroundMain};
  width: 100%;
`;
const CardUrl = styled.div`
  ${applyTypography('secondText')}
`;

const CardTitle = styled.div`
  ${applyTypography('primaryText')}
  link {
    text-decoration: none;
    color: inherit;
  }
`;

const CardPoint = styled.div`
  ${applyTypography('threeText')}
`;

const CardUser = styled.div`
  ${applyTypography('threeText')}
`;

const CardTime = styled.div`
  ${applyTypography('threeText')}
`;

const CardComments = styled.div`
  ${applyTypography('threeText')}
`;

export default Card;
