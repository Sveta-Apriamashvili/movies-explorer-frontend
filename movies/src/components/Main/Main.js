import React from 'react';
import photo from '../../images/photo.jpeg';

function Main() {
    return (
        <main className="content">
            <section className="promo">
                <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
            </section>
            <section className="navtab">
                <nav>
                    <ul className="navtab__links">
                        <li>
                            <a href="f" className="navtab__link">О проекте</a>
                        </li>
                        <li>
                            <a href="f" className="navtab__link">Технологии</a>
                        </li>
                        <li>
                            <a href="f" className="navtab__link">Студент</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="about-project">
                <div className="section-title">
                    <h2 className="section-name">О проекте</h2>
                </div>
                <ul className="table">
                    <li className="table__cell">
                        <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
                        <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="table__cell">
                        <h3 className="table__heading">На выполнение диплома ушло 5 недель</h3>
                        <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className="about-project__timeline">
                    <div className="about-project__backend">
                        <p className="about-project__time about-project__time_color-backend">1 неделя</p>
                        <p className="about-project__part">Back-end</p>
                    </div>
                    <div className="about-project__frontend">
                        <p className="about-project__time">4 недели</p>
                        <p className="about-project__part">Front-end</p>
                    </div>
                </div>
            </section>
            <section className="techs">
                <div className="section-title">
                    <h2 className="section-name">Технологии</h2>
                </div>
                <div className="techs__info">
                    <h2 className="techs__title">7 технологий</h2>
                    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className="techs__list">
                        <li className="techs__item">HTML</li>
                        <li className="techs__item">CSS</li>
                        <li className="techs__item">JS</li>
                        <li className="techs__item">React</li>
                        <li className="techs__item">Git</li>
                        <li className="techs__item">Express.js</li>
                        <li className="techs__item">mongoDB</li>
                    </ul>
                </div>
            </section>
            <section className="about-me">
                <div className="section-title">
                    <h2 className="section-name">Студент</h2>
                </div>
                <article className="about-me__information">
                    <div className="about-me__description">
                        <p className="about-me__name">Светлана</p>
                        <p className="about-me__position">Фронтенд-разработчик</p>
                        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <div className="about-me__links">
                            <a href="f" className="about-me__link">Facebook</a>
                            <a href="f" className="about-me__link">Github</a>
                        </div>
                    </div>
                    <img className="about-me__photo" alt="me" src={photo}></img>
                </article>
            </section>
            <section className="portfolio">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__items">
                    <li className="portfolio__item"><a className="portfolio__link" href="f">Статичный сайт</a>
                        <button className="portfolio__element"></button>
                    </li>
                    <li className="portfolio__item"><a className="portfolio__link" href="f">Адаптивный сайт</a>
                        <button className="portfolio__element"></button>
                    </li>
                    <li className="portfolio__item"><a className="portfolio__link" href="f">Одностраничное приложение</a>
                        <button className="portfolio__element"></button>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main