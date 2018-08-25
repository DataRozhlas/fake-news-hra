import {gameData} from "./data.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CountUp from 'react-countup';

function Score(props) {
  return (
      <div className="score-meter">
        <div className="score-number">
          <CountUp end={props.score} />
        </div>
        <div className="score-text">
        Sledujících
        </div>
      </div>
    )
}

function TrustScore(props) {
  // to avoid passing an init prop, we just check if init value is the initial one
  function getTrust(trust) {
    if (trust === 10) {
      return 10
    } else {
      return <CountUp end={props.trust} />
    }
  }

  return (
    <div className="trust-meter">
      <div className="trust-number">
        {getTrust(props.trust)} %
      </div>
      <div className="trust-text">
      Důvěra
      </div>
    </div>
    )
}

function GameMessage(props) {
    return (
      <div className="game-message">
      {props.text}
      </div>
    )
}

function SocialPost(props) {
    return (
      <div className="social-post">
        <img src="http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png" className="social-post-img" />
        <div className="social-post-username">{props.username}</div>
        <div className="social-post-text">{props.text}</div>
      </div>
    )
}

function WebTitle(props) {
    return (
      <div className="web-title">
        <div className="web-title-name">{props.title}</div>
        <div className="web-title-claim">{props.claim}</div>
      </div>
    )
}

function ChoiceButton(props) {
  return (
      <button className="choice-button" onClick={props.onClick}>
      {props.text}
      </button>
    )
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      trust: 10,
      step: "start",
      history: [],
      siteName: "",
      penName: ""
    };
  }

  handleClick(choice, stepText) {
    const newScore = choice.scoreChange ? choice.scoreChange + this.state.score : this.state.score;
    const newTrust = choice.trustChange ? choice.trustChange + this.state.trust : this.state.trust;
    const newHistory = this.state.history.concat([stepText]);

    if (choice.nextStep === "choosePenName") {
      this.setState({
        siteName: stepText
      })
    } else if (choice.nextStep === "badge_impersonation") {
      this.setState({
        penName: choice.text
      })
    }

    this.setState({
      step: choice.nextStep,
      score: newScore,
      trust: newTrust,
      history: newHistory
    })
  }

  processText(text) {
    text = text.replace("{siteName}", this.state.siteName);
    text = text.replace("{penName}", this.state.penName);
    return text
  }

  renderStep(step) {
    if (step.type === "gameMessage") {
      const text = this.processText(step.text);
      return <GameMessage text={text} />
    } else if (step.type === "socialPost") {
      return <SocialPost username={step.username} text={step.text} />
    } else if (step.type === "webName") {
      return <WebTitle title={step.text} claim={step.slogan} />
    } else { // fix
      return <GameMessage text={step.text} />
    }
  }

  render() {
    const step = gameData[this.state.step];
    const choices = step.choices.map((choice, index) => {
      return <ChoiceButton key={index} text={choice.text} onClick={() => this.handleClick(choice, step.text)} />
    });
    const history = this.state.history.map((entry, entryNumber) => {
      return (
        <li key={entryNumber}>
          {entry}
        </li>
      );
    });

    return (
      <div>
        <div className="gameview">
          <div className="meters">
            <Score score={this.state.score} />
            <TrustScore trust={this.state.trust} />
          </div>
          {this.renderStep(step)}
          <div className="choice-buttons">
          {choices}
          </div>
        </div>
        <div className="history">
        Záznam hry:
        <ul>{history}</ul>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('game')
);
