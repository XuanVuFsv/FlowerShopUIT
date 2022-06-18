import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './Cart.css'
import Button from 'react-bootstrap/Button'
import http from '../services/http'
import { useCartContext } from '../services/Cart.context'
import { isEmpty } from 'lodash'

const Cart = () => {
  const navigate = useNavigate()

  const [disabled, setDisabled] = useState(true)
  const [completed, setCompleted] = useState(false)

  const cart = useCartContext()

  useEffect(() => {
    setCompleted(true)
  }, [cart?.order?.status])

  const updateAddress = async (addr) => {
    if (completed) return
    const data = {
      address: addr,
    }

    const posting = await http.post('/cart', data)
    if (posting) {
      console.log('🚀 ~ file: ProductInfor.jsx ~ line 64 ~ AddToCart ~ posting', posting)
      alert('Done')
      setDisabled(true)
    }
  }

  const deleteItems = async (id) => {
    if (completed) return
    const data = { orderId: id, quantity: 0 }
    const posting = await http.post('/cart', data)
    if (posting) {
      console.log('🚀 ~ file: ProductInfor.jsx ~ line 64 ~ AddToCart ~ posting', posting)
      alert('Done')
      window.location.reload()
    }
  }

  const delivery = async () => {
    if (completed) return
    const data = { status: 'Done', orderId: cart?.order?._id }
    const posting = await http.post('/cart', data)
    if (posting) {
      console.log('🚀 ~ file: ProductInfor.jsx ~ line 64 ~ AddToCart ~ posting', posting)
      alert('Done')
      window.location.reload()
    }
  }

  const Product = (product) => (
    <div>
      <Container fluid className="">
        <Row className="">
          <Col md={6}>
            <Card style={{ width: '15rem' }}>
              <Card.Img
                onClick={() => {
                  console.log(product.id)
                  navigate('/productinfor/' + product.id)
                }}
                src={product.src}
              />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <b>
              Giá: <span style={{ color: 'red' }}>{product.price} VNĐ</span>
            </b>
            <br></br>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="product-count-incart">
                <Form.Label column sm="4">
                  Số lượng: {product.count}
                </Form.Label>
              </Form.Group>
            </Form>
            {!completed && (
              <>
                <Link to={'/productinfor/' + product.id}>Thay đổi số lượng mua</Link>
                <br></br>
                <Button
                  variant="danger"
                  onClick={() => deleteItems(product.id)}
                  style={{ marginTop: '10px' }}
                >
                  Xóa
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )

  return (
    <div className="Pay">
      <Container fluid className="pay-body">
        <Row className="mx-2 px-2">
          <Col md={1}></Col>
          <Col md={6} className="product-incart">
            {!isEmpty(cart?.items) &&
              cart?.items?.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  src={product.src}
                  count={product.count}
                  price={product.price}
                ></Product>
              ))}
          </Col>
          <Col md={1}></Col>
          <Col md={3} className="bill">
            <Row>
              <p>
                <b>
                  ĐƠN HÀNG:
                  {(cart?.order?._id || '').toUpperCase().substring(0, 8)}
                </b>
              </p>
              {!completed && (
                <InputGroup
                  className="my-3"
                  style={{
                    cursor: completed ? null : 'pointer',
                  }}
                >
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => {
                      if (completed) return
                      setDisabled(false)
                    }}
                  >
                    {' '}
                    Edit{' '}
                  </InputGroup.Text>
                  <Form.Control
                    defaultValue={cart?.order?.address}
                    aria-label="Address"
                    disabled={disabled}
                    aria-describedby="basic-addon1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        console.log({ key: e.key, v: e.target.value })
                        updateAddress(e.target.value)
                      }
                    }}
                  />
                </InputGroup>
              )}
            </Row>
            <p>
              <b>Thành tiền: </b>
              {cart?.order?.total || 0} VNĐ
            </p>
            {cart?.order?.status === 'Waiting' ? (
              <Button
                onClick={delivery}
                variant="success"
                style={{ marginTop: '10px', marginBottom: '5px' }}
              >
                Giao hàng
              </Button>
            ) : (
              <i>
                {' '}
                Đơn hàng Đang được vận chuyển tới <strong>{cart?.order?.address}</strong>{' '}
              </i>
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart
