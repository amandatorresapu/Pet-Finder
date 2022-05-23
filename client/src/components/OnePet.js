import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';


const OnePet=()=>{

    const { _id } = useParams();

    //set varaible to store the one product in we get back from the api call
    const [petInfo, setPetInfo] = useState({})

    const history = useHistory(); //initialize history so we can redirect using history.push()

    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/redbelt/${_id}`)
        .then(res=>{
            console.log(res);
            setPetInfo(res.data.results)
        
        })
        .catch(err=>console.log(err))    
    }, [])
    
    //when we click on delete, we want it to make a request to the back end to delete something. something based on the delete

    //delete

    const deletePet = ()=>{
            axios.delete(`http://localhost:8000/api/redbelt/${_id}`)
                .then(res=>{
                    console.log(res);
                    setPetInfo(res.data.results)
                    history.push("/")
                })
                .catch(err=>console.log(err))    
            }

    
  
    return (

      <div>
          <Link to='/'>Home</Link>
          <h1>One Pet Page</h1>
          <h2> Details about: {petInfo.name}</h2>
          <h5> Breed/type: {petInfo.breed}</h5>
          <h5> Description: {petInfo.description}</h5>
          <h5> Skill 1: {petInfo.skill1}</h5>
          <h5> Skill 2: {petInfo.skill2}</h5>
          <h5> Skill 3: {petInfo.skill3}</h5>
          
          <button onClick= {deletePet} className='btn btn-danger'>Adopt</button>
          
        </div>
            
    );
 
}

export default OnePet;