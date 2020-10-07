import React from 'react';

function ThingItem(props){
  return(
    <>
    <li key={props.item.name}> 
     <p>{props.item.name}</p>
     <button onClick={() => props.onDelete(props.item)}>DELETE</button>
    </li>
    </>
  ) 
}
export default ThingItem;