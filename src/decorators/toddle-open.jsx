// Class
import React, {Component} from 'react';
export default (OriginalComponent) => class WrapperComponent extends Component {

	constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

	 toggleOpen = (ev) => {
	  // console.log('ev', ev);//Реактовський ивент
	  // console.log('ev.nativeEvent', ev.nativeEvent);//Настоящий ивент
	  this.setState({
	      isOpen: !this.state.isOpen
	    }
	  )
	 }

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
	}


} /*class*/