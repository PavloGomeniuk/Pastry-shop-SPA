import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import bg11 from '../image/11.jpg';
import bg12 from '../image/12.jpg';
import bg13 from '../image/13.jpg';
import bg21 from '../image/21.jpg';
import bg22 from '../image/22.jpg';
import bg23 from '../image/23.jpg';
import bg31 from '../image/31.jpg';
import bg32 from '../image/32.jpg';
import bg33 from '../image/33.jpg';
import bg41 from '../image/41.jpg';
import bg42 from '../image/42.jpg';
import bg43 from '../image/43.jpg'; 
import bg51 from '../image/51.jpg';
import bg52 from '../image/52.jpg';
import bg53 from '../image/53.jpg';

export default class Marshmallow extends Component {
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
      checkbtn: [1,0,0,0,0],
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
          if (i+1==2) {
            this.btn3func();
          }
          if (i+1==3) {
            this.btn4func();
          }
          if (i+1==4) {
            this.btn5func();
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
          if (i-1==2) {
            this.btn3func();
          }
          if (i-1==3) {
            this.btn4func();
          }                     
        }
      }
    }
  }
   btn1func(e) {
    this.setState({bg1:'url('+bg11+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg12+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg13+') center/cover no-repeat'});
    this.setState({checkbtn:[1,0,0,0,0]});
   }

   btn2func(e) {
    this.setState({bg1:'url('+bg21+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg22+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg23+') center/cover no-repeat'});
    this.setState({checkbtn:[0,1,0,0,0]});
   }

   btn3func(e) {
    this.setState({bg1:'url('+bg31+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg32+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg33+') center/cover no-repeat'});
    this.setState({checkbtn:[0,0,1,0,0]});
   }

   btn4func(e) {
    this.setState({bg1:'url('+bg41+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg42+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg43+') center/cover no-repeat'});
    this.setState({checkbtn:[0,0,0,1,0]});
   }

   btn5func(e) {
    this.setState({bg1:'url('+bg51+') center/cover no-repeat'});
    this.setState({bg2:'url('+bg52+') center/cover no-repeat'});
    this.setState({bg3:'url('+bg53+') center/cover no-repeat'});
    this.setState({checkbtn:[0,0,0,0,1]});
   }

            
  render() {
    const btn1=this.state.checkbtn[0];
    const btn2=this.state.checkbtn[1];
    const btn3=this.state.checkbtn[2];
    const btn4=this.state.checkbtn[3];
    const btn5=this.state.checkbtn[4];
    const style1={background:this.state.bg1};
    const style2={background:this.state.bg2};
    const style3={background:this.state.bg3};
    const stylebtn2={background:this.state.bgbtn, color:this.state.colorbtn};
    const stylebtn1={background:this.state.bgbtnprev, color:this.state.colorbtnprev};



    return (
     <div>
       <section class="header-general-section-second">
        <h3>Зефир</h3>
      </section>
      <section className="main-general-section">
      <h1 className="main-general-section-h1">Наши последние работы зефира</h1>
      <div className="main-line"></div>
      <h3 className="main-general-section-h3">
        Натуральный зефир из агар-агара. Цена от 12 грн/шт
      </h3>
      <ul className="main-general-section-ul section_ul_1">
        <li className="main-general-section-ul-li-item1">
          <div 
          className={this.state.activefirst ? 'main-general-section-ul-li-item1 img1 big': 'main-general-section-ul-li-item1 img1'} 
          onClick={e=>this.toggleFirstClass()} 
          style={style1}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Зефир</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item2">
          <div 
          className={this.state.activesecond ? 'main-general-section-ul-li-item2 img2 big': 'main-general-section-ul-li-item2 img2'} 
          onClick={e=>this.toggleSecondClass()} 
          style={style2}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Зефир</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item3">
          <div
          className={this.state.activethird ? 'main-general-section-ul-li-item3 img3 big': 'main-general-section-ul-li-item3 img3'} 
          onClick={e=>this.toggleThirdClass()} 
          style={style3}></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Зефир</li>
          </ul>
        </li>
      </ul>
        <div className="main-general-section-services-form2">
          <button className="main-general-section-services-form2-btn1"  onClick={e=>this.prev()}> {'<'} </button>
          <button className="main-general-section-services-form2-btn2" style={(btn1 ? stylebtn2: stylebtn1)} onClick={e=>this.btn1func()}>1</button>
          <button className="main-general-section-services-form2-btn3" style={(btn2 ? stylebtn2: stylebtn1)} onClick={e=>this.btn2func()}>2</button>
          <button className="main-general-section-services-form2-btn4" style={(btn3 ? stylebtn2: stylebtn1)} onClick={e=>this.btn3func()}>3</button>
          <button className="main-general-section-services-form2-btn5" style={(btn4 ? stylebtn2: stylebtn1)} onClick={e=>this.btn4func()}>4</button>
          <button className="main-general-section-services-form2-btn6" style={(btn5 ? stylebtn2: stylebtn1)} onClick={e=>this.btn5func()}>5</button>
          <button className="main-general-section-services-form2-btn7" onClick={e=>this.next()}>></button>
        </div>      
    </section>
     </div>
    )
  }
}