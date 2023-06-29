import '../styles/footer/Footer.css'
import styled from 'styled-components';
const FooterStyle = styled.div`
position: fixed;
bottom: 1rem;
`

const Footer = () => {
    function date() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        return year;
    }
    return (
        <FooterStyle>
            Namaste {date()}
        </FooterStyle>
    )
}
export default Footer;