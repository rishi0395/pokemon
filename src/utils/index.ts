export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const bookMarkHandler = (poke) => {
  const bookMarkedItems = localStorage?.getItem("pokemon");
  if (!bookMarkedItems) {
    localStorage?.setItem("pokemon", JSON.stringify([poke]));
  } else {
    if (
      !JSON.parse(bookMarkedItems)?.filter((ele) => ele?.name === poke?.name)
        ?.length
    ) {
      const list = JSON.parse(bookMarkedItems);
      localStorage?.setItem("pokemon", JSON.stringify([...list, poke]));
    }
  }
};
