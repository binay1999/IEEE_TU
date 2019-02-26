import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addEvent, clearNewEvent } from "../../actions";

class AddEvent extends Component {
  state = {
    formdata: {
      title: "",
      image: "",
      description: "",
      date: ""
    }
  };

  handleInput = (event, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = event.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitFOrm = e => {
    e.preventDefault();
    this.props.dispatch(
      addEvent({
        ...this.state.formdata
      })
    );
  };

  showNewEvent = event =>
    event.post ? (
      <div>
        Cool !! <Link to={"/ieee/events"}>Click to see the post!!!</Link>
      </div>
    ) : null;

  componentWillUnmount() {
    this.props.dispatch(clearNewEvent());
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitFOrm}>
          <h2 className="text-center">Add Event</h2>
          <hr />
          <div>
            <label>Title:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the Title"
              value={this.state.formdata.title}
              onChange={event => this.handleInput(event, "title")}
            />
            <br />
            <label>Image:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the Image"
              value={this.state.formdata.image}
              onChange={event => this.handleInput(event, "image")}
            />
            <br />
            <label>Date:</label>
            <input
              className="form-control"
              type="date"
              value={this.state.formdata.date}
              onChange={event => this.handleInput(event, "date")}
            />
            <br />
            <label>Description:</label>
            <textarea
              value={this.state.formdata.description}
              rows="11"
              className="form-control"
              placeholder="Enter a description"
              onChange={event => this.handleInput(event, "description")}
            />
          </div>
          <br />
          <button className="btn btn-block btn-warning" type="submit">
            Add Event
          </button>
          {this.props.events.newevent
            ? this.showNewEvent(this.props.events.newevent)
            : null}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(AddEvent);
 