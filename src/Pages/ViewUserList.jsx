import React, { useEffect, useState } from 'react'
import { getUserAPI } from '../Services/AllApi'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

function ViewUserList() {
    const [users, setUsers] = useState([])

    const handleUsers= async()=>{
        try{
            const response = await getUserAPI()
            if(response.status===200){
                setUsers(response.data)
            }
            else{
                console.log(response.data);
                
            }
        }
        catch(error){
            console.log(error);
            
        }
    }
    console.log(users);
    
    useEffect(()=>{
        handleUsers()
    },[])
  return (
    <div>
        {/* <div className=' row container text-center'>
            <h3 className='text-center mt-5'>Users</h3>
        <MDBTable className='w-50 text-center'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>userName</th>
          <th scope='col'>Add Event</th>
          <th scope='col'>View Events</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            users.length>0? users.map(item=>(
                <tr>
          <th scope='row'>{item.userId}</th>
          <td>{item.username}</td>
          <td> 
            <Link to={`/addEvent/${item._id}`}>
            <button className='btn'>Add events</button>
            </Link></td>
          <td>
            <Link to={`/viewEvent/${item._id}`}>
            <button className='btn'>view events</button>
            </Link>
          </td>
          
        </tr>
            )):
            <tr>
            <th scope='row'>#</th>
            <td>no users</td>
            <td>-</td>
            
            </tr>
        }
      </MDBTableBody>
    </MDBTable>
        </div>

        <div className='mt-5 text-center'>
        <Link to={'/view'}>
        <button className='btn btn-success'>Add User</button>
        </Link>
        </div> */}




    <div className="container mt-5">
      {/* Card Layout */}
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4 text-primary">User Management</h3>

        {/* Table */}
        <div className="table-responsive">
          <MDBTable className="table-bordered text-center">
            <MDBTableHead>
              <tr className="bg-dark text-white">
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Add Event</th>
                <th scope="col">View Events</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {users.length > 0 ? (
                users.map((item) => (
                  <tr key={item._id} className="align-middle">
                    <th scope="row">{item.userId}</th>
                    <td>{item.username}</td>
                    <td>
                      <Link to={`/addEvent/${item._id}`}>
                        <button className="btn btn-primary btn-sm px-3">
                          Add Event
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/viewEvent/${item._id}`}>
                        <button className="btn btn-info btn-sm px-3">
                          View Events
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th scope="row">#</th>
                  <td colSpan="3" className="text-muted">
                    No users available
                  </td>
                </tr>
              )}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>

      {/* Add User Button */}
      <div className="mt-4 text-center mb-5">
        <Link to={'/view'}>
          <button className="btn btn-success btn-lg px-4">+ Add User</button>
        </Link>
      </div>
    </div>


    </div>
  )
}

export default ViewUserList