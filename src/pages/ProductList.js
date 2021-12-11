import React, { useState } from 'react';
import styled from "styled-components";
import Navbar  from "../components/Navbar";
import Announcement from "../components/Announcement"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from "../Responsive";
import { useLocation } from '@reach/router';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.div`
   font-size: 20px;
   font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px" })}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px" })}
`;

const Option = styled.option``;

export function ProductList() {

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest");

    
    const location = useLocation()
   const cat  = location.pathname.split("/")[2]


    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Female Traditional Attire</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name="male" onChange={handleFilters}>
                        <Option defaultValue>male</Option>
                        <Option>beads</Option>
                        <Option>shoes</Option>
                        <Option>agbada</Option>
                        <Option>fila</Option>
                        <Option>trads</Option>
                        <Option>aso-oke</Option>
                    </Select>
                    <Select name="female" onChange={handleFilters}>
                        <Option defaultValue>Female</Option>
                        <Option>beads</Option>
                        <Option>shoes</Option>
                        <Option>bags</Option>
                        <Option>ankara</Option>
                        <Option>aso-oke</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                    <Select name="" onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc">Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
        </Container>
    );
}

