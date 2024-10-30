'use client';

import React from 'react';
import TransactionItem from '@/components/TransactionItem';
import transactions from '@/data/transactions.json';
import CardBalance from '@/components/CardBalance';
import DailyPoints from '@/components/DailyPoints';
import NoPaymentDue from '@/components/NoPaymentDue';
import '../../style.scss';

const TransactionsList = () => {
  return (
    <>
        
        <div className='wrapper'>
        <div className="overview-grid">
      <CardBalance />
      <NoPaymentDue />
      <DailyPoints />
    </div>
        </div>
        <div className='TransactionsList__holder'>
        <h1 className="TransactionsList__header">TransactionsList</h1>
        {transactions.map((transaction) => (
            <TransactionItem key={`keyitem-${transaction.id} ${transaction.name}`} {...transaction} />
        ))}
        </div>
    </>
  );
};

export default TransactionsList;
