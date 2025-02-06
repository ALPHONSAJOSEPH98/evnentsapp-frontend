import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { addUserAPI } from '../Services/AllApi';
function Addusers() {

  const [users,setUsers] = useState({
    username:"",
    email:"",
    userId:Number
  })
console.log(users);

  const handleAdd = async()=>{
    const{username,email,userId} = users

    if(!username||!email||!userId){
      alert("please fill fields")
    }

    else{
      try{
        
       const response = await addUserAPI(users)
       console.log(response.data)
       if(response.status===200){
        alert("user added successfully")
       }
      }
      catch(error){
      console.log(error);
      
      }
    }
  }
  return (
//     <div className="container mt-5 ">
  
//   <div className="row justify-content-center ">
  
//     <div className="col-md-6 col-12 border border-5 ">
//     <h3 className="text-center mb-4 mt-5">Add Users Here</h3>
//       <div className="form-group mb-3">
//         <MDBInput onChange={(e)=>setUsers({...users ,username:e.target.value})} label="User Name" id="typeUsername" type="text" />
//       </div>
//       <div className="form-group mb-3">
//         <MDBInput onChange={(e)=>setUsers({...users ,email:e.target.value})} label="Email" id="typeEmail" type="email" />
//       </div>
//       <div className="form-group mb-3">
//         <MDBInput onChange={(e)=>setUsers({...users ,userId:e.target.value})} label="User ID" id="typeUserId" type="text" />
//       </div>
//       <div className="text-center">
//         <button onClick={handleAdd} className="btn btn-success w-100 mb-5">ADD</button>
//       </div>
//     </div>
    
//   </div>
 
// </div>
<div className="d-flex justify-content-center mt-5">
<div className="col-md-6 col-12 p-4 shadow-lg border rounded bg-light">
  <h3 className="text-center mb-4 text-primary">Add Users</h3>

  <div className="form-group mb-3">
    <MDBInput
      onChange={(e) => setUsers({ ...users, username: e.target.value })}
      label="User Name"
      id="typeUsername"
      type="text"
      className="form-control p-2 rounded"
    />
  </div>

  <div className="form-group mb-3">
    <MDBInput
      onChange={(e) => setUsers({ ...users, email: e.target.value })}
      label="Email"
      id="typeEmail"
      type="email"
      className="form-control p-2 rounded"
    />
  </div>

  <div className="form-group mb-3">
    <MDBInput
      onChange={(e) => setUsers({ ...users, userId: e.target.value })}
      label="User ID"
      id="typeUserId"
      type="text"
      className="form-control p-2 rounded"
    />
  </div>

  <div className="text-center">
    <button
      onClick={handleAdd}
      className="btn btn-success w-100 py-2 fw-bold shadow-sm"
    >
      + ADD USER
    </button>
  </div>
</div>
</div>

  )
}

export default Addusers