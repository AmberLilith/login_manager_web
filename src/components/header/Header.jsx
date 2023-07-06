import { Button, Container, Navbar } from "react-bootstrap";
import MenuOptions from "../menu_options/MenuOptions";


export default function Header({selectedLanguage, settings, theme, update, setUpdate}){
    return (
        <Navbar className={theme.header.navBar} variant="dark">
        <Container>
          <h1 className={theme.header.titleDefault}>{selectedLanguage.main.headerTitle}</h1>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
                <MenuOptions settings={settings} theme={theme} update={update} setUpdate={setUpdate}/>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}