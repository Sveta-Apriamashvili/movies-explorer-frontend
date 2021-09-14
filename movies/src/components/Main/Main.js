import React from 'react';

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
                {/* <div className="about-project__timeline">
                    <div className="about-project__period">
                        <p className="about-project__time">1 неделя</p>
                        <p className="about-project__time">4 недели</p>
                    </div>
                    <div className="about-project__parts">
                        <p className="about-project__part">Back-end</p>
                        <p className="about-project__part">Front-end</p>
                    </div>

                </div> */}
            </section>
        </main>
    )
}

export default Main