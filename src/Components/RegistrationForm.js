import React, { useState } from 'react';

let RegistrationForm = () => {

    let [userData, setUser] = useState(
        {
            name : "",
            email : "",
            mobileNum : 0,
            address : "" ,
            password: ""
        }
    );


    let update = (event) =>
    {
        setUser({

            ...userData,
            [event.target.name] : event.target.value
        })
    }
    
    let submit =(event) =>
    {
        event.preventDefault();
        console.log(userData);

    }

    return (
        <React.Fragment>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-white bg-info text-center">
                                    <h2>Registration Form</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submit}>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" type="text" placeholder="Username" name = "name" onChange={update}/>
                                        </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" placeholder="Email" required name = "email" onChange={update}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Mobile Number</label>
                                                <input className="form-control" type="text" placeholder="Mobile Number" name = "mobileNum" onChange={update}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea className="form-control" type="text" placeholder="Address" name = "address" onChange={update}></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control" type="password" placeholder="Enter password" name ="password" onChange={update}/>
                                            </div>

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

export default RegistrationForm; 