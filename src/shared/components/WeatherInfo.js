import React, { Component } from "react";

// import 'href="css/owfont-regular.css" rel="stylesheet" type="text/css"';

import axios from "axios";
import "../../assets/owfont-master/css/owfont-regular.css";

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      errorState: null,
      loading: true
    };
  }

  componentDidMount = () => {
    this.getWeatherInfoFromApi();
  };

  getWeatherInfoFromApi = () => {
    this.setState({ loading: true });

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          APPID: "cd53c49b989c30d81525e1cd618c4a0d",
          q: "San Jose, United States",
          units: "imperial"
        }
      })
      .then(weather => {
        console.log(weather.data);
        this.setState({
          results: weather.data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
          loading: false
        });
      });
  };

  render() {
    const pStyle = {
      fontSize: "1rem"
    };
    return (
      <div className="weatherData">
        {this.state.loading && <p>loading weather information...</p>}

        {!!this.state.results && (
          <div className="weatherData">
            <br></br>
            <i
              className={`owf owf-${this.state.results.weather[0].id} owf-5x owf-fw`}
            ></i>
            <p style={pStyle} className="weatherData__currentTemp">
              {Math.floor(this.state.results.main.temp)}&#8451;
            </p>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}

export default WeatherInfo;
