import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ProductInfor.css"

import { BsFillCartPlusFill } from "react-icons/bs";
import { FcLeft } from "react-icons/fc";

const ProductInfor = () => {
  const { id } = useParams();

  const [counter, setCounter] = useState("");

  const handleCounterChange = (e) => {
    setCounter(Math.abs(Math.floor(e.target.value)));
  };

  let currentProduct = {
    id: '1',
    name: 'Hoa ...',
    type: 'Hoa ...',
    elements: 'Hoa 1, Hoa 2, Hoa 1, Hoa 2Hoa 1, Hoa 2vHoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2Hoa 1, Hoa 2',
    file: 'https://i.pinimg.com/736x/4d/8e/01/4d8e014e29e576f3f2f20043f696bb90.jpg',
    price: 50000
  }

  return (
    <div className='product-infor'>
      <Container fluid className="mx-0 px-0 mt-5">
        <Row className="mx-0 px-0">
          <Col md={6} className='mx-0 px-0'>
            <img src={currentProduct.file}></img>
          </Col>
          <Col md={6}>
            <p className='product-name'>{currentProduct.name}</p>
            <p className='product-type'><b>Loại hoa: </b>{currentProduct.type}</p>
            <p className='product-elements'><b>Bó hoa gồm: </b>{currentProduct.elements}</p>
            <p className='product-price'><b>Giá:</b><span className='price'>{currentProduct.price} VNĐ</span></p>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="product-price">
                    <Form.Label column sm="2">
                        Số lượng::
                    </Form.Label>
                    <Col sm="10"  className='product-count'>
                        <Form.Control
                        type="number" placeholder="..."
                        value={counter}
                        onChange={handleCounterChange}
                        />
                    </Col>
                </Form.Group>
            </Form>
            <Button>
            <BsFillCartPlusFill
                href="#" className="mt-n3" color="pink" size={36}/>
                Thêm vào giỏ hàng
            </Button>
            <br></br><br></br><br></br>
            <FcLeft></FcLeft><Link to="/">Trang chủ</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductInfor