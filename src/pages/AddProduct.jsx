import React, { useEffect, useMemo, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './AddProduct.css'
import http from '../services/http'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

let typeFlowers = ['Hoa cúc', 'Hoa xuân', 'Hoa cưới']
// let categories = []

const AddProduct = () => {
    const [image, setImage] = useState()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState } = useForm()
    const [categories, setCategories] = useState([])

  useEffect(() => {
    http
      .get('/category/')
      .then(function (response) {
        setCategories(response.data)
        // categories.map(item => console.log(item.name))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setImage(URL.createObjectURL(value['file'][0]))
      console.log({ value, name, type })
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (body) => {
    const form = new FormData()
    Object.keys(body).forEach((key) => {
      console.log(key, typeof body[key])
      if (key === 'file') form.append(key, body[key][0])
      else form.append(key, body[key])
    })

    console.log('🚀 ~ file: AddProduct.jsx ~ line 44 ~ onSubmit ~ ALL', form.get('file'))
    const { data: item } = await http.post('/item/admin/add', form, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    })
    if (item) {
      navigate('/productinfor/' + item?._id)
    }
  }

  return (
    <div className="add-form">
      <img className="submit-image" src={image} alt="no image"></img>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3" controlId="product-name">
          <Form.Label column sm="2">
            Tên bó hoa
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Nhập tên bó hoa"
              {...register('name', { required: true })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="select-type">
          <Form.Label column sm="2">
            Loại hoa
          </Form.Label>
          <Col sm="10">
            <Form.Select {...register('category', { required: true })}>
              {categories.map((item) => (
                <>
                  <option key={item?._id} value={item?._id}>
                    {item.name}
                  </option>
                </>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 mt-3" controlId="product-element">
          <Form.Label column sm="2">
            Mô Tả
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Thành phần bó hoa..."
              {...register('description', { required: true })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="product-price">
          <Form.Label column sm="2">
            Giá bán:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="...VNĐ"
              {...register('priceString', { required: true })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="file-upload" className="mb-3">
          <Form.Label column sm="2">
            Hình ảnh
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => {
                console.log('====================================')
                console.log({ ...e.target })
                console.log('====================================')
              }}
              {...register('file', { required: true })}
              type="file"
            />
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
        <Button variant="add" type="submit">
          Thêm
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct
