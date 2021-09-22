import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
    const cards = [
        {
            _id: '1',
            name: '33 слова о дизайне',
            duration: '1ч 47м',
            thumbnail: "https://cdn.shopify.com/s/files/1/1111/3280/articles/44_png_1206x.png?v=1620630215",
        },
        {
            _id: '2',
            name: '33 слова о дизайне',
            duration: '1ч 47м',
            thumbnail: "https://moonlitsanctuary.com.au/wp-content/uploads/2019/04/sc-cockie.jpg",
        },
        {
            _id: '3',
            name: '33 слова о дизайне',
            duration: '1ч 47м',
            thumbnail: "https://a-z-animals.com/media/animals/images/original/cockatoo_9.jpg",
        },
        {
            _id: '4',
            name: '33 слова о дизайне',
            duration: '1ч 47м',
            thumbnail: "https://a-z-animals.com/media/animals/images/original/cockatoo_9.jpg",
        }]
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList cards={cards} isSavedMovies={true} />
        </section>
    )
}

export default SavedMovies