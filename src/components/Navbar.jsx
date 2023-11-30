import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample({ searchTerm, handleSearchTermChange }) {
   return (
      <Navbar expand="lg" className="bg-gray-100 border-b-[1px] border-gray-300">
         <Container fluid>
            <Navbar.Brand href="/" >Hunter Music</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll

               >
                 
               </Nav>
               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                     value={searchTerm}
                     onChange={handleSearchTermChange}
                  />
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavScrollExample;