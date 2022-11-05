import React from 'react'
import { Link, useLocation } from "react-router-dom"

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
    
   

const Forgot = () => {
    const sampleLocation = useLocation();


    const handleUbicacion = async (e) => {
     
        try{
          
          const res = await fetch(`http://localhost:4000${sampleLocation.pathname}`);
          const result = await res.json();
          console.log(sampleLocation.pathname
            )
          console.log(result.mensaje)

        
      } catch(error){
        console.log(error);
      }
      }
   
      handleUbicacion();
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>

      <MDBBtn className="mb-4">Recuperar</MDBBtn>

      <div className="text-center">
        <p>No estas registrado? <Link to="/regist">Registrarse</Link></p>
        <p>O inicia sesión</p>

        <div className='d-flex justify-content-center mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <Link to="/regist"><MDBIcon fab icon='facebook-f' size="sm"/> </Link>
          </MDBBtn>


        </div>
      </div>

    </MDBContainer>
  )
}

export default Forgot