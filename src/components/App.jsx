import React, { useState } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import Header from "./Header";
import AddSong from "./AddSong";

const App = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Header />
      <button
        style={{ marginTop: "20px" }}
        className="ui green button basic"
        onClick={() => setShow(!show)}
      >
        Add Song
      </button>
      <div>{show ? <AddSong /> : ""}</div>
      <div className="ui grid " style={{ marginTop: "20px" }}>
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
