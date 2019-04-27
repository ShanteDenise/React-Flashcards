import React, { Component } from "react";
export default class CardList extends Component {
  render() {
    return (
      <div>
        <h5 className="termLength">
          Terms in this set ({this.props.currentCard.length})
        </h5>

        <div className="listContainer">
          <div className="questionList">
            {this.props.currentCard.map((list, i) => (
              <div key={i} className="listItemQuestion">
                {list.question}{" "}
              </div>
            ))}
          </div>
          <div className="answerList">
            {this.props.currentCard.map((list, i) => (
              <div key={i} className="listItemAnswer">
                {list.answer}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
