import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getEvent, updateEvent, clearEvent, deleteEvent } from "../../actions";
import './edit.css'

class EditEvent extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
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
    this.props.dispatch(updateEvent(this.state.formdata));
  };

  componentWillMount() {
    this.props.dispatch(getEvent(this.props.match.params.id));
  }

  deletePost = () => {
    this.props.dispatch(deleteEvent(this.props.match.params.id));
  };

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/ieee/events");
    }, time);
  };

  componentWillReceiveProps(nextProps) {
    let event = nextProps.events.event;
    this.setState({
      formdata: {
        _id: event._id,
        title: event.title,
        image: event.image,
        description: event.description,
        date: event.date
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearEvent());
  }

  render() {
    return (
      <div className="container">
        {this.props.events.updateEvent ? (
          <div>{this.redirectUser(0)}</div>
        ) : null}

        <form onSubmit={this.submitForm}>
          <h2 className="text-center">Edit Event</h2>
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
          <button id="editevent" className="btn btn-block btn-warning" type="submit">
            Edit Event
          </button>
          <div id="deleteevent" className="btn btn-block btn-danger" onClick={this.deletePost}>
            Delete Post
          </div>
        </form>

        {this.props.events.postDeleted ? (
          <div className="btn btn-block btn-success">
            Post Deleted!!!
            {this.redirectUser(2000)}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(EditEvent);
