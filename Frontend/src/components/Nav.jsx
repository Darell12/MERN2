import React from 'react'
import { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"


const Nav = () => {
    const [showNav, setShowNav] = useState(false);
  return (


      <MDBNavbar expand='lg' light bgColor='light'>

      <MDBContainer fluid>

        <MDBNavbarBrand>AQUI LOGO :P</MDBNavbarBrand>

        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>

          <MDBNavbarNav>

            <MDBNavbarItem>
            <Link to="/login">  <MDBNavbarLink active aria-current='page'> Home </MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link to="/login"><MDBNavbarLink>Login</MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link to="/registro"><MDBNavbarLink>Registrarse</MDBNavbarLink></Link>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <Link to="/olvide-clave"><MDBNavbarLink>Recuperar Contraseña</MDBNavbarLink></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
      </MDBNavbar>

  )
}

export default Nav