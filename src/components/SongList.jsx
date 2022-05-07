import React from "react";
import { connect } from "react-redux";
import { selectSongAction } from "../actions";

const SongList = (props) => {
  console.log(props);

  const renderList = () => {
    return props.songList.map((val) => {
      return (
        <div key={val.name} className="card">
          <div className="content">
            <img
              className="right floated mini ui image"
              src="https://st.depositphotos.com/1924257/3652/i/450/depositphotos_36528877-stock-photo-headphones-with-love-music-symbol.jpg"
            />
            <div className="header">{val.name}</div>
            <div className="meta">{val.timer}</div>
            <div className="description">{val.author}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                onClick={() => {
                  props.selectSongAction(val);
                }}
                className="ui basic green button"
              >
                Select Song
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="ui cards">{renderList()}</div>
    </div>
  );
};

const getMyState = (data) => {
  return data;
};

export default connect(getMyState, {
  selectSongAction,
})(SongList);
