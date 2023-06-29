import ScrollingText from '../../scrollingText/ScrollingText';
import Footer from '../../Footer';
import styled from 'styled-components';

import '../../../styles/home/Home.css'

const HomeContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
`;
const HomeMessage = styled.div`
  color: aqua;
  flex-grow: 1;
  margin: auto;
  padding-left: 1rem;
  font-family: "Gill Sans", sans-serif;
`;
const HomeImage = styled.img`
  height: 95vh;
  justify-content: flex-end;
`;

const Home = () => {
    return (
        <HomeContainer>
            <HomeMessage>
                <ScrollingText />
                <p>
                    With energetic and problem solving Mindset,Traveling in the world of Programming.
                    I believe that programming is both an art and a science,<br />
                    and I am committed to creating elegant and efficient code that solves real-world problems.
                </p>
                <h2>Roshan Sinkemana</h2>
                <Footer />
            </HomeMessage>
            <div>
                <HomeImage src="roshan.png" />

            </div>
        </HomeContainer>
          
    
    )
}

export default Home;