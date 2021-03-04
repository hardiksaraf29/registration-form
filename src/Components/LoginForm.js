import React from 'react';
import { Link } from 'react-router-dom';

let LoginForm = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-white bg-warning text-center">
                                    <h2>Login Form</h2>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input className="form-control" type="text" placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <label> Password</label>
                                            <input className="form-control" type="password" placeholder="password" />
                                        </div>

                                        <p><Link className="nav-link text-danger" to='/ForgetPassword'>Forget Password</Link></p>
                                        <button className="btn btn-success">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LoginForm; 