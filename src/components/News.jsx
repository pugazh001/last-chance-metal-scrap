import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const CompanyNews = () => {
  // News data
  const allNews = [
    {
      title: "Adjusted opening hours in May",
      description: "Due to various holidays we have adjusted opening hours in May.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Opening hours December 2023",
      description: "Wondering which days are involved? Check out the article.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title:
        "A more sustainable future with over 4200 solar panels at our site in Dordrecht",
      description:
        "Read in the article how the project went and about the festive opening of the solar panel project.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "New recycling technologies launched A more sustainable future with over 4200 solar panels at our site in Dordrecht",
      description: "Discover our latest innovations in recycling technologies.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Partnership with Eco-Friendly Companies",
      description: "We are proud to announce a new partnership with eco-friendly firms.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  // State to manage visible news count
  const [showAll, setShowAll] = useState(false);

  // Toggle news visibility
  const toggleNewsVisibility = () => {
    setShowAll((prev) => !prev);
  };

  // Determine which news items to display
  const visibleNews = showAll ? allNews : allNews.slice(0, 3);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4,mb:4 }}>
      {/* Header */}
      <Typography variant="h5" align="center" gutterBottom>
        Latest News and Highlights
      </Typography>

      {/* News Grid */}
      <Grid container spacing={4}>
        {visibleNews.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" ,backgroundColor:"rgba(0,0,0,0.26)"}}>
              <Box
                component="img"
                src={news.image}
                alt={news.title}
                sx={{ width: "100%", height: "200px", objectFit: "cover" }}
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
                variant="text"
                sx={{
                  color: "#FFD700",
                  fontWeight: "bold",
                  textTransform: "none",
                  alignSelf: "flex-start",
                  margin: 1,
                }}
              >
                Read more
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Show More / Show Less Button */}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "#000",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
          onClick={toggleNewsVisibility}
        >
          {showAll ? "Less company news" : "More company news"}
        </Button>
      </Box>
    </Container>
  );
};

export default CompanyNews;
