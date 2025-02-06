import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteEventsAPI, getUserEventsAPI } from '../Services/AllApi';

function ViewEvents() {
    const {id} = useParams()
    console.log(id);
    
   const [events,setEvents] = useState([])
    const handleEvents=async()=>{
      const response = await getUserEventsAPI(id)
      if(response.status==200){
        setEvents(response.data)
      }
      else{
        console.log(error);
        
      }
    }

    const handleDelete = async(id)=>{
        console.log(id);
        
     try{
        const response = await deleteEventsAPI(id)
        if(response.status===200){
            alert("deleted successfully")
            handleEvents()
        }
     }
     catch(error){
        console.log(error)
        
     }
    }
    useEffect(()=>{
        handleEvents()
    },[])
  return (
    // <div>
        
    //   <div className="row">
    //     <div className="col-6 container">
    //         <h3 className='text-center'>View Events</h3>
    //     {
    //         events.length>0?events.map(
    //             item=>(
    //     <div className="shadow mt-5 text-center">
    //         <h4>{item.eventname}</h4>
    //         <h5>{item.date}</h5>
    //         <p>{item.description}</p>
    //         <div>
    //             <button onClick={()=>{handleDelete(item._id)}} className='btn btn-danger'>Delete</button>
    //         </div>
    //     </div>
    //             )
    //         ):
    //         <p>No Events to show</p>
    //     }
    //     </div>
    //   </div>
    //  <div className='mt-5 text-center'>
    //  <Link to={'/viewUserList'}>
    //   <button className='btn btn-dark'>Back</button>
    //   </Link>
    //  </div>
    // </div>
    <div className="container mt-5">
      {/* Title */}
      <h3 className="text-center text-primary fw-bold mb-4">View Events</h3>

      {/* Event List */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          {events.length > 0 ? (
            events.map((item) => (
              <div
                key={item._id}
                className="card shadow-lg p-4 mb-4 text-center rounded border-0"
              >
                <h4 className="fw-bold text-dark">{item.eventname}</h4>
                <h5 className="text-muted">{item.date}</h5>
                <p className="text-secondary">{item.description}</p>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger px-4 py-2 fw-bold mt-2"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-muted fs-5">No Events to Show</p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4 mb-5 text-center">
        <Link to={"/viewUserList"}>
          <button className="btn btn-dark btn-lg px-5 py-2 fw-bold">
            ⬅ Back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ViewEvents