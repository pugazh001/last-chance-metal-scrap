import React from 'react'
import ProductImg from '../ProductImg'
import Navbar from '../Navbar'
import ScrollAnimationPage from '../Products'
import FooterPage from '../FooterPage'

function Product() {
  return (
   <>
   <Navbar />
    <ProductImg />
    <ScrollAnimationPage />
    <FooterPage />
   </>
  )
}

export default Product