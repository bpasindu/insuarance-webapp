import React from "react";
import "./Page4.css";
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
import { Select, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PeopleIcon from "@mui/icons-material/People";
import WomanIcon from '@mui/icons-material/Woman';
import { useSelector } from "react-redux";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);



export default function Page4() {
  const [status, setStatus] = React.useState("single");
  const handleStatus = (event, newStatus) => {
    if (newStatus !== null) setStatus(newStatus);
  };

  // read stored personal details from Page3
  const personalDetails = useSelector((s) => s.insurance?.personalDetails || {});

  const computeAgeFromDob = (dob) => {
    if (!dob) return null;
    let parts;
    let dt = new Date(dob);
    if (isNaN(dt)) {
      parts = String(dob).split("-");
      if (parts.length === 3) dt = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    }
    if (isNaN(dt)) return null;
    const diff = Date.now() - dt.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  };

  const displayName = personalDetails.firstName || "";
  const genderLabel =
    (personalDetails.title === "Female" && "female") ||
    (personalDetails.title === "Male" && "male") ||
    "";
  const age = computeAgeFromDob(personalDetails.dob);

  return (
    <div className="page4">
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
        <p className="intro">
          My name is <span className="hl">{displayName || "—"}</span>
        </p>
        <p className="intro">
          And I am <span className="hl">{genderLabel || "—"}</span> of{" "}
          <span className="hl">{age !== null ? `${age} years old.` : "—"}</span>
        </p>

        <div className="marry-box">
          <h2>Are you married?</h2>

          <Typography sx={{ fontSize: 14, color: "#9aa0a6", mb: 0.5, mt: 3 }}>
            Martial Status
          </Typography>

          <ToggleButtonGroup
            value={status}
            exclusive
            onChange={handleStatus}
            className="status-toggle"
            aria-label="marital status"
            size="small"
          >
            <ToggleButton value="single" aria-label="single" className="toggle-left">
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              Single
            </ToggleButton>
            <ToggleButton value="married" aria-label="married" className="toggle-right">
              <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
              Married
            </ToggleButton>
          </ToggleButtonGroup>

          <Typography sx={{ fontSize: 14, color: "#9aa0a6", mb: 0.5, mt: 3 }}>
            My wife is
          </Typography>

          <TextField
            id="wife-name"
            placeholder="Dilu"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WomanIcon sx={{ color: "#9aa0a6" }} />
                </InputAdornment>
              ),
            }}
            sx={{ width: 320, borderRadius: 2, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          />

          <Link to="/page5" style={{ textDecoration: "none", display: "block", marginTop: 40 }}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" className="account-button2">
                Next <ArrowForwardIcon />
              </Button>
            </Stack>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}