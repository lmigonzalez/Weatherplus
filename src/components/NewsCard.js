import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsCard = () =>{




	return(
		<Card className="card-news-container">
        <Card.Body className="body-news-container">
          <Card.Text className="news-text">
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="success" className="news-link">Read more...</Button>
        </Card.Body>
      </Card>
	)
}


export default NewsCard;