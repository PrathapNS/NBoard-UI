import React from "react";
import SideMenuBar from "./SideMenuBar";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideMenuBar />
      </div>

      <div>Home page</div>
    </div>
  );
}

export default Home;
