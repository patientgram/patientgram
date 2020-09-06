import React from "react";
import {Link} from "react-router-dom"

const Placeholder = () => (
  <div className="placeholder">
    <h1>Placeholder, replace with Splash (Click links)</h1>
    <Link to="/dashboard">dashboard (redirects to signin)</Link>
    <br />
    <Link to="/signup">signup</Link>
    <br />
    <Link to="/signin">signin</Link>
    <br />
  </div>
)

export default Placeholder;
