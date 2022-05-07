const songListReducer = (
  history = [{ name: "Uzbek", timer: "3:44", author: "Uzim" }],
  data
) => {
  if (data.type === "ADD") {
    return (history = [...history, data.payload]);
  }
  return history;
};

export default songListReducer;

// return [
//   { name: "Uzbek", timer: "3:44", author: "Uzim" },
//   { name: "Russia", timer: "2:44", author: "Sergey" },
//   { name: "English", timer: "1:23", author: "John" },
//   { name: "Turkmen", timer: "4:54", author: "Abdulla" },
// ];
