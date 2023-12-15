import React from "react";
import SideMenuBar from "./SideMenuBar";

function User() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideMenuBar />
      </div>

      <div>User page</div>
    </div>
  );
}

export default User;
