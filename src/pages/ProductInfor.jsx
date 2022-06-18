import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './ProductInfor.css'

import { BsFillCartPlusFill } from 'react-icons/bs'
import { FcLeft } from 'react-icons/fc'
import http from '../services/http'
import { useCartContext } from '../services/Cart.context'
import { isEmpty } from 'lodash'

const ProductInfor = () => {
  const { id } = useParams()

  const [counter, setCounter] = useState('')
  const [reload, setReload] = useState(false)
  const [currentProduct, setCurrentProduct] = useState('')
  const { items, refresh } = useCartContext()

  const isExistCart = useMemo(
    () =>
      !isEmpty(items) && !isEmpty(currentProduct)
        ? items.find((o) => o?.id === currentProduct?.id)
        : null,
    [items, currentProduct],
  )

  const handleCounterChange = (e) => {
    setCounter(Math.abs(Math.floor(e.target.value)))
  }

  useEffect(() => {
    const loadItem = async () => {
      const { data: itemInfo } = await http.get('/item/' + id)
      console.log('🚀 ~ file: ProductInfor.jsx ~ line 27 ~ loadItem ~ itemInfo', itemInfo)
      setCurrentProduct({
        id: itemInfo?._id,
        name: itemInfo?.name,
        type: itemInfo?.category?.name,
        elements: itemInfo?.description,
        file: `${process.env.REACT_APP_BASE_URL}` + itemInfo?.image,
        price: itemInfo?.price,
      })
    }
    loadItem()
  }, [id, reload])

  useEffect(() => {
    setCounter(isExistCart?.count)
  }, [isExistCart, reload])

  const AddToCart = async () => {
    const data = {
      itemId: currentProduct?.id,
      quantity: counter,
    }

    const posting = await http.post('/cart', data)
    if (posting) {
      console.log('🚀 ~ file: ProductInfor.jsx ~ line 64 ~ AddToCart ~ posting', posting)
      alert('Done')
      // setReload((r) => !r)
      refresh()
    }
  }

  return (
    <div className="product-infor">
      <Container fluid className="mx-0 px-0 mt-5">
        <Row className="mx-0 px-0">
          <Col md={6} className="mx-0 px-0">
            <img src={currentProduct.file}></img>
          </Col>
          <Col md={6}>
            <p className="product-name">{currentProduct.name}</p>
            <p className="product-type">
              <b>Loại hoa: </b>
              {currentProduct.type}
            </p>
            <p className="product-elements">
              <b>Mô tả: </b>
              {currentProduct.elements}
            </p>
            <p className="product-price">
              <b>Giá:</b>
              <span className="price">{currentProduct.price} VNĐ</span>
            </p>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="product-price">
                <Form.Label column sm="2">
                  Số lượng:
                </Form.Label>
                <Col sm="10" className="product-count">
                  <Form.Control type="number" value={counter} onChange={handleCounterChange} />
                </Col>
              </Form.Group>
            </Form>
            <Button onClick={AddToCart}>
              <BsFillCartPlusFill href="#" className="mt-n3" color="lightcoral" size={36} />
              {isExistCart?.count ? 'Cập nhật giỏ hàng' : 'Thêm vào giỏ hàng'}
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <FcLeft></FcLeft>
            <Link to="/">Trang chủ</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductInfor
