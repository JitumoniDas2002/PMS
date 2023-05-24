import React from "react";
import formatDate from "../utils/date-format";

export default function PublicationTable(props) {

    console.log(props.publications)

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sl No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date Published</th>
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
                                    <td>
                                        {
                                            publication.co_authors.map((coAuthor, index) => {
                                                return (
                                                    <p>{coAuthor}</p>
                                                )
                                            })
                                        
                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">
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