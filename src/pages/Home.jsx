import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';

let hasLogin = true

let categories = [
  {
    id: 1,
    name: 'Hoa cúc',
    count: 150,
  },
  {
    id: 2,
    name: 'Hoa cưới',
    count: 250,
  },
  {
    id: 3,
    name: 'Hoa hồng',
    count: 350,
  },
  {
    id: 4,
    name: 'Hoa xuân',
    count: 450,
  },
]

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
  },
  {
    id: 4,
    name: 'Hoa xuân',
    type: 'Hoa xuân',
    price: 450,
    src: 'https://30flowershop.com/wp-content/uploads/2020/02/b9fd15d64201ba5fe310-555x615.jpg'
  },
  {
    id: 5,
    name: 'Hoa cúc',
    type: 'Hoa cúc',
    price: 150,
    src: 'https://30flowershop.com/wp-content/uploads/2020/02/b9fd15d64201ba5fe310-555x615.jpg'
  },
  {
    id: 6,
    name: 'Hoa cưới',
    type: 'Hoa cưới',
    price: 250,
    src: 'https://30flowershop.com/wp-content/uploads/2020/02/b9fd15d64201ba5fe310-555x615.jpg'
  },
  {
    id: 7,
    name: 'Hoa hồng',
    type: 'Hoa hồng',
    price: 350,
    src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg'
  },
  {
    id: 8,
    name: 'Hoa xuân',
    type: 'Hoa xuân',
    price: 450,
    src: 'https://30flowershop.com/wp-content/uploads/2020/02/e3441bfc3e75c72b9e64-555x615.jpg'
  }
]


const Home = () => {
  const FlowerType = props => (
    <div>
      <Button variant='flowerType' type="submit">{props.name} ({props.count})</Button>
    </div>
  )

  const Flower = product => (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.src} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-center">
            <p class="card-text">{product.type}</p>
            <div className='d-flex justify-content-around'>
              <p class="card-text">Giá bán: {product.price} VNĐ</p>
              <BsFillCartPlusFill href="#" className="mt-n3" color="pink" size={36}/>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )

  return (
    <div>
      <Container fluid className="mx-0 px-0">
        <Row className="mx-0 px-0">
          <Col md={2} className='mx-0 px-0'>
            <div className="categories">
              <style type="text/css">
                {`
    .btn-flowerType {
      background-color: white;
      color: lightpink;
      font-weight: bold;
      text-decoration: underline;
    }
    .btn-flowerType:hover {
      font-size: 18px;
      color: #ff5477;
    }
    .btn-flowerType:focus {
      box-shadow:none !important;
    }
    `}
              </style>
              {categories.map(item => (
                <FlowerType
                  key={item.id}
                  name={item.name}
                  count={item.count}>
                </FlowerType>
              ))}
            </div>
            <div className="decorate">
              <img src="https://i.pinimg.com/736x/4d/8e/01/4d8e014e29e576f3f2f20043f696bb90.jpg"></img>
              <img src="https://images.unsplash.com/photo-1616738935736-c0b9211e1f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDU0Mjk5fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"></img>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDagpLdYyOh9tJNdVsHJw3AnQhVwCmFtSYoetV4C-QAuvXImEi_UKMWzpqEqphxq4x2Zo&usqp=CAU"></img>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv942SBV1wANwFWnw0a45nIthCDtYv9h54uuRIlF9zgBfUSKzGtK6TsguDK_73qeILld4&usqp=CAU"></img>
              <img src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/44207/flower-iphone-x-wallpaper-ilikewallpaper_com.jpg"></img>
            </div>
          </Col>
          <Col md={10}>
            <div className='products'>
              {products.map(product => (
                <Flower
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  type={product.type}
                  src={product.src}>
                </Flower>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home