import BaseApi from '../baseApi';



export default class SeguridadApi extends BaseApi{
    

    public ingresar(){
        console.log("Ingresando");
        return {
            token: "token"
        }
    }


    public registrarse(){
        return {
            register: "registrarse"
        }
    }

}