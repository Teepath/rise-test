import { SIGNUP, SIGNUP_ERROR, 
    SIGNIN_REQUEST, SIGNUP_REQUEST,
     SIGNIN_ERROR,
     GET_SECTION,
    

} from '../constant';

// import {Action } from '../type'


type Action ={
    message:string;
    error: string;
    data: any;
    payload?:any;
    type:string;
}

type  stateProps = {
    message:string;
    error: string;
    user:any;
    loading:boolean;
};

export interface RegisterState{
    register: stateProps
}

const initialState ={
    message:null,
    token:null,
    loading:false,
    error:null
}



const registerUser = (state=initialState, action: Action)=>{

    switch(action.type){ 
        case SIGNUP_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
                message:null
            }
        case SIGNUP:
            return{
                ...state,
                loading:false,
                error:null,
                user: action?.payload,
                message:null
            }
       

        case SIGNUP_ERROR:
            return{
                ...state,
                loading:false,
                message:null,
                error: action.error
            }
       
       
        default:
            return state
    }
}

export default registerUser;