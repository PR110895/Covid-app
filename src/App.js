import React from "react";
import Cards from "./componenet/Cards/Cards";

import CountryPicker from "./componenet/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import image from "./images/image.png";
import styles from "./App.module.css";

class App extends React.Component {
  //State call
  state = {
    data: {},
  };

  //Data call from Api
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);

    this.setState({ data: fetchedData });
  }
  //Country change Handler
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
