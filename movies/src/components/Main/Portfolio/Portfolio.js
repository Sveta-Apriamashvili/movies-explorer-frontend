import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
            <li className="portfolio__item"><a className="portfolio__link" href="https://sveta-apriamashvili.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
                <button className="portfolio__element"></button>
            </li>
            <li className="portfolio__item"><a className="portfolio__link" href="https://sveta-apriamashvili.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                <button className="portfolio__element"></button>
            </li>
            <li className="portfolio__item"><a className="portfolio__link" href="http://study.mesto.nomoredomains.rocks/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                <button className="portfolio__element"></button>
            </li>
        </ul>
    </section>
    )
}

export default Portfolio