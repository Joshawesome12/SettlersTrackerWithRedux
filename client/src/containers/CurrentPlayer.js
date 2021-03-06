import React, { Component } from "react";
import { connect } from "react-redux";
import FieldList from "../components/FieldList";
class CurrentPlayer extends Component {
  render() {
    if (!this.props.players || this.props.players.length === 0)
      return <div>Loading current player stats</div>;
    const player = this.props.players[this.props.game.currentPlayer];
    const fields = Object.keys(player);

    return (
      <div className="currentPlayer" style={{ backgroundColor: player.color }}>
        <FieldList
          game={this.props.game}
          player={player}
          fields={fields}
          editable={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game
  };
}
export default connect(mapStateToProps)(CurrentPlayer);
