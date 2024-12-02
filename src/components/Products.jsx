import React, { useEffect, useState, useRef } from "react";
import { Container, Grid, Typography, Card, CardContent, Box ,useMediaQuery} from "@mui/material";
import { motion } from "framer-motion"; // Install with: npm install framer-motion
import p1 from "../assets/img/product/ALTERNATOR’S SCRAP.jpeg";
import p2 from "../assets/img/product/aluminium-ingot-scrap-1594142683-5512384.jpeg";
import p3 from "../assets/img/product/Brass_Scrap.jpg";
import p4 from "../assets/img/product/tin.jpg";
import p5 from "../assets/img/product/waste-tyre-scrap-1570254415-5105781.jpeg";
import p6 from "../assets/img/product/71485.jpg";
import p7 from "../assets/img/product/aluminum-casting-scrap.jpeg";
import p8 from "../assets/img/product/s2.jpg";
import p9 from "../assets/img/product/copper-scrap.jpg";
import p10 from "../assets/img/product/Untitled-683-x-1024-px-18-1200x900.jpg";
import p11 from "../assets/img/product/electric-wire-scrap.jpg";
import p12 from "../assets/img/product/s1.jpg";
import p13 from "../assets/img/product/images.jpg";
import p14 from "../assets/img/product/istockphoto-133993685-612x612.jpg";
import p15 from "../assets/img/product/product-jpeg.jpeg";

const directors = [
  { name: "ALTERNATOR’S SCRAP",  image: p1 },
  { name: "STAINLESS STEEL SCRAP", image: p12 },
 
  { name: "TIN SCRAP ", image: p4 },
  { name: "TYRE SCRAP ",  image: p5 },
  { name: "COMPRESSOR SCRAP ", image: p6 },
  { name: "CAST ALUMINIUM SCRAP", image: p7 },
  { name: "CAST IRON", image: p8 },
  { name: "COPPER SCRAP",  image: p9 },
  { name: "E – WASTE",  image: p10 },
  { name: "WIRE SCRAP", image: p11 },
  { name: "BRASS SCRAP",  image: p3 },
  { name: "HMS", image: p13 },
  { name: "ALUMINIUM INGOT", image: p2 },
  { name: "ALUMINIUM SCRAP", image: p14 },
  { name: "ELECTRIC MOTOR SCRAP ",  image: p15 },
];

const BoardOfDirectors = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  
 const isSmallScreen = useMediaQuery("(max-width:600px)");
 const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
 const isLargeScreen = useMediaQuery("(min-width:961px)");


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the section comes into view
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3, color: "black" }}
      >
        Product
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: "black" }}
      >
        Service (Reuse & Recycle)
      </Typography>
      <Typography variant="h6" sx={{ mb: 6, color: "black" }}>
        Reuse means using items again for their original or new purposes,
        reducing waste. Recycling converts waste materials into new products,
        conserving resources and energy. Recyclable items include HMS1 (Heavy
        Melting Scrap 1), used in steel production; cast iron, durable and
        reusable; copper and copper wire, prized for conductivity; aluminum and
        cast aluminum, used in construction; and materials like stainless
        steel, lead, brass, electric motors, and compressors.
      </Typography>



      {/* <Grid container spacing={4} ref={containerRef}>
  {directors.map((director, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          translateY: isVisible ? 0 : 50,
        }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: "8px",
            height: "auto",
          }}
        >
          <Box
            component="img"
            src={director.image}
            alt={director.name}
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "250px", md: "300px" },
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <CardContent sx={{ textAlign: "center", p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {director.name}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid> */}
 <Grid container spacing={4} ref={containerRef}>
        {directors.map((director, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            {isSmallScreen ? (
              // Render a simple Card without animation for small screens
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: "8px",
                  height: "auto",
                }}
              >
                <Box
                  component="img"
                  src={director.image}
                  alt={director.name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                  }}
                />
                <CardContent sx={{ textAlign: "center", p: 2 }}>
                  <Typography variant={isSmallScreen?"body2":"h6"} sx={{ fontWeight: "bold" }}>
                    {director.name}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              // Use animated Card for larger screens
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 3,
                    borderRadius: "8px",
                    height: "auto",
                  }}
                >
                  <Box
                    component="img"
                    src={director.image}
                    alt={director.name}
                    sx={{
                      width: "100%",
                      height: { xs: "200px", sm: "250px", md: "300px" },
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {director.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default BoardOfDirectors;
