import React from "react";
import "./Page6.css";
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
import { ButtonBase, Select, Switch } from "@mui/material";
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
import Button1 from "../../common/component/Button/Button";
import Goalcard from "../../common/component/Goalcard/Goalcard";
import goal1 from "../../assets/goal1.jpg";
import goal2 from "../../assets/goal2.jpg";
import goal3 from "../../assets/goal3.jpg";
import goal4 from "../../assets/goal4.jpg";
import goal5 from "../../assets/goal5.jpg";
import goal6 from "../../assets/goal6.jpg";
import goal7 from "../../assets/goal7.jpg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Page6() {
  return (
    <div className="page4 page6">
      <Navbar>
        <Stack spacing={2} direction="row" className="card2">
          <div className="card1">
            <Link to="/page5" sx={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link>
            <h3>My details</h3>
            <Progresscircle value1={100} num={3} />
          </div>
        </Stack>
      </Navbar>

      <div className="home-content1">
        <h2>
          what are your main goals <br /> in life?
        </h2>
        <div className="goal-buttons">
          <Button1
            name="All goals"
            color={"rgba(126, 118, 118, 1)"}
            className="goal-btn"
          />
          <Button1
            name="Goal Timeline"
            color={"rgba(136, 134, 134, 1)"}
            className="goal-btn"
          />
          <Button1
            name="+ Add Goal"
            color={"rgba(254, 80, 0, 1)"}
            className="goal-btn goal-btn3"
            sx={{position: 'fixed', right: '60px'}}
          />
        </div>
        <div className="goal-cards">
          <Goalcard
            img={goal1}
            text={"Health and wellbeing of our family"}
            className="card-goal"
          />
          <Goalcard
            img={goal2}
            text={"Protect my income"}
            className="card-goal"
          />
          <Goalcard
            img={goal3}
            text={"My Retirement Saving"}
            className="card-goal"
          />
          <Goalcard
            img={goal4}
            text={"Save for Ruwan’s college"}
            className="card-goal"
          />
          <Goalcard
            img={goal5}
            text={"Save for Ruwani’s college"}
            className="card-goal"
          />
          <Goalcard
            img={goal6}
            text={"Critical Illness and disability"}
            className="card-goal"
          />
          <Goalcard
            img={goal7}
            text={"My  Kids’ Dream Wedding"}
            className="card-goal"
          />
        </div>
      </div>

      <Link to="/page6" style={{ textDecoration: "none", marginTop: 40 }}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" className="account-button2">
            Next <ArrowForwardIcon />
          </Button>
        </Stack>
      </Link>

      <Footer />
    </div>
  );
}
