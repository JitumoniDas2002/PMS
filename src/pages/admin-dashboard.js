import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import formatDate from '../utils/date-format';

const AdminDashboard = () => {
    return (
        // make two buttons with links to two diffrent pages
        <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
            <h1 className='mb-3'>Admin Dashboard</h1>
            {/* make three cards that gets linked to pages */}
            <div className='d-flex flex-row w-100 justify-content-center align-items-center'>
                <Card className='m-3' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Publishers</Card.Title>
                        <Card.Text>
                            List all Publishers
                        </Card.Text>
                        <Button href="/admin/list-publishers">List Publishers</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Publications</Card.Title>
                        <Card.Text>
                            Show User Publications
                        </Card.Text>
                        <Button href="/admin/dashboard/list-publications">List Publications</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Profile</Card.Title>
                        <Card.Text>
                            Admin Profile
                        </Card.Text>
                        <Button href="/admin/dashboard/add-publications">View</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>


    )
};

export default AdminDashboard;
