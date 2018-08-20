"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gameData = {
  start: {
    text: "Toto je začátek hry.",
    choices: [{
      text: "Začneme!",
      nextStep: "question1"
    }, {
      text: "Končíme!",
      nextStep: "question2"
    }]
  },

  question1: {
    text: "Kliknuli jste na otázku 1.",
    choices: [{
      text: "Zpět na začátek!",
      nextStep: "start",
      scoreChange: -10,
      trustChange: 20
    }]
  },

  question2: {
    text: "Kliknuli jste na otázku 2.",
    choices: [{
      text: "Zpět na začátek!",
      nextStep: "start",
      scoreChange: 20,
      trustChange: -10
    }]
  }
};

function Score(props) {
  return React.createElement(
    "div",
    { className: "scoreDisplay" },
    "SK\xD3RE: ",
    props.score
  );
}

function TrustScore(props) {
  return React.createElement(
    "div",
    { className: "trustDisplay" },
    "D\u016EV\u011ARA: ",
    props.trust,
    " %"
  );
}

function StepText(props) {
  return React.createElement(
    "div",
    { className: "gameInfo" },
    props.text
  );
}

function ChoiceButton(props) {
  return React.createElement(
    "button",
    { onClick: props.onClick },
    props.text
  );
}

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.state = {
      score: 0,
      trust: 33,
      step: "start",
      history: []
    };
    return _this;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(choice, stepText) {
      var newScore = choice.scoreChange ? choice.scoreChange + this.state.score : this.state.score;
      var newTrust = choice.trustChange ? choice.trustChange + this.state.trust : this.state.trust;
      var newHistory = this.state.history.concat([stepText]);
      this.setState({
        step: choice.nextStep,
        score: newScore,
        trust: newTrust,
        history: newHistory
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var step = gameData[this.state.step];
      var choices = step.choices.map(function (choice) {
        return React.createElement(ChoiceButton, { text: choice.text, onClick: function onClick() {
            return _this2.handleClick(choice, step.text);
          } });
      });
      var history = this.state.history.map(function (entry, entryNumber) {
        return React.createElement(
          "li",
          { key: entryNumber },
          entry
        );
      });

      return React.createElement(
        "div",
        { className: "gameview" },
        React.createElement(Score, { score: this.state.score }),
        React.createElement(TrustScore, { trust: this.state.trust }),
        React.createElement(StepText, { text: step.text }),
        choices,
        React.createElement(
          "div",
          { className: "history" },
          React.createElement(
            "ul",
            null,
            history
          )
        )
      );
    }
  }]);

  return Game;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('game'));