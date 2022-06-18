import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = ({hasLogin}) => {
    console.log(hasLogin);
    if (!hasLogin) 
    {
        return (
            <div className='login'>
                <div className='text-center title'><b>Đăng nhập</b></div>
    
                <Form>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='h-25' type="email" placeholder="Nhập địa chỉ email..." />
                    </Form.Group>
    
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control className='h-25' type="password" placeholder="Nhập mật khẩu..." />
                    </Form.Group>
                    {/* <Form.Group className="mb-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                    </Form.Group> */}
                    <Button type="submit">
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        )
    }
    else return (<></>)
}

export default Login