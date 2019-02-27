import React, { Component } from "react";
import EventsContainer from "../../container/eventContainer";
import { Link } from "react-router-dom";

class Events extends Component {
  render(){
    return (
      <div>
        { this.props.user.login.isAuth != null ? (
          <Link className="container" to="/ieee/add-event">
            Add Event
          </Link>
        ) : null }
        <EventsContainer />
      </div>
    );
  }
}

export default Events;
