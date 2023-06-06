import { Col, Row, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom'
import "./logs.css"

function FormCreateLogin({ updateListOfLogins, closeModal, selectedLanguage }) {
  const language = selectedLanguage.formCreateLogin;
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validated] = useState(false);
  const {isExpired} = useJwt(token);
  const navigate = useNavigate()

  if (isExpired) {
    alert("Login expirado!");
    navigate('/');
  }

  function setErro(message){
    document.getElementById('warning').innerHTML = message
  }

  function unsetErro(){
    document.getElementById('warning').innerHTML = ""
  }

  const createLogin = (data) => {
    if (!isExpired) {
      axios.post("http://localhost:8080/logins", data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then((response) => {
          if (response.status === 201) {
            updateListOfLogins();
            closeModal();

          }  

        })

        .catch((error) => {
          if (error.response.status === 400) {
            setErro(error.response.data.error)
          } 
          else if (error.response.status === 403) {
            alert("Login expirado!");
            navigate('/');
          }
          
        })
    } else {

      alert("Login expirado!");
      navigate('/');

    }
  }


  


  const onSubmit = data => {
    createLogin(data)
  }

  return (

    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <div id='warning' className='text-center text-danger' style={{height:8}}></div>

        <Form.Group className="mb-3">
          <Form.Label className='text-white'>{language.labelUserText}</Form.Label>
          <Form.Control  {...register("userName", { required: true })} placeholder={language.inputUserPlaceHolder} onFocus={() => unsetErro()}/>
          {errors.userName && <span className='text-danger'>{language.inputUserErrorMessage}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-white'>{language.labelPasswordText}</Form.Label>
          <Form.Control type="password" {...register("password", { required: true })} placeholder={language.inputPasswordPlaceHolder} />
          {errors.password && <span className='text-danger'>{language.inputPasswordErrorMessage}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-white'>{language.labelSiteText}</Form.Label>
          <Form.Control type="text" {...register("site", { required: true })} placeholder={language.inputSitePlaceHolder} />
          {errors.site && <span className='font-weight-bold text-danger'>{language.inputPasswordErrorMessage}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-white'>{language.labelObservationText}</Form.Label>
          <Form.Control as="textarea" rows="5"{...register("observation", { required: true })} placeholder={language.inputObservationPlaceHolder} />
        </Form.Group>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col className='text-center'><Button type='submit'>{language.buttonSaveText}</Button></Col>
        </Row>

      </Form>
    </>

  );
}

export default FormCreateLogin;