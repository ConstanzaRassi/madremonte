import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Biography from "../pages/Biography";
import Music from "../pages/Music";
import Nguba from "../pages/Nguba";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <Router>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          {/* <img src="{img}" /> */}
          Logo
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Conocimientos">
              <NavDropdown.Item href="#">Algunas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nguba">
                Nguba
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/biography">
              Biography
            </Nav.Link>
            <Nav.Link as={Link} to="/music">
              Music
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/biography" element={<Biography />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/nguba" element={<Nguba />}></Route>
      </Routes>
    </Router>
  );
}

export default NavbarMenu;
