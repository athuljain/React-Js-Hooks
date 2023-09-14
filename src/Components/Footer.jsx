import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block get-connect">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            {/* <a href='https://twitter.com/' className='me-4 text-reset'>
    <MDBIcon color='secondary' fab icon='twitter' />
  </a> */}
            <a
              href="https://athuljainkj2@gmail.com/"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/athul-jain-5382b0215/"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="https://github.com/athuljain" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>
        <div className="text-center p-4 footer-down">
          © 2023 Copyright:
          <a
            className="text-reset fw-bold footer-copy"
            href="https://github.com/athuljain"
          >
            Athul jain
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
