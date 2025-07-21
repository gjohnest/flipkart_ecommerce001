import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Banner from '../Components/Banner'
import Products from '../Components/Products'
import ProductTwo from '../Components/ProductTwo'
import Offers from '../Components/Offers'
import Footer from '../Components/Footer'


function HomePage() {
  return (
    <Fragment>
        <Navbar/>
        <Categories/>
        <Banner/>
        <Products title={"Offer Products"} />
        <ProductTwo title={"Popular Mobiles"}/>
        <Offers/>
        <Footer/>
    </Fragment>
  )
}

export default HomePage
