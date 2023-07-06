import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FormUpdateLogin from './logins/FormUpdateLogin';
import FormDeleteLogin from './logins/FormDeleteLogin';
import FormCreateUser from './users/FormCreateUser';
import FormCreateLogin from './logins/FormCreateLogin';
import { NavDropdown } from 'react-bootstrap';
import FormUpdateUser from './users/FormUpdateUser';

function ModalForms({ buttonType, text, title, showId, loginId, formType, updateListOfLogins, confirmationMessage, selectedLanguage, theme, selectedUserName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setForm = () => {
    switch (formType) {
      case "createLogin":
        return <FormCreateLogin updateListOfLogins={updateListOfLogins} closeModal={handleClose} selectedLanguage={selectedLanguage} theme={theme}/>

      case "updateLogin":
        return <FormUpdateLogin showId={showId} loginId={loginId} updateListOfLogins={updateListOfLogins} closeModal={handleClose} selectedLanguage={selectedLanguage} theme={theme} />

      case "deleteLogin":
        return <FormDeleteLogin loginId={loginId} updateListOfLogins={updateListOfLogins} closeModal={handleClose} confirmationMessage={confirmationMessage} selectedLanguage={selectedLanguage} theme={theme} selectedUserName={selectedUserName} />

      case "createUser":
        return <FormCreateUser closeModal={handleClose} selectedLanguage={selectedLanguage} theme={theme} />

      case "updateUser":
        return <FormUpdateUser closeModal={handleClose} selectedLanguage={selectedLanguage} theme={theme} />
    }
  }
  function createButton() {
    if (buttonType.includes("btn btn-")) {
      return (
        <Button variant={buttonType} onClick={handleShow}>
          {text}
        </Button>
      )
    } else if (buttonType === "menuOption") {
      return <NavDropdown.Item className='text-center' onClick={handleShow} href="#">{text}</NavDropdown.Item>

    }else if(buttonType === "link"){
      return <a className='text-center' onClick={handleShow} href="#">{text}</a>
    }
  }

  return (
    <>
      {createButton()}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={theme.modalForms.modalHeaderBackgroudColor} closeButton>
          <Modal.Title className={theme.modalForms.modalTitleTextColor}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={theme.modalForms.modalBodyBackgroundColor}>
          {setForm()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForms;


