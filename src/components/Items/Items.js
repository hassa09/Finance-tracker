import React from 'react';
import FinanceDate from '../FinanceDate/FinanceDate';

function items(props) {
  return (
      <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default items