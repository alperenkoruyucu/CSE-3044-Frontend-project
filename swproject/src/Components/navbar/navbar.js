import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUsers,faBook } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbarx() {
  return (
    <Navbar className='navbarcontainer'>
      <Container>
        <Navbar.Brand style={{fontFamily:"Times New Roman",fontSize:"18px",paddingRight:"100px"}} href="#home">
          <FontAwesomeIcon icon={faHome} style={{marginRight: "10px"}} />
          Ingredients
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
             <Nav.Link style={{fontFamily:"Times New Roman",fontSize:"18px",paddingRight:"100px"}} href="/recipes">
                <FontAwesomeIcon icon={faBook} style={{marginRight: "10px"}} />
                Recipes
            </Nav.Link>
            <Nav.Link style={{fontFamily:"Times New Roman",fontSize:"18px",paddingRight:"100px"}} href="/profile">
                <FontAwesomeIcon icon={faUsers} style={{marginRight: "10px"}} />
                Profile
            </Nav.Link>
            <Nav.Link style={{fontFamily:"Times New Roman",fontSize:"18px",paddingRight:"100px"}} href="/signup">
                <FontAwesomeIcon icon={faUsers} style={{marginRight: "10px"}} />
                Sign Up
            </Nav.Link>
            <Nav.Link style={{fontFamily:"Times New Roman",fontSize:"18px",paddingRight:"100px"}} href="/logout">
                <FontAwesomeIcon icon={faUsers} style={{marginRight: "10px"}} />
                Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarx;
