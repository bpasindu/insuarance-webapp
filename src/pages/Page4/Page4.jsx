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
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../../redux/userSlice";

export default function Page4() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.data);

  const [status, setStatus] = React.useState(data.maritalStatus || "single");

  const handleStatus = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
      dispatch(saveData({ maritalStatus: newStatus }));
    }
  };

  const displayName = data.firstName || "";
  const genderLabel =
    data.title === "Female" ? "female" : data.title === "Male" ? "male" : "";

  const age = data.age ?? "";

  const spouseLabelText =
    genderLabel === "female" ? "My husband is" : "My wife is";

  const SpouseIcon = genderLabel === "female" ? ManIcon : WomanIcon;

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
          My name is <span className="hl">{displayName}</span>
        </p>
        <p className="intro">
          And I am <span className="hl">{genderLabel}</span> of{" "}
          <span className="hl">{age} years old.</span>
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
            <ToggleButton value="single" className="toggle-left">
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              Single
            </ToggleButton>
            <ToggleButton value="married" className="toggle-right">
              <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
              Married
            </ToggleButton>
          </ToggleButtonGroup>

          {status === "married" && (
            <>
              <Typography sx={{ fontSize: 14, color: "#9aa0a6", mb: 0.5, mt: 3 }}>
                {spouseLabelText}
              </Typography>

              <TextField
                id="spouse-name"
                placeholder="Dilu"
                variant="outlined"
                size="small"
                value={data.spouseName || ""}
                onChange={(e) =>
                  dispatch(saveData({ spouseName: e.target.value }))
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SpouseIcon sx={{ color: "#9aa0a6" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 320 }}
              />
            </>
          )}

          <Link to="/page5" style={{ textDecoration: "none", marginTop: 40 }}>
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
