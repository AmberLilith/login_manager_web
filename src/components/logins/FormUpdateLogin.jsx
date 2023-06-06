import { Col, Container, Row, Button, Form, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom'

function FormUpdateLogin({loginId, updateListOfLogins, closeModal, selectedLanguage}) {
  const language = selectedLanguage.formUpdateLogin;
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit, setValue, unregister, getValues, formState: { errors } } = useForm();
  const [validated, setValidated] = useState(false);
  const { decodedToken, isExpired } = useJwt(token)
  const navigate = useNavigate()

  if (isExpired) {
    alert("Login expirado!");
    navigate('/');
  }

  const loadValuesFromSelectedLogin = (selectedLogin) =>{
    setValue('id', selectedLogin.id)
    setValue('userName', selectedLogin.userName, { shouldValidate: true })
    setValue('password', selectedLogin.password, { shouldValidate: true })
    setValue('site', selectedLogin.site, { shouldValidate: true })
    setValue('observation', selectedLogin.observation, { shouldValidate: true })
  }

  const updateLogin = (data) =>{
    if (!isExpired) {
      axios.put("http://localhost:8080/logins/" + loginId, data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then((response) => {
          if (response.status == 200) {            
            updateListOfLogins();
            closeModal();
            
          }

          if(response.status == 403){            
          alert("Login expirado!");
          navigate('/');
          }

        })

        .catch((error) => {
          console.log(error)
        })
    } else {

      alert("Login expirado!");
      navigate('/');

    }
  }



  useEffect(() => {
    axios.get("http://localhost:8080/logins/" + loginId, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then((response) => {
      loadValuesFromSelectedLogin(response.data)
  })

  .catch(() =>{
      console.log("Erro!")
  })
},  [])

  const onSubmit = data => {
    updateLogin(data)
  }

  return (

    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
      <h6 id='sucesso' className='d-none text-center'>{language.sucessMessage}</h6>
      <Form.Group className={"mb-3 "} >
        <Form.Label className='text-white'>{language.labelIdText}</Form.Label>
        <Form.Control type='text' {...register("id")} readonly="true" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelUserText}</Form.Label>
        <Form.Control  {...register("userName", { required: true })} placeholder={language.inputUserPlaceHolder}/>
        {errors.userName && <span className='text-danger'>{language.inputUserErrorMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelPasswordText}</Form.Label>
        <Form.Control type="password" {...register("password", { required: true})} placeholder={language.inputPasswordPlaceHolder} />
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

export default FormUpdateLogin;