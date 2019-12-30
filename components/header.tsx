
import Link from "next/link";
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

type State = {
  navbarOpen:boolean,
};

const linkStyle = {
  display: "block",
  padding: "0.5rem 1rem",
  textDecoration: "none",
};

const style={
  left: 0,
  right: 0,
}

class Header extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  render() {
    return (
      <div style={style}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Browareness</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
          <Collapse isOpen={this.state.navbarOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                  <Link href="/doughflows">
                    <a style={linkStyle} title="DoughFlows">DoughFlows</a>
                  </Link>
              </NavItem>
              <NavItem>
              <Link href="http://google.com">
                    <a style={linkStyle} title="Google">Google</a>
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    });
  }
}

export default Header;