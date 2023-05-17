import { errorFormatter } from "../../utilities"
import { SIGNIN, SIGNUP, SIGNIN_ERROR, SIGNUP_ERROR, SIGNIN_REQUEST, SIGNUP_REQUEST, GET_SECTION, GET_SECTION_ERROR } from "../constant"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { User, Credential } from "../type"
import { configureAxiosHeaders} from '../../utilities'


export const SignUpAction =(register: User)=> async(dispatch:any)=> {
    dispatch({type:SIGNUP_REQUEST})
    console.log("making request .....")
   try{
    const {data} = await axios.post('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/users', register, 
    {headers:{ 'Content-Type': 'application/json',}})
    console.log(data, 'sign up msg');
    dispatch({
        type: SIGNUP,
         payload: data
        })

   }catch(err:any){
    if(err.response){
        console.log(err.response.data, 'from respone')
        dispatch({
            type: SIGNUP_ERROR,
            error: errorFormatter(err)
        })
        }else{
                    console.log(err.message, 'error itself')
                    dispatch({
                        type: SIGNUP_ERROR,
                        error: err.message
                    })
        
                }  
   }
            
}



export const LoginUser =(credential:Credential)=> async(dispatch:any)=>{
    dispatch({type:SIGNIN_REQUEST})
    AsyncStorage.clear();
        try {
           const {data} =await axios.post('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/sessions', credential)
            AsyncStorage.setItem('id', JSON.stringify(data.id))
            AsyncStorage.setItem('token', JSON.stringify(data.token));
            configureAxiosHeaders(data.token)
                
            console.log(data, 'login');
            
               dispatch({
                type: SIGNIN,
                    payload:data
                         
            })
            
        }catch(err:any){
            if(err.response){
                console.log(err.config['adapter'], 'new')
                const statusCode = err.response.status;
                const errorMessage = `Request failed with status code ${statusCode}`;
                console.log(errorMessage, 'error itself')
                 dispatch({
                type: SIGNIN_ERROR,
                error: errorMessage
            })
            }else if(err.request){

                console.log(err, 'respo')
                dispatch({
                    type: SIGNIN_ERROR,
                    error: "No response"
                })
            }else{
                console.log(err.message, 'msg')
                dispatch({
                    type: SIGNIN_ERROR,
                    error: err.message
                })
            }
        }  

        

}




export const getSeCtion = (token:string)=>async(dispatch:any)=>{
   
    try{
       
        const {data} =await axios.get('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/sessions', {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
      
        dispatch({
            type: GET_SECTION,
            payload: data,
        })
    }catch(err:any){
        if(err.response){
            console.log(err.config['adapter'], 'new')
            const statusCode = err.response.status;
            const errorMessage = `Request failed with status code ${statusCode}`;
            console.log(errorMessage, 'error itself')
             dispatch({
            type: GET_SECTION_ERROR,
            error: errorMessage
        })
        }else if(err.request){

            console.log(err, 'respo')
            dispatch({
                type: GET_SECTION_ERROR,
                error: "No response"
            })
        }else{
            console.log(err.message, 'msg')
            dispatch({
                type: GET_SECTION_ERROR,
                error: err.message
            })
        }
    }

    }