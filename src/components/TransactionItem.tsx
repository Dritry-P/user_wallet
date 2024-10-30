'use client';
import React from 'react';
import '../style.scss';

interface TransactionItemProps {
  id: string;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser?: string | null; 
}


const TransactionItem: React.FC<TransactionItemProps> = ({ id, type, amount, name, description, date, pending, authorizedUser }) => {
  return (
    <div className='TransactionItem'>
      <div className="TransactionItem__icon-holder">
        <img src="new_logo_ikea.jpg" alt="Transaction Logo" className="TransactionItem__icon" />
      </div>
      <div className="TransactionItem__details">
        <div className="TransactionItem__title-holder">
          <h3 className='TransactionItem__name'>{name}</h3>
          <p className='TransactionItem__amount'>${amount}</p>
        </div>
        <div className="TransactionItem__status">
          <p className='TransactionItem__description'>{description}</p>
          <p className='TransactionItem__date'>{date}</p>
        </div>
      </div>
      {pending && <p className='TransactionItem__pending'>Pending</p>}
      {authorizedUser && <p className='TransactionItem__authorized'>{authorizedUser}</p>}
    </div>

  );
};

export default TransactionItem;
