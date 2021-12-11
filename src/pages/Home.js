import React from 'react'
import Announcement from '../components/Announcement';
import Navbar  from "../components/Navbar";
import Slider  from "../components/Slider";
import CategoryItem from "../components/CategoryItem";
import Products  from '../components/Products';
import Newsletter from "../components/Newsletter";
import Footer  from '../components/Footer';


const Home = () => {
    return (
        <div> 
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Slider></Slider>
            <CategoryItem></CategoryItem>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
