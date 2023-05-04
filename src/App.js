import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleList from './components/ArticleList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavigationBar from './components/NavigationBar';
import {Button} from "react-bootstrap";
import ArticleForm from "./components/ArticleForm";



function App() {
    function testf() {
        fetch('https://localhost:7184/api/Users')
            .then(response => response.json())
            .then(data => console.log(data));

    }

    return (
    <div className="App">
        <NavigationBar/>
        <ArticleForm/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
        <Button onClick={testf}>123</Button>
    </div>
  );
}

export default App;