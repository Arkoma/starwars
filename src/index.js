import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';



ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} exact/>
        </div>
    </Router>
    , document.getElementById('root'));
