import React from "react";
import {Link} from "react-router-dom"

const Placeholder = () => (
  <div className="placeholder">
    <h1>Placeholder (Click links)</h1>
    <Link to="/providerdashboard">providerdashboard</Link>
    <br />
    <Link to="/contactdashboard">contactdashboard</Link>
    <br />
    <Link to="/signup">signup</Link>
    <br />
    <Link to="/signin">signin</Link>
    <br />
  </div>
)

export default Placeholder;
