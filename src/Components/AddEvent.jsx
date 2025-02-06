import React from 'react';
import  { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import { addEventAPI} from '../Services/AllApi';
function AddEvent() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [events,setEvents] = useState({
    eventname:"",
    description:"",
    date:"",
    userId:id
  })
// console.log(events);

  const handleAdd = async()=>{
    const{eventname,description,date,userId} = events

    if(!eventname||!description||!date){
      alert("please fill fields")
    }

    else{
      try{
        
       const response = await addEventAPI(events)
       console.log(response.data)
       if(response.status===200){
        alert("event added successfully")
        navigate('/viewUserList')
       }
      }
      catch(error){
      console.log(error);
      
      }
    }
  }
  return (
    <div>
      
 
  //   
  <div className="d-flex justify-content-center mt-5">
      <div className="col-md-6 col-12 p-4 shadow-lg border rounded bg-light">
        <h3 className="text-center mb-4 text-primary fw-bold">Add Event</h3>

        <div className="form-group mb-3">
          <MDBInput
            onChange={(e) => setEvents({ ...events, eventname: e.target.value })}
            label="Event Name"
            id="typeEventName"
            type="text"
            className="form-control p-2 rounded"
          />
        </div>

        <div className="form-group mb-3">
          <MDBInput
            onChange={(e) => setEvents({ ...events, description: e.target.value })}
            label="Description"
            id="typeDescription"
            type="text"
            className="form-control p-2 rounded"
          />
        </div>

        <div className="form-group mb-3">
          <MDBInput
            onChange={(e) => setEvents({ ...events, date: e.target.value })}
            label="Event Date"
            id="typeDate"
            type="date"
            className="form-control p-2 rounded"
          />
        </div>

        <div className="text-center ">
          <button
            onClick={handleAdd}
            className="btn btn-success w-100 py-2 fw-bold shadow-sm"
          >
            + ADD EVENT
          </button>
        </div>
        
      </div> 
      </div>
      <div className='text-center mt-3 mb-3'>
      <Link to={"/viewUserList"}>
          <button className="btn btn-dark btn-lg px-5 py-2 fw-bold">
            ⬅ Back
          </button>
        </Link>
      </div>
    
    </div>
  )
}

export default AddEvent