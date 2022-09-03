import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
export const Header=()=>{
    const navigate = useNavigate();
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
                    <LinkContainer to="/dashboard">
                        <Nav.Link>dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                    <Nav.Link>Ticket</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={()=>navigate('/')}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>)
}