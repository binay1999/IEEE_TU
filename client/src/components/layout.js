import React from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";
import Notifications from "./body/notification";
const Layout = props => {
  return (
    <div>
      <Header />
      <div className="container row">
        <div className="col-lg-10 col-md-10">{props.children}</div>
        <div className="col-lg-2 col-md-2"><Notifications/></div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
