import { GitHub, Instagram, LinkedIn, Twitter, MailOutline} from '@material-ui/icons';
import React from 'react'
import styled  from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
display: flex; 
${mobile({ flexDirection: "column" })}       
`;


const Left = styled.div`
   flex:1; 
   display: flex; 
    flex-direction: column;    
    padding: 20px;        
`;

const Logo = styled.h1`
           
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex; 
`;

const SocialIcon = styled.div`
width: 40px; 
height: 40px;
`;



const Center = styled.div`
flex:1;  
${mobile({ display: "none" })}        
`;

const Right = styled.div`
flex:1;    
padding:20px;     
`;

const Title = styled.h3`
        margin-bottom: 30px;   
`;

const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;
`;

 const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ASABI</Logo>
                <Desc>
                    Built by me @oloriasabi
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn/>
                    </SocialIcon>
                    <SocialIcon>
                        <GitHub/>
                    </SocialIcon>
                    </SocialContainer>           
             </Left>
            <Center></Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><MailOutline /> @developerqueenlatifa@gmail.com</ContactItem>
            </Right>

        </Container>
    )
}

export default Footer 