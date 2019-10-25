import React from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
  render() {

    return (
      <div>
          <TextField /><br></br>
          <TextField /><br></br>
          <TextField /><br></br>
      </div>
    )
  }
}

export default Form;