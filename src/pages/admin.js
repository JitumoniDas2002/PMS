import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import formatDate from '../utils/date-format';

const AdminPage = () => {

   useEffect(() => {
    const token = localStorage.getItem('token');
        if (!token) {
            // redirect to login page
            window.location.href = '/login';
        }
        
        const user_id = localStorage.getItem('user_id');
        const getPublishers = async () => {
            axios.get(`http://localhost:8000/get-users/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                setPublishers(response.data);
            })
        }
        getPublishers();
   }) 

  const [publishers, setPublishers] = useState([]);
  const [books, setBooks] = useState([]);
  const [publisherName, setPublisherName] = useState('');
  const [publisherUsername, setPublisherUsername] = useState('');
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform actions like API calls to fetch publishers and books data based on input values
    // Update publishers and books state accordingly
  };

  // Function to handle publisher selection
  const handlePublisherSelect = (publisher) => {
    setSelectedPublisher(publisher);
    // Perform actions like API calls to fetch books data based on selected publisher
    // Update books state accordingly
  };

  console.log(publishers);

  return (
    <div className="container">
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>Publishers</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Signup</th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher, index) => (
                <tr key={publisher.id} onClick={() => handlePublisherSelect(publisher)}>
                  <td>{index + 1}</td>
                  <td>{publisher.first_name} {publisher.last_name}</td>
                  <td>{publisher.email}</td>
                  <td>{formatDate(publisher.register_date)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>Books</Card.Title>
          {selectedPublisher ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Book Title</th>
                  <th>Published Date</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.publishedDate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No publisher selected.</p>
          )}
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Add Publisher</Card.Title>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="publisherName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter publisher name"
                value={publisherName}
                onChange={(e) => setPublisherName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="publisherUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter publisher username"
                value={publisherUsername}
                onChange={(e) => setPublisherUsername(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminPage;
