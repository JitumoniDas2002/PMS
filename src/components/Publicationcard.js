import React from "react"

export default function PublicationCard() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Add Publication</h1>
            <div className="card col-5">
                <div className="card-body" style={{backgroundColor: "#e9e9e9"}}>
                    <form className="row g-3">
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="Theory Of Everything" />
                            <label>Title</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="JituRkoni Das" />
                            <label>Author</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="JD" />
                            <label>Co-Author</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="date" className="form-control" placeholder="JD" />
                            <label>Date</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="file" className="form-control" placeholder="JD" />
                            <label>Upload File</label>
                        </div>
                        <button className="btn btn-outline-secondary">
                            Add Publication
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}