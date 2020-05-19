import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import About from "./pages/About";
import Guidelines from "./pages/Guidelines";
import Home from "./pages/Home";

class App extends React.Component {
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
        <div>
          <BrowserRouter>
            <div>
              <Navbar />
              {/* <Link to ={"/About"} className="nav-link">About</Link>
          <Link to ={"/Guidelines"} className="nav-link">Guidelines</Link> */}
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/About" component={About} />
                <Route path="/Guidelines" component={Guidelines} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>

        {/* const {(tdata, country)} =this.state; */}
        {/* <div className={styles.container}>
          <Cards data={this.state.data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={this.state.data} country={this.state.country} />
        </div> */}
      </div>
    );
  }
}

export default App;
