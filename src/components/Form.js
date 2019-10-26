import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/mk-logo.png';
const randomBytes = require('crypto').randomBytes;
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

// https://github.com/aws-samples/aws-serverless-workshops/tree/master/WebApplication

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        // this.recordMessage = this.recordMessage.bind(this);
    }

    handleFormChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    // recordMessage() {
    //     return ddb.put({
    //         TableName: 'Messages',
    //         message: {
    //             name: this.state.name,
    //             email: this.state.email,
    //             message: this.state.message,
    //             id: Math.random() + 1,
    //             RequestTime: new Date().toISOString(),
    //         },
    //     }).promise();
    // }


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
            <Button variant="contained" onClick={this.recordMessage}>
                Submit
            </Button>
        </div>
      </div>

    )
  }
}

export default Form;