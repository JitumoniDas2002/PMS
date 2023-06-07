import React from "react";
import formatDate from "../utils/date-format";

export default function PublicationTable(props) {

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sl No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date Published</th>
                        <th scope="col">Author</th>
                        <th scope="col">Co-Author(s)</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // map over the publications array and display each publication
                        props.publications.map((publication, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{publication.title}</td>
                                    <td>
                                        {
                                            formatDate(Date(publication.published_date))
                                        }
                                    </td>
                                    <td>{publication.author}</td>
                                    <td>
                                        {
                                            publication.co_authors.map((coAuthor, index) => {
                                                return (
                                                    <p key={index}>{coAuthor}</p>
                                                )
                                            })
                                        
                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => props.handlePublicationDelete(publication.publication_id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}