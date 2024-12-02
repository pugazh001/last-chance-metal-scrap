import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  useMediaQuery
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import img from "../assets/img/c2.jpg";

const JoinUs = () => {
  
  
 const isSmallScreen = useMediaQuery("(max-width:600px)");
 const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
 const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
     <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingY: 5,
      }}
    >
      <Container maxWidth="lg" sx={{ height: "auto" }}>
        {/* Header Section */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            marginTop: 4,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Why you should do business with Last Chance Metal Scrap?
        </Typography>

        {/* Yellow Grid Section */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: 7 }}
        >
          {[
            "Transparent way of working",
            "Knowledge and expertise",
            "Value optimisation of your scrap",
            "Sustainable and responsible",
            "Custom logistical solutions",
          ].map((text, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  borderRadius: "8px",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Typography
                    variant={isSmallScreen?"h6":"h5"}
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {index + 1}. {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Contact Section */}
     
    </Box>
    <Box
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "2rem",
        
         
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          How can we help you?
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          sx={{ marginTop: 2 }}
        >
          <Button
            startIcon={<PhoneIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
            href="tel:+919994128586"
          >
            Call +91-9994128586 
          </Button>
          <Button
            startIcon={<WhatsAppIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
            href="https://wa.me/+919994128586"
          >
            Send a WhatsApp
          </Button>
          <Button
            startIcon={<EmailIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
            href="mailto:: Info@Lastchancemetalscrap.com"
          >
            Leave a message
          </Button>
        </Stack>
      </Box>
    </>
   
  );
};

export default JoinUs;
