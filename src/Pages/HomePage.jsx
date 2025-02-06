import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="position-relative ">
    {/* Background Image with Overlay */}
    <div className="position-relative">
      <img
        src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
        alt="Events"
        className="w-100 img-fluid"
        style={{ height: "500px", objectFit: "cover", filter: "brightness(0.6)" }}
      />
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white"
        style={{ width: "80%" }}
      >
        <h2 className="fw-bold">About Us</h2>
        <p className="mt-3 fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          saepe placeat at ad enim, soluta quasi nulla sequi quos rem
          consequuntur inventore laudantium minima numquam eaque ullam? Quas,
          temporibus deleniti.
        </p>
        <Link to={"/viewUserList"}>
          <button className="btn btn-primary btn-lg px-4 py-2 fw-bold shadow-lg mt-3">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HomePage