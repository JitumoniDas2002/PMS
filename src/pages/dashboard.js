import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {

    useEffect(() => {
        const getTotalPublications = () => {
            axios.get(`http://localhost:8000/get-total-publications`)
                .then((response) => {
                    console.log(response.data);
                    setPublicationLength(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getTotalPublications();

        const user_id = localStorage.getItem('user_id');
        const getUser = () => {
            axios.get(`http://localhost:8000/get-user/${user_id}`)
                .then((response) => {
                    console.log(response.data);
                    setUser(response.data);
                    setFirstName(response.data.first_name);
                    setLastName(response.data.last_name);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getUser();
    }, [])

    const [publicationLength, setPublicationLength] = useState(0);
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateUser = () => {
        const user_id = localStorage.getItem('user_id');
        const data = {
            first_name: firstName,
            last_name: lastName
        }
        axios.put(`http://localhost:8000/update-user/${user_id}`, data)
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                alert('User updated successfully');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='row g-3 align-items-center justify-content-center'>
            <div className="card col-3 mx-5">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Total Books</h5>
                    <p className="card-text">{publicationLength}</p>
                    <a href="#" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Books Published</h5>
                    <a href="/list-publications" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3 mx-5">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Add Book(s)</h5>
                    <a href="/add-publications" className="btn btn-primary">Go there</a>
                </div>
            </div>
            {/* make a profile card containg 4 inputs - first name, last name, username, email */}
            <div className='d-flex justify-content-center'>
                <div className="card col-3">
                    <div className="card-body">
                        <i></i>
                        <h5 className="card-title">Profile</h5>
                        <div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                <input type="text" className="form-control"  aria-describedby="emailHelp" 
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control"  aria-describedby="emailHelp" disabled
                                    value={user.username}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" disabled
                                    value={user.email}
                                />
                            </div>
                            <button  className="btn btn-primary" onClick={updateUser}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}