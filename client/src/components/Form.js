import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
    
    Link 
  } from "react-router-dom";
 

const Form=()=>{

  
    let [name, setName] = useState("");
    let [breed, setBreed] = useState("");
    let [description, setDescription] = useState("");
    let [profilePicUrl, setProfilePicUrl] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");
    
    const history = useHistory()

    //state variable to store validation errors inside of
    let [errors, setErrors] = useState({});

    //form submit handler
    const addPet = (e)=>{
        e.preventDefault();

    // package up in an object
        let formInfo= { name, breed, description, skill1, skill2, skill3, profilePicUrl}

        axios.post("http://localhost:8000/api/redbelt", formInfo)
            .then(res=>{
                console.log("response after posting form-->", res)
               

                if(res.data.error){
                    //this means there are validatoin errors we need to save
                    setErrors(res.data.error.errors)

                }
                else { // else means no errors if you dont have any errors
                  //clear out the state variable to clear out the form
                setName("");
                setBreed("");
                setDescription("");
                setSkill1("");
                setSkill2("");
                setSkill3("");
                setProfilePicUrl("");

                history.push("/")
                }

           

            })
            .catch(err=>console.log("errr", err))

          

    }


    return (
        <>
        <div>
        <Link to='/'>Home</Link>
                <h1>Add new Pet</h1>
                    <form onSubmit={addPet} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Name:</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' value={name}  />
                          <p>{errors.name?.message}</p>
                            
                        </div>
                        <div className="form-group">
                        <label htmlFor=''>type/breed:</label>
                            <input type="text" onChange={(e)=>setBreed(e.target.value)} className='form-control' value={breed}  />
                          <p>{errors.breed?.message}</p>
                            
                        </div>
                        <div className="form-group">
                        <label htmlFor=''>Description:</label>
                            <input type="text" onChange={(e)=>setDescription(e.target.value)} className='form-control' value={description}  />
                          <p>{errors.description?.message}</p>
                            
                        </div>

                        <div className="form-group">
                        <label htmlFor=''>Image:</label>
                            <input type="text" onChange={(e)=>setProfilePicUrl(e.target.value)} className='form-control' value={profilePicUrl}  />
                          
                            
                        </div>

                        <div className="form-group">
                        <label htmlFor=''>Skill 1:</label>
                            <input type="text" onChange={(e)=>setSkill1(e.target.value)} className='form-control' value={skill1}  />
                          
                            
                        </div>


                        <div className="form-group">
                        <label htmlFor=''>Skill 2:</label>
                            <input type="text" onChange={(e)=>setSkill2(e.target.value)} className='form-control' value={skill2}  />
                          
                            
                        </div>

                        <div className="form-group">
                        <label htmlFor=''>Skill 3:</label>
                            <input type="text" onChange={(e)=>setSkill3(e.target.value)} className='form-control' value={skill3}  />
                          
                            
                        </div>
                        
                        
                        
                            <input type="submit" value="Add Pet" className='btn btn-success mt-3' />
                    

                    </form>
                    <Link to='/'>Cancel</Link>

        </div>
        <hr />
        </>
    )

}
    
  


export default Form;