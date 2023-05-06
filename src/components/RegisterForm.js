import React, {useState} from 'react';
import { register } from './api';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            alert('You have successfully registered! Redirecting to login page...');
            // перенаправьте пользователя на страницу входа
        } catch (error) {
            alert('Error occurred during registration. Please try again.');
        }
    };


  return (
      <div className="container">
          <h2>Share news about your children with other moms!</h2>
          <p>Join our community of moms and start sharing stories about your kids today.</p>
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{width: '50%'}} // устанавливаем ширину поля
                  />
              </Form.Group>
              <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{width: '50%'}} // устанавливаем ширину поля
                  />
              </Form.Group>
              <Button type="submit">Register</Button>
          </Form>
      </div>
  );
}

export default RegisterForm;
