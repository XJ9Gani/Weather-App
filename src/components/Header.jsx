import { useCallback } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Header() {
  const activeLink = useCallback(
    ({ isActive }) =>
      isActive
        ? "text-success   nav-link fs-2 m-3 fw-normal"
        : "text-light nav-link fs-2 m-3",
    []
  );

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          background: "#1a1a1a",
          zIndex: 2,
        }}
      >
        <Container className="d-flex justify-content-around align-items-center text-light fs-2">
          <Navbar>
            <NavLink to="/" className={activeLink}>
              Main
            </NavLink>
            <NavLink to="/page2" className={activeLink}>
              Page2
            </NavLink>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
