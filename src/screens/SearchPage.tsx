import React, { useEffect, useState } from "react";
import { getPokemonInfo } from "../services/stateInfoApi";
import { getImageURL } from "../services/constants";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import { bookMarkHandler } from "../utils";

export default function SearchPage({
  showListButton = true,
  showBookMarkButton = true,
}) {
  const navigate = useNavigate();
  const [pokeInfo, setPokeInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (isError) {
      setInput("");
    }
  }, [isError]);

  const onInputHandler = ({ target }) => {
    setInput(target.value?.toLowerCase());
  };

  const searchHandler = async () => {
    try {
      setIsError(false);
      setLoader(true);
      const response = await getPokemonInfo(input);

      setLoader(false);
      setPokeInfo(response);
    } catch (error) {
      setIsError(true);
      setLoader(false);
    }
  };

  const onClickHandler = (pokeDetails) => {
    navigate("/details", { state: pokeDetails });
  };

  return (
    <>
      {showBookMarkButton && (
        <button onClick={() => navigate("/bookmark")}>Bookmarks</button>
      )}
      {showListButton && (
        <div>
          <button onClick={() => navigate("/listing")}>List All Pokemon</button>
        </div>
      )}

      <div>
        <input placeholder="Search Pokemon" onInput={onInputHandler} />
        <button onClick={searchHandler}>search</button>
      </div>

      {loader && <h1>loader</h1>}

      {!loader && (
        <div>
          {isError ? (
            <h1>Error Please try again</h1>
          ) : (
            <div>
              {Object.keys(pokeInfo)?.length > 0 && (
                <>
                  <PokeCard
                    onClickHandler={onClickHandler}
                    image={getImageURL(pokeInfo?.species?.url)}
                    name={pokeInfo?.name}
                    bookMarkHandler={bookMarkHandler}
                  />
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
