import React from 'react';
import '../css/Form/form.css'

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      display: true
    }

  }

  render(){
    return(
      <div className='form'>
        <h1>hello</h1>
      </div>
    )
  }
}

export default Form;