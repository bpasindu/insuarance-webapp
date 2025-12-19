import React from "react";
import "./Page3.css";
import Navbar from "../../common/component/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Manstand from "../../common/component/Manstand/Manstand";
import { Link } from "react-router-dom";
import Footer from "../../common/component/Footer/Footer";
import imgcard from "../../assets/imgcard.jpg";
import circle2 from "../../assets/circle2.png";
import circle1 from "../../assets/circle1.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Progresscircle from "../../common/component/Progresscircle/Progresscircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const gender = [
  {
    value: "Male",
    label: "Mr.",
  },
  {
    value: "Female",
    label: "Ms.",
  },
];

export default function Page3() {
  return (
    <div className="home page3">
      <Navbar>
        <Stack spacing={2} direction="row" className="card2">
          <div className="card1">
            <ArrowBackIcon />
            <h3>My details</h3>
            <Progresscircle value1={33} num={1} />
          </div>
        </Stack>
      </Navbar>

      <div className="home-content">
        <h1>
          Let’s get started by
          <br /> telling a little bit about
          <br /> yourself
        </h1>
        <div className="form-box">
          <div className="first-row" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 0, width: "10ch" } }}
              noValidate
              autoComplete="off"
            >
              <Typography sx={{ fontSize: 12, color: "#9aa0a6", mb: 0.5 }}>.</Typography>
              <TextField
                select
                id="outlined-select-currency"
                defaultValue="Male"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                }}
                InputProps={{ sx: { pl: 0.5 } }}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 0, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              {/* label outside border */}
              <Typography sx={{ fontSize: 12, color: "#9aa0a6", mb: 0.5 }}>First Name</Typography>
              <TextField
                id="first-name"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#9aa0a6" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                }}
              />
            </Box>
          </div>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 0, width: "35ch", marginTop: 2 } }}
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            {/* label outside border */}
            <div>
              <Typography sx={{ fontSize: 12, color: "#9aa0a6", mb: 0.5 }}>Last name</Typography>
              <TextField
                id="last-name"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#9aa0a6" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                }}
              />
            </div>

            <div>
              <Typography sx={{ fontSize: 12, color: "#9aa0a6", mb: 0.5 }}>My date of birth</Typography>
              <TextField
                id="dob"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#9aa0a6" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                }}
              />
            </div>
          </Box>
        </div>
        <Link to="/page4" style={{ textDecoration: "none" }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" className="account-button2">
                Next <ArrowForwardIcon /> 
              </Button>
            </Stack>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
