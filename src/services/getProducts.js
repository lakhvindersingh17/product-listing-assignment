import axios from "axios"
import { productUrl } from "../constants"

export const getProducts= async (id='')=>{

    try{
     const response=await axios.get(`${productUrl}${id}`)
    
     return response.data
    }
    catch(e){
        throw new Error('Error while Fetching Product',e);
    }
}