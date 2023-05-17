import { SIGNIN, SIGNIN_ERROR,
    SIGNIN_REQUEST,GET_SECTION,GET_SECTION_ERROR
} from "../constant";



type  loginState = {
    error: string;
    loading:boolean;
    token:any;
    user:any;
};



export interface loginProps {
    login: loginState
}

const initialState ={
    msg:null,
    token:null,
    loading:false,
    user:{},
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


const signinReducer = (state=initialState, action:Action)=>{
    switch(action.type){
        case SIGNIN_REQUEST:
            return{
                    ...state,
                    loading:true,
                    error:null,
            }
        case SIGNIN: 
            return{
                ...state,
                user:action.payload,
                loading:false,
                error:null,
            }

        case SIGNIN_ERROR:
            return{
                ...state,
                error:action.error=="Network Error"?'Network Error':errorCode(action.error),
                loading:false
            }
            case GET_SECTION:
                return{
                    ...state,
                    user:action.payload,
                    loading:false,
                    error:null,

                }

            case GET_SECTION_ERROR:
                return{
                    ...state,
                    error:action.error=="Network Error"?'Network Error':errorCode(action.error),
                    loading:false
                }
        default:
            return state;
    }
}

export default signinReducer;