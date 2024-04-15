import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
function Navbar() {
  return (
    <div className='row d-flex justify-content-between' >
    <div className='col-auto'>Todo's</div>
    <div className='col-auto'>Status Filter
       <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ..
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div></div>


    </div>
  )
}

export default Navbar