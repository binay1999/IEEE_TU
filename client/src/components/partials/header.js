import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";

const Component = ({user}) => {
  return(
    <Header user={user}/>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        {this.props.user.login === false? (
          <div>
            <Link className="container" to="/ieee/logout">
              Admin LogOut
            </Link>
            <Link className="container" to="/ieee/add-admin">
              Add Admin
            </Link>
          </div>
        ) : (
          <Link className="container" to="/ieee/login">
            Admin Login
          </Link>
        )}
        <div className="jumbotron">
          IEEE - Students' Chapter, Tezpur University
        </div>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink active>
                <Link className="container" to="/ieee">
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/events">
                  Events
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/gallery">
                  Gallery
                </Link>
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                The Team
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/ieee/working-team">Working Team</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/ieee/founding-team">Founding Team</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/contact">
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Component);
