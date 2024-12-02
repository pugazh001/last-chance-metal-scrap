
import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled Paper component for animation
const AnimatedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  animation: 'fadeInUp 4s ease-in-out',
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));
const FadeInRightTypography = styled(Typography)(({ theme }) => ({
    animation: 'fadeInRight 3s ease-in-out',
    '@keyframes fadeInRight': {
      '0%': { opacity: 0, transform: 'translateX(-20px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
  }));
const About = () => {
  return (
    <Container id="about" >
       <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb:4,
              mt:3,
              color: "black",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml:2,
              mb:6,
              color: "black",
            }}
          >
        Recycling is the core activity of Last Chance Metal Scrap Recycling Group. We are market leader in recycling various kinds of ferrous and non-ferrous metals. We also possess expertise in the area of disassembly and dismantling in the offshore and onshore industry. Last Chance Metal Scrap Recycling Group has sites in Trichy. Together with seventy enthusiastic personnel, we are working on a world as it is meant to be.
          </Typography>
          <Typography variant='h5'sx={{ml:2}}>
          <span style={{
            fontWeight:"bold"
          }}>Founder:
            </span> MOHAMED HANIF ZAHIR HUSSIAN

          </Typography><br />
          <Typography variant='h6' sx={{ml:2}}>
            <span style={{
              fontWeight:"bold"
              
            }}>
            Marketing/Sales Manager:
            </span>
          MOHAMED HANIF SAMSUDEEN 
          </Typography>
        
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <AnimatedPaper>
            <Typography variant="h6" gutterBottom>
            Last Chance Metal Scrap...!
            </Typography>

            <Typography variant="body1" paragraph>
  
            With over a decade of expertise, we take immense pride in being a leading company in the metal scrap industry. Our
company is dedicated to fulfill the diverse needs both large and small manufactures, making a substantial impact on
our nation’s economic growth simultaneously fostering job opportunities. It is our profound responsibility and
honor to dedicate ourselves for the wellbeing of our planet, understanding that these decisions will shape the lives
of the future generation. Our company’s core specialty is to unlock the maximum potential of every product while
minimizing waste, fostering proactive innovation and maintaining a competitive edge in the market. As the
manufacturing demand in our country experiences steady growth, we actively pursuing international expansion to
satisfy the growing demand. If you are an exporter we would welcome the opportunity to collaborate, creating a
long-term relationship that drives growth and success for both entities. Our trading approach places the highest
importance on service and reliability with our uniqueness is defined by our unwavering dedication to transparency
and trust, ensuring they are embedded with every transaction we engage in.   {/* At Subbial Memoriah Middle School, we are dedicated to nurturing young minds and shaping the leaders of tomorrow. Our school, founded on principles of academic excellence and holistic development, provides a supportive and stimulating environment for students from diverse backgrounds. */}
            </Typography>
            <Typography variant="body1" paragraph>
              {/* <ul>
                <li>Experienced and Caring Faculty: Our teachers are dedicated professionals who are passionate about education and committed to each student's success.</li>
                <li>Inclusive Community: We embrace diversity and promote an inclusive culture where every student feels valued and respected.</li>
                <li>Parent Engagement: We believe in strong collaboration between the school and parents, encouraging active participation in the educational journey of our students.</li>
              </ul> */}
            </Typography>
          </AnimatedPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedPaper>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
            Through Last Chance organization we Gain the trust with Seller Import and Buyer Export by providing Excellence and Sophisticated Environment by Reusing and Recycling the Mineral Waste across the world{/* Our mission is to foster a love for learning and to cultivate an environment where students can achieve their full potential. We aim to provide a well-rounded education that balances academic rigor with extracurricular activities, ensuring our students grow into well-informed, confident, and responsible individuals. */}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
            Empowering sustainability globally by
            giving last chance to mineral waste{/* We envision a future where every student is empowered with the knowledge, skills, and values necessary to thrive in a rapidly changing world. We strive to create lifelong learners who are prepared to contribute positively to society and to pursue their dreams with passion and perseverance. */}
            </Typography>
          </AnimatedPaper>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default About;
