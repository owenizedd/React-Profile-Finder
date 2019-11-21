import React from "react";
import ReactDOM from "react-dom";
import CardList from "./Components/CardList";
import "./styles.css";
import Card from "./Components/Card";

class App extends React.Component {
  state = {
    profiles: [],
    searchValue: ""
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(response => response.json())
      .then(data => {
        this.setState({
          profiles: data.results
        });
      });
  }

  handleChange = evt => {
    this.setState({
      searchValue: evt.target.value
    });
  };
  render() {
    const cards = this.state.profiles;
    const show_cards = cards.map((profile, key) => {
      if (
        (profile.name.first + " " + profile.name.last)
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      )
        return (
          <Card
            key={key}
            photo_url={profile.picture.thumbnail}
            name={profile.name.first + " " + profile.name.last}
            email={profile.email}
          />
        );
    });
    return (
      <div className="app-container">
        <h1 className="title">Profile Finder.</h1>
        <input
          type="search"
          placeholder="CARI AJA BOS"
          onChange={this.handleChange}
        />
        <CardList cards={show_cards} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
