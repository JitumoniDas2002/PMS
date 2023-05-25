import React, { useEffect, useState } from "react";
import PublicationTable from "../components/PulicationTable";

// helper library to make http requests to our backend  -- axios
import axios from "axios";

export default function DeletePublication() {

    const [publications, setPublications] = useState([])
    // run when the page loads --- useEffect
    useEffect(() => {
        // check if the user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            // redirect to login page
            window.location.href = '/signin';
        }
        
        const user_id = localStorage.getItem('user_id');
        const getPublications = async () => {
            axios.get(`http://localhost:8000/get-publications/${user_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                setPublications(response.data);
            })
        }
        getPublications();

    }, [])

    const handlePublicationDelete = (publicationId) => {
        axios.delete(`http://localhost:8000/delete-publication/${publicationId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response.data);
            // this will refresh the page
            window.location.href = '/list-publications';
        })
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3">List Publications</h1>
            <div className="card col-8">
                <div className="card-body">      
                    <PublicationTable 
                        publications={publications}
                        handlePublicationDelete={handlePublicationDelete}
                    />
                </div>
            </div>
        </div>
    )
}