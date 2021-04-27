import React from 'react';
import './App.css';
import bmiChart from './images/bmi-chart.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      total: "",
      type: ""
    }
  }

  handleHeight(event) {
    const height = event.target.value;
    this.setState({height: height});
  }

  handleWeight(event) {
    const weight = event.target.value;
    this.setState({weight: weight});
  }

  handleSubmit(event) {
    event.preventDefault();

    let total = this.state.weight / (this.state.height * this.state.height);
    let totalPrecision = total.toPrecision(4);
    this.setState({total: totalPrecision});

    let wallpaper = document.querySelector('body');
    let heightEnter = document.querySelector('#height-enter');
    let weightEnter = document.querySelector('#weight-enter');

    if (totalPrecision <= 18.5) {
      this.setState({type: "Underweight"});
      wallpaper.style.backgroundImage = 'linear-gradient(blue, lightblue)';
    } else if (totalPrecision > 18.5 && totalPrecision <= 24.9) {
      this.setState({type: "Healthy Weight"});
      wallpaper.style.backgroundImage = 'linear-gradient(green, yellow)';
    } else if (totalPrecision >= 25 && totalPrecision <= 29.9) {
      this.setState({type: "Overweight"});
      wallpaper.style.backgroundImage = 'linear-gradient(orange, yellow)';
    } else if (totalPrecision >= 30) {
      this.setState({type: "Obese"});
      wallpaper.style.backgroundImage = 'linear-gradient(red, orange)';
    } else {
      this.setState({type: ""});
      wallpaper.style.backgroundImage = 'linear-gradient(beige, white)';
    }

    if (this.state.height === "") {
      heightEnter.style.display = 'block';
      wallpaper.style.backgroundImage = 'linear-gradient(beige, white)';
    } else {
      heightEnter.style.display = 'none';
    }

    if (this.state.weight === "") {
      weightEnter.style.display = 'block';
      wallpaper.style.backgroundImage = 'linear-gradient(beige, white)';
    } else {
      weightEnter.style.display = 'none';
    }

    if (isNaN(total) || this.state.height === "" || this.state.weight === "") {
      total = "";
      this.setState({total: total});
      this.setState({type: ""});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <h1>BMI Calculator</h1>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor="height">Height (metres):</label>
            <input type="number" name="height" step="any" onChange={(event) => this.handleHeight(event)} />
            <p id="height-enter">Enter your Height</p>
            <label htmlFor="weight">Weight (kilograms):</label>
            <input type="number" name="weight" step="any" onChange={(event) => this.handleWeight(event)} />
            <p id="weight-enter">Enter your Weight</p>
            <input id="submit-button" type="submit" value="Calculate"/>
          </form>
          <div id="result">
            <p>BMI: <span>{this.state.total}</span></p>
            <p>Category: <span>{this.state.type}</span></p>
          </div>
        </div>
        <div id="img-div">
          <img src={bmiChart} alt="bmi-chart"/>
        </div>
      </div>
    );
  }
}

export default App;
