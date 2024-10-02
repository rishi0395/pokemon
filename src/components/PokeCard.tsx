import React from "react";
import { capitalizeFirstLetter } from "../utils";

export default function PokeCard(props) {
  const {
    image = "",
    name = "",
    onClickHandler,
    removeBookMarkHandler,
    bookMarkHandler,
  } = props;

  return (
    <div
      style={{
        margin: "10px",
        backgroundColor: "#E5EEEB",
        maxWidth: "180px",
        borderRadius: 10,
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {removeBookMarkHandler && (
          <button onClick={() => removeBookMarkHandler({ image, name })}>
            remove bookmark
          </button>
        )}

        {bookMarkHandler && (
          <button onClick={() => bookMarkHandler({ image, name })}>
            bookmark
          </button>
        )}
        <img
          src={image}
          alt="new"
          onClick={() => onClickHandler({ image, name })}
        />
        <h4>{capitalizeFirstLetter(name)}</h4>
      </div>
    </div>
  );
}
