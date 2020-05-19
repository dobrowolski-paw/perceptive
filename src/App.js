import React, { Component } from "react";
import "./App.css";
import kogut from "./kogut.mp3";

class App extends Component {
  counter = 0;
  audio = new Audio(kogut);

  state = {
    nr: true,
    number: "",
    time: 60,
    tabel: [],
    tabelRecord: [],
  };
  start = () => {
    if (this.state.time === 60) {
      console.log("time=60");
      let number = Math.floor(Math.random() * 20);
      this.setState({
        time: 60,
        nr: !this.state.nr,
      });

      setInterval(() => this.subtractSecond(), 1000);

      for (let i = 1; i < 101; i++) {
        let nr = Math.floor(Math.random() * 20);

        const tabel = {
          id: i,
          nr: nr,
        };
        this.setState((prevState) => ({
          tabel: [...prevState.tabel, tabel],
          number,
        }));
      }
    } else if (this.state.time > 0 && this.state.time !== 60) {
      console.log("time>0 i <60");
      this.setState({
        tabel: [],
      });

      let number = Math.floor(Math.random() * 20);
      for (let i = 1; i < 101; i++) {
        let nr = Math.floor(Math.random() * 20);

        const tabel = {
          id: i,
          nr: nr,
        };
        this.setState((prevState) => ({
          tabel: [...prevState.tabel, tabel],
          number,
        }));
      }
    } else {
      this.counter = 0;
      this.setState({
        time: 60,
      });
      let number = Math.floor(Math.random() * 20);
      for (let i = 1; i < 101; i++) {
        let nr = Math.floor(Math.random() * 20);

        const tabel = {
          id: i,
          nr: nr,
        };
        this.setState((prevState) => ({
          tabel: [...prevState.tabel, tabel],
          number,
        }));
      }
    }
  };
  subtractSecond = () => {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1,
      });
    } else if (this.state.time === 0) {
      this.setState({
        tabel: [],
        time: `Wynik ${this.counter}`,
      });
      this.audio.play();
    }
  };
  handlerAddTab = (tab) => {
    if (tab.nr === this.state.number) {
      this.counter++;
      this.start();
    } else {
    }
  };

  render() {
    const tabel = this.state.tabel.map((tab) => (
      <div
        key={tab.id}
        className="TabNumber"
        onClick={this.handlerAddTab.bind(this, tab)}
      >
        {tab.nr}
      </div>
    ));

    console.log();
    return (
      <div className="App">
        <header className="App-header">
          Percepcja
          <br />
          Czas: {this.state.time} Wynik: {this.counter}
        </header>
        <div className="Number">
          <p className="Nr">{this.state.number}</p>
        </div>
        <div className="Tabel">{tabel}</div>
        <div className="Ranking">
          <button onClick={this.start}>start</button>
        </div>
      </div>
    );
  }
}

export default App;
