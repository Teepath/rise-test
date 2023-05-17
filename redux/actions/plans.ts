
import { GET_PLANS, GET_PLANS_ERROR, GET_PLANS_REQUEST, GET_ALL_PLANS_REQUEST, GET_ALL_PLANS, GET_ALL_PLANS_ERROR, GET_SINGLE_PLAN, GET_SINGLE_PLAN_ERROR, GET_QUOTE, GET_QUOTE_ERROR, GET_RATES, GET_RATES_ERROR } from "../constant"
import axios from "axios"
import { Plans} from "../type"
import { client } from "../../utilities"





export const planActions =(plans:Plans, token:string)=> async(dispatch:any)=>{
    dispatch({type: GET_PLANS_REQUEST})

    console.log(plans, 'plans');console.log(token, 'mytok')
        try {
            const {data} =await axios.post('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans', plans, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
         
               dispatch({
                type:GET_PLANS,
                    payload:data
                         
            })
            
        }catch(err:any){
            if(err.response){
                console.log(err.config['adapter'], 'new')
                const statusCode = err.response.status;
                const errorMessage = `Request failed with status code ${statusCode}`;
                console.log(errorMessage, 'error itself')
                 dispatch({
                type: GET_PLANS_ERROR,
                error: errorMessage
            })
            }else if(err.request){

                console.log(err, 'respo')
                dispatch({
                    type: GET_PLANS_ERROR,
                    error: "No response"
                })
            }else{
                console.log(err.message, 'msg')
                dispatch({
                    type: GET_PLANS_ERROR,
                    error: err.message
                })
            }
        }  

    }



    export const getAllPlanActions =(token:string)=> async(dispatch:any)=>{
        dispatch({type: GET_ALL_PLANS_REQUEST})
    
      
            try {
                const {data} =await axios.get('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })

                const items = data['items']
             
                   dispatch({
                    type:GET_ALL_PLANS,
                        payload:items
                             
                })
                
            }catch(err:any){
                if(err.response){
                    console.log(err.config['adapter'], 'new')
                    const statusCode = err.response.status;
                    const errorMessage = `Request failed with status code ${statusCode}`;
                    console.log(errorMessage, 'error itself')
                     dispatch({
                    type: GET_ALL_PLANS_ERROR,
                    error: errorMessage
                })
                }else if(err.request){
    
                    console.log(err, 'respo')
                    dispatch({
                        type: GET_ALL_PLANS_ERROR,
                        error: "No response"
                    })
                }else{
                    console.log(err.message, 'msg')
                    dispatch({
                        type: GET_ALL_PLANS_ERROR,
                        error: err.message
                    })
                }
            }  
    
        }




        export const getASinglePlanActions =(id:string, token:any)=> async(dispatch:any)=>{
            // dispatch({type: GET_ALL_PLANS_REQUEST})
            https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans/1c8c8edb-ce5a-4340-8dd2-a7b640111a25
          
                try {
                    const {data} =await axios.get(`https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans/${id}`,{
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    })

                   
                  
                  
                 
                
                       dispatch({
                        type:GET_SINGLE_PLAN,
                            payload:data
                                 
                    })
                    
                }catch(err:any){
                    if(err.response){
                        console.log(err.config['adapter'], 'new')
                        const statusCode = err.response.status;
                        const errorMessage = `Request failed with status code ${statusCode}`;
                        console.log(errorMessage, 'error itself')
                         dispatch({
                        type: GET_SINGLE_PLAN_ERROR,
                        error: errorMessage
                    })
                    }else if(err.request){
        
                        console.log(err, 'respo')
                        dispatch({
                            type: GET_SINGLE_PLAN_ERROR,
                            error: "No response"
                        })
                    }else{
                        console.log(err.message, 'msg')
                        dispatch({
                            type: GET_SINGLE_PLAN_ERROR,
                            error: err.message
                        })
                    }
                }  
        
            }





            export const getQuoteAction =(token:any)=> async(dispatch:any)=>{

              
                    try {
                        const {data} =await axios.get(`https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/quotes`,{
                            headers:{
                                'Authorization': `Bearer ${token}`
                            }
                        })
    
                        console.log(data, 'plans')
                           dispatch({
                            type:GET_QUOTE,
                                payload:data
                                     
                        })
                        
                    }catch(err:any){
                        if(err.response){
                            console.log(err.config['adapter'], 'new')
                            const statusCode = err.response.status;
                            const errorMessage = `Request failed with status code ${statusCode}`;
                            console.log(errorMessage, 'error itself')
                             dispatch({
                            type: GET_QUOTE_ERROR,
                            error: errorMessage
                        })
                        }else if(err.request){
            
                            console.log(err, 'respo')
                            dispatch({
                                type: GET_QUOTE_ERROR,
                                error: "No response"
                            })
                        }else{
                            console.log(err.message, 'msg')
                            dispatch({
                                type: GET_QUOTE_ERROR,
                                error: err.message
                            })
                        }
                    }  
            
                }




            

                export const getRate =(token:any)=> async(dispatch:any)=>{

              
                    try {
                        const {data} =await axios.get(`https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/rates`,{
                            headers:{
                                'Authorization': `Bearer ${token}`
                            }
                        })
    
                        console.log(data, 'plans')
                           dispatch({
                            type:GET_RATES,
                                payload:data
                                     
                        })
                        
                    }catch(err:any){
                        if(err.response){
                            console.log(err.config['adapter'], 'new')
                            const statusCode = err.response.status;
                            const errorMessage = `Request failed with status code ${statusCode}`;
                            console.log(errorMessage, 'error itself')
                             dispatch({
                            type: GET_RATES_ERROR,
                            error: errorMessage
                        })
                        }else if(err.request){
            
                            console.log(err, 'respo')
                            dispatch({
                                type: GET_RATES_ERROR,
                                error: "No response"
                            })
                        }else{
                            console.log(err.message, 'msg')
                            dispatch({
                                type: GET_RATES_ERROR,
                                error: err.message
                            })
                        }
                    }  
            
                }