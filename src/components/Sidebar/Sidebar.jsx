import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink,  } from 'reactstrap'

const Sidebar = ({items}) => {
  return (

    <Navbar bg="light" expand="lg">
        <Container>
            <NavbarBrand href="#home">Pagina Inicial</NavbarBrand>
            <NavbarToggler aria-controls="basic-navbar-nav" />
            {items.map(({ label, name, ...rest }) => (
                 <NavLink href={name} key={label}>{label}</NavLink>
            ))}

            <NavLink href="#">Link </NavLink>
        </Container>
    </Navbar>

  )
}

export default Sidebar;
