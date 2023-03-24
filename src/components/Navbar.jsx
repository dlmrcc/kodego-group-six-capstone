import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <div>
                    <img src="/bg-logo.png" height={"80"} width={"100"} className="img-fluid" />
                </div>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/history" as={NavLink}>
                        History
                    </Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}