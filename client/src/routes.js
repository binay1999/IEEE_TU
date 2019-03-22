import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Events from "./components/body/events";
import Login from "./container/admin/login";
import Layout from "./components/layout";
import AddEvent from "./container/admin/add";
import EditEvent from "./container/admin/edit";
import Register from "./container/admin/register";
import Logout from "./container/admin/logout";
import Auth from "./components/auth";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/ieee" exact component={Auth(Home, null)} />
        <Route path="/ieee/events" exact component={Auth(Events, null)} />
        <Route path="/ieee/add-event" exact component={Auth(AddEvent, true)} />
        <Route path="/ieee/logout" exact component={Auth(Logout, true)} />
        <Route path="/ieee/edit-event/:id" exact component={Auth(EditEvent, true)} />
        {/* <Route path='/ieee/contact' exact component={Contact}/> */}
        <Route path="/ieee/login" exact component={Auth(Login, true)} />
        <Route path='/ieee/add-admin' exact component={Auth(Register, true)} />
        {/* <Route path='/ieee/gallery' exact component={Gallery}/> */}
        {/* <Route path='/ieee/working-team' exact component={WorkingTeam}/> */}
        {/* <Route path='/ieee/founding-team' exact component={FoundingTeam}/> */}
      </Switch>
    </Layout>
  );
};

export default Routes;
