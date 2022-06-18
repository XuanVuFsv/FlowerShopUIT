import React from 'react'
import { useState } from 'react';
import './Signup.css'
import axios from 'axios';
import { BsPhoneFill } from 'react-icons/bs';
import http from '../services/http';

const Signup = () => {
  // States for registration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');


  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  let message = ''
  let regexPasword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirrmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const handleAdress = (e) => {
    setAdress(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmpassword == '' || adress == '' || phone == '') {
      if (password != confirmpassword) errorMessage = 'Xác nhận lại mật khẩu'
      if (regexPasword.test(password)) errorMessage = 'Mật khẩu yếu';
      if (regexEmail.test(email)) errorMessage = 'Email không hợp lệ';

      setError(true);
    } else {
      let signupInfor = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": password,
        "role": "Admin",
        "address": adress,
        "phone": phone
      }

      http.post('/register', signupInfor)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Đăng ký thành công</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Kiểm tra lại thông tin</h1>
      </div>
    );
  };

  return (

    <div className="form signup">
      <div>
        <h1>Đăng ký</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Họ</label>
        <input onChange={handleLastName} className="input"
          value={lastName} type="text" />

        <label className="label">Tên</label>
        <input onChange={handleFirstName} className="input"
          value={firstName} type="text" />

        <label className="label">Mật khẩu</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />

        <label className="label">Xác nhận mật khẩu</label>
        <input onChange={handleConfirrmPassword} className="input"
          value={confirmpassword} type="password" />

        <label className="label">Địa chỉ Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Địa chỉ Liên lạc</label>
        <input onChange={handleAdress} className="input"
          value={adress} type="text" />

        <label className="label">Số điện thoại</label>
        <input onChange={handlePhone} className="input"
          value={phone} type="text" />

        <button onClick={handleSubmit} className="btn-signup" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Signup