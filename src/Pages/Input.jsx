import React from "react";
import { Headers, Footer, SectionWrap } from "../components";

const input = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="input_content">
          <p className="title">Вход</p>

          <form action="">
            <div className="inp_wrap">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Пароль" required />
              <a href="forgotPassword.html">Забыли пароль?</a>
            </div>

            <button type="submit">Войти</button>
          </form>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default input;
