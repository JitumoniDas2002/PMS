import React from 'react';

export default function Dashboard() {
    return (
        <div className='row g-3 align-items-center justify-content-center'>
            <div className="card col-3 mx-5">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Total Books</h5>
                    <p className="card-text">10</p>
                    <a href="#" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Books Published</h5>
                    <p className="card-text">10</p>
                    <a href="#" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3 mx-5">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Add Book(s)</h5>
                    <p className="card-text">10</p>
                    <a href="/add-publications" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3 mx-5">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Delete Book(s)</h5>
                    <p className="card-text">10</p>
                    <a href="#" className="btn btn-primary">Go there</a>
                </div>
            </div>
            <div className="card col-3">
                <div className="card-body">
                    <i></i>
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">10</p>
                    <a href="#" className="btn btn-primary">Go there</a>
                </div>
            </div>
        </div>
    )
}