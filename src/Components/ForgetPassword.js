import React from 'react';
import { Link } from 'react-router-dom';

let ForgetPassword = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-light text-center">
                                    <h2>Reset Password</h2>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input className="form-control" type="text" placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" type="password" placeholder="Enter password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input className="form-control" type="password" placeholder="Confirm password" />
                                        </div>
                                        <button className="btn btn-success btn-sm " ><Link className="nav-link text-white" to='/LoginForm'>Reset Password</Link></button>
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

export default ForgetPassword; 