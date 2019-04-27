import React, { Component } from "react";
import { Button, Icon } from "react-materialize";

class NextCard extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }

  render(props) {
    return (
      <div className="buttonContainer">
        <Button waves="light" onClick={this.drawCard}>
          Next Question<Icon left>autorenew</Icon>
        </Button>
      </div>
    );
  }
}
export default NextCard;
