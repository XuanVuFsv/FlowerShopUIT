import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Cart.css'
import Button from 'react-bootstrap/Button';

const Cart = () => {

  const navigate = useNavigate();

  const [counter, setCounter] = useState("");

  const handleCounterChange = (e) => {
    setCounter(Math.abs(Math.floor(e.target.value)));
  };

  let cart = [
    {
      id: 1,
      name: 'Hoa cúc',
      type: 'Hoa cúc',
      price: 150,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg',
      count: 1
    },
    {
      id: 2,
      name: 'Hoa cưới',
      type: 'Hoa cưới',
      price: 250,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg',
      count: 1
    },
    {
      id: 3,
      name: 'Hoa hồng',
      type: 'Hoa hồng',
      price: 350,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/b9fd15d64201ba5fe310-555x615.jpg',
      count: 1
    }
  ]

  const Product = product => (
    <div>
      <Container fluid className="">
        <Row className="">
          <Col md={6}>
            <Card style={{ width: '15rem' }}>
              <Card.Img
                onClick={() => {
                  console.log(product.id)
                  navigate("/productinfor/" + product.id);
                }}
                src={product.src} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <b>Giá: <span style={{ color: 'red' }}>{product.price} VNĐ</span></b><br></br>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="product-count-incart">
                <Form.Label column sm="4">
                  Số lượng: {product.count}
                </Form.Label>
              </Form.Group>
            </Form>
            <Link to= {"/productinfor/" + product.id}>Thay đổi số lượng mua</Link>
            <br></br>
            <Button variant="danger"  style={{marginTop: '10px' }}>Xóa</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )

  return (
    <div className='Pay'>
      <Container fluid className="pay-body">
        <Row className="mx-2 px-2">
          <Col md={1}></Col>
          <Col md={6} className="product-incart">
            {cart.map(product => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                src={product.src}
                count={product.count}
                price={product.price}
              >
              </Product>
            ))}
          </Col>
          <Col md={1}></Col>
          <Col md={3} className="bill">
            <p>Thành tiền: ...</p>
            <Button variant="success"  style={{marginTop: '10px' }}>Giao hàng</Button>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart