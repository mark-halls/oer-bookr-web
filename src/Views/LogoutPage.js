import React from "react";

const Logout = props => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  props.setLoginToken(false);

  return (
    <div>
      <p>You have been logged out.</p>
    </div>
  );
};

export default Logout;
