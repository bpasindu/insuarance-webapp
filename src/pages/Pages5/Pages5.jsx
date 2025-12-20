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
import WomanIcon from "@mui/icons-material/Woman";
import Slider from "@mui/material/Slider";
import ChildCareIcon from "@mui/icons-material/ChildCare";

import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../../redux/userSlice";

export default function Page5() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);

  const kidsCount = data.kidsCount ?? 0;

  const handleKids = (e, v) => {
    dispatch(saveData({ kidsCount: v }));
  };

  const kids = data.kids || [];

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
          My name is <span className="hl">{data.firstName}</span>
        </p>
        <p className="intro">
          And I am{" "}
          <span className="hl">
            {data.title === "Female" ? "female" : "male"}
          </span>{" "}
          of <span className="hl">{data.age} years old.</span>
        </p>
        <p className="intro">
          I am <span className="hl">{data.maritalStatus}</span> to{" "}
          <span className="hl">{data.spouseName}</span>
        </p>

        <div className="marry-box kids-box">
          <h2>I have (kids)</h2>

          <Box className="kids-slider-wrap">
            <Slider
              value={kidsCount}
              onChange={handleKids}
              min={0}
              max={7}
              step={1}
              sx={{ color: '#f44100ff', borderRadius: '8px', padding: '10px 0' }}
              marks
            />
            <Box className="kids-badge">{kidsCount}</Box>
          </Box>

          <div className="they-are">they are</div>

          <Box className="kids-list">
            {Array.from({ length: kidsCount }).map((_, i) => (
              <Box className="kid-row" key={i}>
                <TextField
                  placeholder="Name"
                  size="small"
                  value={kids[i]?.name || ""}
                  onChange={(e) => {
                    const updated = [...kids];
                    updated[i] = { ...updated[i], name: e.target.value };
                    dispatch(saveData({ kids: updated }));
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChildCareIcon sx={{ color: "#9aa0a6" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1 }}
                />

                <TextField
                  placeholder="5"
                  size="small"
                  value={kids[i]?.age || ""}
                  onChange={(e) => {
                    const updated = [...kids];
                    updated[i] = { ...updated[i], age: e.target.value };
                    dispatch(saveData({ kids: updated }));
                  }}
                  sx={{ width: 140 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography sx={{ fontSize: 12, px: 1 }}>
                          years old
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            ))}
          </Box>

          <Link to="/page6" style={{ textDecoration: "none", marginTop: 40 }}>
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
