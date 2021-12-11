import { FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%; 
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 1s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex : 1;
    margin:5px;
    min-height: 280px;
    height: 350px;
    align-items: center;
    justify-content:  center;
    display: flex;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px; 
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 85%;
    z-index: 2;
`;



const Icon = styled.div`
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    background-color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 10px;
    transition: all 1s ease;

    &:hover{
        background-color: #e9f5f5;   
        transform: scale(1.1);
    }
`;

 const Product = ({item}) => {
    return (
       <Container>
           <Circle/>
           <Image src={item.img}/>
           <Info>
               <Icon>
                   <ShoppingCartOutlined></ShoppingCartOutlined>
               </Icon>
               <Icon>
                   <Link to='/product'>
                   <SearchOutlined></SearchOutlined></Link>
               </Icon>
               <Icon>
                   <FavoriteBorderOutlined></FavoriteBorderOutlined>
               </Icon>
           </Info>
       </Container>
    )
}
export default Product