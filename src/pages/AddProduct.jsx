import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddProduct.css'
import http from '../services/http';

let typeFlowers = ['Hoa cúc', 'Hoa xuân', 'Hoa cưới']
// let categories = []

const AddProduct = () => {
    // const [categories, setCategories] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [categories, setCategories] = useState([]);

    useEffect(() => {
        http.get('/category/')
        .then(function (response) {
            setCategories(response.data)
            // categories.map(item => console.log(item.name))
        })
        .catch(function (error) {
          console.log(error);
        });
    })

    return (
        <div className='add-form'>
            <img src="https://vnn-imgs-f.vgcloud.vn/2022/02/28/11/hoa2.jpg"></img>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="product-name">
                    <Form.Label column sm="2">
                        Tên bó hoa
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Nhập tên bó hoa" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="select-type">
                    <Form.Label column sm="2">
                        Loại hoa
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select>
                            { categories.map(item => (
                                <>
                                    <option>{item.name}</option>
                                </>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 mt-3" controlId="product-element">
                    <Form.Label column sm="2">
                        Bao gồm
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
                        <Form.Control type="number" placeholder="...VNĐ" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="file-upload" className="mb-3">
                    <Form.Label column sm="2">Hình ảnh</Form.Label>
                    <Col sm="10">
                        <Form.Control type="file" />
                    </Col>
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