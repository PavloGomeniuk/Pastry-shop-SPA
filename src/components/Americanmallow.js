import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pictures from './Pictures.js';
import bg11 from '../image/112.jpg';
import bg12 from '../image/122.jpg';
import bg13 from '../image/132.jpg';
import bg21 from '../image/212.jpg';
import bg22 from '../image/222.jpg';
import bg23 from '../image/232.jpg';

export default class Americanmallow extends Component {
   constructor(props) {
    super(props);
    this.state={
      bg1: 'url('+bg11+') center/cover no-repeat',
      bg2: 'url('+bg12+') center/cover no-repeat',
      bg3: 'url('+bg13+') center/cover no-repeat',
      bgbtn: 'linear-gradient(to top, #e43512 0%, #d54a2e 100%)',
      colorbtn: 'white',
      bgbtnprev: 'linear-gradient(to top, #f3f3f3 0%, #ffffff 100%)',
      colorbtnprev:'#7e7e7e',
      checkbtn: [1,0],
    }
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
        <h3 className="mallow-font">Маршмэллоу</h3>
      </section>
      <section className="main-general-section">
      <h1 className="main-general-section-h1">Наши последние работы маршмэллоу</h1>
      <div className="main-line"></div>
      <h3 className="main-general-section-h3">
        Маршмэллоу - это американский вид зефира на основе желатина. Цена 270 грн/кг
      </h3>
        <Pictures style1={style1} style2={style2} style3={style3} />
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