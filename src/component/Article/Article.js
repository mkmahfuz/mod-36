import React from 'react';
import { Card } from 'react-bootstrap';

const Article = (props) => {
    const {title,description,content} = props.article;
    return (
        <div>
            <Card style={{width:'18rem'}}>
                <Card.Body>
                    <Card.Header>{title}</Card.Header>
                <Card.Title>{description}</Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Text>{content}</Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Article;