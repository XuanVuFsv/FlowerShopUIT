import React, { useEffect, useMemo } from 'react'
import http from '../services/http'
import { Row, Col } from 'react-bootstrap'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../services/Cart.context'
import numeral from 'numeral'

export const UserInfo = ({ name }) => {
  const { order } = useCartContext()

  const { status, total } = useMemo(() => order ?? {}, [order])

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
          <Link to="/yourcart">
            <BsFillCartPlusFill href="#" className="mt-n3" color="lightblue" size={36} />
            <b>
              Giỏ hàng của tôi{' '}
              {total && status === 'Waiting' && `- (${numeral(total).format('0,000')}) VNĐ`}
            </b>
          </Link>
        </Col>
      </Row>
    </>
  )
}
