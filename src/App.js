import React from 'react';
import SlickSlider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {

  const ArrLeft = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className='slick-prev'
        style={{ zIndex: 110 }}
      >
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </button>
    )
  }

  const ArrRight = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className='slick-next'
        style={{ zIndex: 110 }}
      >
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </button>
    )
  }

  const settings = {
      infinite: true,
      dots: true,
      speed: 500,
      slidesToShow: 1,
		  slidesToScroll: 1,
      arrows: true,
      draggable: false,
      prevArrow: <ArrLeft />,
      nextArrow: <ArrRight />,
      responsive: [
    {
      breakpoint: 1000,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }, 
    }, {
      
      breakpoint: 900,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        arrows: false,
      } 
    }
]
  };
  return (

<>
<header>

  <div className="topNav">
    <a href="sale.html">Распродажа</a>
    <a href="delivery.html">Доставка и оплата</a>
    <a href="warranty.html">Гарантия</a>
    <a href="contacts.html">Контакты</a>
    <a href="#">Магазины</a>
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
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
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
      {/* <a href="#" className="paOut"><i className="fa fa-sign-out fa-2x aria-hidden="true"></i></a> */}
    </div>

  </div>

  <div className="nav">
    <div className="nav_wrap">
      <ul>
        <a href="">
          <li>Гигиена и уход</li>
        </a>
        <a href="">
          <li>Питание и кормление</li>
        </a>
        <a href="">
          <li>Прогулка и путишествие</li>
        </a>
        <a href="">
          <li>Детская комната</li>
        </a>
        <a href="">
          <li>Одежда и обувь</li>
        </a>
        <a href="">
          <li>Игрушки и игры</li>
        </a>
        <a href="">
          <li>Школа и канцтовары</li>
        </a>
        <a href="">
          <li>Ещё</li>
        </a>
      </ul>
      <div className="nav_toogle toggle_0">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>
      
      <div className="nav_toogle toggle_1">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/logo.png" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_2">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_3">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_4">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_5">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_6">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_7">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle toggle_8">
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="nav nav_mobil">
    <label for="navMobil"><i className="fa fa-bars fa-4x" aria-hidden="true"></i></label>
    <input type="checkbox" className="mobilCheck" id="navMobil" />
    <div className="nav_wrap nav_wrap_mobil">
      <ul>
        <a href="#">
          <li>Гигиена и уход</li>
        </a>
        <a href="#">
          <li>Питание и кормление</li>
        </a>
        <a href="#">
          <li>Прогулка и путишествие</li>
        </a>
        <a href="#">
          <li>Детская комната</li>
        </a>
        <a href="#">
          <li>Одежда и обувь</li>
        </a>
        <a href="#">
          <li>Игрушки и игры</li>
        </a>
        <a href="#">
          <li>Школа и канцтовары</li>
        </a>
        <a href="#">
          <li>Ещё</li>
        </a>
      </ul>
      <div className="nav_toogle nav_toogle_mobil toggle_0">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>
      
      <div className="nav_toogle nav_toogle_mobil toggle_1">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/photo.png" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle nav_toogle_mobil toggle_2">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>
      
      <div className="nav_toogle nav_toogle_mobil toggle_3">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/photo.png" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle nav_toogle_mobil toggle_4">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>
      
      <div className="nav_toogle nav_toogle_mobil toggle_5">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/photo.png" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

      <div className="nav_toogle nav_toogle_mobil toggle_6">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>
      
      <div className="nav_toogle nav_toogle_mobil toggle_7">
        <input type="checkbox" id="toogleMobil" className="toogleMobilback" />
        <label for="toogleMobil" className="toogleMobil">Назад</label>
        <div className="nt_wrap">
          <div className="nt_box">
            <img src="img/photo.png" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="" className="nt_box_all">Все 10 категорий</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
          <div className="nt_box">
            <img src="img/stroller.jpg" alt="" />
            <a href="">Коляска 1</a>
            <a href="">Коляска 2</a>
            <a href="">Коляска 3</a>
            <a href="">Коляска 4</a>
            <a href="">Коляска 5</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</header>

<section className="content">
  <div className="cont_wrap">

    <SlickSlider {...settings}>
          <div><a href="#"><img src="img/p1.jpg" alt="" /></a></div>
          <div><a href="#"><img src="img/p1.jpg" alt="" /></a></div>
          <div><a href="#"><img src="img/logo.jpg" alt="" /></a></div>
    </SlickSlider>

    

    <div className="main_content">

      <div className="mc_sort">
        <form action="">
          <div className="mcs_sort">
            <p>Сортировка:</p>
          </div>
        </form>
        <form action="">
          <div className="mcs_filter">
            <p>Фильтр:</p>
            <span className="dropdown-el2">
              <input type="radio" name="sortType" value="gig" checked="checked" id="sort-gig" />
              <label for="sort-gig">Гигиена и уход</label>
              <input type="radio" name="sortType" value="pit" id="sort-pit" />
              <label for="sort-pit">Питание и уход</label>
              <input type="radio" name="sortType" value="prog" id="sort-prog" />
              <label for="sort-prog">Прогулка и путишествие</label>
              <input type="radio" name="sortType" value="room" id="sort-room" />
              <label for="sort-room">Детская комната</label>
              <input type="radio" name="sortType" value="cloth" id="sort-cloth" />
              <label for="sort-cloth">Одежда и обувь</label>
              <input type="radio" name="sortType" value="toy" id="sort-toy" />
              <label for="sort-toy">Игрушки и игры</label>
              <input type="radio" name="sortType" value="school" id="sort-school" />
              <label for="sort-school">Школа и концтовары</label>
              <input type="radio" name="sortType" value="book" id="sort-book" />
              <label for="sort-book">Книги</label>
              <input type="radio" name="sortType" value="sport" id="sort-sport" />
              <label for="sort-sport">Спорт и отдых</label>
            </span>
          </div>
        </form>
        <div className="mcs_bg">
          <form action="">

            <div className="for_boy">
              <input type="checkbox" id="boy" />
              <label for="boy">Мальчик</label>
            </div>
            
            <div className="for_girl">
              <input type="checkbox" id="girl" className="ch_girl" />
              <label for="girl" className="label_girl">Девочка</label>
            </div>
            
          </form>
        </div>
      </div>
      
      <div className="mc_products">

        <div className="mcp_box">

          <img src="img/stroller.jpg" alt="Коляска" />
          
          <hr />

          <div className="mcp_box_text">
            <p className="title">&#171;Коляска бирюзовая&#187;</p>
            <div className="mcpbt_text">
              <div className="mcpbt_descript">
                <ul>
                  <li>1324563en</li>
                  <li>Коляски и автокресла</li>
                  <li>Pheonix (Англия)</li>
                </ul>
              </div>
              <div className="mcpbt_price">
                <p className="old_price">25000р.</p>
                <p className="price">15000р.</p>
                <p className="price_title_off">Под заказ</p>
              </div>
            </div>
            <div className="rating-area">
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>	
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>    
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>  
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>    
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
            <div className="rating-result">
              <span className="active"></span>	
              <span className="active"></span>    
              <span className="active"></span>  
              <span></span>    
              <span></span>
            </div>
            <div className="mcp_box_btn">
              <a href="productPage.html">ПОДРОБНЕЕ</a>
              <form action="" method="POST">
                <button type="submit">Добавить в корзину</button>
              </form>
            </div>
            <div className="mcpbt_stock"><p>Акция</p></div>
          </div>  
        </div>

        <div className="mcp_box">

          <img src="img/stroller.jpg" alt="Коляска" />
          
          <hr />

          <div className="mcp_box_text">
            <p className="title">&#171;Коляска бирюзовая&#187;</p>
            <div className="mcpbt_text">
              <div className="mcpbt_descript">
                <ul>
                  <li>1324563en</li>
                  <li>Коляски и автокресла</li>
                  <li>Pheonix (Англия)</li>
                </ul>
              </div>
              <div className="mcpbt_price">
                <p className="old_price">25000р.</p>
                <p className="price">15000р.</p>
                <p className="price_title_off">Под заказ</p>
              </div>
            </div>
            <div className="rating-area">
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>	
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>    
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>  
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>    
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
            <div className="rating-result">
              <span className="active"></span>	
              <span className="active"></span>    
              <span className="active"></span>  
              <span></span>    
              <span></span>
            </div>
            <div className="mcp_box_btn">
              <a href="#">ПОДРОБНЕЕ</a>
              <form action="" method="POST">
                <button type="submit">Добавить в корзину</button>
              </form>
            </div>

          </div>  
        </div>

        <div className="mcp_box">

          <img src="img/stroller.jpg" alt="Коляска" />
          
          <hr />

          <div className="mcp_box_text">
            <p className="title">&#171;Коляска бирюзовая&#187;</p>
            <div className="mcpbt_text">
              <div className="mcpbt_descript">
                <ul>
                  <li>1324563en</li>
                  <li>Коляски и автокресла</li>
                  <li>Pheonix (Англия)</li>
                </ul>
              </div>
              <div className="mcpbt_price">
                <p className="old_price">25000р.</p>
                <p className="price">15000р.</p>
                <p className="price_title_off">Под заказ</p>
              </div>
            </div>
            <div className="rating-area">
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>	
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>    
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>  
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>    
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
            <div className="rating-result">
              <span className="active"></span>	
              <span className="active"></span>    
              <span className="active"></span>  
              <span></span>    
              <span></span>
            </div>
            <div className="mcp_box_btn">
              <a href="#">ПОДРОБНЕЕ</a>
              <form action="" method="POST">
                <button type="submit">Добавить в корзину</button>
              </form>
            </div>

          </div>  
        </div>

      </div>

      <div className="next_page">
        <a href="#" className="np_arrow_perw"></a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">5</a>
        <a href="#" className="np_arrow_next"></a>
      </div>

    </div>

  </div>
  
</section>

<footer>

  <div className="f_sn">
    <p>Мы в социальных сетях:</p>
    <div className="fsn_icons">
      <a href="https://vk.com/kupimama.donetsk"><i className="fa fa-vk fa-1x" aria-hidden="true"></i></a>
      <a href="https://instagram.com/kupimama.donetsk"><i className="fa fa-instagram fa-1x" aria-hidden="true"></i></a>
      <a href="https://facebook.com/kupimama.donetsk"><i className="fa fa-facebook fa-1x" aria-hidden="true"></i></a>
    </div>
  </div>

  <div className="line"></div>

  <div className="f_nav">
    <div className="fn_nav">
      <a href="#">Распродажа</a>
      <a href="#">Доставка и оплата</a>
      <a href="#">Гарантия</a>
      <a href="#">Контакты</a>
      <a href="#">Магазины</a>
    </div>
    <div className="fn_cop">
      <a href="#">Powered by itd.company</a>
    </div>
  </div>

  <div className="line"></div>

  <div className="f_inf">
    <p>Время работы колл-центра:</p>
    <p>9:00 - 19:00 Пн-Пт</p>
    <p>Номер телефона: +380715050555</p>
    <p>Почта: info@kupimama.com</p>
  </div>

  <div className="fn_cop fn_cop_mobil">
    <a href="#">Powered by itd.company</a>
  </div>

</footer>
</>
  );
}

export default App;
