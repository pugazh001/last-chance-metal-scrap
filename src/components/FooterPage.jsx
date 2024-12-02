import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // For interactive maps, use `react-leaflet`

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const FooterPage = () => {

  const links = ["Home", "About ", "Product", "Certificates", "Contact"];

  return (
    <>
      {/* Map Section */}
      <Box sx={{ width: "100%", height: "400px", position: "relative" }}>
        <Typography
          variant="h5"
          align="center"
          sx={{ position: "absolute", top: 20, width: "100%", zIndex: 10 }}
        >
          Feel free to visit our yard!
        </Typography>
        <MapContainer
          center={[10.7331016, 78.7588936]} // Rotterdam Coordinates
          zoom={10}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* Add markers for locations */}
          <Marker position={[10.7331016,78.7588936]}  icon={customIcon}>
            <Popup>Last Chance Metal Scrap</Popup>
          </Marker>
           <Marker position={[10.7441983,78.7203337]} icon={customIcon}>
            <Popup>Godown</Popup>
          </Marker>{/*
          <Marker position={[51.5648, 4.9337]}>
            <Popup>Dordrecht Yard</Popup>
          </Marker> */}
        </MapContainer>
      </Box>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "2rem 0" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{justifyContent:"space-between"}}>
            {/* About Jansen Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                About Last Chance Metal Scrap
              </Typography>
              {links.map((item, index) => (
        <Link
          key={index}
          href={`/${item.toLowerCase().replace(/\s+/g, "")}`} // Convert item to URL-friendly format
          underline="none"
          color="inherit"
          display="block"
          sx={{ marginY: 0.5 }}
        >
          {item}
        </Link>
      ))}
            </Grid>

            {/* Quick Links Section */}
            {/* <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              {[
                "Ferrous",
                "MRF scrap mutation",
                "Non-ferrous",
                "London Metal Exchange (LME)",
                "Decommissioning",
                "Laboratory",
                "Indexes",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="none"
                  color="inherit"
                  display="block"
                  sx={{ marginY: 0.5 }}
                >
                  {item}
                </Link>
              ))}
            </Grid> */}

            {/* Follow Us Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <Link href="#" underline="none" color="inherit" sx={{ marginRight: 1 }}>
                  <i className="fab fa-facebook" style={{ fontSize: "1.5rem" }}></i>
                </Link>
                <Link href="#" underline="none" color="inherit" sx={{ marginRight: 1 }}>
                  <i className="fab fa-instagram" style={{ fontSize: "1.5rem" }}></i>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <i className="fab fa-linkedin" style={{ fontSize: "1.5rem" }}></i>
                </Link>
              </Box>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Stay up-to-date!
              </Typography>
              <Link href="#" underline="none" color="inherit" display="block">
                Subscribe to our news updates
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
              Certificates
              </Typography>
              <Box>
                <Link href="#" underline="none" color="inherit" sx={{ marginRight: 1 }}>
                  <i className="fab fa-facebook" style={{ fontSize: "1.5rem" }}></i>
                </Link>
                <Link href="#" underline="none" color="inherit" sx={{ marginRight: 1 }}>
                  <i className="fab fa-instagram" style={{ fontSize: "1.5rem" }}></i>
                </Link>
                <Link href="#" underline="none" color="inherit">
                  <i className="fab fa-linkedin" style={{ fontSize: "1.5rem" }}></i>
                </Link>
              </Box>
             
              <Link href="http://136.185.14.8:5556/cert/Udyam Registration Certificate.pdf" underline="none" color="inherit" display="block">
              UDYAM REGISTRATION CERTIFICATE
              </Link>
              <br />
              <Link href="http://136.185.14.8:5556/cert/LAST CHANCE GST - Verfied.pdf" underline="none" color="inherit" display="block">
             GST REGISTRATION CERTIFICATE
              </Link>  <br />
              <Link href="http://136.185.14.8:5556/cert/AAKPZ7470R-IEC.pdf" underline="none" color="inherit" display="block">
              Importer-Exporter Code (IEC) CERTIFICATE
              </Link>
            </Grid>
          
            
          </Grid>

          {/* Bottom Footer */}
          <Box
            sx={{
              textAlign: "center",
              borderTop: "1px solid #444",
              paddingTop: "1rem",
              marginTop: "1rem",
            }}
          >
            <Typography variant="body2">
              &copy; Copyright Last Chance Metal Scrap Group 2024
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="none" color="inherit">
                Terms & conditions
              </Link>{" "}
              |{" "}
              <Link href="#" underline="none" color="inherit">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" underline="none" color="inherit">
                Sitemap
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterPage;
