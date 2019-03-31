import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addEvent, clearNewEvent } from "../../actions";
import './add.css'


class AddEvent extends Component {
  state = {
    formdata: {
      error: "",
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

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addEvent({
        ...this.state.formdata
      })
    );
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewEvent());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newevent === null) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      nextProps.history.push("/ieee/events");
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <h2 className="text-center">Add Event</h2>
          <hr />
          <div>
           
            <input
              className="form-control"
              id="title"
              type="text"
              placeholder="Enter the Title"
              value={this.state.formdata.title}
              onChange={event => this.handleInput(event, "title")}
            />
            <br />
           
            <input
              className="form-control"
              id="image"
              type="text"
              placeholder="Enter the Image"
              value={this.state.formdata.image}
              onChange={event => this.handleInput(event, "image")}
            />
            <br />
           
            <input
              className="form-control"
              id="date"
              type="date"
              value={this.state.formdata.date}
              onChange={event => this.handleInput(event, "date")}
            />
            <br />
           
            <textarea
              value={this.state.formdata.description}
              rows="11"
              id="desc"
              className="form-control"
              placeholder="Enter a description"
              onChange={event => this.handleInput(event, "description")}
            />
          </div>
          <br />
          <button id="addevent"className="btn btn-block btn-warning" type="submit">
            Add Event
          </button>
          <div>{this.state.error}</div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(AddEvent);