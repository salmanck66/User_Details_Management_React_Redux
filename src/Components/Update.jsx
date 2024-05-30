import React,{useState} from 'react'
import { updateUser } from '../Redux/UserReducer';
import { useDispatch,useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'

const Update = () => {
  const id = useParams()
  const users = useSelector((state)=>state.users)
  const selectedUser = users.data.filter(user => user.id ==id.id)
  const {name,mail} = selectedUser[0]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [uname,setName] = useState(name)
  const [umail,setEmail] = useState(mail)

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id.id, uname, umail }));
    navigate('/')
};

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input onChange={(e)=>setName(e.target.value)} value={uname} type='text' name='name' className='form-control' placeholder='enter name'/>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={umail} type='email' name='mail' className='form-control' placeholder='enter mail' />
        </div>
        <br />
        <button className='btn btn-info'>Submit</button>
      </form>
    </div>
  </div>
  )
}
export default Update