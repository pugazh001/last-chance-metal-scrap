import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button,Grid, Container ,useMediaQuery} from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import c1 from "../assets/img/c10.jpg";
import c2 from "../assets/img/c4.jpg";
import c3 from "../assets/img/c6.jpg";
import JoinUs from './JoinUs';
import CompanyNews from './News';
import FooterPage from './FooterPage';
import Contact from './Contact';
import About from './About';
import BoardOfDirectors from './Products';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  
  
 const isSmallScreen = useMediaQuery("(max-width:600px)");
 const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
 const isLargeScreen = useMediaQuery("(min-width:961px)");
  
 const navigate=useNavigate();
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows for cleaner UI
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px', // Position dots below the slider
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '10px',
            listStyleType: 'none',
          }}
        >
          {dots}
        </ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#ccc', // Default dot color
          transition: 'background-color 0.3s ease',
        }}
      />
    ),
  };

  const carouselItems = [
    {
      image: c1,
      title: 'Scrap Management',
      description: 'From one-off clearance to a total peace-of-mind services.',
    },
    {
      image: c2,
      title: 'Recycling Solutions',
      description: 'Sustainable and efficient recycling for a better future.',
    },
    {
      image: c3,
      title: 'Efficient Processing',
      description: 'Innovative solutions for efficient resource processing.',
    },
  ];

  const contentItems = [
    {
      icon: <StarIcon sx={{ fontSize: 50 }} />,
      title: 'Top service',
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 50 }} />,
      title: 'Best price',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 50 }} />,
      title: 'Short lines of communication with representatives',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 50 }} />,
      title: 'Unique waterside location',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
      title: 'All of your LC-MetalScrap taken care of',
    },
  ];
  return (
   <>
    <Box sx={{ position: 'relative' }}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: isSmallScreen?'500px':'710px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '72%',
                left: isSmallScreen? '2.5%':'nonr',
                right:isSmallScreen?'2.5%':'5%',
                transform: 'translateY(-50%)',
                background: '#000000b3',
                color: '#fff',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Button variant="contained" color="secondary" onClick={()=>navigate('/about')}>
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box sx={{ backgroundColor: '#FFD700'}}>
        <Grid container spacing={4} justifyContent="center">
          {contentItems.map((item, index) => (
            <Grid item key={index} xs={6} sm={6} md={2.4} textAlign="center">
              <Box sx={{ color: '#000' }}>{item.icon}</Box>
              <Typography variant="h6" sx={{ mt: 2, color: '#000' }}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{py:1}}>
        <Typography variant='h3' textAlign="center" sx={{fontWeight:"600", mb: 4,mt:2}}>Working on a world as it is meant to be</Typography>

        <Container>
        <Typography  textAlign="center" variant="h6" sx={{ mb: 2 }}>
        We recycle ferro and non-ferro materials. So we keep valuable raw materials in the chain. Every year we process around 500,000 tons of material, originating from collectors, scrap companies and metalworking industries throughout South India.
              </Typography>
              <Typography  textAlign="center" variant="h6" sx={{ mb: 2 }}>
              Securing the Natural Resources by collecting and giving the last chance to Mineral waste across the world
              </Typography>
        </Container>
        
      </Box>
      
    </Box>
   
    <JoinUs />
    <About />
    <BoardOfDirectors />
   
    <FooterPage />
    
    </>
   
  );
};

export default Home;
