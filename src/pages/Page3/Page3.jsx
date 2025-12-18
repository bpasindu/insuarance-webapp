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

export default function Page3() {
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
        
      </div>
      <Footer />
    </div>
  );
}
