import { AppBar, Button, Card } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function P1ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar style={{ height: "50px", fontSize: "20px", padding: "15px" }}>
        Ford Announce Net
      </AppBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "100px",
        }}
      >
        <Card
          style={{
            height: "300px",
            width: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "100px",
          }}
        >
          <div style={{ fontSize: "50px", fontFamily: "sans-serif" }}>
            Forgot your Password
          </div>
          <div>
            <div style={{ marginTop: "50px", fontSize: "20px" }}>
              Please enter a valid email address
            </div>
            <div>
              <input
                style={{
                  width: "200px",
                  height: "30px",
                  fontSize: "20px",
                  borderRadius: "5px",
                }}
                placeholder="Enter your email"
              />
            </div>
            <Button
              style={{ marginTop: "50px" }}
              variant="contained"
              onClick={() => navigate("/VerificationCode")}
            >
              Send verification code
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default P1ForgotPassword;
