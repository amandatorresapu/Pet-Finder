import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    
    Link 
  } from "react-router-dom";

const AllPets = ()=> {

    const [allPets, setAllPets] = useState([])

    const[deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
    axios.get("http://localhost:8000/api/redbelt")
        .then(res =>{
            console.log("Response:", res);
            setAllPets(res.data.results)
        })
        .catch(err=>{
            console.log("errrrrrr", err)
        })

    }, [deleteToggle]) 

    const deletePet = (_id)=> {
        console.log("delete the item")
        axios.delete(`http://localhost:8000/api/redbelt/${_id}`)
            .then(res=>{
                console.log("res after deleteing", res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=> console.log(err))
    }







    return (

        <>
        

        <div>
            
            <div id="wrapper">
  
                        <span id="controlL" class="left-controls" role="button" aria-label="See Previous Modules">
                          <b className="fa fa-chevron-left fa-chevron-left-extra" aria-hidden="true"></b>
                        </span>
                        
                        <h1>These pets are looking for a good home</h1>
                       
                        <div className="module-section clearfix">
                          {/* <button class="btn arrow-guides fa-chevron-left"></button> */}
                         <ul id="content">
                          {
                              allPets.map((petsObj, idx)=>{
                                  return(
                                    <li key={petsObj._id} className="card effect1" style = {{backgroundImage: `url(${petsObj.profilePicUrl})` , backgroundRepeat:'no-repeat', width: '250px'}}>
                                        
                                            
                                            <h5><a href={`/redbelt/${petsObj._id}`}>{petsObj.name}</a></h5>
                                            <p>Number of projects: {petsObj.description}</p>
                                        {/* <img src={ninja.profilePicUrl} height = "100px" width= "100px"/> */}
                                        
                                    </li>

                                  )
                              })
                          }
                           
                          
                          
                         </ul>
                          
                         
                          
                        </div>
                        
                      <span id="controlR" class="right-controls" role="button" aria-label="See Previous Modules">
                          <b className="fa fa-chevron-right fa-chevron-right-extra" aria-hidden="true"></b>
                        </span>
                       {/* <button class="btn arrow-guides-right fa-chevron-right"></button> */}
                        
                        
                        
                      </div>
            
            
        </div>



        
      </>
    )
}

export default AllPets;