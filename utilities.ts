import axios from 'axios';
import Config from 'react-native-config';

export const errorFormatter = (error:any)=>{
    console.log(error, 'error')
    return error.response.data.error

}




   export const client = axios.create({
         baseURL:Config.BACKEND_API,       

});



export const configureAxiosHeaders = (token:string) => {
    client.defaults.headers.common['Authorization']=`Bearer ${token}`
    
    };