import React from "react";
import SideMenuBar from "./SideMenuBar";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  MenuItem,
  Select,
  TextareaAutosize,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AddNews() {
  const navigate = useNavigate();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideMenuBar />
      </div>
      <Card
        style={{
          width: "100%",
          height: "100%",
          margin: "1%",
        }}
      >
        <form>
          <div
            style={{ padding: "20px", cursor: "pointer" }}
            onClick={() => navigate("/NewsFeed")}
          >
            {<ArrowBackIcon />}
          </div>
          <div className="News-Label-Input">
            <label className="AddNews-Label">
              Team Name
              <div>
                <Select className="AddNews-Input" placeholder="Team Name" />
              </div>
            </label>
            <label className="AddNews-Label">
              Category
              <div>
                <Select className="AddNews-Input">
                  <MenuItem value={1}>Events</MenuItem>
                  <MenuItem value={2}>Shoutouts</MenuItem>
                  <MenuItem value={3}>Important Notice</MenuItem>
                  <MenuItem value={4}>Reminders</MenuItem>
                </Select>
              </div>
            </label>
          </div>
          <div
            style={{
              paddingLeft: "200px",
              paddingTop: "20px",
              fontSize: "20px",
              fontFamily: "verdana",
            }}
          >
            <label>
              Message
              <div>
                <TextareaAutosize
                  style={{ height: "100px", width: "634px" }}
                  placeholder="Content Message"
                />
              </div>
            </label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "100px",
              marginBottom: "50px",
            }}
          >
            <div style={{ paddingLeft: "100px" }}>
              <Button
                style={{
                  height: "40px",
                }}
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
            <div>
              <Button
                style={{
                  marginRight: "20px",
                  marginLeft: "800px",
                }}
                variant="outlined"
                onClick={() => navigate("/NewsFeed")}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "lightblue",
                  width: "100px",
                }}
                variant="Contained"
                onClick={() => navigate("/NewsFeed")}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddNews;
