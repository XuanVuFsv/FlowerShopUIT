import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Footer.css'
// import { BsFillCartPlusFill } from "react-icons/bs";
// import { FcCloseUpMode, FcViewDetails, FcSearch, FcPlus, FcContacts, FcHome } from "react-icons/fc";

const Footer = () => {
    return (
        <div className='foot'>
            <Container>
                <Row className='footer-contact'>
                    <Col md={4}>
                        <img width={300} height={300} src="https://assets.flowerstore.vn/frontend/images/fs_vn_logo.svg" alt="" />
                        <p>Chỉ từ 199k - Mua hoa tươi không lo về giá. Giao hàng miễn phí trong ngày, khu vực nội thành Hà Nội, TpHCM. Thu tiền mặt tận nơi, chuyển khoản hoặc thanh toán qua thẻ. Lựa chọn hoàn hảo cho những dịp đặc biệt: Sinh Nhật, Kỉ Niệm, Lãng Mạn, Ngày Phụ Nữ, Ngày Valentine, Ngày của Mẹ. Ngoài ra, Flowerstore nhận đặt vòng hoa, kệ hoa khai trương, chúc mừng và cho các dịp khác.</p>
                        <Form>
                            <div className='d-flex justify-content-center align-content-center align-items-center'>
                            <Form.Group className="mb-1" controlId="newsemail">
                                <Form.Control className='h-25' type="email" placeholder="Nhập địa chỉ email..." />
                            </Form.Group>
                            <style type="text/css">
                                {`
        .btn-news {
          background-color: pink;
          color: white;
          margin-top: -5px;
        }
        .btn-news:hover {
            color: white;
            font-weight: bold;
        }
        `}
                            </style>
                            <Button variant='news' type="submit">
                                Nhận thông báo
                            </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={2}></Col>
                    <Col md={2}></Col>
                    <Col md={2}></Col>
                </Row>
                <Row className='ver'>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer