import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/mk-logo.png';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        let entry = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        this.props.confirm(true);
        console.log('hello');
    }


  render() {

    return (
        <div className='container'>
         <div className='form'>
            <img src={Logo} alt='MK Decision company logo.'/>
            <TextField 
                className='input'
                id='standard-name'
                label='name'
                name='name'
                margin="normal"
                onChange={this.handleFormChange}
            />
            <TextField 
                className = 'input'
                label='email'
                name='email'   
                margin="normal"
                onChange={this.handleFormChange} 
            />
            <TextField 
                className='input'
                label='message'
                name='message'
                margin="normal"
                onChange={this.handleFormChange}
                multiline={true}
                rows={3}
                rowsMax={6}
            />
            <Button variant="contained" onClick={this.handleSubmit}>
                Submit
            </Button>
        </div>
      </div>

    )
  }
}

export default Form;