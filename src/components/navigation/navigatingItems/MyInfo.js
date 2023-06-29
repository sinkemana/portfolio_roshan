import styled from 'styled-components';

const HeaderContnet = styled.div`
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   padding-top:10px;
`
const SocialMedia = styled.div`
display:flex;
flex-direction:row;
`
const SocialMediaLink = styled.a`
  img {
    transition: transform 0.3s, box-shadow 0.3s;
  }

  img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  img:active {
    transform: scale(1);
    box-shadow: none;
  }
`;
const Header3=styled.h3`
margin-bottom:10px;
margin-top:15px
`

const MyInfo = () => {
    return (
        <HeaderContnet>
            <h1>Roshan Sinkemana</h1>
            <div>Bachelor of Science in Electronics and Communication from NepalEngineering College, affiliated to Pokhara University.</div>
            <div> I’m looking foropportunities in the world of programming to germinate my ideas,
                sharpen skills, gain knowledge and experience as to intensify personal growth with that of organization
            </div>
            <Header3>Achievement</Header3>
            <div>Awarded among the best Academic Student and for the project that involve automation in poutry farm using Sensor nodes.</div>
            <Header3>Experince</Header3>
            <div>CCS (China Communication Service ) / Katmandu / August, 2019 -January, 2022</div>
            <div> I had the opportunity to commission various Huawei devices including routers (ATN 910B, 910C) and microwave equipment (RTN310, RTN320) in Nepal Telcom 4G project. </div>
            <div>January, 2022-january, 2023</div>
            <div>In the Nepal Telecom 4G project,I got chance to be part of Network Operating and Controlling .It helped me to understand various monitoring,configuration and Debugging task
            </div>
            <Header3>Skills</Header3>
            <div>Network Operation</div>
            <div>Programing language (Ruby,Javascript) and FrameWork(React)</div>
            <div>Interaction between team member</div>
            <Header3>Language</Header3>
            <div>English,Nepali,Newari,Hindi</div>
            <Header3>Social Media</Header3>
            <SocialMedia>
                <SocialMediaLink href="https://github.com/sinkemana" target="_blank"><img src="icons8-github-48.png" alt="GitHub logo" /></SocialMediaLink>
                <SocialMediaLink href="https://www.linkedin.com/in/roshan-sinkemana" target="_blank"><img src="icons8-linkedin-48.png" alt="Linkedin logo" /></SocialMediaLink>
                {/* <a href="https://github.com/sinkemana" target="_blank"><img src="icons8-github-48.png" alt="GitHub logo" /></a> */}
                {/* <a href="https://www.linkedin.com/in/roshan-sinkemana" target='_blank'><img src="icons8-linkedin-48.png" alt="Linkedin logo" /></a> */}
            </SocialMedia>
            <Header3>Contact</Header3>
            <div>Madhyapur-Thimi,Bhaktapur, Nepal</div>
            <div>sinkson1998@gmail.com</div>

        </HeaderContnet >

    )
}
export default MyInfo;