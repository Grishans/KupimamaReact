import React from "react";
import "./style.scss";

const MainNav = () => {
  const toogleRef = React.useRef();
  const [togleView, setTogleView] = React.useState(null);
  const filterType = [
    "Гигиена и уход",
    "Питание и кормление",
    "Прогулка и путишествие",
    "Детская комната",
    "Одежда и обувь",
    "Игрушки и игры",
    "Школа и констовары",
    "Книги",
    "Спорт и отдых",
    "Ещё",
  ];
  React.useEffect(() => {
    // document.body.onmouseover = (e) => {
    //   if (!e.path.includes(toogleRef.current)) {
    //     setTogleView(null);
    //   }
    // };
    document.body.addEventListener("mouseout", (e) => {
      if (!e.path.includes(toogleRef.current)) {
        console.log("object", toogleRef.current);
        setTogleView(null);
      }
    });
  }, [toogleRef]);
  return (
    <div className="nav">
      <div className="nav_wrap">
        <ul>
          {filterType &&
            filterType.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setTogleView(index)}
                // onMouseLeave={() => setTogleView(null)}
              >
                {item}
              </li>
            ))}
        </ul>
        {togleView === 0 && (
          <div className="nav_toogle toggle_0" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 1 && (
          <div className="nav_toogle toggle_1" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/logo.png" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 2 && (
          <div className="nav_toogle toggle_2" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 3 && (
          <div className="nav_toogle toggle_3" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 4 && (
          <div className="nav_toogle toggle_4" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 5 && (
          <div className="nav_toogle toggle_5" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 6 && (
          <div className="nav_toogle toggle_6" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 7 && (
          <div className="nav_toogle toggle_7" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 8 && (
          <div className="nav_toogle toggle_8" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;