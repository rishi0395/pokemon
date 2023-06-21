import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";

export default function BookMarkScreen() {
  const navigate = useNavigate();
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  useEffect(() => {
    fetchBookMarkItems();
  }, []);

  const fetchBookMarkItems = () => {
    const bookmarked = JSON.parse(localStorage?.getItem("pokemon") || {});
    console.log(bookmarked);
    setBookmarkedItems(bookmarked);
  };

  const onClickHandler = (pokeDetails) => {
    navigate("/details", { state: pokeDetails });
  };

  const removeBookMarkHandler = (poke) => {
    const bookMarkedItems = localStorage?.getItem("pokemon");
    const updatedList = JSON.parse(bookMarkedItems)?.filter(
      (ele) => ele?.name !== poke?.name
    );
    setBookmarkedItems(updatedList);
    localStorage?.setItem("pokemon", JSON.stringify([...updatedList]));
  };

  return (
    <>
      <h1>BookMarkScreen</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bookmarkedItems?.map((poke, idx) => (
          <div key={idx} style={{ padding: "10px" }}>
            <PokeCard
              onClickHandler={onClickHandler}
              image={poke?.image}
              name={poke?.name}
              removeBookMarkHandler={removeBookMarkHandler}
            />
          </div>
        ))}
      </div>
    </>
  );
}
