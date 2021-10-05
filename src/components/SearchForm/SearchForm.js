import React from "react";
import FilterSlider from "../FilterSlider/FilterSlider";

function SearchForm() {

    return (
        <section className="search-form">
            <form className="search-form__form">
                <fieldset className="search-form__input-container">
                    <input className="search-form__item" placeholder="Фильм" type="text" id="movie" name="movie" required>
                    </input>
                    <button className="search-form__submit-button" type="submit">Поиск</button>
                </fieldset>
                <FilterSlider />
            </form>
        </section>
    )
}


export default SearchForm