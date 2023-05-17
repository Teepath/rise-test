export interface User{
    first_name:string;
    last_name:string;
    email_address:string;
    password:string;
    date_of_birth:string;
    phone_number?:string;
    username?:string;
}



export interface Credential{
    email_address:string;
    password:string;
}

export interface Plans{

        plan_name: string,
        target_amount:number,
        maturity_date:string
   
}