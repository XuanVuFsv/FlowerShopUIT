import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className='add-form'>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="product-name">
                    <Form.Label column sm="2">
                        Tên bó hoa
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Nhập tên bó hoa" />
                    </Col>
                </Form.Group>
                <Form.Select>
                    <option>Loại hoa</option>
                </Form.Select>
                <Form.Group as={Row} className="mb-3" controlId="product-element">
                    <Form.Label column sm="2">
                        Thành phần
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Thành phần bó hoa..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="product-price">
                    <Form.Label column sm="2">
                        Giá bán:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="..." />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Hình ảnh bó hoa</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <style type="text/css">
                    {`
        .btn-add {
          background-color: pink;
          color: white;
          margin-top: -5px;
        }
        .btn-add:hover {
            color: white;
            font-weight: bold;
        }
        `}
                </style>
                <Button variant='add' type="submit">
                    Thêm
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct