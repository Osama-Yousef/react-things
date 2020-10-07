import React from 'react';
import ThingItem from './ThingItem';
import ThingForm from './ThingForm';

class ThingList extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
    <> 
     <ul>
       {this.props.thingsList.map(thing => <ThingItem item ={thing} onDelete={this.props.onDelete}/>)}
     </ul>
    
    <ThingForm onCreated={this.props.onCreated}/>
    </>
    )
  }
}

export default ThingList;