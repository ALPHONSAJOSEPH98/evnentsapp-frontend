import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter className="bg-primary text-white text-center py-4">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          {/* Quick Links */}
          <MDBCol md="4" className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/events" className="text-white text-decoration-none">Events</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </MDBCol>

          {/* Social Media */}
          <MDBCol md="4" className="mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <MDBIcon fab icon="linkedin-in" />
              </a>
            </div>
          </MDBCol>

          {/* Copyright Section */}
          <MDBCol md="12" className="mt-3">
            <p className=" mb-0">
              © {new Date().getFullYear()} Event Management. All rights reserved.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
