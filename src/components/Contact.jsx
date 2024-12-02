import React,{useState} from 'react';
import { Grid, Box, Typography, TextField, Link,Button,useMediaQuery, Paper, Container,MenuItem ,Select,FormControl, InputLabel} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import contactImg from '../assets/img/c9.jpg'
import axios from 'axios';
const Contact = () => {

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px) and (min-width:601px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.role) newErrors.role = "Role is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return; // Stop submission if validation fails

    try {
      const response = await axios.post("http://136.185.14.8:8100/api/send-email/", formData);
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", role: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <>
     <div
  className="bg-section"
  style={{
    backgroundImage: `url('${contactImg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Keeps the image fixed
    height: isSmallScreen?"500px":"700px", // Full viewport height
    width: "100%",
  }}
></div>
    <Box sx={{ p: 4 }}>
      
      {/* Main Grid Layout */}
      <Container>
      <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb:6,
              color: "black",
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h6"
            sx={{
             
              mb:6,
              color: "black",
            }}
          >
          Do you have a question about our activities, what we do, who we are or for whom we work? Our customer service is available by telephone or e-mail, or fill in the contact form and let us inquire about the possibilities.
          </Typography>
          
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6} sx={{ mb: 5 }}>
  <Paper
    elevation={3}
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      bgcolor: "#eeeeee",
    }}
  >
    <Box display="flex" alignItems="center" mb={2}>
      <RoomIcon sx={{ mr: 1 }} color="primary" />
      <Typography variant="h6">Last Chance Metal Scrap</Typography>
    </Box>
    <Typography>
      <strong>Visiting address:</strong> <br />
      L-II-1754, Phase II, TNUDP, Annanagar <br />
      Navalpattu, Trichy (PIN: 620026) <br />
      Tamil Nadu, INDIA <br />
      Land Mark: 120 Feet Road
    </Typography>
    <Box mt={1}>
    <Button
        sx={{
          backgroundColor:"#148203",
          color:"white",
          fontWeight:"500"
        }}
      >
      <Link
         
         href="https://www.google.com/maps/search/?api=1&query=10.7331016,78.7588936" // Convert item to URL-friendly format
         underline="none"
         color="inherit"
         display="block"
         sx={{ marginY: 0.5 }}
       >
         Open Google Map
       </Link>
      </Button>
     
      {/* <a
        href="https://www.google.com/maps/search/?api=1&query=10.7331016,78.7588936" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          color:"#196ffa",
          fontSize:"18px"
        }}
      >
        Open google Map 
      </a> */}
    </Box>
  </Paper>
</Grid>


        {/* Vlaardingen Section */}
        <Grid item xs={12} md={6} sx={{mb:5}}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%',bgcolor:"#eeeeee" }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <RoomIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Godown</Typography>
            </Box>
            <Typography>
              <strong>Visiting address:</strong> <br />
              No 10 Abdul Kalam nagar <br />
              Gundur,Trichy (PIN : 620007) <br />
              Tamil Nadu, INIDA
            </Typography>
            <Box mt={1}><br />

      {/* <a
        href="https://www.google.com/maps/search/?api=1&query=10.7441983,78.7203337" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          color:"#196ffa",
          fontSize:"18px"
        }}
       
      >
        Open google Map 
      </a> */}
      <Button
        sx={{
          backgroundColor:"#148203",
          color:"white",
          fontWeight:"500"
        }}
      >
      <Link
         
         href="https://www.google.com/maps/search/?api=1&query=10.7441983,78.7203337" // Convert item to URL-friendly format
         underline="none"
         color="inherit"
         display="block"
         sx={{ marginY: 0.5 }}
       >
         Open Google Map
       </Link>
      </Button>
     
    </Box>
          </Paper>
        </Grid>

        {/* Opening Hours */}
        <Grid item xs={12} md={6} sx={{mb:5}}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: '#eeeeee',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <AccessTimeIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Opening Hours</Typography>
            </Box>
            <Typography>
              <strong>Last Chance Metal Scrap:</strong> <br />
              Monday - Friday: 09:00(AM) - 10:00(PM) <br />
             
              Saturday: 09:00(AM) - 6:00(PM) <br />
              Sunday: 06:00 - 17:00 <br />
              
            </Typography>
            <Typography sx={{ mt: 2 }}>
            <strong>Godown:</strong> <br />
              Monday - Friday: 09:00(AM) - 10:00(PM) <br />
             
              Saturday: 09:00(AM) - 6:00(PM) <br />
              Sunday: 06:00 - 17:00 <br />
             
            </Typography>
           
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={6} sx={{mb:5}}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: '#eeeeee',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Contact Information</Typography>
            </Box>
            <Typography>
              General Tel: +91-9994128586  <br />
              Last Chance Metal Scrap  Tel: +91-9629614117 <br />
              {/* <MailOutlineIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> */}
              Email:  Info@Lastchancemetalscrap.com
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form */}
        {/* <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contact Form
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Email Address" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Phone Number" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} md={6}>
  <FormControl fullWidth required>
    <InputLabel>Role</InputLabel>
    <Select
      label="Role"
      variant="outlined"
      defaultValue=""
    >
      <MenuItem value="BUYER">Buyer</MenuItem>
      <MenuItem value="SELLER">Seller</MenuItem>
    </Select>
  </FormControl>
</Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}<Grid item xs={12}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Contact Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required error={!!errors.role}>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <MenuItem value="BUYER">Buyer</MenuItem>
                <MenuItem value="SELLER">Seller</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {errors.role}
              </Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
      </Grid></Container>
    </Box>  </>
  );
};

export default Contact;
