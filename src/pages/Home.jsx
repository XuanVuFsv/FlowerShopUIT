import { useEffect, useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FcCloseUpMode, FcContacts, FcHome, FcPlus, FcSearch } from 'react-icons/fc'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useCartContext } from '../services/Cart.context'
import http from '../services/http'
import './Home.css'
import AddProduct from './AddProduct.jsx'
import Cart from './Cart.jsx'
import FindProduct from './FindProduct.jsx'
import Pay from './Pay.jsx'
import ProductInfor from './ProductInfor.jsx'
import Signout from './Signout.jsx'
import Signup from './Signup.jsx'
import numeral from 'numeral'
const Home = () => {
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  const [products, setProducts] = useState([])
  const [q, setQuery] = useState({
    skip: 0,
    limit: 15,
    totalDocs: 0,
    category: null,
  })
  const PaginationItems = useMemo(() => {
    const { skip, limit, totalDocs } = q
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
    return items.length > 1 ? items : []
  }, [q])

  const handlePagination = (pageIdx) => {
    setQuery((p) => ({ ...p, skip: (pageIdx - 1) * p.limit }))
  }

  const onFilterByCategory = (id) => {
    console.log('🚀 ~ file: Home.jsx ~ line 50 ~ onFilterByCategory ~ id', id)
    setQuery((q) => ({ ...q, category: id }))
    navigate('/')
  }

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

    http
      .get('/item/' + `?limit=${q.limit}&skip=${q.skip}&category=${q.category}`)
      .then((res) => {
        setProducts(res.data.data)
        delete res.data.data
        console.log('🚀 ~ file: Home.jsx ~ line 36  ~ .then ~ res', res.data)
        setQuery((q) => ({ ...q, ...res.data }))
      })
      .catch((e) => {
        console.log(e)
      })
  }, [q.skip, q.category])

  const { items, order } = useCartContext()

  const Flower = (product) => {
    const isCart = useMemo(
      () => (order?.status === 'Waiting' ? items?.find((o) => o?.id === product?.id)?.count : null),
      [items, product],
    )
    return (
      <div>
        <Card style={{ width: '18rem', height: '24rem' }}>
          <Card.Img
            onClick={() => {
              console.log(product.id)
              navigate('/productinfor/' + product.id)
            }}
            variant="top"
            src={product.src}
            style={{ height: '18rem', width: 'auto' }}
          />
          <Card.Body className="text-center">
            <Card.Title>{product.name} </Card.Title>
            <Card.Text className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <p
                  class="card-text"
                  style={{ color: '#FF5AC5', fontWeight: 'bold', marginBottom: 0 }}
                >
                  Giá bán: {numeral(product.price).format('0,000')} VNĐ
                </p>
                <BsFillCartPlusFill
                  onMouseOver={({ target }) => (target.style.color = 'red')}
                  onMouseOut={({ target }) => (target.style.color = 'pink')}
                  href="#"
                  className="mt-n3"
                  color={!isCart ? 'lightpink' : 'red'}
                  size={24}
                  onClick={() => {
                    console.log(product.id)
                    navigate('/productinfor/' + product.id)
                  }}
                />

                <span style={{ color: 'red', fontWeight: 'bold', marginBottom: 0, marginLeft: 5 }}>
                  {isCart && `(${isCart})`}
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }

  return (
    <div className="home-body">
      <Container fluid className="mx-0 px-0">
        <style type="text/css">
          {`
    .btn-route a {
      font-size: 18px;
      background-color: pink;
      color: white;
    }
    .btn-route a:hover {
      background-color: pink;
      color: white;
      font-weight: bold;
    }
    .btn-route a:focus {
      box-shadow:none !important;
    }
    .btn-route {
      font-size: 18px;
      background-color: pink;
      color: white;
    }
    .btn-route:hover {
      background-color: pink;
      color: white;
      font-weight: bold;
    }
    .btn-route:focus {
      box-shadow:none !important;
    }
    `}
        </style>
        <Row className="route d-flex justify-content-around m-lg-1">
          <Col md={2}>
            <Button variant="route">Danh mục hoa</Button>
          </Col>
          <Col md={2}>
            <Button variant="route">
              <FcHome></FcHome>
              <Link to="/"> Trang chủ</Link>
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="route">
              <FcSearch></FcSearch>
              <Link to="/findproduct"> Tìm kiếm bó hoa</Link>
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="route">
              <FcPlus></FcPlus>
              <Link to="/addproduct"> Thêm bó hoa</Link>
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="route">
              <FcContacts></FcContacts>
              <Link to="/signup"> Đăng ký mới</Link>
            </Button>
          </Col>
        </Row>
        <Row className="mx-0 px-0">
          <Col md={2} className="mx-0 px-0">
            <div className="mx-4 categories">
              <style type="text/css">
                {`
    .btn-flowerType {
      background-color: white;
      color: lightpink;
      font-weight: bold;
      text-decoration: underline;
    }
    .btn-flowerType:hover {
      font-size: 17px;  
      color: #ff5477;
    }
    .btn-flowerType:focus {
      box-shadow:none !important;
    }
    `}
              </style>
              <FlowerType
                onFilterByCategory={onFilterByCategory}
                key={'all'}
                id={null}
                name={'Tất Cả'}
                count={'__'}
              ></FlowerType>
              {categories.map((item) => (
                <FlowerType
                  onFilterByCategory={onFilterByCategory}
                  key={item?._id}
                  id={item?._id}
                  name={item?.name}
                  count={item?.count || 0}
                ></FlowerType>
              ))}
            </div>
            <div className="decorate">
              <img src="https://i.pinimg.com/736x/4d/8e/01/4d8e014e29e576f3f2f20043f696bb90.jpg"></img>
              <img src="https://images.unsplash.com/photo-1616738935736-c0b9211e1f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDU0Mjk5fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"></img>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDagpLdYyOh9tJNdVsHJw3AnQhVwCmFtSYoetV4C-QAuvXImEi_UKMWzpqEqphxq4x2Zo&usqp=CAU"></img>
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv942SBV1wANwFWnw0a45nIthCDtYv9h54uuRIlF9zgBfUSKzGtK6TsguDK_73qeILld4&usqp=CAU"></img>
              <img src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/44207/flower-iphone-x-wallpaper-ilikewallpaper_com.jpg"></img> */}
            </div>
          </Col>
          <Col md={10}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div>{q.category && <h1>{products[0]?.category?.name}</h1>}</div>
                    <div className="products">
                      {products.map((product) => (
                        <Flower
                          key={product?._id}
                          id={product?._id}
                          name={product?.name}
                          price={product?.price}
                          type={product?.category?.name}
                          src={process.env.REACT_APP_BASE_URL + product?.image}
                        />
                      ))}
                    </div>
                    <Pagination style={{ justifyContent: 'center' }}>{PaginationItems}</Pagination>
                  </>
                }
              />
              <Route path="/addproduct" element={<AddProduct></AddProduct>} />
              <Route path="/yourcart" element={<Cart></Cart>} />
              <Route path="/findproduct" element={<FindProduct></FindProduct>} />
              <Route path="/payment" element={<Pay></Pay>} />
              <Route path="/productinfor" element={<Home />} exact />
              <Route path="/productinfor/:id" element={<ProductInfor />} />
              {/* <Route path="/productinfor" element={<ProductInfor></ProductInfor>} /> */}
              <Route path="/signout/:name" element={<Signout></Signout>} />
              <Route path="/signup" element={<Signup></Signup>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home

export const FlowerType = (props) => (
  <div>
    <style type="text/css">
      {`
.btn-flowerType {
background-color: #FFF0FA;
}
`}
    </style>
    <div className="d-flex align-items-center">
      <FcCloseUpMode></FcCloseUpMode>
      <Button onClick={() => props.onFilterByCategory(props.id)} variant="flowerType" type="submit">
        {props.name} ({props.count})
      </Button>
    </div>
  </div>
)
