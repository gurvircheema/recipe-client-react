import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
  DropdownItem
} from "reactstrap";

class NavigationBar extends React.Component {
  state = {
    loggedIn: this.props.loggedIn
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Recipes App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  {loggedIn ? (
                    <DropdownItem>Logout</DropdownItem>
                  ) : (
                    <React.Fragment>
                      <DropdownItem>Login</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Register</DropdownItem>
                    </React.Fragment>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loggedIn: !!state.user && !!state.user.email
  };
}

export default connect(mapStateToProps)(NavigationBar);
