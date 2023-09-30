import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './Header';
import Test from './Test';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

