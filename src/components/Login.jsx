import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
import { useForm } from 'react-hook-form'
import http from '../services/http'

const Login = ({ userInfo, setUserInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (body) => {
    const { data } = await http.post('/login', body)

    localStorage.setItem('accessToken', data?.token)
    delete data?.token
    setUserInfo(data)
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  useEffect(() => {
    const info = localStorage.getItem('userInfo')
    setUserInfo(JSON.parse(info))
    return () => {
      setUserInfo()
    }
  }, [])

  return (
    <>
      <div className="login">
        {!userInfo ? (
          <>
            {' '}
            <div className="text-center title">
              <b>Đăng nhập</b>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="h-25"
                  type="email"
                  placeholder="Nhập địa chỉ email..."
                  {...register('email', { required: true })}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  className="h-25"
                  type="password"
                  placeholder="Nhập mật khẩu..."
                  {...register('password', { required: true })}
                />
              </Form.Group>
              {/* <Form.Group className="mb-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                    </Form.Group> */}
              <Button type="submit">Đăng nhập</Button>
            </Form>
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  )
}

export default Login
