import React from "react"
import Items from "../Items/Items";
import Cards from "../SpeindingCards/Cards"

function Finance() {
  return (
    <Cards >
      <Items
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <Items
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <Items
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      /><Items
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      <Items
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      />

    </Cards>

  
  )
}

export default Finance