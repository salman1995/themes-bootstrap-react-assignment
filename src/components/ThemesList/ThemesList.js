// libs
// src
import { Col, Row } from 'react-bootstrap';
import ThemeItem from './ThemeItem';
import './ThemesList.scss';

function ThemesList({
  themes = []
}) {
  return (
    <Row>
      {themes.map(theme => (
        <Col lg={6}>
          <ThemeItem theme={theme} />
        </Col>
      ))}
    </Row>
  );
}

export default ThemesList;
