import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from '../assets/mk-logo.png';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: 'Please enter your name.',
            email: '',
            message: '',
        }

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
    const classes = useStyles();

    return (
        <div className='container'>
         <div className='form'>
            <img src={Logo} alt='MK Decision company logo.'/>
            <TextField 
                className='input'
                id='standard-name'
                label='name'
            />
            <TextField 
                className = 'input'
                label='email'    
            />
            <TextField 
                className='input'
                label='message'
                multiline={true}
                rows={2}
                rowsMax={4}
            />
            <Button variant="contained" className={classes.button}>
                Submit
            </Button>
        </div>
      </div>

    )
  }
}

export default Form;