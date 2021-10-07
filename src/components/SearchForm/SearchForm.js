import React from "react";
import FilterSlider from "../FilterSlider/FilterSlider";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function SearchForm(props) {

    const {
        errors,
        isValid,
        values,
        handleChange,
      } = useFormWithValidation({});

      const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(values);
      };
    
      const handleCheckboxChange = (e) => {
        const checkbox = e.target;
        values.shortfilm = checkbox.checked;
      }

    return (
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <fieldset className="search-form__input-container">
                    <input className="search-form__item" placeholder="Фильм" type="text" id="movie" name="movie" required onChange={handleChange} />
        <span className="search-form__error">{errors["movie"]}</span>
                    <button className="search-form__submit-button" type="submit" disabled={!isValid}>Поиск</button>
                </fieldset>
                <FilterSlider onChange={handleCheckboxChange} />
            </form>
        </section>
    )
}


export default SearchForm