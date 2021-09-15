import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__information">
            <p className="footer__copyright">&copy; 2020</p>
            <ul className="footer__links">
                <li><a href="f" className="footer__link">Яндекс.Практикум</a></li>
                <li><a href="f" className="footer__link">Github</a></li>
                <li><a href="f" className="footer__link">Facebook</a></li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer