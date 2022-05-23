import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';

import FormFile from './FormFile';

const EditPets =()=> {

const { _id } = useParams();

const [petsInfo, setPetsInfo] = useState({});

const history = useHistory()

useEffect(()=>{
    axios.get(`http://localhost:8000/api/redbelt/${_id}`)
        .then(res=>{
            console.log("this is hte res-->", res)
            setPetsInfo(res.data.results)
        })
        .catch(err=>console.log(err))

}, [])

//the else if is for the checkbox
const changeHandler = (e)=>{

            setPetsInfo({
            ...petsInfo, [e.target.name]: e.target.value
        }) 
    
    

    }

const submitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/redbelt/${_id}`, petsInfo )
    .then(res=>{
        console.log("this is hte res-->", res)
        history.push("/")
    })
    .catch(err=>console.log(err))
}
    return (
        <>
       
            <h3>Edit  {petsInfo.name}</h3>
            <Link to='/'>Home</Link>
            <FormFile changeHandler={changeHandler} submitHandler={submitHandler} petsInfo={petsInfo} ></FormFile>

            <Link to='/'>Cancel</Link>
        
        
        
        
        
        </>
    )


}





export default EditPets;