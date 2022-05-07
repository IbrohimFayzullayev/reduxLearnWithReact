import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  renderDetail() {
    if (this.props.selectSong.name) {
      return (
        <div class="ui card">
          <div class="image">
            <img
              alt="music img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Apu1JPEhQk5HgxHA4jqlmFMVPVfl6ji1RQ&usqp=CAU"
            />
          </div>
          <div class="content">
            <a class="header">{this.props.selectSong.name}</a>
            <div class="meta">
              <span class="date">{this.props.selectSong.timer}</span>
            </div>
            <div class="description">{this.props.selectSong.author}</div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 download
            </a>
          </div>
        </div>
      );
    } else {
      return <h2>Loading .... </h2>;
    }
  }
  render() {
    return <div>{this.renderDetail()}</div>;
  }
}
const getMyState = (state) => state;
export default connect(getMyState)(SongDetail);
