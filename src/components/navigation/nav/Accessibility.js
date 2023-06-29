import styled from "styled-components";
const AccessibilityContainer = styled.div`
  display:flex;
  margin-left:1em;
`;

const RegisterButton=styled.button`

`;
const LoginButton=styled.button`

`;

const Accessibility = () => {
    return (
        <AccessibilityContainer>
            <RegisterButton>Register</RegisterButton>
            <LoginButton>Login</LoginButton>
        </AccessibilityContainer>
        
    )
}
export default Accessibility;