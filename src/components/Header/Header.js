// libs
import { Col, Form, FormControl, InputGroup, Nav, NavDropdown, Row } from 'react-bootstrap';
import { map, values, pipe } from 'ramda';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// src
import './header.scss';
import { connect } from 'react-redux';

function Header({
  categories
}) {
  return (
    <Row className="App-header">
      <Col xs lg="7">
        <Nav>
          <Nav.Item>
            <Link eventKey="home" to="/home">
              Bootstrap Themes
            </Link>
          </Nav.Item>
          <NavDropdown title="Categories" id="nav-dropdown">
            {pipe(
              values,
              map(category => (
                <NavDropdown.Item eventKey={category.key}>
                  <Link eventKey="home" to={`/categories/${category.key}`}>{category.label}</Link>
                </NavDropdown.Item>
              ))
            )(categories)}
          </NavDropdown>
          <Nav.Item>
            <Link eventKey="why" to="/why">
              Why Our Themes?
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link eventKey="guide" to="/guide">
              The Guide
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs lg="2">
        <Form inline>
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <AiOutlineSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="search" placeholder="Search" />
          </InputGroup>
        </Form>
      </Col>
      <Col xs lg="3">
        <Nav>
          <Nav.Item>
            <Link eventKey="signin" to="/signin">
              Sign In
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link eventKey="signup" to="/signup">
              Sign Up
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}

export default connect(state => ({
  categories: state.app.categories
}))(Header);
