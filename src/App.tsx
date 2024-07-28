import Header from './Components/Header.tsx';
import Main from './Components/Main.tsx';
import styled from 'styled-components';

function HackerNews() {
  return (
    <HackerNewsContainer>
      <ContainerContent>
        <Header />
        <Main />
      </ContainerContent>
    </HackerNewsContainer>
  );
}

const HackerNewsContainer = styled.div`
  padding: 5px;
`;
const ContainerContent = styled.div`
  padding: 0px auto;
`;

export default HackerNews;
