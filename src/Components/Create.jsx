import React, { useState } from 'react';
import { addUser } from '../Redux/UserReducer';
import { useDispatch,useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';


function Create() {
    const [name,setName] = useState('')
    const [mail,setEmail] = useState('')
    const users = useSelector((state)=>state.users)
    console.log(users.data.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    console.log(users)
    const handleSubmit = (e) => {
      e.preventDefault();
      let newId = 1;
      if (users.data.length > 0) {
          newId = users.data[users.data.length - 1].id + 1;
      }
      dispatch(addUser({ id: newId, name, mail }));
      navigate('/')
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input onChange={(e)=>setName(e.target.value)} type='text' name='name' className='form-control' placeholder='enter name'/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' name='mail' className='form-control' placeholder='enter mail' />
          </div>
          <br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
