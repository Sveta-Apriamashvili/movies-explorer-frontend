import React from "react";
import photo from '../../../images/photo.jpeg';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
        <div className="section-title">
            <h2 className="section-name">Студент</h2>
        </div>
        <article className="about-me__information">
            <div className="about-me__description">
                <p className="about-me__name">Светлана</p>
                <p className="about-me__position">Фронтенд-разработчик, 33 года </p>
                <p className="about-me__text">Thundercats are on the move, Thundercats are loose. Feel the magic, hear the roar, Thundercats are loose. Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thundercats!</p>
                <div className="about-me__links">
                    <a className="about-me__link" href="https://www.linkedin.com/in/svetlana-apriamashvili-7291b5180/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="about-me__link" href="https://github.com/Sveta-Apriamashvili" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
            <img className="about-me__photo" alt="me" src={photo}></img>
        </article>
    </section>
    )
}

export default AboutMe