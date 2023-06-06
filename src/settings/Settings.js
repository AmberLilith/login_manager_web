class Settings {
    constructor(){
        this.components = {
            auth:{
                token:""
            },

            buttonOptions:{
                loggedUser: "Not logged",
                userMenuVisibility: "justify-content-center d-none"
            }
        }
    }

    getComponentSettings(componentName){
        switch (componentName) {
            case "buttonOptions":
                return this.components.buttonOptions;
        
            default:
                break;
        }
    }
}

export default Settings;