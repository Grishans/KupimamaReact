import React from "react";
import { MainNav } from "../../components";

import "./style.scss";
const Header = () => {
  return (
    <header>
      <div className="topNav">
        <a href="sale.html">Распродажа</a>
        <a href="delivery.html">Доставка и оплата</a>
        <a href="warranty.html">Гарантия</a>
        <a href="contacts.html">Контакты</a>
        <a href="#/">Магазины</a>
      </div>

      <div className="headers">
        <div className="headers_logo">
          <a href="index.html">
            <img src="img/logo.jpg" alt="Логотип" />
            <p>МИР ДЕТСТВА!</p>
          </a>
        </div>

        <div className="headers_contacts">
          <p>г.Донецк, Артема 159</p>
          <p>+380713360357</p>
          <p>11:00 - 19:00 Пн-Пт</p>
        </div>

        <div className="headers_search">
          <form action="">
            <input type="search" placeholder="Поиск по сайту" />
            <button type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <div className="headers_input">
          <a href="input.html">Войти</a>
          <a href="registration.html">Регистрация</a>
        </div>

        <div className="headers_account">
          <a href="basket.html" className="backet">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <p>12000p.</p>
          </a>
          <a href="personal_area.html">Иванченко Григорий</a>
          {/* <a href="#/" className="paOut"><i className="fa fa-sign-out fa-2x aria-hidden="true"></i></a> */}
        </div>
      </div>

      <MainNav />
    </header>
  );
};
export default Header;
