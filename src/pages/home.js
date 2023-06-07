import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Button } from '@mui/material';
import formatDate from '../utils/date-format';

const Home = () => {
  const [publications, setPublications] = useState([]);

  // Fetch the latest publications from the backend
  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-publications'); // Replace with your backend API endpoint
      setPublications(response.data);
    } catch (error) {
      console.error('Error fetching publications:', error);
    }
  };

  // Sorting functions
  const sortPublicationsByTitleAZ = () => {
    const sortedPublications = [...publications].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setPublications(sortedPublications);
  };

  const sortPublicationsByTitleZA = () => {
    const sortedPublications = [...publications].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setPublications(sortedPublications);
  };

  const sortPublicationsByDate = () => {
    const sortedPublications = [...publications].sort(
      (a, b) => new Date(b.published_date) - new Date(a.published_date)
    );
    setPublications(sortedPublications);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Latest Publications
      </Typography>

      <div className="mb-3">
        <Button variant="outlined" onClick={sortPublicationsByTitleAZ}>
          Sort A-Z
        </Button>
        <Button variant="outlined" onClick={sortPublicationsByTitleZA}>
          Sort Z-A
        </Button>
        <Button variant="outlined" onClick={sortPublicationsByDate}>
          Sort by Date
        </Button>
      </div>

      <Grid container spacing={1}>
        {publications.map((publication) => (
          <Grid item key={publication.id} xs={12} sm={12} md={7}>
            <div className="card">
              <div className="card-body">
                <div className='d-flex w-100 justify-content-between' >
                  <h5 className="card-title">{publication.title}</h5>
                  <button className='btn btn-primary'>
                    <a href={`http://localhost:8000/download/${publication.file}`} className='text-decoration-none text-light'>Download</a>
                  </button>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">
                    {publication.author}
                </h6>
                <p className="card-text">{publication.description}</p>
                <p className="card-text">Published: {formatDate(Date(publication.published_date))}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
