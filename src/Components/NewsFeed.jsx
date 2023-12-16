import React from "react";
import SideMenuBar from "./SideMenuBar";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Card, MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function NewsFeed() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideMenuBar />
      </div>
      <Card
        style={{
          width: "100%",
          margin: "1%",
        }}
      >
        <div>
          <div
            className="Team-header"
            style={{ paddingLeft: "500px", fontFamily: "serif" }}
          >
            <div style={{ fontSize: "50px", color: "#1a237e" }}>
              <header>Latest NewsFeed</header>
            </div>
            <div style={{ paddingTop: "10px", paddingRight: "20px" }}>
              <Button
                style={{ backgroundColor: "lightblue" }}
                variant="Contained"
                startIcon={<AddIcon />}
                onClick={() => navigate("/AddNews")}
              >
                Add News
              </Button>
            </div>
          </div>
        </div>
        <Card className="NewsFeed-MasterCard">
          <div>
            <label
              style={{
                marginLeft: "920px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Category
              <div>
                <Select
                  style={{
                    marginLeft: "920px",
                    width: "180px",
                    height: "40px",
                  }}
                >
                  <MenuItem value={1}>Events</MenuItem>
                  <MenuItem value={2}>Shoutouts</MenuItem>
                  <MenuItem value={3}>Important Notice</MenuItem>
                  <MenuItem value={4}>Reminders</MenuItem>
                </Select>
              </div>
            </label>
          </div>
          <div>
            <Card className="NewsFeed-Card">Content 1</Card>
            <Card className="NewsFeed-Card">Content 2</Card>
            <Card className="NewsFeed-Card">Content 3</Card>
            <Card className="NewsFeed-Card">Content 4</Card>
          </div>
        </Card>
        {/* <div>
          <StandardPagination />
        </div> */}
      </Card>
    </div>
  );
}

export default NewsFeed;
