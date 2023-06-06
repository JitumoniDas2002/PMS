import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import formatDate from '../utils/date-format';

const AdminPublications = () => {

    const [publishers, setPublishers] = useState([]);
    const [books, setBooks] = useState(null);
    const [publisherEmail, setPublisherEmail] = useState('');
    const [selectedPublisher, setSelectedPublisher] = useState(null);
    const [email, setEmail] = useState('');

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Make a GET request to the backend
        axios.get(`http://localhost:8000/get-publications-email/${publisherEmail}`)
            .then((response) => {
                console.log(response.data);
                setBooks(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    console.log(publishers);

    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title>Search Publications</Card.Title>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="publisherEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter publisher email"
                                value={publisherEmail}
                                onChange={(e) => setPublisherEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-3'>
                            Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>Books</Card.Title>
                    {books ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Book Title</th>
                                    <th>Author</th>
                                    <th>Co-Authors</th>
                                    <th>Published Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            <ul>
                                                {book.co_authors.map((author) => (
                                                    <li key={author}>{author}</li>
                                                ))
                                                }
                                            </ul>
                                        </td>
                                        <td>{formatDate(book.published_date)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>No publisher selected.</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default AdminPublications;
