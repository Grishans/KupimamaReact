import React from "react";
import { Headers, Footer, SectionWrap } from "../components";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contacts = () => {
  const mapState = { center: [47.98, 37.78], zoom: 15 };
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="contacts_content">
          <p className="title">Контакты</p>

          <div className="cc_box">
            <div className="ccb_left">
              <p>Магазин в Донецке:</p>
              <ul>
                <li>
                  Адресс: г.Донецк, пр. Ленинский,11б. ТЦ "Обжора", 3 этаж.
                </li>
                <li>Горячая гиния: +380713080200</li>
                <li>Email: info@kupimama.com</li>
                <li>График работы: 9:00 - 19:00 Пн-Вс</li>
              </ul>
            </div>

            <div className="ccb_right">
              {/* <script
                type="text/javascript"
                charset="utf-8"
                async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A26694c241cffdbcf7165404a543f540d01c5e35df9574851b2fb5393829311a6&amp;width=100%&amp;height=100%&amp;lang=ru_UA&amp;scroll=true"
              ></script> */}
              {/* <YMaps>
                <Map state={mapState}>
                  <Placemark
                    geometry={{
                      coordinates: [47.986444, 37.7858],
                    }}
                    properties={{
                      hintContent: "Собственный значок метки",
                      balloonContent: "Это красивая метка",
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "images/myIcon.gif",
                      iconImageSize: [30, 42],
                      iconImageOffset: [-3, -42],
                    }}
                  />
                </Map>
              </YMaps> */}
            </div>
          </div>

          <div className="cc_box">
            <div className="ccb_left">
              <p>Магазин в Макеевке:</p>
              <ul>
                <li>Адресс: г.Макеевка, ТЦ "Прага", бул. Горбачева 5б.</li>
                <li>Горячая гиния: +380713080100</li>
                <li>Email: info@kupimama.com</li>
                <li>График работы: 9:00 - 18:00 Пн-Вс</li>
              </ul>
            </div>

            <div className="ccb_right">
              {/* <script
                type="text/javascript"
                charset="utf-8"
                async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa10a4a5d490f6f30978583ed7a0c0d639740c0a39ff1bcb5c485498a7b7f3624&amp;width=100%&amp;height=100%&amp;lang=ru_UA&amp;scroll=true"
              ></script> */}
            </div>
          </div>

          <a href="#" className="cc_btn">
            Форма обратной связи
          </a>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default Contacts;
