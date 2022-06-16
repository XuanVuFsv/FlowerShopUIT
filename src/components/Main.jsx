import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let hasLogin = true

const Main = () => {
  return (
    <div>
      <Container fluid className="mx-0">
        <Row className="mx-0 pb-2 px-0">
        <Col md={4}>
        <Row className="categories">
          <Col md={4}><Button variant="route" type="submit">Danh mục hoa</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Trang chủ</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Tìm kiếm bó hoa</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Thêm bó hoa mới</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Đăng ký mới</Button></Col>
        </Row>
        </Col>
        <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main