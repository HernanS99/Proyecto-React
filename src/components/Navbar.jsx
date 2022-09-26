import {  Navbar , Nav, Container } from 'react-bootstrap'

function NavMax() {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Pizzas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            );
}

export default NavMax