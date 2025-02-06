import React from 'react'
import Addusers from '../Components/Addusers'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div>
        <Addusers/>
        <div className="text-center mt-5 mb-5 ">
       <Link to={'/viewUserList'}> <button className="btn btn-warning w-25">view user</button>
       </Link>
      </div>
    </div>
  )
}

export default View