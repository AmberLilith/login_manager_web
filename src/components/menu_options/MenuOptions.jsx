import {  Nav, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Languages from '../../settings/Languages';
import {  useState } from 'react';
import ModalForms from '../ModalForms';
import { useNavigate } from 'react-router-dom';
import Themes from '../../settings/Themes';
import './menuOptions.css';

function MenuOptions({update, setUpdate}) {
    const language = new Languages();
    const theme = new Themes();
    const [teste, setTeste] = useState();
    const navigate = useNavigate();
    let selectedLanguage = language.getAndSetStoragedLanguage();
    let selectedTheme = theme.getAndSetStoragedTheme();

   

    
    function changeStoragedLanguage(chosenLanguage) {
        selectedLanguage = language.getAndSetStoragedLanguage(chosenLanguage);
        setUpdate(update + 1)
    }

    function changeStoragedTheme(chosenTheme) {
       selectedTheme =  theme.getAndSetStoragedTheme(chosenTheme);
       setUpdate(update + 1)
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

    function generateMenu(){
        if(sessionStorage.getItem('loggedUser')){
            return(
                <Dropdown className='justify-content-center'>
            <Dropdown.Toggle id="dropdown-button-options" variant="secondary" style={{width: 50,height: 50,borderRadius: 50, padding: 5}} className={selectedTheme.menuOptions.dropdownToggle} >
                <div id="loggedUser" >{sessionStorage.getItem('loggedUser') ? getOnlyFirstTwoLettersFromName(sessionStorage.getItem('loggedUser')) : "Unknow"} </div>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Nav className='justify-content-center'>
                    <NavDropdown
                        id="nav-dropdown-userMenu"
                        title={selectedLanguage.MenuOptions.navDropdownUserTitle}
                        menuVariant="dark"
                        className={selectedTheme.menuOptions.navDropdown}
                    >


                        <ModalForms
                            buttonType={selectedLanguage.modalFormUpdateUser.buttonOpenModalType}
                            text={selectedLanguage.modalFormUpdateUser.buttonOpenModalText}
                            title={selectedLanguage.modalFormUpdateUser.title}
                            showId="d-none"
                            formType="updateUser"
                            selectedLanguage={selectedLanguage}
                            theme={selectedTheme}
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
                        id="nav-dropdown-themes"
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
            )
        }else{
            return ""
        }
    }


    return generateMenu();
}

export default MenuOptions;