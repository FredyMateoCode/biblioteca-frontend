import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/*Desarrollo*/
import logo from '../assets/imagenes/Logo.png';

function Navbar001() {
  const expand = 'lg';

  return (
    <Navbar expand={expand} className="bg-danger mb-3" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          Divina Pastora
        </Navbar.Brand>
        <Button variant="dark">Acceder</Button>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Noticias</Nav.Link>
              <NavDropdown
                title="Libros"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Ciencias Sociales</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Literatura</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Matemática</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Historia y Geografía</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button className="bg-primary" variant="outline-light">Buscar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}


export default Navbar001;
