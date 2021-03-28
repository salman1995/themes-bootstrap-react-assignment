// libs
import { Col, Row } from 'react-bootstrap';
// src
import banner from '../../images/bootstrap-stack.png'
import './Banner.scss';

function Banner() {
  return (
    <Row className="banner-row">
      <Col>
        <img src={banner} />
        <h1 class="display-1 text-bold">Build anything</h1>
        <h5 class="text-gray-soft text-regular">Themes built by or reviewed by Bootstrap's creators.</h5>
        <a class="button button-brand btn-lg mb-5 mb-lg-2" href="https://themes.getbootstrap.com/official-themes">Why our themes?</a>
      </Col>
    </Row>
  );
}

export default Banner;



