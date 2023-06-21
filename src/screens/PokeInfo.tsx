import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemonInfo } from "../Api/stateInfoApi";

export default function PokeInfo() {
  const params = useLocation()?.state || {};
  const [pokeInfo, setPokeInfo] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPokeInfo();
  }, []);

  const fetchPokeInfo = async () => {
    try {
      const response = await getPokemonInfo(params?.name);
      setPokeInfo(response);
    } catch (error) {
      setIsError(true);
    }
  };

  const obj = {
    image: params?.image,
    about: {
      species: pokeInfo?.species?.name,
      height: pokeInfo?.height,
      weight: pokeInfo?.weight,
      abilities: pokeInfo?.abilities?.map((ele) => ele?.ability?.name),
      breeding: { gender: pokeInfo, eggGroups: pokeInfo, eggCycle: pokeInfo },
    },
    base: {
      hp: pokeInfo,
      attack: pokeInfo,
      defence: pokeInfo,
      spAtk: pokeInfo,
      spDef: pokeInfo,
      speed: pokeInfo,
      total: pokeInfo,
    },
  };

  const renderInfo = (title, info) => (
    <div style={{ padding: "10px", display: "flex" }}>
      <div style={{ paddingRight: "10px" }}>{title}</div>
      <div>{info}</div>
    </div>
  );

  return (
    <div>
      <img src={obj?.image} alt="new" />
      <h2>About</h2>
      <div>
        {renderInfo("Name", obj.about.species)}
        {renderInfo("height", obj.about.height)}
        {renderInfo("weight", obj.about.weight)}
      </div>
    </div>
  );
}
