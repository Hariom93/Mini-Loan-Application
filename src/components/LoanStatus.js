import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoanStatus() {
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        // लोन स्टेटस प्राप्त करने के लिए API कॉल
        const response = await axios.get('http://localhost:5000/api/loans/12345'); // userId के साथ URL
        setLoan(response.data.loan);
      } catch (error) {
        console.error('Error fetching loan status');
      }
    };
    fetchLoanStatus();
  }, []);

  return (
    <div className="card">
      <h2>Your Loan Status</h2>
      {loan ? (
        <div>
          <p>Loan Amount: {loan.amount}</p>
          <p>Term: {loan.term} weeks</p>
          <p>Status: {loan.status}</p>
        </div>
      ) : (
        <p>Loading loan status...</p>
      )}
    </div>
  );
}

export default LoanStatus;
