import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.user ? <div>Login</div> : <div>LOVE</div>}
        Home
      </div>
    );
  }
}

export default Home;
