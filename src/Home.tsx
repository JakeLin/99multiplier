import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  margin: 10px 0;
`;

const Home = () => {
  return(
    <>
      <h2>Please select a game to play!</h2>
      <Nav>
        <StyledLink to='additionfewerthan10'>Addition &#60; 10</StyledLink>
        <StyledLink to='multiplication99'>9 * 9 Multiplication</StyledLink>
      </Nav>
    </>
  );
}

export default Home;