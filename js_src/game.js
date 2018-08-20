const gameData = {
  start: {
    text: "Toto je začátek hry.",
    choices: [
      {
        text: "Začneme!",
        nextStep: "question1"
      },
      {
        text: "Končíme!",
        nextStep: "question2"
     }
    ]
  },

  question1: {
    text: "Kliknuli jste na otázku 1.",
    choices: [
      {
        text: "Zpět na začátek!",
        nextStep: "start",
        scoreChange: -10,
        trustChange: 20
      }
    ]
  },

  question2: {
    text: "Kliknuli jste na otázku 2.",
    choices: [
      {
        text: "Zpět na začátek!",
        nextStep: "start",
        scoreChange: 20,
        trustChange: -10
      }
    ]
  }, 
}

function Score(props) {
  return (
      <div className="scoreDisplay">
      SKÓRE: {props.score}
      </div>
    )
}

function TrustScore(props) {
  return (
      <div className="trustDisplay">
      DŮVĚRA: {props.trust} %
      </div>
    )
}

function StepText(props) {
    return (
      <div className="gameInfo">
      {props.text}
      </div>
    )
}

function ChoiceButton(props) {
  return (
      <button onClick={props.onClick}>
      {props.text}
      </button>
    )
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      trust: 33,
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
      <div className="gameview">
        <Score score={this.state.score} />
        <TrustScore trust={this.state.trust} />
        <StepText text={step.text} />
        {choices}
        <div className="history">
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
