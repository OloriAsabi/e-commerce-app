import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled  from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center
`;
const Top = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
cursor: pointer;
    font-weight: 600;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column" })}
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${(props)=> props.type === "total" && "500"};
     font-size: ${(props)=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: #fff;
    font-weight: 600;
`;


const Info = styled.div`
flex: 3;

`;

const TopTexts = styled.div`
${mobile({display: "none" })}
`;

const Product = styled.div`
display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column" })}
`;

const ProductDetail = styled.div`
flex:2;
display: flex;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
display: flex;
padding: 20px;
     flex-direction: column;
     justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${(props)=> props.color};
`;
const PriceDetail = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:  center;
    
`;

const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px" })}
`;


const ProductSize = styled.span``;
const TopText = styled.span`
text-decoration: underline;
    cursor: pointer;
     margin: 0px 10px;
`;

const Hr = styled.hr`
background-color: #eee;
height: 1px;
border: none;
`;

export const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
             <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check Out Now</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        <Product>
                        <ProductDetail>
                            <Image src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/shoes/617588e7b3c2b985c9e077537635fe65.jpg" alt=""/>
                            <Details>
                                <ProductName><b>Product: </b> Bridal Shoe</ProductName>
                                <ProductId><b>ID: </b> 123</ProductId>
                                <ProductColor  color="gold"/>
                            <ProductSize><b>Size:</b>38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice># 30000</ProductPrice>
                        </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                        <ProductDetail>
                            <Image src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/shoes/90a615d06c590446195b0d27c57bb85e.jpg" alt=""/>
                            <Details>
                                <ProductName><b>Product: </b> Bridal Shoe</ProductName>
                                <ProductId><b>ID:</b> 12345</ProductId>
                                <ProductColor  color="silver"/>
                            <ProductSize><b>Size:</b>39</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>4</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice># 50000</ProductPrice>
                        </PriceDetail>
                        </Product>
                        </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice># 600</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice># 60000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice># -600</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice># 60000</SummaryItemPrice>
                        </SummaryItem>
                        < SummaryButton>CheckOut Now</ SummaryButton>
                        </Summary>
                </Bottom>
             </Wrapper>
             <Footer/>
        </Container>
    )
}
