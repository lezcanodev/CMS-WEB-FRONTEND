import axios, { AxiosInstance } from 'axios';


export default abstract class Api{
    protected readonly api: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL: 'https://some-domain.com/api/',
        }) 
    }

}