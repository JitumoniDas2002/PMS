import React, { useState } from "react"
import PublicationCard from "../components/Publicationcard"
import axios from "axios"

export default function AddPublication() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [co_authors, setCoAuthors] = useState([]);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const user_id = localStorage.getItem("user_id");


    const handleAddCoAuthor = (event) => {
        event.preventDefault();
        console.log("Add Co-Author")

        setCoAuthors([...co_authors, ""])

    }

    const handleFileChange = (event) => {
        event.preventDefault();
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
      };

      console.log("this is file: ", file);

    const handleSubmit = (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
        }

        console.log("Submit: ", file);

        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("title", title);
        formData.append("author", author);
        formData.append("co_authors", co_authors);
        formData.append("file", file);
        formData.append("description", description);
        formData.append("published_date", new Date());

        console.log(formData);


        try {
            // axios call -- send and receive data
            axios.post('http://localhost:8000/add-publications', formData,)
                .then((response) => {
                    console.log(response);
                    alert("Publication Added Successfully");
                    window.location.href = "/dashboard";
                }).catch((error) => {
                    console.log(error);
                })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Add Publication</h1>
            <div className="card col-5">
                <div className="card-body" style={{backgroundColor: "#e9e9e9"}}>
                    <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="Theory Of Everything" 
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                }}
                            />
                            <label>Title</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="JituRkoni Das" 
                                value={author}
                                onChange={(event) => {
                                    setAuthor(event.target.value)
                                }}
                            />
                            <label>Author</label>
                        </div>
                        <div className="form-floating col-9">
                            {co_authors.map((coAuthor, index) => {
                                return (
                                    <>
                                        <input type="text" className="form-control" placeholder="JD" 
                                            value={coAuthor}
                                            onChange={(event) => {
                                                const values = [...co_authors];
                                                values[index] = event.target.value;
                                                setCoAuthors(values);
                                            }}
                                            />
                                        <label>Co-Author</label>
                                    </>
                                )
                            })}
                        </div>
                        <div className="col-3 p-2">
                        <button className="btn btn-primary" onClick={handleAddCoAuthor}>Add Co-Author</button>
                        </div>
                        <div className="form-floating col-12">
                            <input type="file" name="file" className="form-control" placeholder="JD" 
                                onChange={handleFileChange}
                            />
                            <label>Upload File</label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="About the book" 
                                value={description}
                                onChange={(event) => {
                                    setDescription(event.target.value)
                                }}
                            />
                            <label>Description</label>
                        </div>
                        <button className="btn btn-outline-secondary"
                            type="submit"
                        >
                            Add Publication
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}