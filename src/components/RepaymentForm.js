import React, { useState } from 'react';
import axios from 'axios';

function RepaymentForm() {
  const [repaymentAmount, setRepaymentAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleRepayment = async (e) => {
    e.preventDefault();
    try {
      // रिपेमेंट डेटा भेजने के लिए API कॉल
      const response = await axios.post('http://localhost:5000/api/repayments', {
        amount: repaymentAmount,
        userId: '12345', // डेमो यूजर ID
      });
      setMessage('Repayment successful!');
      setRepaymentAmount('');
    } catch (error) {
      setMessage('Error in repayment.');
    }
  };

  return (
    <div className="card">
      <h2>Make a Repayment</h2>
      <form onSubmit={handleRepayment}>
        <label>Repayment Amount:</label>
        <input
          type="number"
          value={repaymentAmount}
          onChange={(e) => setRepaymentAmount(e.target.value)}
          required
        />
        <button type="submit">Submit Repayment</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default RepaymentForm;
