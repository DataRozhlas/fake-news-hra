function Score(props) {
  return (
      <div className="score-meter">
        <div className="score-number">
        {props.score}
        </div>
        <div className="score-text">
        Sledujících
        </div>
      </div>
    )
}

function TrustScore(props) {
  return (
    <div className="trust-meter">
      <div className="trust-number">
      {props.trust} %
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
      {props.text}
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
      trust: 50,
      step: "start",
      history: []
    };
  }

  handleClick(choice, stepText) {
    const newScore = choice.scoreChange ? choice.scoreChange + this.state.score : this.state.score;
    const newTrust = choice.trustChange ? choice.trustChange + this.state.trust : this.state.trust;
    const newHistory = this.state.history.concat([stepText]);
    this.setState({
      step: choice.nextStep,
      score: newScore,
      trust: newTrust,
      history: newHistory
    })
  }

  renderStep(step) {
    if (step.type === "gameMessage") {
      return <GameMessage text={step.text} />
    } else if (step.type === "socialPost") {
      return <SocialPost text={step.text} />
    } else {
      return "undefined type!"
    }
  }

  render() {
    const step = gameData[this.state.step];
    const choices = step.choices.map((choice) => {
      return <ChoiceButton text={choice.text} onClick={() => this.handleClick(choice, step.text)} />
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
