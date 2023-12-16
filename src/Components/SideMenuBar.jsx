import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Fab } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SideMenuBar() {
  const navigate = useNavigate();
  // const { collapseSidebar } = useProSidebar();

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
            <Fab color="lightblue" aria-label="Profile">
              <AccountCircleIcon
                style={{ fontSize: "xxx-large", color: "#607d8b" }}
              />
            </Fab>
            <h2>Dashboard</h2>
          </div>
          <hr style={{ color: "black" }}></hr>
          {/* <MenuItem
            icon={<MenuOutlinedIcon />}
            // onClick={() => {
            //   collapseSidebar();
            // }}
            style={{ textAlign: "center" }}
          >
            <h2>Dashboard</h2>
          </MenuItem> */}
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
