class Themes {
    constructor() {
        this.dark = {
            body:{
                backgroundColor: "bg-dark"
            },
            auth: {
                containerBackground: "bg-secondary",
                formContainer: "border rounded mt-3 pb-3",
                form: "p-3 bg-dark",
                buttonLogin: "btn btn-warning",
                titleDefault: "text-white text-center"                
            },
            header:{
                navBar: "bg-secondary mt-2",
                titleDefault: "w-100 text-white text-center",
            },
            getLogins:{
                table: "table table-dark table-hover",
                buttonNew: "btn btn-warning",
                buttonUpdate: "btn btn-warning",
                buttonDelete: "btn btn-danger",
                buttonLoadPageSize: "btn btn-warning"
            },
            menuOptions:{
                dropdownToggle: "darkDropdownToggle",
                navDropdown: "darkNavDropdown",
                completeUserName: "darkCompleteUserName"
            },
            modalForms:{
                buttonOpenModalNew: "btn btn-warning",
                buttonOpenModalUpdate: "btn btn-warning",
                buttonOpenModalDelete: "btn btn-danger",
                buttonOpenModalMenuOption: "menuOption" //Não existe a classe menuOption. Esse nome é apenas para idenficar que tipo de botão irá chamar o modal. Veja método createButton do componente ModalForms
            },
            loginPagination:{
                pageLink: "darkPageLink"
            }
        }

        this.light = {
            body:{
                backgroundColor: "bg-light"
            },
            auth: {
                containerBackground: "bg-light",
                formContainer: "border rounded mt-3 pb-3",
                form: "p-3 dg-white",
                buttonLogin: "btn btn-primary",
                titleDefault: "text-dark text-center"                
            },
            header:{
                navBar: "bg-light mt-2",
                titleDefault: "w-100 text-dark text-center",
            },
            getLogins:{
                table: "striped bordered hover",
                buttonNew: "btn btn-primary",
                buttonUpdate: "btn btn-primary",
                buttonDelete: "btn btn-danger",
                buttonLoadPageSize: "btn btn-primary",
            },
            menuOptions:{
                dropdownToggle: "lightDropdownToggle",
                navDropdown: "lightNavDropdown",
                completeUserName: "lightCompleteUserName"
            },
            modalForms:{                
                buttonOpenModalNew: "btn btn-primary",
                buttonOpenModalUpdate: "btn btn-primary",
                buttonOpenModalDelete: "btn btn-danger",
                buttonOpenModalMenuOption: ""
            },
            loginPagination:{
                pageLink: "page-link"
            }
        }
    }

    setTheme(theme) {
        switch (theme) {
            case "dark":
                return this.dark
            case "light":
                return this.light
            default:
                return this.dark
        }
    }

    getAndSetStoragedTheme(theme) {
        if (!theme) {
            let storagedSelectedTheme = localStorage.getItem('selectedTheme')
            if (!storagedSelectedTheme) {
                localStorage.setItem("selectedTheme", "dark")
                return this.setTheme("dark");
            } else {
                return this.setTheme(storagedSelectedTheme);
            }
        } else {
            localStorage.setItem("selectedTheme", theme)
            return this.setTheme(theme);
        }

    }

    static generatesListOfThemes() {
        const themes = new Themes();
        return Object.getOwnPropertyNames(themes).sort();
    }
}

export default Themes;