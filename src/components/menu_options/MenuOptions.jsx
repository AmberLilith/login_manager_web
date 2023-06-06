import {  Nav, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Languages from '../../settings/Languages';
import {  useState } from 'react';
import ModalForms from '../ModalForms';
import { useNavigate } from 'react-router-dom';
import Themes from '../../settings/Themes';
import './menuOptions.css';

//TODO re-renderizar esse componente quando alterar o usuário logado. não estou conseguindo fazer isso
function MenuOptions() {
    const language = new Languages();
    const theme = new Themes();
    const [teste, setTeste] = useState();
    const navigate = useNavigate();
    let selectedLanguage = language.getAndSetStoragedLanguage();
    let selectedTheme = theme.getAndSetStoragedTheme();

    
    function changeStoragedLanguage(chosenLanguage) {
        selectedLanguage = language.getAndSetStoragedLanguage(chosenLanguage);
        //TODO não recarregar a página mas só re-renderizar o componente
        window.location.reload();
    }

    function changeStoragedTheme(chosenTheme) {
       selectedTheme =  theme.getAndSetStoragedTheme(chosenTheme);
        //TODO não recarregar a página mas só re-renderizar o componente
        window.location.reload();
    }

    function logout(){
        sessionStorage.removeItem('userMenuVisibility');
        sessionStorage.removeItem('loggedUser');
        sessionStorage.removeItem('token');
        navigate('/');

    }

    function getOnlyFirstTwoLettersFromName(name){
        if(name.includes(" ")){
            let splitedName = name.split(" ")
            const onlyTwoFirstLetter = splitedName[0].split("")[0] + "." + splitedName[1].split("")[0] + "."
            return onlyTwoFirstLetter.toUpperCase()
        }else{
            const onlyFirstLetter = name.split("")[0]
            return onlyFirstLetter.toUpperCase()
        }
    }


    return (
        <Dropdown className='justify-content-center'>
            <Dropdown.Toggle id="dropdown-button-options" variant="secondary" className={selectedTheme.menuOptions.dropdownToggle}>
                <div id="loggedUser">{sessionStorage.getItem('loggedUser') ? getOnlyFirstTwoLettersFromName(sessionStorage.getItem('loggedUser')) : "Unknow"}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Nav className={sessionStorage.getItem('userMenuVisibility') ? sessionStorage.getItem('userMenuVisibility') : 'justify-content-center d-block'}>
                    <NavDropdown
                        id="nav-dropdown-userMenu"
                        title={selectedLanguage.MenuOptions.navDropdownUserTitle}
                        menuVariant="dark"
                        className={selectedTheme.menuOptions.navDropdown}
                    >

                        <ModalForms
                            buttonType={selectedTheme.modalForms.buttonOpenModalMenuOption}
                            text={selectedLanguage.modalFormCreateUser.buttonOpenModalText}
                            title={selectedLanguage.modalFormCreateUser.title}
                            showId="d-none"
                            formType="createUser"
                            selectedLanguage={selectedLanguage}
                        />


                        <ModalForms
                            buttonType={selectedLanguage.modalFormUpdateUser.buttonOpenModalType}
                            text={selectedLanguage.modalFormUpdateUser.buttonOpenModalText}
                            title={selectedLanguage.modalFormUpdateUser.title}
                            showId="d-none"
                            formType="updateUser"
                            selectedLanguage={selectedLanguage}
                        />


                    </NavDropdown>
                </Nav>

                <Nav className='justify-content-center'>
                    <NavDropdown
                        id="nav-dropdown-languages"
                        title={selectedLanguage.MenuOptions.navDropdownLanguagesTitle}
                        menuVariant="dark"
                    >
                        {language.generatesListOfLanguages().map(language => <NavDropdown.Item className='text-center text-capitalize' key={language} onClick={() => { changeStoragedLanguage(language) }} href="#">{language}</NavDropdown.Item>)}
                        
                    </NavDropdown>
                </Nav>

                <Nav className='justify-content-center'>
                    <NavDropdown
                        id="nav-dropdown-languages"
                        title={selectedLanguage.MenuOptions.navDropdownThemesTitle}
                        menuVariant="dark"
                    >
                        {Themes.generatesListOfThemes().map(theme => <NavDropdown.Item className='text-center text-capitalize' key={theme} onClick={() => { changeStoragedTheme(theme) }} href="#">{theme}</NavDropdown.Item>)}
                        
                    </NavDropdown>
                </Nav>

                <NavDropdown.Divider />
                <NavDropdown.Item className='text-center' href="#" onClick={()=>{logout()}}>
                    Logout
                    <NavDropdown.Divider />
                    <div className={selectedTheme.menuOptions.completeUserName}>{sessionStorage.getItem('loggedUser') ? sessionStorage.getItem('loggedUser') : "Unknow"}</div>
                </NavDropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MenuOptions;