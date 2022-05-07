import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const AddSong = (props) => {
  const [name, setName] = useState(null);
  const [timer, setTime] = useState(null);
  const [author, setAuthor] = useState(null);

  return (
    <div>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          return props.addSongAction({ name, timer, author });
        }}
      >
        <div className="field">
          <label>Enter Song Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="first-name"
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Enter Song Time</label>
          <input
            onChange={(e) => {
              setTime(e.target.value);
            }}
            type="text"
            name="last-name"
            placeholder="Last Name"
          />
        </div>
        <div className="field">
          <label>Enter Author Name</label>
          <input
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            name="last-name"
            placeholder="Last Name"
          />
        </div>
        <button className="ui green button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const getMyState = (state) => state;
export default connect(getMyState, { addSongAction })(AddSong);
