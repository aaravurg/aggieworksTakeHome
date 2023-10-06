import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
export const Home = () => {
    const [data, setData] = useState([]);
    
      useEffect(() => {
        // Make a GET request to your API endpoint
        axios.get('http://localhost:3001/review')
          .then((response) => {
            // Update the state with the fetched data
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
      return (
        <Container className="mt-5">
          
          <Row>
            
            
            <Col md={8}>
            {data.map((dat, i) => {
                return (
                    <Card>
                    <Card.Img src={data[i].imageUrl} />

                <Card.Body>
                  <Card.Title>{data[i].songName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{data[i].artistName}</Card.Subtitle>
                  <Card.Text>{data[i].songReview}</Card.Text>
                  <Card.Text>Release Date: {data[i].releaseDate}</Card.Text>
                  <Card.Text>Review by: {data[i].userOwner}</Card.Text>
                </Card.Body>
              </Card>
                )
            })}
              
            </Col>
          </Row>
        </Container>
      );
}