import { GET_PLANS, GET_PLANS_REQUEST, GET_PLANS_ERROR, GET_ALL_PLANS, GET_ALL_PLANS_ERROR, GET_SINGLE_PLAN, GET_SINGLE_PLAN_ERROR, GET_QUOTE, GET_QUOTE_ERROR, GET_RATES, GET_RATES_ERROR
} from "../constant";



type  planState = {
    error: string;
    loading:boolean;
    plans:any;
    quote:any;
    rates:any;
    plan:any;
};



export interface planProps {
    investment: planState
}

const initialState ={
    msg:null,
    loading:false,
    plans:[],
    quote:{},
    plan:{},
    rates:{},
    error:null
}


type Action ={
    type:string,
    error:any,
    payload:any
}


const errorCode =(error:any)=>{
    if(error == "Request failed with status code 422" || error == "Reques failed with status code 404" || error == "Request failed with status code 401 login msg" || error=="Network Error"){
        return `Network Error`
    }else{
        return error;
    }
}


const planReducer = (state=initialState, action:Action)=>{
    switch(action.type){
        case GET_PLANS_REQUEST:
            return{
                    ...state,
                    loading:true,
                    error:null,
            }
        case GET_PLANS: 
       
            return{
                ...state,
                plan:action.payload,
                loading:false,
                error:null,
            }

        case GET_PLANS_ERROR:
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':action.error,
                loading:false
            }

        case GET_PLANS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
        }

    
        case GET_ALL_PLANS:
            return{
                ...state,
                plans:action.payload,
                loading:false,
                error:null,
            }

        case GET_ALL_PLANS_ERROR:
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':action.error,
                loading:false
            }

        case GET_SINGLE_PLAN:
            return{
                 ...state,
                plan:action.payload,
                loading:false,
                error:null,
                }
        case GET_SINGLE_PLAN_ERROR:
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':action.error,
                loading:false
            }
        case GET_QUOTE:
            return{
                ...state,
               quote:action.payload,
               loading:false,
               error:null,
               }

        case GET_QUOTE_ERROR:{
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':action.error,
                loading:false
            }
          
        }

        case GET_RATES:
            return{
                ...state,
                rates:action.payload,
                loading:false,
                error:null,
            }
        case GET_RATES_ERROR:
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':action.error,
                loading:false 
            }

        default:
            return state;
    }
}

export default planReducer;