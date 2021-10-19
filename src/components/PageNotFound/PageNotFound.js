import React from "react";
import { useHistory } from 'react-router-dom'; 


function PageNotFound() {

    const history = useHistory();
    const handleGoBackButton = () => {
        history.goBack();
      };

    return (
<div className="page-not-found">
    <div className="page-not-found__container">
    <h1 className="page-not-found__title">404</h1>
    <p className="page-not-found__subtitle">Страница не найдена</p>
    </div>
    <button className="page-not-found__button"  onClick={handleGoBackButton}
>Назад</button>
    
</div>
    )
}

export default PageNotFound