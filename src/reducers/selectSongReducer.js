const selectSongReducer = (history = [], data) => {
  if (data.type === "SELECTED") {
    return (history = data.payload);
  }
  return history;
};

export default selectSongReducer;
