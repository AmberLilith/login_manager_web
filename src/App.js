import Auth from './components/auth/Auth';
import Logins from './components/logins/Logins';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Languages from '../src/settings/Languages';
import Header from '../src/components/header/Header';
import { Container } from 'react-bootstrap';
import Settings from '../src/settings/Settings';
import Themes from './settings/Themes';
import { useState } from 'react';


function App() {
  const language = new Languages().getAndSetStoragedLanguage();
  const settings = new Settings();
  const theme = new Themes().getAndSetStoragedTheme();
  const [update, setUpdate] = useState(0);
  document.body.setAttribute("class",theme.body.backgroundColor)
  return (
    <div>             
        <BrowserRouter>
        <Container> 
        <Header selectedLanguage={language} settings={settings} theme={theme} update={update} setUpdate={setUpdate}/>
          <Routes>
          
            <Route path="/" index element={<Auth selectedLanguage={language} settings={settings} theme={theme}/>}></Route>
            <Route path="/logins" index element={<Logins selectedLanguage={language}  settings={settings} theme={theme}/>}></Route>
          </Routes>
          </Container>
        </BrowserRouter>      
    </div>
  );
}

export default App;
