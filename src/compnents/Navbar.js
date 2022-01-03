import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailyNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <div className="dropdown">
                <button className="btn btn-dark text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="nav-item"><Link className="nav-link" to="/business" style={{color: 'black'}}>Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color: 'black'}} >Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/general" style={{color: 'black'}}>General</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health" style={{color: 'black'}}>Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science" style={{color: 'black'}}>Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports" style={{color: 'black'}}>Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology" style={{color: 'black'}}>Technology</Link></li>
                </ul>
            </div>
        </ul>
     
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar

