import React from "react";
import axios from "axios";

const Logout = props => {
  let request = axios.get("/ieee/logout").then(request => {
    setTimeout(() => {
      props.history.push("/ieee");
    }, 2000);
  });
  return <div>Logging you out.</div>;
};

export default Logout;