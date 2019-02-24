import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Events from "./components/body/events";
import Login from "./container/admin/login";
import Layout from "./components/layout";
import Auth from './components/auth'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/ieee" exact component= {Auth(Home, null)} />
        <Route path="/ieee/events" exact component={Auth(Events, null)} />
        {/* <Route path='/ieee/contact' exact component={Contact}/> */}
        <Route path="/ieee/login" exact component={Auth(Login, false)} />
        {/* <Route path='/ieee/add-admin' exact component={Register}/> */}
        {/* <Route path='/ieee/logout' exact component={Home}/> */}
        {/* <Route path='/ieee/gallery' exact component={Gallery}/> */}
        {/* <Route path='/ieee/working-team' exact component={WorkingTeam}/> */}
        {/* <Route path='/ieee/founding-team' exact component={FoundingTeam}/> */}
      </Switch>
    </Layout>
  );
};

export default Routes;
