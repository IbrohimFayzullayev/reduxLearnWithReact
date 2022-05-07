import { combineReducers } from "redux";
import selectSongReducer from "./selectSongReducer";
import songListReducer from "./songListReducer";

const allReducers = combineReducers({
  songList: songListReducer,
  selectSong: selectSongReducer,
});

export default allReducers;

// const songList = [
//   { name: "Uzbek", timer: "3:44", author: "Uzim" },
//   { name: "Russia", timer: "2:44", author: "Sergey" },
//   { name: "Enlish", timer: "1:23", author: "John" },
//   { name: "Turkmen", timer: "4:54", author: "Abdulla" },
// ];

// const songListReducer = (history = songList, song) => {
//   return history;
// };

// const selectSongReducer = (history = [], selectSong) => {
//   if (selectSong.type === "SELECTED") {
//     return selectSong.payload;
//   }
//   return history;
// };
