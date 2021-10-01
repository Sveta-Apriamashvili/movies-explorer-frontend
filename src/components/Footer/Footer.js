import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__information">
                    <p className="footer__copyright">&copy; 2020</p>
                    <ul className="footer__links">
                        <li><a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                        <li><a className="footer__link" href="https://github.com/Sveta-Apriamashvili" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a className="footer__link" href="https://www.linkedin.com/in/svetlana-apriamashvili-7291b5180/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer