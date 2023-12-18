import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../App.css"

function SideMenuBar() {
  const navigate = useNavigate();
  // const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100%", backgroundColor: "#00459b" }}>
        <Menu>
          <MenuItem className="menubar"
            icon={<MenuOutlinedIcon />}
            // onClick={() => {
            //   collapseSidebar();
            // }}
            
            style={{ textAlign: "center" }}
          >
            <h2>Dashboard</h2>
          </MenuItem>
          <div style={{ fontSize: "20px" }}>
            <MenuItem icon={<HomeIcon />} active onClick={() => navigate("/Home")}>
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
