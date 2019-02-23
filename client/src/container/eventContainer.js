import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions";

class EventsContainer extends Component {
  componentWillMount() {
      this.props.dispatch(getEvents(3, 0, 'desc'))
  }

  renderItems = (posts) => (
      this.posts ?
        this.posts.map( item => (
            <div>
                Ityems
            </div>
        ))
        : <ldiv>BOOK</ldiv>
  )

  render() {
    return (
        <div>
            {this.renderItems(this.props.posts)}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(EventsContainer);
