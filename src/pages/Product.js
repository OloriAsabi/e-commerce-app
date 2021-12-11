import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled  from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter";
import { mobile } from "../Responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width: 100%;
height:100vh;
object-fit: cover;
${mobile({ height: "80vh" })}
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;
const Title = styled.h1`    
    font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0px;
    
`;
const Price = styled.span`    
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Button = styled.button`
    padding: 15px; 
    background-color: white;
    cursor: pointer;
    border: 1px solid teal;
    font-weight: 500;

&:hover{
    background-color: #fbf4f4;
}
`;
const Amount = styled.span`
        border-radius: 50%;
        border: 1px solid teal;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content:  center;
        margin:0px 5px;
`;

export const Product = () => {


    return (
        <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <ImgContainer>
              <Image src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/BURNT-ORANGE-KOKOTV3-819x1024.jpg"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Aso Oke</Title>
                  <Desc>
                      A beautiful traditional attire, to depictone of Yoruba's Finest culture and fabric
                  </Desc>
                  <Price>#20</Price>
              
              <AddContainer>
                  <AmountContainer>
                      <Remove/>
                            <Amount>1</Amount>
                      <Add/>
                     
                  </AmountContainer> 
                  <Button><Link to="/cart">ADD TO CHART</Link></Button>
              </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter/>
          <Footer/>
        </Container>
    )
}
