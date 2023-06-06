import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import formatDate from '../utils/date-format';

const ListUsers = () => {

   useEffect(() => {
    const token = localStorage.getItem('admin-token');
        if (!token) {
            // redirect to login page
            window.location.href = '/login';
        }
        
        const admin_id = localStorage.getItem('admin_id');
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
                <tr key={publisher.id}>
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
    </div>
  );
};

export default ListUsers;
