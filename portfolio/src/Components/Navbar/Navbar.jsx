// FROM AI, NEED REVIEW
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown'; // If you need dropdowns

    function NavbarComponent() {
      return (
        <>
        <div>
            <Navbar bg="light" expand="lg"> {/* Set background color and expand breakpoint */}
              <Container>
                <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* The hamburger icon toggle */}
                <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible content */}
                  <Nav className="me-auto"> {/* Left-aligned navigation links */}
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    {/* Add more Nav.Link or NavDropdown components as needed */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
        </>
      );
    }

    export default NavbarComponent;