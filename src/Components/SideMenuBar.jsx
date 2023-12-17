import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Button, Fab, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import logo from "./Ford-Logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Modal from "@mui/material/Modal";

function SideMenuBar() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh", backgroundColor: "#00459b" }}>
        <Menu>
          <div
            style={{
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Tooltip title="Profile">
              <Fab onClick={handleOpen} color="lightblue" aria-label="Profile">
                <AccountCircleIcon
                  style={{ fontSize: "xxx-large", color: "#607d8b" }}
                />
              </Fab>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="Profile-Modal">
                  <AccountCircleIcon
                    style={{
                      fontSize: "100px",
                      marginTop: "30px",
                      marginLeft: "195",
                      color: "#607d8b",
                    }}
                  />
                  <h1
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    Person 1
                  </h1>
                  <Typography style={{ marginTop: "60px", marginLeft: "40px" }}>
                    <h3>Name : Person 1 </h3>
                    <h3>Designation : Team Lead </h3>
                    <h3>Team : FSM</h3>
                  </Typography>
                  <Button
                    style={{
                      marginLeft: "350px",
                      marginTop: "100px",
                    }}
                    variant="outlined"
                  >
                    {" "}
                    Logout
                  </Button>
                </Box>
              </Modal>
            </Tooltip>
            <img style={{ width: "150px" }} src={logo} alt={"logo"} />
          </div>
          <hr style={{ color: "black" }}></hr>

          <div style={{ fontSize: "20px" }}>
            <MenuItem icon={<HomeIcon />} onClick={() => navigate("/Home")}>
              Home
            </MenuItem>
            <MenuItem icon={<PersonIcon />} onClick={() => navigate("/User")}>
              User
            </MenuItem>
            <MenuItem icon={<GroupsIcon />} onClick={() => navigate("/Team")}>
              Team
            </MenuItem>
            <MenuItem
              icon={<NotificationsIcon />}
              onClick={() => navigate("/NewsFeed")}
            >
              NewsFeed
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideMenuBar;
