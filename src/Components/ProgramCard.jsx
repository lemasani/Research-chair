import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ExpandableCard({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = content.split(' ');
  const displayContent = words.length > 100 && !isExpanded ? words.slice(0, 100).join(' ') + '...' : content;

  return (
    <Card style={{ width: '18rem', border: 'none',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Body>
        <Card.Title className='heading'>{title}</Card.Title>
        <Card.Text>
          {displayContent}
        </Card.Text>
        {words.length > 100 && (
          <Button variant="primary" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}