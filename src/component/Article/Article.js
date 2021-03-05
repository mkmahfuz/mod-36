import React from 'react';
import { Card } from 'react-bootstrap';

const Article = (props) => {
    const {title,description,content,urlToImage} = props.article;
    return (
        <>
            <Card style={{width:'28rem'}}>
                <Card.Body>
                    <Card.Header>{title}</Card.Header>
                    <Card.Img variant='top' src={urlToImage}></Card.Img>
                <Card.Title>{description}</Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Text>{content}</Card.Text>
                </Card.Body>
            </Card>
            
        </>
    );
};

export default Article;