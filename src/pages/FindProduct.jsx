import { isEmpty } from 'lodash'
import { useState, useMemo, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import http from '../services/http'

import './FindProduct.css'

const FindProduct = () => {
  const [keyword, setKeyword] = useState('')
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value)
  }

  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 12,
    totalDocs: 0,
  })
  const PaginationItems = useMemo(() => {
    const { skip, limit, totalDocs } = pagination
    let active = Math.floor(skip / limit) + 1
    let items = []
    for (let number = 1; number <= Math.floor(totalDocs / limit) + 1; number++) {
      items.push(
        <Pagination.Item
          onClick={() => handlePagination(number)}
          key={number}
          active={number === active}
        >
          {number}
        </Pagination.Item>,
      )
    }
    return items
  }, [pagination])

  const handlePagination = (pageIdx) => {
    setPagination((p) => ({ ...p, skip: (pageIdx - 1) * p.limit }))
  }

  const onSearch = () => {
    setLoading(true)
    http
      .get('/item/' + `?search=${keyword}`)
      .then((res) => {
        setProducts(res.data.data)
        delete res.data.data
        console.log('🚀 ~ file: Home.jsx ~ line 36  ~ .then ~ res', res.data)
        setPagination({ ...res.data })
      })
      .catch((e) => {
        console.log(e)
        setProducts([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  let none = true

  const Flower = (product) => (
    <div>
      <Card style={{ width: '18rem', marginTop: '20px' }}>
        <Card.Img
          onClick={() => {
            console.log(product.id)
            navigate('/productinfor/' + product.id)
          }}
          variant="top"
          src={product.src}
        />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-center">
            <p class="card-text">{product.type}</p>
            <div className="d-flex justify-content-around">
              <p class="card-text" style={{ color: '#FF5AC5', fontWeight: 'bold' }}>
                Giá bán: {product.price} VNĐ
              </p>
              <BsFillCartPlusFill
                onMouseOver={({ target }) => (target.style.color = 'red')}
                onMouseOut={({ target }) => (target.style.color = 'pink')}
                href="#"
                className="mt-n3"
                color="pink"
                size={36}
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )

  return (
    <div className="products">
      <Container fluid className="mx-0 px-0 mt-5">
        <Row className="mx-0 px-0">
          <Col md={12} className="mx-0 px-0">
            <div>
              <Form.Group className="d-flex justify-content-center" controlId="find-product">
                <div className="find-product-input">
                  <Form.Control
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm"
                    value={keyword}
                    onChange={handleKeywordChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') onSearch()
                      console.log(
                        '🚀 ~ file: FindProduct.jsx ~ line 123 ~ FindProduct ~ e.key',
                        e.key,
                      )
                    }}
                  />
                </div>
                <Button onClick={onSearch}>Tìm kiếm</Button>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
      {loading ? (
        <Spinner animation="grow" style={{ marginTop: 50 }} />
      ) : isEmpty(products) ? (
        <span style={{ marginTop: 50 }}> Không Có Kết Quả Phù Hợp Với Tìm Kiếm: "{keyword}" </span>
      ) : (
        products.map((product) => (
          <Flower
            key={product?._id}
            id={product?._id}
            name={product.name}
            price={product.price}
            type={product?.category?.name}
            src={process.env.REACT_APP_BASE_URL + product?.image}
          ></Flower>
        ))
      )}
      <p className="message" hidden={none}>
        Không có sản sản phẩm phù hợp
      </p>
    </div>
  )
}

export default FindProduct
