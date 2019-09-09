import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import AppIndex from './AppIndex.jsx';
import {Route} from 'react-router-dom';
import NotFound from './NotFound';
import Loader from '../image/3-layers.png';
import Facebook from '../image/Facebook_Social_Network_Logo.png';
import Insta from '../image/icons8-instagram-50.png';
import Phone from '../image/Phone_Call.png';
import Mail from '../image/Mail_Envelope.png';
import Marshmallow from './Marshmallow';
import Cake from './Cake';
import Americanmallow from './Americanmallow';
import Cookies from './Cookies';
import cupcake from './Cupcake';

export default class Header extends Component {
  constructor() {
    super();
    this.state={
      count: null,
    }
  }
  componentDidMount() {
        this.state.count=setInterval(() => {
          const elem = document.querySelectorAll('[name="slides"]');
            for (let i = elem.length - 1; i > -1; i--) {
              if (elem[i].checked) {
                elem[i].checked = false;
                elem[(i + 1) % elem.length].checked = true;
                break;}}
        }, 6000);
  }
  render() {
        return (
          <div>   
            <header className="header">
                <section className="header-menu-section">
                    <nav className="nav-header">
                        <ul className="ul-header">
                            <li className="li-header">
                                <Link to="/" className="header-menu-links">Главная</Link>
                            </li>
                            <li className="li-header vertical-line">
                                <Link to="/marshmallow" className="header-menu-links">Зефир</Link>
                            </li>
                            <li className="li-header">
                                <Link to="/cake" className="header-menu-links">Торты</Link>
                            </li>
                            <li className="li-header">
                                <img src={Loader} className="header-menu-img bigEntrance" alt="Заказ тортов зефира и пряников"/>
                            </li>
                            <li className="li-header">
                                <Link to="/american-mallow" className="header-menu-links">Маршмэллоу</Link>
                            </li>
                            <li className="li-header vertical-line">
                                <Link to="/cookies" className="header-menu-links">Пряники</Link>
                            </li>
                            <li className="li-header">
                                <Link to="/cupcake" className="header-menu-links">Капкейки</Link>
                             </li>
                        </ul>
                    </nav>
                </section>
                
            </header>
            <main className="main">
                <Switch>
                  <Route exact path="/" component={AppIndex} />
                  <Route exact path="/marshmallow" component={Marshmallow} />
                  <Route path="/cake" component={Cake} />
                  <Route path="/american-mallow" component={Americanmallow} />
                  <Route path="/cookies" component={Cookies} />
                  <Route path="/cupcake" component={cupcake} />
                  <Route component={NotFound} />
                </Switch>
            </main>
            <footer className="footer">
                <section className="footer-section-contacts">
                    <dl>
                        <dt>
                            <h4>Рабочие часы</h4>
                        </dt>
                        <dd className="footer-section-contacts-dd">
                            Пн-Пт: с 8:00 до 20:00
                        </dd>
                        <dd className="footer-section-contacts-dd">
                            Сб-Вс: с 10:00 до 16:00
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <h4>Мы в соцсетях</h4>
                        </dt>
                        <dd className="footer-section-contacts-dd img-links">
                            <a href="https://www.instagram.com/sasha__gomeniuk/">
                                <img src={Insta} alt="links" alt="Заказ тортов и пряников. Страница Instagram"/>
                            </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <h4>Наши контакты</h4>
                        </dt>
                        <dd className="footer-section-contacts-dd email-dd">
                            <img src={Phone} alt ="Заказ тортов и пряников. Телефон"/>
                            <p>+38-093-24-05-219</p>
                        </dd>
                        <dd className="footer-section-contacts-dd email-dd">
                            <img src={Mail} alt="Заказ тортов и пряников. Почта"/>
                            <p>Adrab33@gmail.com</p>
                        </dd>
                    </dl>
                </section>
            </footer>
          </div>
        )
    }
}


