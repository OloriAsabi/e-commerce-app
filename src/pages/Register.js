import React from 'react';
import styled  from "styled-components";
import Navbar from '../components/Navbar';
import { mobile } from "../Responsive";

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: rgb(176, 191, 206);
display: flex;
align-items: center;
   justify-content:  center;
`;
const Wrapper = styled.div`
    width: 40%;
     padding: 20px;
    background-color: #FFF;
    ${mobile({width: "75%" })}
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export const Register = () => {
    return ( 

        <div>
          <Navbar></Navbar>
        <Container>
          
           <Wrapper>
                <Title>Create An Account</Title> 
                <Form>
                    <Input placeholder="name"/>    
                    <Input placeholder="last name"/> 
                    <Input placeholder="username"/> 
                    <Input placeholder="email"/> 
                    <Input placeholder="password"/> 
                    <Input placeholder="confirm password"/> 
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data im accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>      
        </Wrapper> 
        </Container>
        </div>
    )
}
