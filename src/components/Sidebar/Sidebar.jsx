import React from 'react';
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
  DropdownItem, 
  DropdownMenu} from 'reactstrap';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">DAILY PLANNING</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.items.map(({ label, name, ...rest }) => (
                 <NavItem key={label}>
                  <NavLink href={name} key={label}>{label}</NavLink>
                 </NavItem>
               ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/*
<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TESTE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    TESTE
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
*/