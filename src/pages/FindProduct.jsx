import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsFillCartPlusFill } from "react-icons/bs";

import './FindProduct.css'

const FindProduct = () => {

  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const navigate = useNavigate();

  let none = true;

  let products = [
    {
      id: 1,
      name: 'Hoa cúc',
      type: 'Hoa cúc',
      price: 150,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg'
    },
    {
      id: 2,
      name: 'Hoa cưới',
      type: 'Hoa cưới',
      price: 250,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg'
    },
    {
      id: 3,
      name: 'Hoa hồng',
      type: 'Hoa hồng',
      price: 350,
      src: 'https://30flowershop.com/wp-content/uploads/2020/02/b9fd15d64201ba5fe310-555x615.jpg'
    }
  ]

  const Flower = product => (
    <div>
      <Card style={{ width: '18rem', marginTop: '20px'}}>
        <Card.Img
          onClick={() => {
            console.log(product.id)
            navigate("/productinfor/" + product.id);
          }}
          variant="top" src={product.src} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-center">
            <p class="card-text">{product.type}</p>
            <div className='d-flex justify-content-around'>
              <p class="card-text" style={{ color: "#FF5AC5", fontWeight: "bold" }}>Giá bán: {product.price} VNĐ</p>
              <BsFillCartPlusFill
                onMouseOver={({ target }) => target.style.color = "red"}
                onMouseOut={({ target }) => target.style.color = "pink"}
                href="#" className="mt-n3" color="pink" size={36} />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )

  return (
    <div className='products'>
      <Container fluid className="mx-0 px-0 mt-5">
        <Row className="mx-0 px-0">
          <Col md={12} className='mx-0 px-0'>
            <Form>
              <Form.Group className='d-flex justify-content-center' controlId="find-product">
                <div className='find-product-input'>
                  <Form.Control
                    type="text" placeholder="Nhập từ khóa tìm kiếm"
                    value={keyword}
                    onChange={handleKeywordChange}
                  />
                </div>
                <Button>
                  Tìm kiếm
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      {
        products.map(product => (
          <Flower
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            type={product.type}
            src={product.src}>
          </Flower>
        ))}
      <p className='message' hidden={none}>Không có sản sản phẩm phù hợp</p>
    </div>
  )
}

export default FindProduct