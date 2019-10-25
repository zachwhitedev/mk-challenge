import React from 'react';
import './css/App/App.css';
import Form from './components/Form';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isConfirmed: false
    }

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(isConfirmed){
    this.setState({
      isConfirmed: isConfirmed
    })
  }

  render() {
    return (
      <div>
        {!this.state.isConfirmed && <Form confirm={this.handleConfirm}/>}
      </div>
    )
  }
}

export default App;
