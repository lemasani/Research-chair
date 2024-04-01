import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NewsCard({ news, date, place, id }) {
  
  return (
    <Card style={{ width: '12rem', border: 'none' }}>
      <Card.Body>
        <Card.Title>{news}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date} {place}</Card.Subtitle>
        {/* <Button variant="primary" onClick={handleClick}>Read More</Button> */}
        <Link to={`/news/${id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
}