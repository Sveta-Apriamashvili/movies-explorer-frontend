import React from "react";

function SearchForm() {

    return (
        <section className="search-form">
            <form className="search-form__form">
                <fieldset className="search-form__input-container">
                    <input className="search-form__item" placeholder="Фильм" type="text" id="movie" name="movie">
                    </input>
                    <button className="search-form__submit-button" type="submit">Поиск</button>
                </fieldset>
                <label className="search-form__checkbox">
                    <input className="search-form__checkbox-icon" type="checkbox"/>
                    Короткометражки
                    <span className="search-form__slider"/>
                </label>
            </form>
        </section>
    )
}


export default SearchForm