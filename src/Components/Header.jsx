import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    
    MDBIcon,
    MDBBtn,
  } from "mdb-react-ui-kit";
  import { useState } from "react";
import { Link } from "react-router-dom";
 
  
  const Header = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);
  
    return (
      <MDBNavbar expand="lg" light bgColor="primary" className="shadow-sm py-3">
        <MDBContainer fluid>
          {/* Brand Logo & Title */}
          <MDBNavbarBrand className="d-flex align-items-center">
            <img
              src="https://th.bing.com/th/id/OIP.uoPbBSz8YFLw52nzSzUwcgHaE7?rs=1&pid=ImgDetMain"
              height="45"
              alt="Event Logo"
              className="rounded-circle border border-light p-1"
            />
            <Link to={'/'}>
            <span className="ms-3 text-light fs-4 fw-bold">
             
             Event Management
             
           </span>
            </Link>
           
          </MDBNavbarBrand>
  
          {/* Navbar Toggle for Mobile */}
          <MDBNavbarToggler
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setCollapseOpen(!collapseOpen)}
          />
  
          <MDBCollapse navbar open={collapseOpen}>
            <MDBNavbarNav className="ms-auto d-flex align-items-center">
              
              {/* Logout Button */}
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  };
  
  export default Header;
  