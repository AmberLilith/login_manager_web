class Languages {

    constructor() {
        this.português = {
            main: {
                headerTitle: "Gerenciador de Login"
            },
            auth: {
                formTitle: "Autenticação",
                labelUserText: "Usuário:",
                inputUserPlaceholder: "Informe usuário!",
                inputUserErrorMessage: "Usuário inválido!",
                labelPasswordText: "Senha:",
                inputPasswordPlaceholder: "Informe a senha!",
                inputPasswordErrorMessage: "Senha inválida!",
                buttonLoginType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonLoginText: "Login"
            },
            logins: {
                buttonNewText: "Novo",
                buttonNewType: "primary" //Classe bootstrap: primary, secondary, danger, warning, etc...
            },
            getLogins: {
                columnTableUserTitle: "Usuário",
                columnTableSiteTitle: "Site",
                columnTableManagerTitle: "Manutenção",
                buttonUpdateType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonUpdateText: "Atualizar",
                buttonDeleteType: "danger", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonDeleteText: "Excluir",
                labelNumberRegisterPerPageText: "Número de registro por página:",
                inputNumberRegisterPerPagePlaceholder: "Digite ou escolha número",
                buttonSetRegisterPerPageText: "Carregar"
            },
            formUpdateLogin: {
                title: "Alterar Login",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "Usuário:",
                inputUserPlaceHolder: "Informe o usuário",
                inputUserErrorMessage: "Usuário digitado é inválido!",
                labelPasswordText: "Senha:",
                inputPasswordPlaceHolder: "Informe a senha",
                inputPasswordErrorMessage: "Senha digitada é inválida!",
                labelSiteText: "Site/Plataforma:",
                inputSitePlaceHolder: "Informe nome do site ou plataforma",
                inputSiteErrorMessage: "Site/Plataforma informado(a) é inválido(a)!",
                labelObservationText: "Observações:",
                inputObservationPlaceHolder: "Digite as observações desejadas",
                inputObservationErrorMessage: "Digite alguma observação!",
                buttonSaveType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Salvar"
            },
            formCreateLogin: {
                title: "Cadastrar novo Login",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "Usuário:",
                inputUserPlaceHolder: "Informe o usuário",
                inputUserErrorMessage: "Usuário digitado é inválido!",
                labelPasswordText: "Senha:",
                inputPasswordPlaceHolder: "Informe a senha",
                inputPasswordErrorMessage: "Senha digitada é inválida!",
                labelSiteText: "Site/Plataforma:",
                inputSitePlaceHolder: "Informe nome do site ou plataforma",
                inputSiteErrorMessage: "Site/Plataforma informado(a) é inválido(a)!",
                labelObservationText: "Observações:",
                inputObservationPlaceHolder: "Digite as observações desejadas",
                inputObservationErrorMessage: "Digite alguma observação!",
                buttonSaveType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Salvar"
            },
            formDeleteLogin: {
                title: "Confirme exclusão",
                Subtitle: "Deseja realmente exlcuir o login selecionado?",
                buttonDeleteType: "btn btn-danger", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonDeleteText: "Excluir",
                buttonCancelType: "btn btn-warning", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonCancelText: "Cancelar"
            },
            modalFormCreateLogin: {
                title: "Cadastrar novo Login",
                buttonOpenModalType: "btn btn-primary",
                buttonOpenModalText: "Novo"
            },
            modalFormUpdateLogin: {
                title: "Alterar Login",                
                buttonOpenModalText: "Atualizar"
            },
            modalFormDeleteLogin: {
                title: "Confirme exclusão",
                buttonOpenModalType: "btn btn-danger",
                buttonOpenModalText: "Excluir"
            },
            MenuOptions: {
                navDropdownUserTitle: "Usuário",
                navDropdownUserItemCreate: "Cadastrar",
                navDropdownUserItemUpdate: "Alterar",
                navDropdownLanguagesTitle: "Linguagens",
                navDropdownThemesTitle: "Temas"
            },
            formCreateUser:{
                title: "Cadastrar novo Usuário",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "Usuário:",
                inputUserPlaceHolder: "Informe o usuário",
                inputUserErrorMessage: "Usuário digitado é inválido!",
                labelPasswordText: "Senha:",
                inputPasswordPlaceHolder: "Informe a senha",
                inputPasswordErrorMessage: "Senha digitada é inválida!",
                labelNameText: "Nome:",
                inputNamePlaceHolder: "Informe nome do usuário",
                inputNameErrorMessage: "Nome informado é inválido!",
                labelEmailText: "Email:",
                inputEmailPlaceHolder: "Informe o email do usuário",
                inputEmailErrorMessage: "Digite um email válido!",
                buttonSaveType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Salvar"
            },
            modalFormCreateUser: {
                title: "Cadastrar novo Usuário",
                buttonOpenModalType: "menuOption",
                buttonOpenModalText: "Novo"
            },
            formUpdateUser:{
                title: "Atualizar Usuário",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "Usuário:",
                inputUserPlaceHolder: "Informe o usuário",
                inputUserErrorMessage: "Usuário digitado é inválido!",
                labelPasswordText: "Senha:",
                inputPasswordPlaceHolder: "Informe a senha",
                inputPasswordErrorMessage: "Senha digitada é inválida!",
                labelNameText: "Nome:",
                inputNamePlaceHolder: "Informe nome do usuário",
                inputNameErrorMessage: "Nome informado é inválido!",
                labelEmailText: "Email:",
                inputEmailPlaceHolder: "Informe o email do usuário",
                inputEmailErrorMessage: "Digite um email válido!",
                buttonSaveType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Salvar"
            },
            modalFormUpdateUser: {
                title: "Atualizar Usuário",
                buttonOpenModalType: "menuOption",
                buttonOpenModalText: "Atualizar"
            }
        }

        this.english = {
            main: {
                headerTitle: "Manager Logins"
            },
            auth: {
                formTitle: "Authentication",
                labelUserText: "User:",
                inputUserPlaceholder: "Type user:",
                inputUserErrorMessage: "Invalid user!",
                labelPasswordText: "Password:",
                inputPasswordPlaceholder: "Type password!",
                inputPasswordErrorMessage: "Invalid password!",
                buttonLoginType: "btn btn-primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonLoginText: "Login"
            },
            logins: {
                buttonNewText: "New",
                buttonNewType: "primary" //Classe bootstrap: primary, secondary, danger, warning, etc...
            },
            getLogins: {
                columnTableUserTitle: "User",
                columnTableSiteTitle: "Site",
                columnTableManagerTitle: "Maintenance",
                buttonUpdateType: "btn btn-primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonUpdateText: "Update",
                buttonDeleteType: "btn btn-danger", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonDeleteText: "Delete",                
                labelNumberRegisterPerPageText: "Number of registers per page",
                inputNumberRegisterPerPagePlaceholder: "Type or choose number",
                buttonSetRegisterPerPageText: "Load"
            },
            formUpdateLogin: {
                title: "Update Login",
                successMessage: "Login atualizado com sucesso!",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "User:",
                inputUserPlaceHolder: "Type user:",
                inputUserErrorMessage: "Entered user is invalid!",
                labelPasswordText: "Password:",
                inputPasswordPlaceHolder: "Type password",
                inputPasswordErrorMessage: "Entered password is invalid!",
                labelSiteText: "Site/Plataform:",
                inputSitePlaceHolder: "type the site or plataform's name",
                inputSiteErrorMessage: "Entered site or plataform's name is invalid!",
                labelObservationText: "Observation:",
                inputObservationPlaceHolder: "Type desired observations",
                inputObservationErrorMessage: "Type some observation(s)!",
                buttonSaveType: "btn btn-primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Save"
            },
            formCreateLogin: {
                title: "Register New Login",
                successMessage: "Login cadastrado com sucesso!",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "User:",
                inputUserPlaceHolder: "Type user:",
                inputUserErrorMessage: "Entered user is invalid!",
                labelPasswordText: "Password:",
                inputPasswordPlaceHolder: "Type password",
                inputPasswordErrorMessage: "Entered password is invalid!",
                labelSiteText: "Site/Plataform:",
                inputSitePlaceHolder: "type the site or plataform's name",
                inputSiteErrorMessage: "Entered site or plataform's name is invalid!",
                labelObservationText: "Observation:",
                inputObservationPlaceHolder: "Type desired observations",
                inputObservationErrorMessage: "Type some observation(s)!",
                buttonSaveType: "btn btn-primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Save"
            },
            formDeleteLogin: {
                title: "Confirm delation",
                Subtitle: "Do you really want to delete the login ",
                buttonDeleteType: "btn btn-danger", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonDeleteText: "Delete",
                buttonCancelType: "btn btn-warning", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonCancelText: "Cancel"
            },
            modalFormCreateLogin: {
                title: "Register new Login",
                buttonOpenModalType: "btn btn-primary",
                buttonOpenModalText: "New"
            },
            modalFormUpdateLogin: {
                title: "Update Login",
                buttonOpenModalText: "Update"
            },
            modalFormDeleteLogin: {
                title: "Confirm delation",
                buttonOpenModalType: "btn btn-danger",
                buttonOpenModalText: "Delete"
            },
            MenuOptions: {
                navDropdownUserTitle: "User",
                navDropdownUserItemCreate: "Create",
                navDropdownUserItemUpdate: "Update",
                navDropdownLanguagesTitle: "Languages",
                navDropdownThemesTitle: "Themes"
            },
            formCreateUser:{
                title: "Create New User",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "User:",
                inputUserPlaceHolder: "Type user name",
                inputUserErrorMessage: "Entered user is invalid!",
                labelPasswordText: "Password:",
                inputPasswordPlaceHolder: "Type the password",
                inputPasswordErrorMessage: "Entered password is invalid!",
                labelNameText: "Name:",
                inputNamePlaceHolder: "Type the user's name",
                inputNameErrorMessage: "User's name is invalid!",
                labelEmailText: "Email:",
                inputEmailPlaceHolder: "Type the user's email",
                inputEmailErrorMessage: "Entered user's email is invalid!",
                buttonSaveType: "primary", //Classe bootstrap: primary, secondary, danger, warning, etc...
                buttonSaveText: "Salvar"
            },            
            modalFormCreateUser: {
                title: "Create New User",
                buttonOpenModalType: "menuOption",
                buttonOpenModalText: "New"
            },
            formUpdateUser:{
                title: "Update User",
                labelIdText: "Id:",
                inputIdPlaceHolder: "",
                inputIdErrorMessage: "",
                labelUserText: "User:",
                inputUserPlaceHolder: "Type user name",
                inputUserErrorMessage: "Entered user is invalid!",
                labelPasswordText: "Password:",
                inputPasswordPlaceHolder: "Type the password",
                inputPasswordErrorMessage: "Entered password is invalid!",
                labelNameText: "Name:",
                inputNamePlaceHolder: "Type the user's name",
                inputNameErrorMessage: "User's name is invalid!",
                labelEmailText: "Email:",
                inputEmailPlaceHolder: "Type the user's email",
                inputEmailErrorMessage: "Entered user's email is invalid!",
                buttonSaveType: "primary", 
                buttonSaveText: "Salvar"
            },            
            modalFormUpdateUser: {
                title: "Update User",
                buttonOpenModalType: "menuOption",
                buttonOpenModalText: "Update"
            }

        }
    }

    setLanguage(language) {
        switch (language) {
            case "português":
                return this.português
            case "english":
                return this.english
            default:
                return this.português
        }
    }

    getAndSetStoragedLanguage(language) {
        if (!language) {
            let storagedSelectedLanguage = localStorage.getItem('selectedLanguage')
            if (!storagedSelectedLanguage) {
                localStorage.setItem("selectedLanguage", "português")
                return this.setLanguage("português");
            } else {
                return this.setLanguage(storagedSelectedLanguage);
            }
        } else {
            localStorage.setItem("selectedLanguage", language)
            return this.setLanguage(language);
        }

    }

    generatesListOfLanguages(){
        const languages = new Languages();
        return Object.getOwnPropertyNames(languages).sort();
    }
}


export default Languages;