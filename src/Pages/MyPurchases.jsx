import React from "react";

import { Headers, Footer, SectionWrap } from "../components";

const MyPurshaases = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="myPurch_content">
          <p className="title">Мои покупки</p>

          <table>
            <tr>
              <th>№</th>
              <th>Фото товара</th>
              <th>Кол-во</th>
              <th>Цена за шт.</th>
              <th>Название товара</th>
              <th>Суммарная стоимость</th>
              <th></th>
            </tr>
            <tr>
              <th>1</th>
              <th>
                <img src="img/stroller.jpg" alt="" />
              </th>
              <th>30шт.</th>
              <th>15000р.</th>
              <th>Коляска бирюзовая</th>
              <th>450000р.</th>
              <th>
                <a href="#">В магазин</a>
              </th>
            </tr>
            <tr>
              <th>2</th>
              <th>
                <img src="img/stroller.jpg" alt="" />
              </th>
              <th>30шт.</th>
              <th>15000р.</th>
              <th>Коляска бирюзовая</th>
              <th>450000р.</th>
              <th>
                <a href="#">В магазин</a>
              </th>
            </tr>
            <tr>
              <th>3</th>
              <th>
                <img src="img/stroller.jpg" alt="" />
              </th>
              <th>30шт.</th>
              <th>15000р.</th>
              <th>Коляска бирюзовая</th>
              <th>450000р.</th>
              <th>
                <a href="#">В магазин</a>
              </th>
            </tr>
            <tr>
              <th>4</th>
              <th>
                <img src="img/stroller.jpg" alt="" />
              </th>
              <th>30шт.</th>
              <th>15000р.</th>
              <th>Коляска бирюзовая</th>
              <th>450000р.</th>
              <th>
                <a href="#">В магазин</a>
              </th>
            </tr>
            <tr>
              <th>5</th>
              <th>
                <img src="img/photo.png" alt="" />
              </th>
              <th>30шт.</th>
              <th>15000р.</th>
              <th>Коляска бирюзовая</th>
              <th>450000р.</th>
              <th>
                <a href="#">В магазин</a>
              </th>
            </tr>
          </table>

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
      </SectionWrap>
      <Footer />
    </>
  );
};

export default MyPurshaases;
