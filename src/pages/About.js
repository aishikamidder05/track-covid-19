import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "../components";
import styles from "../App.module.css";
import { fetchData } from "../api";

class About extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>STUFF</h2>
          <p>
            Hey there, I am an undergrad student in B.Tech CSE at NIT Durgapur.
            I made this app to help each one of you, even if it is a little. I
            hope you find this application useful. Take care.
          </p>
          <p>You can mail me here : anaofficial1@gmail.com </p>
        </div>
        
      </div>
    );
  }
}

export default About;
