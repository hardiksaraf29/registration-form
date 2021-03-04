import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand "><Link className="text-white" to='/'> <h2 className="text-primary">React Project</h2> </Link></a>
                <ul className="navbar-nav ml-auto navbar-right">
                    <a className="nav-item nav-link ml-2"><Link className="nav-link" to='/RegistrationForm'>Registration Form </Link></a>
                    <a className="nav-item nav-link ml-2"><Link className="nav-link" to='/LoginForm'>Login Form</Link></a>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;