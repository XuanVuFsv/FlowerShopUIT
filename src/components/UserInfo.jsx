import React, { useEffect } from 'react'
import http from '../services/http'
import { Row, Col } from 'react-bootstrap'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const UserInfo = ({ name }) => {
  // useEffect(() => {
  //   const getCurrentCart = async () => {
  //     const { data: cart } = await http.get('/cart/')
  //     console.log('🚀 ~ file: UserInfo.jsx ~ line 8 ~ getCurrentCart ~ cart', cart)
  //   }
  //   getCurrentCart()
  //   return () => {}
  // }, [])

  return (
    <>
      <Row className="mx-0 px-0">
        <Col>
          <p>
            Xin chào <b className="text-success name">{name}</b>
          </p>
        </Col>
      </Row>
      <Row className="mx-0 px-0">
        <Col>
          <BsFillCartPlusFill href="#" className="mt-n3" color="pink" size={36} />
          <Link to="/yourcart">
            <b>Giỏ hàng của tôi</b>
          </Link>
        </Col>
      </Row>
    </>
  )
}
