import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push("/ieee");
    }
  }

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputPassword = event => {
    this.setState({ password: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  render() {
    let user = this.props.user;
    return (
      <div>
        {user.login.isAuth === null || user.login.error === true ? (
          <form onSubmit={this.submitForm}>
            <div className="container">
              <h3 className="text-center">Admin Login</h3>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleInputEmail}
                required
              />
              <input
                className="form-control"
                type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleInputPassword}
                required
              />
              <button className="btn btn-block btn-primary" type="submit">
                Login
              </button>

              <div>{user.login ? <div>{user.login.message}</div> : null}</div>
            </div>
          </form>
        ) : (
          <div>Already Logged in.</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Login);
