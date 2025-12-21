import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Button1.css";

export default function Button1({ name,color }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" className="button21" sx={{ color: {color}, border: `1px solid ${color}`, borderRadius: '20px' }}>
        {name}
      </Button>
    </Stack>
  );
}
