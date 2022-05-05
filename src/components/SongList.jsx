import React from "react";
import reactRedux from "react-redux";

const SongList = () => {
  return <div>Song List</div>;
};

const getMyState = (data) => {
  return data;
};

export default reactRedux.connect()(SongList);
