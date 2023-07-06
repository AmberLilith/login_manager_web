import { Col, Container, Row, Button, Form, InputGroup } from 'react-bootstrap';
import "./Auth.css"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ModalForms from '../ModalForms';

function Auth({ selectedLanguage, settings, theme }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()



    const onSubmitAuth = data => {
        axios.post("http://localhost:8080/auth", data)
            .then((response) => {
                if (response.status == 200) {
                    const token = response.data.token
                    storageToken(token)
                    storageUserOptions(jwtDecode(token).name, 'justify-content-center d-block')
                    navigate('/logins')
                }

            })

            .catch((error) => {
                console.log(error)
                document.getElementById('h6LoginInvalido').setAttribute('class', 'd-block text-danger text-center');
            })
    }

    function storageToken(token) {
        sessionStorage.setItem("token", token)
    }



    function storageUserOptions(loggedUser, userMenuVisibility) {
        sessionStorage.setItem("loggedUser", loggedUser);
        sessionStorage.setItem("userMenuVisibility", userMenuVisibility);
    }


    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className={theme.auth.formContainer}>
                    <h3 className={theme.auth.titleDefault} >{selectedLanguage.auth.formTitle}</h3>
                    <h6 id='h6LoginInvalido' className='d-none text-center'>Usuário e/ou senha inválidos!</h6>
                    <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmitAuth)} className={theme.auth.form}>
                        <Form.Group className="mb-3">
                            <Form.Label>{selectedLanguage.auth.labelUserText}</Form.Label>
                            <Form.Control  {...register("userName", { required: true })} placeholder={selectedLanguage.auth.inputUserPlaceholder} />
                            {errors.userName && <span className='text-danger'>{selectedLanguage.auth.inputUserErrorMessage}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{selectedLanguage.auth.labelPasswordText}</Form.Label>
                            <Form.Control type="password" {...register("password", { required: true })} placeholder={selectedLanguage.auth.inputPasswordPlaceholder} />
                            {errors.password && <span className='font-weight-bold text-danger'>{selectedLanguage.auth.inputPasswordErrorMessage}</span>}
                        </Form.Group>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Button className={theme.auth.buttonLogin + ' btn-lg btn-block'} type="submit">
                                    {selectedLanguage.auth.buttonLoginText}
                                </Button>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <div className='d-flex flex-row-reverse'>
                            <ModalForms
                                buttonType={theme.modalForms.buttonOpenModalLink}
                                text={selectedLanguage.modalFormCreateUser.linkOpenModalText}
                                title={selectedLanguage.modalFormCreateUser.title}
                                showId="d-none"
                                formType="createUser"
                                selectedLanguage={selectedLanguage}
                                theme={theme}
                            />
                        </div>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Auth;