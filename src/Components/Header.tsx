import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { applyTypography } from '../styles/Typography.ts';

const Header = () => {
  return (
    <>
      <StyledContainer fluid>
        <StyledHeader as="h1">
          <img src="/y18.svg" alt="HackerLog" />
          <HeaderContainerNavigation>
            HackerNews
            <nav>
              <ul>
                <li>
                  <a href="#">new</a>
                </li>
                <li>
                  <a href="#">past</a>
                </li>
                <li>
                  <a href="#">comments</a>
                </li>
                <li>
                  <a href="#">ask</a>
                </li>
                <li>
                  <a href="#">show</a>
                </li>
                <li>
                  <a href="#">jobs</a>
                </li>
                <li>
                  <a href="#">submit</a>
                </li>
              </ul>
            </nav>
          </HeaderContainerNavigation>
        </StyledHeader>
        <Login>Login</Login>
      </StyledContainer>
      <CardLine />
    </>
  );
};

const StyledContainer = styled(Container)`
  padding: 2px;
  height: 23.33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backGroundHeader};
`;

const StyledHeader = styled(Header)`
  ${applyTypography('primaryText')}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  img {
    border: 1px solid white;
  }
  ul {
    ${applyTypography('primaryText')}
    display: flex;
    gap: 10px;
    flex-direction: row;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

const HeaderContainerNavigation = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 100%;
  font-weight: 700;
`;
const Login = styled.div`
  ${applyTypography('primaryText')}
`;
const CardLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.backGroundMain};
`;
export default Header;
