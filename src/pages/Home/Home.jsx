import React from "react";
import "./Home.css";
import Navbar from "../../common/component/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import Manstand from "../../common/component/Manstand/Manstand";
import man3 from "../../assets/man3.png";
import circle1 from "../../assets/circle1.png";
import circle2 from "../../assets/circle2.png";
import man4 from "../../assets/man4.png";
import man5 from "../../assets/man5.png";
import man6 from "../../assets/man6.png";
import man7 from "../../assets/man7.png";

export default function Home() {
  return (
    <div className="home">
      <Navbar>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" className="account-button1">
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
          <Stack spacing={2} direction="row">
          <Button variant="contained" className="account-button2">
            get started
          </Button>
        </Stack>
        </div>
        <div className="image-box">
          <div className="shape">
            <Manstand imgman={man1} width="170px" top="-50px" left="170px"/>
            <Manstand imgman={man2} width="250px" top="-70px" left="370px"/>
            <Manstand imgman={man3} width="200px" top="-40px" left="700px"/>
            <Manstand imgman={circle1} width="180px" top="130px" left="30px"/>
            <Manstand imgman={circle2} width="290px" top="300px" left="-70px"/>
            <Manstand imgman={man4} width="140px" top="290px" left="140px"/>
            <Manstand imgman={man5} width="150px" top="240px" left="320px"/>
            <Manstand imgman={man6} width="160px" top="230px" left="550px"/>
            <Manstand imgman={man7} width="170px" top="230px" left="740px"/>
          </div>
        </div>
      </div>
    </div>
  );
}
