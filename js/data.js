"use strict";

// types: gameMessage, socialPost
var gameData = {
  start: {
    text: "Rád vás poznávám.",
    type: "gameMessage",
    choices: [{
      text: "Zdravím!",
      nextStep: "start2"
    }, {
      text: "Kdo jste?",
      nextStep: "startWhoAmI"
    }]
  },

  start2: {
    text: "Chcete si vydělat nějaké peníze šířením dezinformací?",
    type: "gameMessage",
    choices: [{
      text: "Proč ne?",
      nextStep: "question1"
    }, {
      text: "O co jde?",
      nextStep: "startExplain"
    }]
  },

  startWhoAmI: {
    text: "Moje práce je naučit vás, jak vyrábět a šířit dezinformace.",
    type: "gameMessage",
    choices: [{
      text: "Do toho!",
      nextStep: "question1"
    }, {
      text: "Cože?",
      nextStep: "startExplain"
    }]
  },

  startExplain: {
    text: "Dezinformace, fake news, novinářské kachny. Slušný byznys, jak brzy uvidíte.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "question1"
    }]
  },

  question1: {
    text: "Určitě vás v poslední době něco naštvalo, že? To nás všechny. Co takhle si postěžovat na Facebooku?",
    type: "gameMessage",
    choices: [{
      text: "Dobrý nápad! Napíšu rozčilený status.",
      nextStep: "question1_choice1"
    }, {
      text: "Nejsem si jistý...",
      nextStep: "question1_unsure"
    }]
  },

  question1_unsure: {
    text: "Nebojte se, je to jen hra - na skutečném Facebooku se nic neobjeví.",
    type: "gameMessage",
    choices: [{
      text: "Dobře, napíšu rozčilený status.",
      nextStep: "question1_choice1"
    }]
  },

  question1_choice1: {
    text: "Zhnusení a prohnilost neziskovek, udělá se vám zle. Důchodci třou bídu. Stát je nechal ostudně na okraji zájmu. Kšeft s chudobou a nelidské exekuce!",
    type: "socialPost",
    choices: [{
      text: "Neziskovky mě nezajímají.",
      nextStep: "question1_choice2"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 100,
      trustChange: -10
    }]
  },

  question1_choice2: {
    text: "Česká televize prokazatelně manipuluje s diváky. Její kodex je k ničemu, dodává bývalý zpravodajský důstojník",
    type: "socialPost",
    choices: [{
      text: "ČT je mi ukradená.",
      nextStep: "question1_choice3"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 100,
      trustChange: -10
    }]
  },

  question1_choice3: {
    text: "Zemědělci na besedě prozradili vše: Dva roky staré belgické máslo na českém trhu. V zájmu EU není, abychom vyráběli mléko. Měli jsme 1,3 milionu krav a dnes...",
    type: "socialPost",
    choices: [{
      text: "EU? Nuda...",
      nextStep: "question1_choice1"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 100,
      trustChange: -10
    }]
  },

  question1_after: {
    text: "Tady to zatím končí.",
    type: "gameMessage",
    choices: []
  }
};