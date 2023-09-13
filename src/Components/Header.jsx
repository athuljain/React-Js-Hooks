import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../Styles/Header.css"


export default function Header(){
    return(
        <div>
       <Navbar bg="primary" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="/">React Hooks</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/useState">useState</Nav.Link>
      <Nav.Link href="/useEffect">useEffect</Nav.Link>
      <Nav.Link href="/useContext">useContext</Nav.Link>
      <Nav.Link href="/useRef">useRef</Nav.Link>
      <Nav.Link href="/useProps">Props</Nav.Link>
    </Nav>
  </Container>
</Navbar>
        </div>
    )
}