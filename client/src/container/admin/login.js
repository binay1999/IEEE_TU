import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import './login.css'

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
      <div class="loginpage">
        {user.login.isAuth === null || user.login.error === true ? (
          <form onSubmit={this.submitForm}>
           <div class="adminheader">ADMIN LOGIN</div>
           
            <div className="container" id="loginbox">
              <input
                className="form-control"
                type="email"
                id="eemail"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleInputEmail}
                required
              />
              <input
                className="form-control"
                id="epass"
                type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleInputPassword}
                required
              />
              <button id="elogin"className="btn btn-block btn-primary" type="submit">
                LOGIN
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
