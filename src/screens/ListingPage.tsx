import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStateInfo } from "../redux/actions/stateActions";
import { getState } from "../redux/selectors";
import { getImageURL } from "../Api/constants";

import { useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage";
import PokeCard from "../components/PokeCard";
import { bookMarkHandler } from "../utils";

function Home() {
  const pokemonReduxState = useSelector(getState);
  const pokemonList = pokemonReduxState?.data?.results || [];
  const isLoading = pokemonReduxState?.isLoading;
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStateInfo({}));
  }, []);

  useEffect(() => {
    const modifiedList = pokemonList?.map((element, idx) => ({
      name: element?.name,
      image: getImageURL(element?.url),
    }));
    setPokemon(modifiedList);
  }, [pokemonList]);

  const onClickHandler = (pokeDetails) => {
    navigate("/details", { state: pokeDetails });
  };

  const nextButtonHandler = () => {
    dispatch(fetchStateInfo({ url: pokemonReduxState?.data?.next }));
  };

  const prevButtonHandler = () => {
    dispatch(fetchStateInfo({ url: pokemonReduxState?.data?.previous }));
  };

  return (
    <>
      <SearchPage showListButton={false} />
      <h2>List of all Pokemon</h2>
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemon?.map((poke, idx) => (
            <div key={idx} style={{ padding: "10px" }}>
              <PokeCard
                onClickHandler={onClickHandler}
                image={poke?.image}
                name={poke?.name}
                bookMarkHandler={bookMarkHandler}
              />
            </div>
          ))}
        </div>
      )}
      <div
        style={{
          padding: "20px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        {pokemonReduxState?.data?.previous && (
          <button onClick={prevButtonHandler}>Previous</button>
        )}

        <button onClick={nextButtonHandler}>Next</button>
      </div>
    </>
  );
}

export default memo(Home);
