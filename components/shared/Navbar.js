
import { Navbar, Nav } from 'react-bootstrap';

import Link from 'next/link';

const AppLink = ({ children, className, href }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

const AppNavbar = () => {

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
          Ashwin
        </AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="nav-link mr-3">
              Portfolio
            </AppLink>
            {/* <Nav.Link href="#" className="mr-3">Portfolio</Nav.Link> */}
            <AppLink href="/forum/categories" className="nav-link mr-3">
              Categories
            </AppLink>
            <AppLink href="/resume" className="nav-link mr-3">
              Resume
            </AppLink>
            <AppLink href="/portfolios" className="nav-link mr-3">
              Ask Me
            </AppLink>
          </Nav>
          <Nav>
            <AppLink href="/login" className="nav-link mr-3">
              Sign In
            </AppLink>
            <AppLink href="/register" className="nav-link mr-3 btn btn-success bg-green-2 bright">
              Sign Up
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;
