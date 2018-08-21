"use strict";

var gameData = {
  start: {
    text: "Rádi vás poznáváme.",
    choices: [{
      text: "Začneme!",
      nextStep: "question1"
    }, {
      text: "O co jde?",
      nextStep: "startExplain"
    }]
  },

  startExplain: {
    text: "Tahle hra vás má naučit dělat fake news.",
    choices: [{
      text: "Tak jo!",
      nextStep: "question1"
    }]
  },

  question1: {
    text: "Chcete si zvýšit skóre a snížit důvěru, nebo snížit skóre a zvýšit důvěru?",
    choices: [{
      text: "Zvýšit skóre, snížit důvěru",
      nextStep: "q1done",
      scoreChange: 100,
      trustChange: -10
    }, {
      text: "Snížit skóre, zvýšit důvěru",
      nextStep: "q1done",
      scoreChange: -100,
      trustChange: 10
    }]
  },

  q1done: {
    text: "Tak to by bylo! Můžete si vybrat znovu.",
    choices: [{
      text: "Fajn!",
      nextStep: "question1"
    }]
  }
};