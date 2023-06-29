import { Link,NavLink } from "react-router-dom";
// import '../styles/header/Header.css';
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content:center;
`;

const StyledLink = styled(NavLink)`
 display:flex;
 height:100%;
 
 text-color:white;
 padding:.3em 2em;
 font-weight:500;
 font-size:1.2em;
 align-items: center;
 justify-content: center;
 border-top: 3px solid transparent;
 transition:all 220ms ease-in-out ;
 
 &.active {
    border-top: 3px solid #2ecc71;
  }
 &:hover {
     border-top: 3px solid #2ecc71;
   }

`;

const Header = () => {
    return (
        <NavLinksContainer>
            <StyledLink exact to={'/'} activeClassName="active">Home</StyledLink>
            <StyledLink to={'/myInfo'} activeClassName="active">MyInfo</StyledLink>
            <StyledLink to={'/thoughts'} activeClassName="active">My Thoughts</StyledLink>
            <StyledLink to={'/picSearch'} activeClassName="active">PicSearch</StyledLink>
        </NavLinksContainer>
    )
}
export default Header;