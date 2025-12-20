import React from "react";
import "./Page3.css";
import Navbar from "../../common/component/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Manstand from "../../common/component/Manstand/Manstand";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/component/Footer/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Progresscircle from "../../common/component/Progresscircle/Progresscircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../../redux/userSlice";

const gender = [
  { value: "Male", label: "Mr." },
  { value: "Female", label: "Ms." },
];

export default function Page3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.user.data);

  const computeAgeFromDob = (dob) => {
    if (!dob) return null;
    const dt = new Date(dob);
    if (isNaN(dt)) return null;
    return Math.abs(new Date(Date.now() - dt).getUTCFullYear() - 1970);
  };

  const handleChange = (field) => (e) => {
    dispatch(saveData({ [field]: e.target.value }));
  };

  const isValid =
    data?.title &&
    data?.firstName &&
    data?.lastName &&
    data?.dob &&
    computeAgeFromDob(data?.dob) !== null;

  const handleNext = () => {
    const age = computeAgeFromDob(data.dob);
    dispatch(saveData({ age }));
    navigate("/page4");
  };

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
          <div className="first-row" style={{ display: "flex", gap: 12 }}>
            <Box sx={{ width: "10ch" }}>
              <Typography sx={{ fontSize: 12, color: "#9aa0a6" }}>.</Typography>
              <TextField
                select
                size="small"
                value={data?.title || ""}
                onChange={handleChange("title")}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ width: "25ch" }}>
              <Typography sx={{ fontSize: 12, color: "#9aa0a6" }}>First Name</Typography>
              <TextField
                size="small"
                value={data?.firstName || ""}
                onChange={handleChange("firstName")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>

          <Box sx={{ width: "35ch", mt: 2 }}>
            <Typography sx={{ fontSize: 12, color: "#9aa0a6" }}>Last name</Typography>
            <TextField
              size="small"
              value={data?.lastName || ""}
              onChange={handleChange("lastName")}
            />

            <Typography sx={{ fontSize: 12, color: "#9aa0a6", mt: 2 }}>
              My date of birth
            </Typography>
            <TextField
              size="small"
              value={data?.dob || ""}
              onChange={handleChange("dob")}
            />
          </Box>
        </div>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isValid}
          >
            Next <ArrowForwardIcon />
          </Button>
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
