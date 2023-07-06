import { Table, Button, Row, Col, Form, InputGroup, FormLabel } from 'react-bootstrap';
import ModalForms from '../ModalForms';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom';
import LoginPagination from './LoginPagination';

function GetLogins({ selectedLanguage,theme }) {
  const token = sessionStorage.getItem('token')
  const [logins, setLogins] = useState([]);
  const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState();
  const [activePage, setActivePage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [url, setUrl] = useState("http://localhost:8080/logins?size=" + pageSize + "&page=" + activePage);
  const [changes, setChanges] = useState(0)

  function logout() {
    sessionStorage.clear();
    navigate('/');

  }


  const updateActivePage = (page) => {
    setActivePage(page)
  }

  const updateListOfLogins = () => {
    setChanges(changes + 1)
  }

  const updateUrl = (page) => setUrl("http://localhost:8080/logins?size=" + pageSize + "&page=" + page);

  const updatePageSize = (size) => {
    setPageSize(size);
    updateListOfLogins();
    setActivePage(0);
    setUrl("http://localhost:8080/logins?size=" + pageSize + "&page=" + activePage);
  }

  if (isExpired) {
    alert("Login expirado!");
    logout();
  }

  function verifyLastTableRow() {
    const tableRows = document.querySelectorAll('tr');
    if (tableRows.length - 1 == 1) {
      console.log(activePage + " page_index_" + (totalPages - 1))
      if (activePage == ("page_index_" + totalPages - 1)) {
        alert("Chegamos ao último item da última página")
      }
    }
  }

  useEffect(() => {
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((respose) => {
        setLogins(respose.data.content)
        setTotalPages(respose.data.totalPages)
      })

      .catch(() => {
        console.log("Erro!")
      })
  }, [activePage, changes])

  return (
    <div className='mt-3'>
      <Row>
        <Col>
          <ModalForms
            buttonType={theme.modalForms.buttonOpenModalNew}
            text={selectedLanguage.modalFormCreateLogin.buttonOpenModalText}
            title={selectedLanguage.modalFormCreateLogin.title}
            showId="d-none"
            formType="createLogin"
            updateListOfLogins={updateListOfLogins}
            selectedLanguage={selectedLanguage}
            theme={theme}
          />
        </Col>
        <Col />
        <Col>
          <label className='text-dark'>{selectedLanguage.getLogins.labelNumberRegisterPerPageText}</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={selectedLanguage.getLogins.inputNumberRegisterPerPagePlaceholder}
              type='number'
              id='inputNumberRegisterPerPage'
              value={pageSize}
              onChange={(e) => { setPageSize(e.target.value) }}
            />
            <Button variant={"outline-secondary" + theme.getLogins.buttonLoadPageSize} id="buttonSetRegisterPerPage" onClick={() => { updatePageSize(document.getElementById('inputNumberRegisterPerPage').value) }}>
              {selectedLanguage.getLogins.buttonSetRegisterPerPageText}
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <div style={{ minHeight: '350px' }}>

        <Table className={theme.getLogins.table}>
          <thead>
            <tr>
              <th>{selectedLanguage.getLogins.columnTableUserTitle}</th>
              <th>{selectedLanguage.getLogins.columnTableSiteTitle}</th>
              <th>{selectedLanguage.getLogins.columnTableManagerTitle}</th>
            </tr>
          </thead>
          <tbody>
            {logins.map((login, key) => {
              return (
                <tr key={key}>
                  <td>{login.userName}</td>
                  <td>{login.site}</td>
                  <td>
                    <ModalForms
                      buttonType={theme.modalForms.buttonOpenModalUpdate}
                      text={selectedLanguage.modalFormUpdateLogin.buttonOpenModalText}
                      title={selectedLanguage.modalFormUpdateLogin.title}
                      showId="d-block"
                      loginId={login.id}
                      updateListOfLogins={updateListOfLogins}
                      formType="updateLogin"
                      selectedLanguage={selectedLanguage}
                      theme={theme}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <ModalForms
                      buttonType={theme.modalForms.buttonOpenModalDelete}
                      text={selectedLanguage.modalFormDeleteLogin.buttonOpenModalText}
                      title={selectedLanguage.modalFormDeleteLogin.title}
                      showId="d-block"
                      loginId={login.id}
                      updateListOfLogins={updateListOfLogins}
                      formType="deleteLogin"
                      selectedLanguage={selectedLanguage}
                      theme={theme}
                      selectedUserName={login.userName}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
      <Row>
        <Col></Col>
        <Col className='text-center'>
          <LoginPagination updateActivePage={updateActivePage} activePage={activePage} setActivePage={setActivePage} updateUrl={updateUrl} totalPages={totalPages} theme={theme} />
        </Col>
        <Col></Col>
      </Row>

    </div>
  );
}

export default GetLogins;












