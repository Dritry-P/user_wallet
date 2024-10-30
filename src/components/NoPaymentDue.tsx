'use client';
import React from 'react';
import './_NoPaymentDue.scss'

const NoPaymentDue = () => {
  const month = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="NoPaymentDue">
      <h2 className="NoPaymentDue__title">No Payment Due</h2>
      <p className="NoPaymentDue__message">You’ve paid your {month} balance.</p>
      <div className="NoPaymentDue__check">
        <span>&#x2714;</span>
      </div>
    </div>
  );
};

export default NoPaymentDue;
