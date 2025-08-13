import "./About.css"
import HTML from "../img/html5.svg"
import CSS from "../img/css.svg"
import JavaScript from "../img/javascript.svg"
import TypeScript from "../img/typescript.svg"
import React from "../img/reactjs.svg"
import Vue from "../img/vue.svg"
import Figma from "../img/figma.svg"
import Git from "../img/git.svg"



export default function About() {
    return (
    <section id="about" className="section section__about">
        <div class="container container__about">
            <div className="about__box">
                <h2 className="about__title">О себе</h2>
                <p className="about__text">Начинающий разработчик с сильным желанием развиваться в сфере веб-разработки. Обладаю базовыми знаниями языков прграммирования и фреймворков. Умею работать в команде, быстро обучаюсь новым технологиям и нацелен на результат. Ищу возможность применить свои знания и внести вклад в интересные проекты, развиваясь в команде профессионалов. Решил сменить вид деятельности т.к. хочу получать новые знания и динамично развиваться в веб-разработке</p>
                <div className="soft__box">
                    <h2 className="soft__box-title">Soft skills</h2>
                    <ul className="soft-list">
                    <li className="soft__list-item">Аналитическое мышление</li>
                    <li className="soft__list-item">Умение работать в команде</li>
                    <li className="soft__list-item">Внимательность</li>
                    <li className="soft__list-item">Ответственность</li>
                    <li className="soft__list-item">Адаптивность</li>
                    <li className="soft__list-item">Организованность</li>
                    <li className="soft__list-item">"CSS The Definitive Guide" Эрик Майер</li>
                    <li className="soft__list-item">"Чистый код" Роберт Мартин</li>
                </ul>
                </div>
            </div>
            <div className="skills__box">
                <h2 className="slills__box-title">Навыки</h2>
                <ul className="skills-list">
                    <li className="skill__list-item"><img src={HTML} alt="" />HTML5</li>
                    <li className="skill__list-item"><img src={CSS} alt="" />CSS3</li>
                    <li className="skill__list-item"><img src={JavaScript} alt="" />JavaScript</li>
                    <li className="skill__list-item"><img src={TypeScript} alt="" />TypeScript</li>
                    <li className="skill__list-item"><img src={React} alt="" />React </li>
                    <li className="skill__list-item"><img src={Vue} alt="" />Vue</li>
                    <li className="skill__list-item"><img src={Figma} alt="" />Figma</li>
                    <li className="skill__list-item"><img src={Git} alt="" />Git</li>
                </ul>
            </div>
        </div>
    </section>
    
    )
}