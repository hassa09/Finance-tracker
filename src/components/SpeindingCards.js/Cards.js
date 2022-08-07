import React from 'react'

function Cards(props) {
    const spendingcards = 'cards' + props;
  return (
      <div className={spendingcards}>
          {props.children}
          
    </div>
  )
}

export default Cards