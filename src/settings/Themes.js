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
                modalHeaderBackgroudColor: "bg-dark",
                modalBodyBackgroundColor: "bg-dark",
                modalTitleTextColor:"text-white",
                buttonOpenModalNew: "btn btn-warning",
                buttonOpenModalUpdate: "btn btn-warning",
                buttonOpenModalDelete: "btn btn-danger",
                buttonOpenModalMenuOption: "menuOption", //Não existe a classe menuOption. Esse nome é apenas para identificar que tipo de botão irá chamar o modal. Veja método createButton do componente ModalForms
                buttonOpenModalLink: "link"
            },
            loginPagination:{
                pageItem: "darkPageItem",
                pageLink: "darkPageLink",
                activeItem: "darkPageActiveItem"
            },
            formCreateLogin:{
                formBackgroudColor: "bg-dark",
                labelTextColor: "text-white",
                buttonSaveType: "btn btn-warning"
            },
            formUpdateLogin:{
                formBackgroudColor: "bg-dark",
                labelTextColor: "text-white",
                buttonSaveType: "btn btn-warning"
            },
            formDeleteLogin:{
                formBackgroudColor: "bg-dark",
                labelTextColor: "text-white",
                buttonDeleteType: "btn btn-danger",
                buttonCancelType: "btn btn-warning"
            },            
            formCreateUser:{
                formBackgroudColor: "bg-dark",
                labelTextColor: "text-white",
                buttonSaveType: "btn btn-warning"
            },            
            formUpdateUser:{
                formBackgroudColor: "bg-dark",
                labelTextColor: "text-white",
                buttonSaveType: "btn btn-warning"
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
                table: "striped bordered table-hover",
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
                modalHeaderBackgroudColor: "bg-light",
                modalTitleTextColor:"text-dark",
                modalBodyBackgroundColor: "bg-light",               
                buttonOpenModalNew: "btn btn-primary",
                buttonOpenModalUpdate: "btn btn-primary",
                buttonOpenModalDelete: "btn btn-danger",
                buttonOpenModalMenuOption: "menuOption", //Não existe a classe menuOption. Esse nome é apenas para identificar que tipo de botão irá chamar o modal. Veja método createButton do componente ModalForms
                buttonOpenModalLink: "link"
            },
            loginPagination:{
                pageItem: "lightPageItem",
                pageLink: "lightPageLink",
                activeItem: "lightPageActiveItem"
            },
            formCreateLogin:{
                formBackgroudColor: "bg-light",
                labelTextColor: "text-dark",
                buttonSaveType: "btn btn-primary"
            },
            formUpdateLogin:{
                formBackgroudColor: "bg-light",
                labelTextColor: "text-dark",
                buttonSaveType: "btn btn-primary"
            },
            formDeleteLogin:{
                formBackgroudColor: "bg-light",
                labelTextColor: "text-dark",
                buttonDeleteType: "btn btn-danger",
                buttonCancelType: "btn btn-primary"
            },            
            formCreateUser:{
                formBackgroudColor: "bg-light",
                labelTextColor: "text-dark",
                buttonSaveType: "btn btn-primary"
            },            
            formUpdateUser:{
                formBackgroudColor: "bg-light",
                labelTextColor: "text-dark",
                buttonSaveType: "btn btn-primary"
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