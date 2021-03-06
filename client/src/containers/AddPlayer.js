import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
import { TwitterPicker } from "react-color";
class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      color: "red",
      displayColorPicker: false
    };
  }
  render() {
    console.log("THIS is the color: ", this.state.color);
    let colors = [
      "#EEF3F0",
      "#FF0F0F",
      "#4c88ff",
      "#188b52",
      "#F87A04",
      "#8B572A",
      "#EAEE12",
      "#ba68c8"
    ];
    return (
      <div className="addPlayer">
        <form
          className="addPlayerForm"
          onSubmit={e => {
            e.preventDefault();
            this.props.addPlayer(this.state.player, this.state.color);
            this.setState({ player: "" });
          }}
          style={{ position: "relative" }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
            placeholder="Player name"
          />
          <div
            className="selectColor"
            style={{ backgroundColor: this.state.color }}
            onClick={() =>
              this.setState({
                displayColorPicker: !this.state.displayColorPicker
              })
            }
          />
          {this.state.displayColorPicker && (
            <div style={{ position: "absolute", zIndex: "2", top: "30px" }}>
              <div
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px"
                }}
                onClick={() => this.setState({ displayColorPicker: false })}
              />
              <TwitterPicker
                onChange={color => this.setState({ color: color.hex })}
                triangle={"hide"}
                colors={colors}
              />
            </div>
          )}
          <div className="colorSquare" />
          <button type="submit"> Add Player </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(AddPlayer);
