import React from "react";
import "./Page2.css";
import Navbar from "../../common/component/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Manstand from "../../common/component/Manstand/Manstand";
import { Link } from "react-router-dom";
import Footer from "../../common/component/Footer/Footer";
import man2 from "../../assets/man2.png";
import imgcard from "../../assets/imgcard.jpg";
import circle2 from "../../assets/circle2.png";
import circle1 from "../../assets/circle1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Page2() {
  return (
    <div className="home">
      <Navbar>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" className="account-button1" sx={{ textTransform: "none" }}>
            Already have an account
          </Button>
        </Stack>
      </Navbar>
      <div className="home-content">
        <div className="content-box">
          <h1>
            Life Insurance <br></br> Made Simple
          </h1>
          <p>Find your goals and plan your future </p>
          <Link to="/page3" style={{ textDecoration: "none" }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" className="account-button2">
                get started <ArrowForwardIcon style={{ marginLeft: "8px" }}/>
              </Button>
            </Stack>
          </Link>
        </div>
        <div className="image-box">
          <div className="shape">
            <div className="imge-component">
              <Manstand imgman={imgcard} width="500px" top="30px" left="100px" />
              <Manstand imgman={circle2} width="250px" top="320px" left="-60px"/>
              <h3>Refered to you by</h3>
              <Manstand imgman={circle1} width="200px" top="10px" left="550px"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
