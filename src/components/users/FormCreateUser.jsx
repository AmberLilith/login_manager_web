import { Col, Row, Button, Form } from 'react-bootstrap';
import React, {useState } from 'react';
import { useForm  } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function FormCreateUser({closeModal, selectedLanguage, theme}) {
  const language = selectedLanguage.formCreateUser;
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  function logout(){
    sessionStorage.clear();
    navigate('/');

}


  function setErro(message){
    document.getElementById('warning').innerHTML = message
  }

  function unsetErro(){
    document.getElementById('warning').innerHTML = ""
  }

  const createUser = (data) =>{
      axios.post("http://localhost:8080/users", data)
        .then((response) => {
          if (response.status == 201) {
            closeModal();
            alert("Usuário cadastrado com sucesso!")
            
          }
          

        })

        .catch((error) => {
          console.log(error)

          if(error.response.status == 400){            
            setErro(error.response.data.error)
            }

          if(error.response.status == 403){            
          alert("Login expirado!");
          logout();
          }
        })
  }

  


  const onSubmit = data => {
    createUser(data)
  }

  return (

    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
      <div id='warning' className='text-danger text-center'></div>

      <Form.Group className="mb-3">
        <Form.Label className={theme.formCreateUser.labelTextColor}>{language.labelUserText}</Form.Label>
        <Form.Control  {...register("userName", { required: true })} placeholder={language.inputUserPlaceHolder} onFocus={() => unsetErro()}/>
        {errors.userName && <span className='text-danger'>{language.inputUserErrorMessage}</span>}
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label className={theme.formCreateUser.labelTextColor}>{language.labelNameText}</Form.Label>
        <Form.Control type="text" {...register("name", { required: true })} placeholder={language.inputNamePlaceHolder} />
        {errors.name && <span className='font-weight-bold text-danger'>{language.inputNameErrorMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={theme.formCreateUser.labelTextColor}>{language.labelEmailText}</Form.Label>
        <Form.Control type="email" {...register("email", { required: "Please Enter Your Email!",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        } })} placeholder={language.inputEmailPlaceHolder} />
        {errors.email && <span className='font-weight-bold text-danger'>{language.inputEmailErrorMessage}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={theme.formCreateUser.labelTextColor}>{language.labelPasswordText}</Form.Label>
        <Form.Control type="password" {...register("pass", { required: true})} placeholder={language.inputPasswordPlaceHolder} />
        {errors.pass && <span className='text-danger'>{language.inputPasswordErrorMessage}</span>}
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

export default FormCreateUser;