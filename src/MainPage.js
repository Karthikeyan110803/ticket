import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const MainPage = () => {
 const [movieData,setmovieData]=useState([])
 const navigate = useNavigate();
const history = useHistory();

  useEffect(()=>{
    fetch("http://localhost:8080/admin/get")
    .then(res => res.json())
       .then((data)=>{
        console.log(data);
        setmovieData(data);
       })
  },[])

  function Mdetails(movie){
    history.push({
      pathname: '/MovieDetails',
      state: { movie: movie }
    });
  }
  
  return (
    <>
    <div>
    <Navbar expand="lg" className="btnn ">
      <Container>
        <Navbar.Brand className='text-white' href="#home">K Cinemas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="abt">About</Nav.Link>
            <Nav.Link className='text-white' href="off">Offers</Nav.Link>
            <Nav.Link className='text-white' href="#link">contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      <div className="container pt-5">
        <div className="row justify-content-between">
           {(movieData) && movieData.map(movie=>( <div className="col-md-3 text-center" >
       
    <Card  style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={movie.image} style={{width:"18rem",height:"400px"}}/>
      <Card.Body>
       <card-title><h3>{movie.moviename}</h3></card-title>
       <card-title><h4>{movie.rating}</h4></card-title>
        <div className="text-center"><Button className='cq' onClick={()=>movie(movie)}>Book now</Button></div>
      </Card.Body>
    </Card>
          
    </div>
  
  ))}
 </div>

  

 
 </div>
 </>
  );
  
}

export default MainPage;
