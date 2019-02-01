import React from "react";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} isOpen={ true }>
      <a className="menu-item" href="/">
        Profile
      </a>

      <a className="menu-item" href="/calendar">
        Calendar
      </a>

      <a className="menu-item" href="/HostHome">
        Something
      </a>

      <a className="menu-item" href="/ComedianHome">
        Comedy
      </a>

      <a className="account-login" href="/LoginPage">
        Log In / Create Account
      </a>
    </Menu>
  );
};