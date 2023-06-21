export const pokeListUrl = (limit = 10, offset = 0) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const getImageURL = (fullUrl = "") => {
  const convertedArray = fullUrl?.split("/");
  const index = convertedArray[convertedArray?.length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
};

export const pokeInfoUrl = (name) =>
  `https://pokeapi.co/api/v2/pokemon/${name}`;
