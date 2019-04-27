import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import NextCard from "./components/NextCard";
import CardList from "./components/CardList";
import firebase, { database } from "firebase";
import "firebase/database";
import { DB_CONFIG } from "./config/firebase/db_config";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child("cards");
    this.state = {
      cards: [],
      currentCard: {},
      newCard: [
        {
          id: Number,
          question: "",
          answer: "",
          pin: ""
        }
      ]
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.database.on("child_added", snap => {
      currentCards.push({
        id: snap.key,
        question: snap.val().question,
        answer: snap.val().answer,
        pin: snap.val().pin
      });
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
    });
  }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard = () => {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="header">
          <div className="cardRow">
            <Card
              question={this.state.currentCard.question}
              answer={this.state.currentCard.answer}
              pin={this.state.currentCard.pin}
            />
          </div>
          <div className="buttonRow">
            <NextCard drawCard={this.updateCard} />
          </div>

          <CardList currentCard={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
