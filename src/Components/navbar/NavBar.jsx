import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/Task2">Task2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/parent">Parent</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/Slider">Slider</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/Create">Create</Link>
                    </li> <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/Show">Show</Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</div>
  )
}
