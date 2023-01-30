import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavT = () => {
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={require("./img/icon.png")} alt="" height={"50px"} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='bG' style={{textAlign:"right"}}>
                            <Nav.Link className="rounded lStyle" href="#paslaugos">Paslaugos</Nav.Link>
                            <Nav.Link className="rounded lStyle" href="#nuotraukos" >Nuotraukos</Nav.Link>
                            <Nav.Link className="rounded lStyle" href="#kontaktai" >Kontaktai</Nav.Link>
                            <Nav.Link href="tel:+37061477770" className="top">
                                <button className="btn btn-warning" type="submit">SKAMBINTI</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavT;

