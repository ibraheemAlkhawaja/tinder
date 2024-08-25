import axios from "axios"
import Cookies from "cookies-js";

const Config = {
    baseURL : "https://api.trendsbymidas.mom/api",
    headers : 
        {
            "Content-Type" : "application/json"
        }
}
export const PublicAxios = axios.create(Config);
export const PrivetAxios = axios.create(Config);
PrivetAxios.interceptors.request.use((c)=>{
    const token =Cookies.getItem("token")
    if(token) c.headers.Authorization=`Bearer ${token}`
})
