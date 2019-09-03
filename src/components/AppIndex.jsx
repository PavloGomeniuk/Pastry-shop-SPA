import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewImg from '../image/2-layers4 (2).png';

export default class AppIndex extends Component {

  render() {
    return (
      <div>
      <section className="header-general-section" id="points">
                    <input type="radio" name="slides" id="point1" checked/>
                    <input type="radio" name="slides" id="point2"/>
                    <input type="radio" name="slides" id="point3"/>
                    <div className="slider">
                        <div className="slides img1">
                            <p className="header-general-section-text text-top">Различные виды кондитерских изделий</p>
                            <p className="header-general-section-text text-under">натуральные продукты</p>
                        </div>
                        <div className="slides img2"></div>
                        <div className="slides img3"></div>
                    </div>
                    <div className="control">
                        <label for="point1" className="header-label"></label>
                        <label for="point2" className="header-label"></label>
                        <label for="point3" className="header-label"></label>
                    </div>
                </section>
     <section className="main-general-section">
      <h1 className="main-general-section-h1">Наши последние кондитерские изделия</h1>
      <div className="main-line"></div>
      <h3 className="main-general-section-h3">
        Посмотрите наши последние работы имбирных пряников, зефира и тортов.
      </h3>
      <ul className="main-general-section-ul">
        <li className="main-general-section-ul-li-item1">
          <div className="main-general-section-ul-li-item1 img1 img1bg"></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Чизкейк</li>
          </ul>
        </li>
        <li className="main-general-section-ul-li-item2">
          <div className="main-general-section-ul-li-item2 img2 img2bg"></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Маршмэллоу</li>
          </ul>
          <img src={NewImg} className="main-general-section-ul-li-item1-hide_image_new"/>
        </li>
        <li className="main-general-section-ul-li-item3">
          <div className="main-general-section-ul-li-item3 img3 img3bg"></div>
          <ul className="main-general-section-ul-li-item1-hide-button">
            <li>Пряник-Ниндзя :)</li>
          </ul>
        </li>
      </ul>
    </section>
      </div>

    )
  }
}