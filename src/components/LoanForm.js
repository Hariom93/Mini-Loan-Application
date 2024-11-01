import React, { useState } from 'react';
import axios from 'axios';

function LoanForm() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // बैकएंड में डेटा भेजने के लिए API कॉल
      const response = await axios.post('http://localhost:5000/api/loans/apply', {
        amount,
        term,
        userId: '12345', // एक डेमो यूजर ID का उपयोग
      });
      setMessage('Loan application submitted successfully!');
      setAmount('');
      setTerm('');
    } catch (error) {
      setMessage('Error submitting loan application.');
    }
  };

  return (
    <div className="card">
      <h2>Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Loan Term (weeks):</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default LoanForm;
