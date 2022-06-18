import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Login from "./Login";
import Payment from "./Payment";
import './Navbar.css'
import { FcPhone, FcClock, FcMenu, FcGlobe } from "react-icons/fc";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home'

let hasLogin = false

const Navbar = () => {
  return (
    <div className="nav-body">
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
    `}
      </style>
      <Container fluid className="mx-0">
        <Row className="mx-0 pb-2 px-0 header">
          <Col className="logo">
            <Link to="/"><img width={300} height={300} src="https://assets.flowerstore.vn/frontend/images/fs_vn_logo.svg" alt="" /></Link>
          </Col>
          <Col className="infor">
            <p className="text-success"><FcPhone></FcPhone> (08) 9891234</p>
            <p><FcClock></FcClock> (Giờ mở cửa: 8:00 - 22:00 mỗi ngày)</p>
            <p><a className="fst-italic text-info" href="mailto:webmaster@example.com"><FcMenu></FcMenu> uitflower@gmail.com</a></p>
            <a className="fst-italic text-bold" href="uitflower.com"><FcGlobe></FcGlobe> uitflower.com</a>
          </Col>
          <Col>
            <Login hasLogin={hasLogin}></Login>
          </Col>
          <Col className="flex text-center">
            <Payment name={hasLogin ? 'Name' : '...'}></Payment>
            <Button hidden={!hasLogin} variant="logout" type="submit">
              Đăng xuất
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar