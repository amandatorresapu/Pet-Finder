import React from 'react'

const FormFile =(props)=> {
    const { submitHandler, changeHandler, petsInfo, } = props;
    return (
        <form onSubmit={submitHandler} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Author:</label>
                            <input type="text" name="name" onChange={changeHandler}  className='form-control' value={petsInfo.name}  />
                         
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Breed/type:</label>
                            <input type="text" name="breed" onChange={changeHandler}   className='form-control' value={petsInfo.breed}  />
                            
                        </div>

                        <div className="form-group ">
                            <label htmlFor=''>Description:</label>
                            <input type="text" name="description" onChange={changeHandler}   className='form-control' value={petsInfo.description}  />
                            
                        </div>

                        <div className="form-group ">
                            <label htmlFor=''>Picture:</label>
                            <input type="text" name="profilePicUrl" onChange={changeHandler}   className='form-control' value={petsInfo.profilePicUrl}  />
                            
                        </div>

                        <div className="form-group ">
                            <label htmlFor=''>skill 1:</label>
                            <input type="text" name="skill1" onChange={changeHandler}   className='form-control' value={petsInfo.skill1}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>skill 2:</label>
                            <input type="text" name="skill2" onChange={changeHandler}   className='form-control' value={petsInfo.skill2}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>skill 3:</label>
                            <input type="text" name="skill3" onChange={changeHandler}   className='form-control' value={petsInfo.skill3}  />
                            
                        </div>
                        
                        
                            <input type="submit" value="Edit Pet information" className='btn btn-success' />
                    

                    </form>
        
    )
}

export default FormFile;