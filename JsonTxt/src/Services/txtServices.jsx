import React from "react";
import axios from "axios";
const url = "http://localhost:8080/API/v1/ari/txt/"

const txtServices = () => {}

txtServices.transform = async (formData) => {
    try{
        const response = await axios.postForm(`${url}`, formData,   {
    
          headers: {
            "Content-Type": "multipart/form-data",
          },

          
          }) 
          
        return response.data
    }catch(error){
        
    }

}


export default txtServices;