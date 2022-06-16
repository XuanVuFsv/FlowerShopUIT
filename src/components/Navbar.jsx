import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Login from "./Login";
import Payment from "./Payment";
import './Navbar.css'

let hasLogin = true

const Navbar = () => {
  return (
    <div>
      <Container fluid className="mx-0">
        <Row className="mx-0 pb-2 px-0 header">
          <Col className="logo">
            <img width={300} height={300} src="https://assets.flowerstore.vn/frontend/images/fs_vn_logo.svg" alt="" /></Col>
          <Col className="infor">
            <p className="text-success">(08) 9891234</p>
            <p>(Giờ mở cửa: 8:00 - 22:00 mỗi ngày)</p>
            <p><a className="fst-italic text-info" href="mailto:webmaster@example.com">uitflower@gmail.com</a></p>
            <a className="fst-italic text-bold" href="uitflower.com">uitflower.com</a>
          </Col>
          <Col>
          <Login hasLogin={hasLogin}></Login>
          </Col>
          <Col className="flex text-center">
            <Payment name={hasLogin ? 'Name':'...'}></Payment>
            <style type="text/css">
                    {`
    .btn-logout {
      background-color: white;
      color: red;
      border-width: 1px;
      border-style: solid;
      border-color: white;
    }
    .btn-logout:hover {
        color: red;
        font-weight: bold;
        border-style: solid;
        border-width: 1px;
        border-color: red;
    }
    .btn-route {
      font-size: 18px;
      background-color: pink;
      color: white;
    }
    .btn-route:hover {
      background-color: pink;
      color: white;
      font-weight: bold;
    }
    .btn-route:focus {
      box-shadow:none !important;
    }
    `}
                </style>
            <Button hidden={!hasLogin} variant="logout" type="submit">
              Đăng xuất
            </Button>
          </Col>
        </Row>
        <Row className="route">
          <Col md={4}><Button variant="route" type="submit">Danh mục hoa</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Trang chủ</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Tìm kiếm bó hoa</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Thêm bó hoa mới</Button></Col>
          <Col md={2}><Button variant="route" type="submit">Đăng ký mới</Button></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar