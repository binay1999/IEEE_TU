import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions";

class EventsContainer extends Component {
  componentWillMount() {
      this.props.dispatch(getEvents(3, 0, 'desc'))
  }

  renderItems = (events) => (
      this.events ?
        this.events.map( item => (
            <div>
                Ityems
            </div>
        ))
        : <ldiv>BOOK</ldiv>
  )

  render() {
    return (
        <div>
            {this.renderItems(this.props.events)}
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
