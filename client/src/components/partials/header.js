import React from "react";
import './header.css'
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
    let user = this.props.user
    return (
      <div>
        
        {user.login === undefined || user.login.error === true || user.login.isAuth === null ? (
          <div className="admin1">
          <Link className="container" to="/ieee/login">
            Admin Login
          </Link>
          </div>
        
        ) : (
          <div class="admin2">
            <Link className="container" to="/ieee/logout">
              Admin LogOut
            </Link>
            <Link className="container" to="/ieee/add-admin">
              Add Admin
            </Link>
          </div>
        )}
       
        <div class="jumbotron">
            <img src="https://i.imgur.com/oWyvKlw.jpg" alt="ieee logo" class="ieeelogo" height="70px" width="250px"/>
            <img src="https://i.imgur.com/p3I3ZCO.png" alt="banner" class="banner" height="40px" width="600px"/>
            <a class="logoright" href="http://www.tezu.ernet.in/">
              <img src="https://i.imgur.com/SFj3dEd.png" alt="tu logo" height="80px" width="80px"/>
            </a>
            <div class="header-right">
              <a class="ieeesite" href="https://www.ieee.org/">IEEE.ORG</a>
            </div>
              
        </div>
        <div class="tabs">
          <Nav tabs>
            <NavItem>
            <NavLink active>
                <Link className="container" to="/ieee">
                  HOME
                  </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/events">
                  EVENTS
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/gallery">
                  GALLERY
                </Link>
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret className="drop">
                IEEE TEAM
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link className="drop1" to="/ieee/working-team">WORKING TEAM</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="drop2" to="/ieee/founding-team">FOUNDING TEAM</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink>
                <Link className="container" to="/ieee/contact">
                  CONTACT
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
