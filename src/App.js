import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {TodoWrapper} from './components/TodoWrapper';
import './App.css';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<TodoWrapper />} />
        </Routes>
    </Router>
);

export default App;
