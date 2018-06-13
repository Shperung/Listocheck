// Class
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {

  render() {
    return (
     <div className="counter">
       <h3>{this.props.counter || 'zero'}</h3>
       <button onClick={this.handleIncrement}>*** +1 ***</button>
       <button onClick={this.handleDecrement}>*** -1 ***</button>
     </div>
    )
  }

  handleIncrement = () => {
    console.log('handleIncrement');
  }

  handleDecrement = () => {
    console.log('handleDecrement');
  }

};

function mapStateToProps(state){
  return {
    counter: state.count,
  }
}

export default connect(mapStateToProps)(Counter);