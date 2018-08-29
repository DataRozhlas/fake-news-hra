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

function Badge(props) {
    return (
      <div className="badge">
        <div className="badge-text">
          {props.text}
        </div>
      </div>
    )
}

function SocialPost(props) {
    function dediak(text) {
      const sdiak = "áäčďéěíĺľňóôöŕšťúůüýřžÁÄČĎÉĚÍĹĽŇÓÔÖŔŠŤÚŮÜÝŘŽ ";
      const bdiak = "aacdeeillnooorstuuuyrzAACDEEILLNOOORSTUUUYRZ_"; 
      let newtext = ""
      for (let char = 0; char < text.length; char++) {
        if (sdiak.indexOf(text.charAt(char)) != -1) {
          newtext += bdiak.charAt(sdiak.indexOf(text.charAt(char)));
        } else {
          newtext += text.charAt(char);
        }
      } 
      return newtext
    }

    const pfpLink = "http://dev.datarozhlas.cz/fake-news-hra/data/" + dediak(props.username.toLowerCase()) + ".png";
    return (
      <div className="social-post">
        <img src={pfpLink} className="social-post-img" />
        <span className="social-post-username">{props.username}</span>
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

function WebPost(props) {
    return (
      <div className="web-post">
        <div className="web-post-webname">{props.webname}</div>
        <div className="web-post-text">{props.text}</div>
      </div>
    )
}

function ChoiceButton(props) {
  return (
      <button className={props.class} onClick={props.onClick}>
      {props.text}
      </button>
    )
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      trust: 0,
      //step: "start",
      step: "firstContent_choice1_attack_personal_react1",
      history: [],
      isEvil: false,
      siteName: "",
      penName: "",
      gender: "none",
      age: "none",
      townSize: "none",
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
    } else if (choice.nextStep === "penName_chosen") {
      this.setState({
        penName: choice.text
      })
    } else if (stepText === "Jste muž, nebo žena?") {
      this.setState({
        gender: choice.text
      })
    } else if (stepText === "Kolik vám je let?") {
      this.setState({
        age: choice.text
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
      if (step.username === "{siteName}") {
        step.username = this.state.siteName;
      }
      const text = this.processText(step.text);
      return <SocialPost username={step.username} text={text} />
    } else if (step.type === "webName") {
      return <WebTitle title={step.text} claim={step.slogan} />
    } else if (step.type === "badge") {
      return <Badge text={step.text} />
    } else if (step.type === "webPost") {
      if (step.webName === "{siteName}") {
        step.webName = this.state.siteName;
      }
      return <WebPost webname={step.webName} text={step.text} />
    } else if (step.type === "endGame") {
      const text = step.text.replace("{fanCount}", this.state.score);
      this.sendResults();
      return <GameMessage text={text} />
    }
  }

  sendResults() {
    const uid = Date.now() + Math.floor(Math.random() * 10000);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hcthkkh1m9.execute-api.eu-central-1.amazonaws.com/prod');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var userInfo = JSON.parse(xhr.responseText);
            console.log(userInfo);
        }
    };
    xhr.send(JSON.stringify({
        uid: uid,
        gender: this.state.gender,
        age: this.state.age,
        townSize: this.state.townSize,
        score: this.state.score,
        evilness: this.state.isEvil
    }));
  }

  render() {
    const step = gameData[this.state.step];
    const choices = step.choices.map((choice, index) => {
      if (step.choices.length < 3) {
        return <ChoiceButton key={index} class="choice-button" text={choice.text} onClick={() => this.handleClick(choice, step.text)} />
      } else {
        return <ChoiceButton key={index} class="choice-button-3" text={choice.text} onClick={() => this.handleClick(choice, step.text)} />
      }
    });
    const history = this.state.history.map((entry, entryNumber) => {
      return (
        <li key={entryNumber}>
          {this.processText(entry)}
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
          <div className="game-event">
            {this.renderStep(step)}
          </div>
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
