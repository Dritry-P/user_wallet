'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import transactions from '@/data/transactions.json';
import './_TransactionDetail.scss';
const TransactionDetail = () => {
  const { id } = useParams();
  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    return <p>Transaction not found</p>;
  }

  return (
    <div className="TransactionDetail__holder">
        <div className="TransactionDetail">
            <h1 className="TransactionDetail__amount">${transaction.amount}</h1>
            <p className="TransactionDetail__name">{transaction.name}</p>
            <p className="TransactionDetail__date">{transaction.date}</p>

            <div className={`TransactionDetail__status-box ${transaction.pending ? 'pending' : 'approved'}`}>
                <p>Status: {transaction.pending ? "Pending" : "Approved"}</p>
                <p>{transaction.authorizedUser ? transaction.authorizedUser : "N/A"}</p>
            </div>

            <div className="TransactionDetail__total">
                <p>Total: ${transaction.amount}</p>
            </div>
        </div>
    </div>
  );
};

export default TransactionDetail;

