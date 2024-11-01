// src/App.js
import React from 'react';
import './App.css';
import LoanForm from './components/LoanForm';
import LoanStatus from './components/LoanStatus';
import RepaymentForm from './components/RepaymentForm';

function App() {
  return (
    <div className="App">
      <h1>Mini Loan Application</h1>
      <div className="container">
        <LoanForm />
        <LoanStatus />
        <RepaymentForm />
      </div>
    </div>
  );
}

export default App;
