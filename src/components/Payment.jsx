import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Payment.css'

const Payment = ({name}) => {
  return (
    <>
    <Container fluid className='flex text-center'>
        <Row className="mx-0 px-0">
          <Col className='title'>Có thể thanh toán bằng</Col>
        </Row>
        <Row className='flex justify-content-center payment mt-2'>
          <Col><img src='http://static.ybox.vn/2022/4/4/1649334330094-anhybox%20(32).png'></img></Col>
          <Col><img src='https://alodaohan.com/wp-content/uploads/2020/11/the-mastercard-la-gi-4.jpg'></img></Col>
          <Col><img src='https://vietjet.asia/assets/uploads/2017/06/L%E1%BB%A3i-%C3%ADch-t%E1%BB%AB-vi%E1%BB%87c-s%E1%BB%AD-d%E1%BB%A5ng-visa-card.png'></img></Col>
        </Row>
        <Row className="mx-0 px-0">
          <Col>
          <p>Xin chào <b className='text-success name'>{name}</b></p>
          </Col>
        </Row>
        <Row className="mx-0 px-0 bg-light">
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Payment