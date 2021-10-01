import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {

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
    },
    {
      _id: '5',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://moonlitsanctuary.com.au/wp-content/uploads/2019/04/sc-cockie.jpg",
    },
    {
      _id: '6',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://cdn.shopify.com/s/files/1/1111/3280/articles/44_png_1206x.png?v=1620630215",
    },
    {
      _id: '7',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://www.singing-wings-aviary.com/wp-content/uploads/2015/04/Types-of-Cockatoos.jpg",
    },
    {
      _id: '8',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFnwTfwM3rvssELkQP001HpHN0DZRfOYbBA&usqp=CAU",
    },
    {
      _id: '9',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZByRVPbE-H537Bzib9RtCD2nxkPhlav-rJA&usqp=CAU",
    },
    {
      _id: '10',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFnwTfwM3rvssELkQP001HpHN0DZRfOYbBA&usqp=CAU",
    },
    {
      _id: '11',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZByRVPbE-H537Bzib9RtCD2nxkPhlav-rJA&usqp=CAU",
    },
    {
      _id: '12',
      name: '33 слова о дизайне',
      duration: '1ч 47м',
      thumbnail: "https://www.singing-wings-aviary.com/wp-content/uploads/2015/04/Types-of-Cockatoos.jpg",
    }]

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} />
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default Movies