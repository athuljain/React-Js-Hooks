
import React from 'react';
import { MDBFooter,  MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';




export default function Footer(){

    return(
        <div>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
        <a href='https://www.facebook.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='facebook-f' />
</a>
<a href='https://twitter.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='twitter' />
</a>
<a href='https://www.google.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='google' />
</a>
<a href='https://www.instagram.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='instagram' />
</a>
<a href='https://www.linkedin.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='linkedin' />
</a>
<a href='https://github.com/' className='me-4 text-reset'>
  <MDBIcon color='secondary' fab icon='github' />
</a>

        </div>
      </section>
  
         
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
        </div>
    )
}



