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
          <Link className="container" to="/ieee/login">
            Admin Login
          </Link>
        ) : (
          <div>
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
            <img src="https://i.imgur.com/p3I3ZCO.png" alt="banner" class="banner" height="70px" width="1000px"/>
            <a class="logoright" href="http://www.tezu.ernet.in/">
              <img src="https://i.imgur.com/SFj3dEd.png" alt="tu logo" height="70px" width="70px"/>
            </a>
            <div class="header-right">
              <a class="ieeesite" href="https://www.ieee.org/">IEEE Site</a>
              <a class="Facebook" href="https://www.facebook.com/ieee.tezu/">
              <img src="https://i.imgur.com/bnscNE8.png" alt="fb" height="28px" width="28px"/>
              </a>
               <a class="Youtube" href="https://www.youtube.com/channel/UC2AOTkwhNmrRfTi7M532FJw">
               <img src="https://i.imgur.com/lKirU05.png" alt="yt" height="30px" width="30px"/>
              </a>
            </div>
              
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
