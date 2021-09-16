import React from "react";

function NavTab() {
    return(
        <section className="navtab">
        <nav>
            <ul className="navtab__links">
                <li>
                    <a href="#about-project" className="navtab__link">О проекте</a>
                </li>
                <li>
                    <a href="#techs" className="navtab__link">Технологии</a>
                </li>
                <li>
                    <a href="#about-me" className="navtab__link">Студент</a>
                </li>
            </ul>
        </nav>
    </section>
    )
}

export default NavTab