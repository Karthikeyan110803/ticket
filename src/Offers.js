import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Offers=()=>{
    return(

        <div className="mt-5">
            <p className="text-center"><h4>Grab your tickets with our great Offers</h4></p>
            <div className="row">
                <div className="col ps-5">
            <Card className="border-0" style={{ width: '18rem', }}>
      <Card.Img variant="top" src="https://www.magiquestpf.com/wp-content/uploads/popcorn-coke.png" />
      <Card.Body>
        <Card.Title>FREE!!</Card.Title>
        <Card.Text>
        buy a couple of tickets and get our mini popcorn and coke as free!
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className="col">
    <Card className="border-0"style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://g.foolcdn.com/editorial/images/199159/movie-tickets.jpg" />
      <Card.Body>
        <Card.Title>FREE!!</Card.Title>
        <Card.Text>
        buy 10 tickets and get 2 tickets as free by our special offers
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col">
    <Card  className="border-0" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.pngmart.com/files/7/Discount-PNG-Image.png" />
      <Card.Body>
        <Card.Title>Discounts</Card.Title>
        <Card.Text>
        10% dicount for every couple of tickets
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
        </div>
        </div>
    )
}
export default  Offers;