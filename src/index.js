import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//components
import EmployeeList from './components/Employee/EmployeeList';
import Navbar from './components/Navbar/Navbar';
import EmployeeForm from './components/Employee/EmployeeForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div className='container my-4'>
    <Routes>
      <Route path="/" element={<EmployeeList/>}></Route>
      <Route path="/employeesForm" element={<EmployeeForm/>}></Route>
      <Route path="/update/employeesForm/:id" element={<EmployeeForm/>}></Route>
    </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
