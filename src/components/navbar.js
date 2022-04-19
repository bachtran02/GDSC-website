import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Container } from 'reactstrap';
import logo from '../static/img/logo.svg'
import da_logo from '../static/img/deanza_logo.svg'

export default function NavBar() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="xxl" bg="light" variant="light" className="justify-content-center">
        <Container>
          <div className='navbar-brand'>
        <Navbar.Brand href="#"> 
          <a><img src={logo} width='60px'/>
             <img src={da_logo} width='130px' style={{marginLeft: 20}}/>
          </a>
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>
          <Nav className='ms-auto'>
              <Nav.Link href="#about-section">About</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#materials">Materials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
