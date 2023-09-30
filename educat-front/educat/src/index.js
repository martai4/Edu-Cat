import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from './Header';
import Test from './Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
