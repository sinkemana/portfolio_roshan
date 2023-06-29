import { useState } from "react";
import object from "../../../dataForThoughts/ThoughtsData";
import { Accordion, Icon } from "semantic-ui-react";
import styled from 'styled-components';

const ThoughtContent = styled.div`
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   padding-top:10px;
`
const SignificatList=styled.div`
margin-top:15px
`
const Thoughts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (e, props) => {
        const { index } = props;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex)
    }
    let array = object.map((element) => {
        return (
            <Accordion styled>
                <Accordion.Title
                    active={activeIndex === element.id}
                    index={element.id}
                    onClick={handleClick}
                >
                    <Icon name='dropdown' />
                    {element.topic}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === element.id}>
                    <p>
                        {element.content}
                    </p>
                </Accordion.Content>
            </Accordion>

        )
    })
    return (
        <ThoughtContent>
            <h3>Thought Process</h3>
             <div>  The evolution of human beings, from their origin to the present day,and their advancement towards the future with sophisticated machines and machine languages,has been linked to the thought process.</div>
               <div> This Human cognition is so Powerful that built super computing engines to direct homo sapiens
                to next level of civilization.</div>Here are some of the important reasons why the thought process is significant:

            
            <SignificatList>
            {
                    array
                }

            </SignificatList>
             
    


        </ThoughtContent>


    )
}

export default Thoughts;

