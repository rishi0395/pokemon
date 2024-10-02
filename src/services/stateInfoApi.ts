import axios from "axios";
import { pokeInfoUrl, pokeListUrl } from "./constants";

export const getStateInfo = async (url = "") => {
  const resp = await axios.get(url?.length > 0 ? url : pokeListUrl());
  return resp?.data;
};

export const getPokemonInfo = async (name) => {
  const resp = await axios.get(pokeInfoUrl(name));
  return resp?.data;
};
