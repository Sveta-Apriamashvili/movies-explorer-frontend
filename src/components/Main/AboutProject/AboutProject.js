import React from "react";

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
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
    )
}

export default AboutProject