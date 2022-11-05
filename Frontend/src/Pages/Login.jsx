import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}from 'mdb-react-ui-kit';


const Login = () => {

    const sampleLocation = useLocation();

    
    const handleUbicacion = async (e) => {
     
        try{
          
          const res = await fetch(`http://localhost:4000${sampleLocation.pathname}`);
          const result = await res.json();
    
          console.log(result.mensaje)

        
      } catch(error){
        console.log(error);
      }
      }
   
      handleUbicacion();

      

  return (
    <MDBContainer fluid className="p-3 my-5">

    <MDBRow>

      <MDBCol col='10' md='6'>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
      </MDBCol>

      <MDBCol col='4' md='6'>


        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


        <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
          <Link to="/recovery">Olvidó su contraseña?</Link>
        </div>

        <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">O</p>
        </div>

        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          <MDBIcon fab icon="facebook-f" className="mx-2"/>
          Continue with facebook
        </MDBBtn>

        <Link to="/regist"><MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
          <MDBIcon fas icon="registered" className="mx-2"/>
          Registrarse
        </MDBBtn></Link>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default Login