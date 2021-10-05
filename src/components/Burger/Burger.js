import React from "react";

function Burger(props) {
    return (
        <button className="burger" type="button" aria-label="открыть меню" onClick={props.onBurgerMenu}></button>
    )
}

export default Burger