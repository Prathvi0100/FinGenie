import axios from "axios";
//! Login 
//return a promise

export const loginAPI=async(userData)=>{
    const response=await axios.post('http://localhost:8000/user/login',{
        email,
        password
    });
    return response.data;
}   