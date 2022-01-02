import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DailyNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="/about">About</a></li>
            <div className="dropdown">
                <button className="btn btn-dark text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="nav-item"><a className="nav-link" href="/about">business</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">entertainment</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">general</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">health</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">science</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">sports</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">technology</a></li>
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


