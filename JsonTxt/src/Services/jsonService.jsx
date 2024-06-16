import React from "react";
import axios from "axios";
const url = "http://localhost:8080/API/v1/ari/json/"


const jsonServices = () => {}

jsonServices.transform = async (formData) => {
    try{
        const response = await axios.postForm(`${url}`, formData ,{ responseType: 'blob' } ,{
    
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: 'blob'
          }) 
        
        return response.data
    }catch(error){
        console.log(error.message)
    }

}

export default jsonServices;
