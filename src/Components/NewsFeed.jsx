import React from "react";
import SideMenuBar from "./SideMenuBar";

function NewsFeed() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideMenuBar />
      </div>

      <div>NewsFeed page</div>
    </div>
  );
}

export default NewsFeed;
