import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Progresscircle.css";

export default function Progresscircle({ value1, num }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const val = typeof value1 === "number" ? value1 : progress;

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={55}
            thickness={6}
            sx={{ color: "#e9eef5", position: "absolute", left: 0, top: 0 }}
          />

          <CircularProgress
            variant="determinate"
            value={val}
            size={55}
            thickness={8}
            sx={{ color: "rgba(254,80,0,1)", position: "relative", zIndex: 3 }}
            className="round22"
          />

          {/* <CircularProgress
            variant="determinate"
            value={100}
            size={36}
            thickness={8}
            sx={{
              color: "#f6f8fa",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 2,
            }}
          /> */}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
            }}
          >
            <Typography variant="caption" component="div" color="textPrimary">
              <p style={{ margin: 0, textAlign: "center" }}>
                Step <br /> {num} of 3
              </p>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
