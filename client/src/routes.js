import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Events from "./components/body/posts";

import Layout from "./components/layout";

const Routes = props => {
  return (
    <Switch>
      <Layout>
        <Route path="/ieee" exact component={Home} />
        <Route path="/ieee/events" exact component={Events} />
        {/* <Route path='/ieee/contact' exact component={Contact}/> */}
        {/* <Route path='/ieee/login' exact component={Login}/> */}
        {/* <Route path='/ieee/add-admin' exact component={Register}/> */}
        {/* <Route path='/ieee/logout' exact component={Home}/> */}
        {/* <Route path='/ieee/gallery' exact component={Gallery}/> */}
        {/* <Route path='/ieee/working-team' exact component={WorkingTeam}/> */}
        {/* <Route path='/ieee/founding-team' exact component={FoundingTeam}/> */}
      </Layout>
    </Switch>
  );
};

export default Routes;
