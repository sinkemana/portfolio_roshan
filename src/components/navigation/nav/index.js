import Header from "./Headers";
import styled from "styled-components";

const NavbarContainer = styled.div`
display:flex;
width:100%;
height:60px;
box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
align-items:center;
padding:0 1.5em;
`;
const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const NavBar = () => {
  <NavbarContainer>
    <MiddleSection>{<Header />}</MiddleSection>
  </NavbarContainer>
}
export default NavBar;