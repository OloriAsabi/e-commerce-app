import React from 'react';
import { Link } from "react-router-dom";
import styled  from "styled-components";
import { categories } from "./data";
import { mobile } from "../Responsive";

const ContainerOne = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })} 
`;



const Container = styled.div`
    flxe: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  center;
`;

const Title = styled.h1`
margin-bottom: 20px;
color: #fff;
text-transform: capitalize;
letter-spacing: 3px;
`;

const Button = styled.button`
    border: none;
    padding: 10px; 
    background-color: white;
    color: gray; 
    cursor: pointer;
`;

const CategoryItem = () => {
    return (

        <ContainerOne>
            {categories.map((item) => (
                <Container key={item.id}>
                    <Link to={`/products/${item.cat}`}>
                    <Image src={item.img} />
                    <Info>
                        <Title>{item.title}</Title>
                        <Button>SHOP NOW</Button>
                    </Info>
                    </Link>
                </Container>
           ))}
        </ContainerOne>
        
    );
};

export default CategoryItem;