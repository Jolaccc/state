import React from "react";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      age: null,
      points: null,
    };
  }

  changeValue = () => {
    const currentFirstname = this.state.firstname;
    const currentLastname = this.state.lastname;
    const currentAge = this.state.age;
    const currentPoints = this.state.points;
    this.setState({
      firstname: !currentFirstname,
      lastname: !currentLastname,
      age: !currentAge,
      points: !currentPoints,
    });
  };

  render() {
    return (
      <>
        <p>Firstname: {this.state.firstname}</p>
        <input
          type="text"
          onChange={(e) => this.setState({ firstname: e.target.value })}
        ></input>
        <p>
          Lastname : <b>{this.state.lastname}</b>
        </p>
        <input
          type="text"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        ></input>
        <p>Age: {this.state.age}</p>
        <input
          type="number"
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <p>Points: {this.state.points}</p>
        <input
          type="number"
          onChange={(e) => this.setState({ points: e.target.value })}
        ></input>
      </>
    );
  }
}

export default UserComponent;
