import GetLogins from './GetLogins';
function Logins({selectedLanguage, settings, theme}) {


  return (
    <>
      <GetLogins selectedLanguage={selectedLanguage} settings={settings} theme={theme}/>
    </>
  );
}

export default Logins;