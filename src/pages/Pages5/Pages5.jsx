import React from "react";
import "./Pages5.css";
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
import Slider from "@mui/material/Slider";
import ChildCareIcon from '@mui/icons-material/ChildCare';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

export default function Page5() {
  const [status, setStatus] = React.useState("single");
  const [kids, setKids] = React.useState(2);
  const handleStatus = (event, newStatus) => {
    if (newStatus !== null) setStatus(newStatus);
  };
  const handleKids = (e, v) => setKids(v);

  return (
    <div className="page4 page5">
      <Navbar>
        <Stack spacing={2} direction="row" className="card2">
          <div className="card1">
            <ArrowBackIcon />
            <h3>My details</h3>
            <Progresscircle value1={66} num={2} />
          </div>
        </Stack>
      </Navbar>

      <div className="home-content">
        <p className="intro">
          My name is <span className="hl">Arjuna</span>
        </p>
        <p className="intro">
          And I am <span className="hl">male</span> of <span className="hl">35 years old.</span>
        </p>
        <p className="intro">
          I am <span className="hl">married</span> to <span className="hl">Dilu</span>
        </p>

        <div className="marry-box kids-box">
          <h2>I have (kids)</h2>

          <Box className="kids-slider-wrap">
            <Slider
              value={kids}
              onChange={handleKids}
              min={0}
              max={7}
              step={1}
              marks
              sx={{
                color: "#fe5000",
                height: 6,
                "& .MuiSlider-rail": { background: "#e9eef5" },
              }}
            />
            <Box className="kids-badge">{kids}</Box>
          </Box>

          <div className="they-are">they are</div>

          <Box className="kids-list">
            {Array.from({ length: Math.max(0, kids) }).map((_, i) => (
              <Box className="kid-row" key={i}>
                <TextField
                  id={`kid-name-${i}`}
                  placeholder={`Name`}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChildCareIcon sx={{ color: "#9aa0a6" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1 }}
                />

                <Box className="kid-age">
                  <TextField
                    id={`kid-age-${i}`}
                    placeholder="5"
                    variant="outlined"
                    size="small"
                    sx={{ width: 140 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography sx={{ fontSize: 12, color: "#9aa0a6", px: 1 }}>years old</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Link to="/page6" style={{ textDecoration: "none", display: "block", marginTop: 40 }}>
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
