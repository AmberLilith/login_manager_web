import { Button, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom'

function FormDeleteLogin({loginId, updateListOfLogins, closeModal, selectedLanguage}) {
  const token = sessionStorage.getItem('token');
  const {handleSubmit, formState: { errors } } = useForm();
  const {isExpired } = useJwt(token)
  const navigate = useNavigate()

  if (isExpired) {
    alert("Login expirado!");
    navigate('/');
  }

  const deleteLogin = () =>{
    if (!isExpired) {
      axios.delete("http://localhost:8080/logins/" + loginId, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then((response) => {
          if (response.status === 200) {
            updateListOfLogins();
            closeModal();
            
          }          

        })

        .catch((error) => {
            console.log(error)

            if(error.response.status === 403){            
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
    deleteLogin(data)
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <h6 className='text-center text-white'>{selectedLanguage.formDeleteLogin.Subtitle}</h6> 
      <div className='text-center mt-3'>
      <Button className={selectedLanguage.formDeleteLogin.buttonDeleteType} type='submit'>{selectedLanguage.formDeleteLogin.buttonDeleteText}</Button>
        <Button className={selectedLanguage.formDeleteLogin.buttonCancelType} onClick={() => closeModal()} style={{marginLeft:10}}>{selectedLanguage.formDeleteLogin.buttonCancelText}</Button>
      </div>
           
    
      

    </Form>
    </>
    
  );
}

export default FormDeleteLogin;