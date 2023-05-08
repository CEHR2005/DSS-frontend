import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavigationBar from './components/NavigationBar';


function App() {

    return (
        <div className="App">
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
            </Routes>
        </div>
    );
}

export default App;