import React from "react";

function FilterSlider() {
    return (
        <div className="filter-slider">
        <label className="filter-slider__label">
            <input className="filter-slider__checkbox" type="checkbox" />
            Короткометражки
            <span className="filter-slider__slider" />
        </label>
        </div>
    )
}

export default FilterSlider