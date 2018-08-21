"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Score(props) {
  return React.createElement(
    "div",
    { className: "score-meter" },
    React.createElement(
      "div",
      { className: "score-number" },
      props.score
    ),
    React.createElement(
      "div",
      { className: "score-text" },
      "Sk\xF3re"
    )
  );
}

function TrustScore(props) {
  return React.createElement(
    "div",
    { className: "trust-meter" },
    React.createElement(
      "div",
      { className: "trust-number" },
      props.trust,
      " %"
    ),
    React.createElement(
      "div",
      { className: "trust-text" },
      "D\u016Fv\u011Bra"
    )
  );
}

function StepText(props) {
  return React.createElement(
    "div",
    { className: "gametext" },
    props.text
  );
}

function ChoiceButton(props) {
  return React.createElement(
    "button",
    { className: "choice-button", onClick: props.onClick },
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
      trust: 50,
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
        null,
        React.createElement(
          "div",
          { className: "gameview" },
          React.createElement(
            "div",
            { className: "meters" },
            React.createElement(Score, { score: this.state.score }),
            React.createElement(TrustScore, { trust: this.state.trust })
          ),
          React.createElement(StepText, { text: step.text }),
          React.createElement(
            "div",
            { className: "choice-buttons" },
            choices
          )
        ),
        React.createElement(
          "div",
          { className: "history" },
          "Z\xE1znam hry:",
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