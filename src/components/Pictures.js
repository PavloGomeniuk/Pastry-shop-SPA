
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Pictures extends Component {
	constructor() {
		super();
		this.state={
		  activefirst: false,
	      activesecond:false,
	      activethird: false,
		}
	}
	 toggleFirstClass(e) {
        const currentState = this.state.activefirst;
        this.setState({ activefirst: !currentState });
  }

  toggleSecondClass(e) {
        const currentState = this.state.activesecond;
        this.setState({ activesecond: !currentState });
  }

  toggleThirdClass(e) {
        const currentState = this.state.activethird;
        this.setState({ activethird: !currentState });
  }
render(){
	return(
<ul className="main-general-section-ul section_ul_1">
        <li className="main-general-section-ul-li-item1">
          <div 
          className={this.state.activefirst ? 'main-general-section-ul-li-item1 img1 big': 'main-general-section-ul-li-item1 img1'} 
          onClick={e=>this.toggleFirstClass()} 
          style={this.props.style1}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды пряников</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item2">
          <div 
          className={this.state.activesecond ? 'main-general-section-ul-li-item2 img2 big': 'main-general-section-ul-li-item2 img2'} 
          onClick={e=>this.toggleSecondClass()} 
          style={this.props.style2}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды пряников</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item3">
          <div
          className={this.state.activethird ? 'main-general-section-ul-li-item3 img3 big': 'main-general-section-ul-li-item3 img3'} 
          onClick={e=>this.toggleThirdClass()} 
          style={this.props.style3}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды пряников</li>
          </ul>
        </li>
      </ul>
         )
        }
       }