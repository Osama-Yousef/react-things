import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <>
      <h1>{this.props.greeting}</h1>
      <p>You have {this.props.count} products</p>
      </>
    )
  }
}

export default Header;