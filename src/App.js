import React from 'react';
import './App.css';

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

    let total = (this.state.weight / (this.state.height * this.state.height)) * 10000;
    let totalPrecision = total.toPrecision(4);
    this.setState({total: totalPrecision});

    let wallpaper = document.querySelector('body');
    let heightEnter = document.querySelector('#height-enter');
    let weightEnter = document.querySelector('#weight-enter');

    if (totalPrecision <= 18.5) {
      this.setState({type: "Underweight"});
      wallpaper.style.backgroundImage = 'linear-gradient(#2C73D2, #D5ECF5)';
    } else if (totalPrecision > 18.5 && totalPrecision <= 24.9) {
      this.setState({type: "Healthy Weight"});
      wallpaper.style.backgroundImage = 'linear-gradient(#00C9A7, #F9F871)';
    } else if (totalPrecision >= 25 && totalPrecision <= 29.9) {
      this.setState({type: "Overweight"});
      wallpaper.style.backgroundImage = 'linear-gradient(#FFC75F, #F9F871)';
    } else if (totalPrecision >= 30) {
      this.setState({type: "Obese"});
      wallpaper.style.backgroundImage = 'linear-gradient(#D43725, #FFC75F)';
    } else {
      this.setState({type: ""});
      wallpaper.style.backgroundImage = 'linear-gradient(#B39CD0, #FBEAFF)';
    }

    if (this.state.height === "") {
      heightEnter.style.display = 'block';
      wallpaper.style.backgroundImage = 'linear-gradient(#B39CD0, #FBEAFF)';
    } else {
      heightEnter.style.display = 'none';
    }

    if (this.state.weight === "") {
      weightEnter.style.display = 'block';
      wallpaper.style.backgroundImage = 'linear-gradient(#B39CD0, #FBEAFF)';
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
            <label htmlFor="height">Height (cm):</label>
            <input type="number" name="height" step="any" onChange={(event) => this.handleHeight(event)} />
            <p id="height-enter">Enter your Height</p>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" name="weight" step="any" onChange={(event) => this.handleWeight(event)} />
            <p id="weight-enter">Enter your Weight</p>
            <input id="submit-button" type="submit" value="Calculate"/>
          </form>
          <div id="result">
            <p>BMI: <span>{this.state.total}</span></p>
            <p>Category: <span>{this.state.type}</span></p>
          </div>
        </div>
        <footer>
          <p>&copy; made by Ionut Cora, 2021</p> 
        </footer>
      </div>
    );
  }
}

export default App;
