'use client';
import React from 'react';
import './_CardBalance.scss';

const CardBalance = () => {
  const balance = Math.floor(Math.random() * 1500);
  const available = 1500 - balance;

  return (
    <div className="CardBalance">
      <h2 className="CardBalance__title">Card Balance</h2>
      <div className="CardBalance__content">
        <p className="CardBalance__balance">${balance}</p>
        <p className="CardBalance__available">${available} Available</p>
      </div>
    </div>
  );
};

export default CardBalance;
