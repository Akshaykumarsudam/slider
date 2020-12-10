import React, { Component } from 'react';

class App extends React.Component {
  state = {
    year: 0,
    month: 0,
    fee: 0,range: 0
  }
  range = (eve) => {
    this.setState({ year: eve.target.value });
    this.setState({ range: eve.target.value });
    console.log("state value",this.state.range)
    this.state.range = this.state.year;
    this.state.month = this.state.year/12
    this.state.fee = this.state.month/10
  }
  handleFirstNameInput = (e) => {
    this.setState({ range: e.target.value });
    this.setState({ year: e.target.value });
    console.log("state value",this.state.year)
    this.state.year = this.state.range;
    this.state.month = this.state.range/12
    this.state.fee = this.state.month/10
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>
          with <input type="number" onChange={this.handleFirstNameInput} Value={this.state.year}/> your estimated earnings could be <input type="text" Value={this.state.month} onChange={this.handleFirstNameInput}/> per year with fees of just <input type="text" Value={this.state.fee} onChange={this.handleFirstNameInput}/> per year.
        </p>
        <input className="no-border" onChange={this.range} type="range" Value={this.state.year} min={0} max={30} />


      </div>
    );
  }
}
export default App;
