import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
