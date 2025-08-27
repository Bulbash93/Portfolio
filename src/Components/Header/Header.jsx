import "./Header.css";
import { Children, use, useState } from "react";
import telegram from "../img/telegram.svg";
import phone from "../img/Phone.ico";
import git from "../img/github.svg";

export default function Header() {
  const [showPopup, setshowPopup] = useState(false);

  const Mailto = ({ email, children }) => {
    return <a href={`mailto:${email}`}>{children}</a>;
  };

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <header className="header">
      <div className="container navigation__box">
        <div className="navigation__inner">
          <a href="#" className="logo">
            dk
          </a>
          <nav className="nav">
            <a href="#about">О себе</a>
            <a href="#projects">Проекты</a>
            <a
              href="#"
              className="openPoput"
              onClick={() => setshowPopup(true)}
            >
              Контакты
            </a>
            {showPopup && (
              <div className="popup-window">
                <div className="popup-content">
                  <button
                    className="closePoput"
                    onClick={() => setshowPopup(false)}
                  >
                    <span className="closeOne"></span>
                    <span className="closeTwo"></span>
                  </button>
                  <div class="contact__info">
                    <Mailto email={"koriba93@gmail.com"}>
                      <strong>Email: </strong>koriba93@gmail.com
                    </Mailto>
                    <Callto phone="+79165287796">
                      <strong>tel: </strong>+7 916 528 77 96
                    </Callto>
                    <a href="https://github.com/Bulbash93" target="_blank">
                      {" "}
                      <strong>Git: </strong>Личный кабинет
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
        <h1 className="header__title">
          Портфолио
          <span>
            <span> Frontend-разработчика</span>
            <span> Дмитрия Кориба</span>
          </span>
        </h1>
      </div>
    </header>
  );
}
