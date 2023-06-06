import { Col, Row, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom'

function FormUpdateUser({closeModal, selectedLanguage}) {
  const language = selectedLanguage.formUpdateLogin;
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [validated, setValidated] = useState(false);
  const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate();

  if (isExpired) {
    alert("Login expirado!");
    navigate('/');
  }

  function setErro(message){
    alert(message)
    document.getElementById('warning').innerHTML = message
  }

  function unsetErro(){
    document.getElementById('warning').innerHTML = ""
  }

  const loadValuesFromSelectedLogin = (loggedUser) =>{
    setValue('id', loggedUser.id)
    setValue('userName', loggedUser.userName, { shouldValidate: true })   
    setValue('name', loggedUser.name, { shouldValidate: true })
    setValue('email', loggedUser.email, { shouldValidate: true })
    setValue('pass', loggedUser.pass, { shouldValidate: true })
  }

  const updateUser = (data) =>{
    if (!isExpired) {
      axios.put("http://localhost:8080/users", data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then((response) => {
          if (response.status == 200) {  
            closeModal();
            alert("Faça login novamente com os novos dados!")
            navigate('/');
          }

          

        })

        .catch((error) => {
          console.log(error)
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



  useEffect(() => {
    axios.get("http://localhost:8080/users", {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then((response) => {
      loadValuesFromSelectedLogin(response.data)
  })

  .catch((error) =>{
      console.log(error)
  })
},  [])

  const onSubmit = data => {
    updateUser(data)
  }
// TODO verificar porque validação no formato de email e nome não está mostrando mensagem de erro
  return (

    <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
      <div id='warning' className='text-danger text-center'></div>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelUserText}</Form.Label>
        <Form.Control  {...register("userName", { required: true })} placeholder={language.inputUserPlaceHolder} onFocus={() => unsetErro()}/>
        {errors.userName && <span className='text-danger'>{language.inputUserErrorMessage}</span>}
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelNameText}</Form.Label>
        <Form.Control type="text" {...register("name", { required: true })} placeholder={language.inputNamePlaceHolder} />
        {errors.name && <span className='font-weight-bold text-danger'>{language.inputNameErrorMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelEmailText}</Form.Label>
        <Form.Control type="email" {...register("email", { required: "Please Enter Your Email!",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        } })} placeholder={language.inputEmailPlaceHolder} />
        {errors.email && <span className='font-weight-bold text-danger'>{language.inputEmailErrorMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>{language.labelPasswordText}</Form.Label>
        <Form.Control type="password" {...register("pass", { required: true})} placeholder={language.inputPasswordPlaceHolder} />
        {errors.pass && <span className='text-danger'>{language.inputPasswordErrorMessage}</span>}
      </Form.Group> 
      <Row>
        <Col></Col>
        <Col></Col>
        <Col className='text-center'><Button type='submit'>{language.buttonSaveText}</Button></Col>
      </Row>

    </Form>
    
  );
}

export default FormUpdateUser;