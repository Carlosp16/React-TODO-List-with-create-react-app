import React, { Component } from "react";

export default class List extends Component {
  state = {
    participants: []
  };

  addParticipant = name => {
    this.setState({ participants: [...this.state.participants, name] });
    this.title.value = "";
  };

  render() {
    return (
      <div>
        <h1> List of Participants</h1>
        <ul>
         {this.state.participants.map((elem, index)=>{return <li key={index}>{elem}</li>})}
        </ul>
        <button onClick={() => this.addParticipant(this.state.candidate)}>
          Add Participants
        </button>
        <input
          type="text"
          ref={c => (this.title = c)}
          onChange={() => this.setState({ candidate: this.title.value })}
        />
      </div>
    );
  }
}
