import React from "react";


function Navbar() {
  return( 
  <div>
    <div className="d-flex justify-content-between p-4">
      <div>Logo</div>
      <div>
        <ul className="d-flex list-unstyled">
          <li className="pl-3">ListItems</li>
          <li className="pl-3">ListItems</li>
          <li className="pl-3">ListItems</li>
          <li className="pl-3">ListItems</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar;
