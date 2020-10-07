import React from 'react';
  

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue:'' 
    };
    this.createThing = this.createThing.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

  
  }

  createThing(event){
    event.preventDefault();
    this.props.onCreated({name: this.state.formValue})
    this.setState({
      formValue: ''
    })

  }
  changeHandler(event){
    this.setState({
      formValue: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.createThing}>
        <fieldset>
          <legend>Enter a Product Name :</legend>
          <input value = {this.state.formValue} placeholder =" " type="text" onChange={this.changeHandler}/>
          <button>SUBMIT</button>
        </fieldset>
      </form>
    );
  }
}
export default ThingForm;