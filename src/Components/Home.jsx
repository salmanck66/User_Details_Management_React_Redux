import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/UserReducer';


const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.data);
  const handleDelete = (id)=>
    {
      dispatch(deleteUser(id));
    }

  return (
    <div className="container">
      <div className='d-flex justify-content-end align-content-center'>
      <Link to="/create"><Button  variant="success" className="my-3">Add Information</Button></Link> 
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              <td>
                <Link to={`/edit/${user.id}`}><Button variant="primary">Edit</Button></Link>
                <Button onClick={()=>handleDelete(user.id)} variant="danger" className="ms-2">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
