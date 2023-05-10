import React from "react";
import PublicationTable from "../components/PulicationTable";

export default function DeletePublication() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3">Delete Publication</h1>
            <div className="card col-8">
                <div className="card-body">      
                    <PublicationTable />
                </div>
            </div>
        </div>
    )
}