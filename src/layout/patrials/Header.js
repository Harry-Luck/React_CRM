import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
export const Header=()=>{
    return(<div>
        <Navbar
        bg='info'
        variant='dark'
        expand='md'>
            <NavbarBrand><img src={ logo } width='50px' alt='logo'/>
            </NavbarBrand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id = 'basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='/dashboard'>dashboard</Nav.Link>
                    <Nav.Link href='/ticket'>Ticket</Nav.Link>
                    <Nav.Link href='/logout'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>)
}