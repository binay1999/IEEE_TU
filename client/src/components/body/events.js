import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvents } from "../../actions";

class Events extends Component {
  componentWillMount() {
    this.props.dispatch(getEvents());
  }

  showEvents = event => 
    event.list
      ? event.list.map(item => (
        <div key={item._id} className="card">
        { this.props.user.login.isAuth === true?
          <Link to={`/ieee/edit-event/${item._id}`}>Edit</Link>
        : null
        }
          <div className="card-title">{item.title}</div>
          <div className="card-body">
          <img src={item.image} alt="" />
          <p>{item.description}</p>
          <p className="date">{item.date}</p>
          </div>
        </div>
        ))
      : (
          <div>No Events yet!</div>
        );


  render(){
    return (
      <div>
        { this.props.user.login.isAuth != null ? (
          <Link className="container" to="/ieee/add-event">
            Add Event
          </Link>
        ) : null }
        <div>
          {this.showEvents(this.props.events)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Events);
