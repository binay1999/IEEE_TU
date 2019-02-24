import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions";

class EventsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getEvents(3, 0, "desc"));
  }

  renderItems = events =>
    this.events ? (
      this.events.map(item => (
        <div>
          <h2>{events.title}</h2>
          <img src="{events.image}" />
          <p>{events.description}</p>
          <p>{events.date}</p>
        </div>
      ))
    ) : (
      <div>No Events yet!</div>
    );
  loadmore = () => {
    let count = this.props.events.list.length;
    this.props.dispatch(getEvents(3, count, "desc", this.props.events.list));
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.events)}
        <div className="loadmore text-center" onclick={this.loadmore}>
          Load More
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

export default connect(mapStateToProps)(EventsContainer);
