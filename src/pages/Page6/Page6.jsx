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
import WomanIcon from '@mui/icons-material/Woman';
import Slider from "@mui/material/Slider";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Button1 from "../../common/component/Button/Button";

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
            <ArrowBackIcon />
            <h3>My details</h3>
            <Progresscircle value1={100} num={3} />
          </div>
        </Stack>
      </Navbar>

      <div className="home-content1">
        <h1>what are your main goals <br/> in life?</h1>
        <div className="goal-buttons">
            <Button1 name="All goals" className="goal-btn"/>
            <Button1 name="Goal Timeline" className="goal-btn"/>
            <Button1 name="+ Add Goal" className="goal-btn"/>
        </div>
        <div className="goal-cards">
            <Card className="goal-card">
                <CardContent>
                    <Typography variant="h6" component="div">
                        Buy a house
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Target Date: 2028
                    </Typography>
                    <Typography variant="body2">
                        Save $500 monthly to reach your goal of $30,000
                    </Typography>
                </CardContent>
            </Card> 
        </div>

        
      </div>

      <Footer />
    </div>
  );
}


