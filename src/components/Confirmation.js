import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from '../assets/mk-logo.png';

class Confirmation extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <div className='container'>
         <div className='form'>
            <img src={Logo} alt='MK Decision company logo.'/>
            <h1>Thank you!</h1>
            <Button variant="contained" onClick={() => {this.props.confirm(false)}}>
                Home
            </Button>
        </div>
      </div>

    )
  }
}

export default Confirmation;