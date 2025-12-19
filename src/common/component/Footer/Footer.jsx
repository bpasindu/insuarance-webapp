import React from "react";
import "./Footer.css";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className="body">
      <footer>
        <div className="footer-body">
          <div className="footer-mail">
            <Stack spacing={2} direction="row">
              <FacebookOutlinedIcon />
              <WhatsAppIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </Stack>
          </div>
          <div className="footer-content">
            <p>Find your Needs</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
