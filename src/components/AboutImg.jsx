import React from 'react'
import contactImg from '../assets/img/n3.jpg'
import { useMediaQuery } from '@mui/material';
function AboutImg() {

  
  
 const isSmallScreen = useMediaQuery("(max-width:600px)");
 const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
 const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
    <div
  className="bg-section"
  style={{
    backgroundImage: `url('${contactImg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Keeps the image fixed
    height: isSmallScreen?'500px':'710px', // Full viewport height
    width: "100%",
  }}
></div>
    </>
  )
}

export default AboutImg