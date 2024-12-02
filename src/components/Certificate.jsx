
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery
} from "@mui/material";
import cert from "../assets/img/c5.jpg"
import cf1 from "../assets/img/cf1 (1).png"
import cf2 from "../assets/img/cf1 (2).png"
import cf3 from "../assets/img/cf1 (3).png"
const CompanyNews = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");

  // News data
  const allNews = [
    {
      title: "UDYAM REGISTRATION CERTIFICATE",
      description: "The Udyam Registration Certificate certifies the official registration of a Micro, Small, or Medium Enterprise (MSME) in India under the Ministry of MSME. It provides various benefits like subsidies, tax exemptions, and access to government schemes.",
      image: cf3,
      url: "http://136.185.14.8:5556/cert/Udyam Registration Certificate.pdf",
    },
    {
      title: "GST REGISTRATION CERTIFICATE",
      description: "The GST Registration Certificate verifies that a business is registered under the Goods and Services Tax (GST) system in India. It includes the GSTIN, legal name, and business details, ensuring compliance with tax regulations.",
      image: cf2,
      url: "http://136.185.14.8:5556/cert/LAST CHANCE GST - Verfied.pdf",
    },
    {
      title: "IEC CERTIFICATE",
      description: "The Importer Exporter Code (IEC) Certificate is mandatory for businesses engaging in import or export activities in India. It serves as a key document issued by the Directorate General of Foreign Trade (DGFT) to facilitate international trade.",
      image: cf1,
      url: "http://136.185.14.8:5556/cert/AAKPZ7470R-IEC.pdf",
    },
  ];
  

  
  const [showAll, setShowAll] = useState(false);

 
  const toggleNewsVisibility = () => {
    setShowAll((prev) => !prev);
  };

 
  const visibleNews = showAll ? allNews : allNews.slice(0, 3);

  return (
    <>
   <div
  className="bg-section"
  style={{
    backgroundImage: `url('${cert}')`,
    backgroundSize: "cover",
  
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Keeps the image fixed
    height: isSmallScreen?'500px':'710px', // Full viewport height
    width: "100%",
  }}
></div>
    <Container maxWidth="lg" sx={{ marginTop: 4,mb:4 }}>
      {/* Header */}
      <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb:6,
              color: "black",
            }}
          >
            Certification
          </Typography>
          <Typography
            variant="h6"
            sx={{
             
              mb:6,
              color: "black",
            }}
          >
       A certificate is an official document that serves as proof of achievement, authenticity, or a specific qualification.Certificates are often issued by recognized organizations, institutions, or authorities to validate that an individual or entity has completed a course, acquired a skill, or met certain criteria.
          </Typography>

      {/* News Grid */}
      <Grid container spacing={4}>
        {visibleNews.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" ,backgroundColor:"#eeeeee"}}>
              <Box
                component="img"
                src={news.image}
                alt={news.title}
                sx={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.description}
                </Typography>
              </CardContent>
              <Button
                 onClick={() => window.open(news.url, "_blank")} 
                variant="contained"
                sx={{
                  bgcolor: "#FFD700",
                  color:"black",
                  fontWeight: "bold",
                  textTransform: "none",
                  alignSelf:"center",
                  margin: 1,
                  mb:4
                  
                }}
                
              >
                view Certificate
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

    
    </Container>    </>
  );
};

export default CompanyNews;


