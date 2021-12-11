import React from 'react';
import styled  from "styled-components";
import { mobile } from "../Responsive";
import Navbar from '../components/Navbar';

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: rgb(176, 191, 206);
display: flex;
align-items: center;
   justify-content:  center;
`;
const Wrapper = styled.div`
    width: 30%;
     padding: 20px;
    background-color: #FFF;
    ${mobile({width: "75%" })}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
   margin: 10px 0px;
   padding: 10px;
`;
const Link = styled.a`
margin: 5px 0px;
font-sixe: 12px;
text-decoration: underline;
 cursor: pointer;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;


export const Login = () => {
    return (

<div>
          <Navbar></Navbar>
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title> 
                <Form>
                    <Input placeholder="username" /> 
                    <Input placeholder="password"/> 
                    <Button>LOGIN</Button>
                    <Link>Do Not You Remember The Password</Link>
                    <Link>Create A New Account</Link>
                </Form>      
        </Wrapper> 

        </Container>
        </div>
    )
}
