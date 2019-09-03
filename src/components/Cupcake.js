import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import bg11 from '../image/114.jpg';
import bg12 from '../image/124.jpg';
import bg13 from '../image/134.jpg';
import bg21 from '../image/214.jpg';
import bg22 from '../image/224.jpg';
import bg23 from '../image/234.jpg';

export default class Cupcake extends Component {
   constructor() {
    super();
    this.state={
      bg1: 'url('+bg11+') center/cover no-repeat',
      bg2: 'url('+bg12+') center/cover no-repeat',
      bg3: 'url('+bg13+') center/cover no-repeat',
      bgbtn: 'linear-gradient(to top, #e43512 0%, #d54a2e 100%)',
      colorbtn: 'white',
      bgbtnprev: 'linear-gradient(to top, #f3f3f3 0%, #ffffff 100%)',
      colorbtnprev:'#7e7e7e',
      checkbtn: [1,0],
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

   next(e) {
    for (let i = 0; i < this.state.checkbtn.length; i++) {
      if (this.state.checkbtn[i]) {
        if (i!=4) {
          if (i+1==0) {
            this.btn1func();
          }
          if (i+1==1) {
            this.btn2func();
          }                     
        }
      }
    }
  }
   prev(e) {
    for (let i = 0; i < this.state.checkbtn.length; i++) {
      if (this.state.checkbtn[i]) {
        if (i!=0) {
          if (i-1==0) {
            this.btn1func();
          }
          if (i-1==1) {
            this.btn2func();
          }                 
        }
      }
    }
  }
   btn1func(e) {
    this.setState({bg1:'url('+bg11+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg12+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg13+') center/cover no-repeat'});
    this.setState({checkbtn:[1,0]});
   }

   btn2func(e) {
    this.setState({bg1:'url('+bg21+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg22+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg23+') center/cover no-repeat'});
    this.setState({checkbtn:[0,1]});
   }


            
  render() {
    const btn1=this.state.checkbtn[0];
    const btn2=this.state.checkbtn[1];
    const style1={background:this.state.bg1};
    const style2={background:this.state.bg2};
    const style3={background:this.state.bg3};
    const stylebtn2={background:this.state.bgbtn, color:this.state.colorbtn};
    const stylebtn1={background:this.state.bgbtnprev, color:this.state.colorbtnprev};



    return (
     <div>
       <section class="header-general-section-second">
        <h3>Капкейки</h3>
      </section>
      <section className="main-general-section">
      <h1 className="main-general-section-h1">Наши последние работы капкейков</h1>
      <div className="main-line"></div>
      <h3 className="main-general-section-h3">
        Капкейк - это американское название кекса. Цены от 25 грн/шт
      </h3>
      <ul className="main-general-section-ul section_ul_1">
        <li className="main-general-section-ul-li-item1">
          <div 
          className={this.state.activefirst ? 'main-general-section-ul-li-item1 img1 big': 'main-general-section-ul-li-item1 img1'} 
          onClick={e=>this.toggleFirstClass()} 
          style={style1}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды капкейков</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item2">
          <div 
          className={this.state.activesecond ? 'main-general-section-ul-li-item2 img2 big': 'main-general-section-ul-li-item2 img2'} 
          onClick={e=>this.toggleSecondClass()} 
          style={style2}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды капкейков</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item3">
          <div
          className={this.state.activethird ? 'main-general-section-ul-li-item3 img3 big': 'main-general-section-ul-li-item3 img3'} 
          onClick={e=>this.toggleThirdClass()} 
          style={style3}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Виды капкейков</li>
          </ul>
        </li>
      </ul>
        <div className="main-general-section-services-form2">
          <button className="main-general-section-services-form2-btn1"  onClick={e=>this.prev()}> {'<'} </button>
          <button className="main-general-section-services-form2-btn2" style={(btn1 ? stylebtn2: stylebtn1)} onClick={e=>this.btn1func()}>1</button>
          <button className="main-general-section-services-form2-btn3" style={(btn2 ? stylebtn2: stylebtn1)} onClick={e=>this.btn2func()}>2</button>
          <button className="main-general-section-services-form2-btn7" onClick={e=>this.next()}>></button>
        </div>      
    </section>
     </div>
    )
  }
}