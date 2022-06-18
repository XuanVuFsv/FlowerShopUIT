import React from 'react'
import { useState } from 'react';
import './Signup.css'
import axios from 'axios';

const Signup = () => {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');


  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
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

  const handleUsername = (e) => {
    setUsername(e.target.value);
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
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
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
        <h1>User {name} successfully registered!!</h1>
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
        <h1>Please enter all the fields</h1>
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
        <label className="label">Tên đăng nhập</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />

        <label className="label">Mật khẩu</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />

        <label className="label">Xác nhận mật khẩu</label>
        <input onChange={handleConfirrmPassword} className="input"
          value={password} type="password" />

        <label className="label">Tên đăng nhập</label>
        <input onChange={handleUsername} className="input"
          value={name} type="text" />

        <label className="label">Địa chỉ Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Địa chỉ Liên lạc</label>
        <input onChange={handleUsername} className="input"
          value={email} type="email" />

        <label className="label">Số điện thoại</label>
        <input onChange={handlePhone} className="input"
          value={email} type="email" />

        <button onClick={handleSubmit} className="btn-signup" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Signup