import {gameData} from "./data.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CountUp from 'react-countup';

function Score(props) {
  return (
      <div className="score-meter">
        <div className="score-number">
          <CountUp start={props.oldScore} end={props.score} />
        </div>
        <div className="score-text">
        Sledujících
        </div>
      </div>
    )
}

function TrustScore(props) {
  function getTrust(trust) {
    return <CountUp start={props.oldTrust} end={props.trust} />
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

function GameIntro(props) {
    return (
      <div>
      <div className="game-message">
      {props.text}
      </div>
      <div className="game-instructions">
      {props.instructions}
      </div>
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
      oldScore: 0,
      score: 0,
      trust: 0,
      oldTrust: 0,
      step: "start",
      history: [],
      isEvil: true,
      siteName: "Český Maják",
      penName: "",
      gender: "none",
      age: "none",
      townSize: "none",
    };
  }

  handleClick(choice, stepText) {
    if (choice.text === "Sdílet na Facebooku") {
        const sdileciURL = "https://www.facebook.com/sharer/sharer.php?u="+window.location.href;
        window.open(sdileciURL,'test','left=20,top=20,width=550,height=650,toolbar=0,resizable=0,menubar=0');
        return
    } else if (choice.text === "Sdílet na Twitteru") {
      const sdileciURL = "https://twitter.com/intent/tweet?text=Stal%20jsem%20se%20mistrem%20dezinformac%C3%AD!%20Vyzkou%C5%A1ejte%20si%20roli%20%C5%A1%C3%A9fredaktora%20webu%20s%20fale%C5%A1n%C3%BDmi%20zpr%C3%A1vami%20ve%20h%C5%99e%20serveru%20iROZHLAS.cz%3A&url=" + window.location.href;
      window.open(sdileciURL,'test','left=20,top=20,width=550,height=250,toolbar=0,resizable=0,menubar=0');
      return
    }

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

    if (choice.good === true) {
      this.setState({
        isEvil: false
      })
    }

    this.setState({
      step: choice.nextStep,
      oldScore: this.state.score,
      score: newScore,
      oldTrust: this.state.trust,
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
    } else if (step.type === "gameIntro") {
      return <GameIntro text={step.text} instructions={step.instructions} />
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
            <Score score={this.state.score} oldScore={this.state.oldScore} />
            <TrustScore trust={this.state.trust} oldTrust={this.state.oldTrust} />
          </div>
          <div className="game-event">
            {this.renderStep(step)}
          </div>
          <div className="choice-buttons">
          {choices}
          </div>
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
