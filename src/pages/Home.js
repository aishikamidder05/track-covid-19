import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "../components";
import styles from "../App.module.css";
import { fetchData } from "../api";

class About extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <Cards data={this.state.data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={this.state.data} country={this.state.country} />
        </div>
      </div>
    );
  }
}

export default About;
