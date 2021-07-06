import React from "react";

const dashboard = () => {
  return (
    <div class="hero">
      <div class="row">
        <div class="col d-flex justify-content-end">
          <a href="#" class="notify">
            <img src="images/notification.png" alt=""></img>
          </a>
          {/* <!-- <a href="#" class="user mx-1"></a> --> */}
          <div class="dropdown  mx-1">
            <div class="dropbtn user">
              <img src="images/profile.png" alt=""></img> John Wick
              <img src="images/dropdown-icon.png" alt=""></img>
            </div>
            <div class="dropdown-content">
              <a href="#">My Profile</a>
              <a href="#">Status</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="app">
          <div class="app__main">
            <div class="calendar">
              <div id="calendar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
