import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Dashboard</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" >Home</Link>
                        <Link className="nav-link" to="/employeesForm">Añadir empleado</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar