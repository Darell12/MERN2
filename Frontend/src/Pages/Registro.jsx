import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const Registro = () => {

  const [username, setUsername] = useState("")
  const [username2, setUsername2] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


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


    const handleChangeUser1 = (e) => {
      setUsername(e.target.value)
    }
    const handleChangeUser2 = (e) => {
      setUsername2(e.target.value)
    }
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    }
    const handleChangePass = (e) => {
      setPassword(e.target.value)
    }

    let usuario = username + username2;

    let user = ({
      "nombre" : usuario,
      "Email" : email,
      "Password" : password,
    })

    const myJSON = JSON.stringify(user);

    console.log(myJSON)

    const handleSubmit = async (e) => {
      e.preventDefault();
 try {
          const res = await fetch(`http://localhost:4000/recepcion/${myJSON}`);
          let result = await res.json();
          result = JSON.parse(result.username)
          console.log(result)

 } catch (error) {
  console.log(error)
 }
    }

  return (
    <MDBContainer fluid className='p-4'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          The best offer <br />
          <span className="text-primary">for your business</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, itaque accusantium odio, soluta, corrupti aliquam
          quibusdam tempora at cupiditate quis eum maiores libero
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>

      </MDBCol>

      <MDBCol md='6'>

        <MDBCard className='my-5'>
          <MDBCardBody className='p-5'>

            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={handleChangeUser1}/>
              </MDBCol>

              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' onChange={handleChangeUser2}/>
              </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={handleChangeEmail}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={handleChangePass}/>


            <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>

            <div className="text-center">

              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default Registro