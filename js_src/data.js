// types: gameMessage, socialPost
const gameData = {
  start: {
    text: "Rád vás poznávám.",
    type: "gameMessage",
    choices: [
      {
        text: "Zdravím!",
        nextStep: "start2"
      },
      {
        text: "Kdo jste?",
        nextStep: "startWhoAmI"
      }
    ]
  },

  start2: {
    text: "Chcete si vydělat nějaké peníze šířením dezinformací?",
    type: "gameMessage",
    choices: [
      {
        text: "Proč ne?",
        nextStep: "question1"
      },
      {
        text: "O co jde?",
        nextStep: "startExplain"
      },
    ]
  }, 

  startWhoAmI: {
    text: "Moje práce je naučit vás, jak vyrábět a šířit dezinformace.",
    type: "gameMessage",
    choices: [
      {
        text: "Do toho!",
        nextStep: "question1"
      },
      {
        text: "Cože?",
        nextStep: "startExplain"
      },
    ]
  }, 

  startExplain: {
    text: "Dezinformace, fake news, novinářské kachny. Slušný byznys, jak brzy uvidíte.",
    type: "gameMessage",
    choices: [
      {
        text: "Dobře.",
        nextStep: "question1"
      }
    ]
  }, 

  question1: {
    text: "Určitě vás v poslední době něco naštvalo, že? To nás všechny. Co takhle si postěžovat na Facebooku?",
    type: "gameMessage",
    choices: [
      {
        text: "Dobrý nápad! Napíšu rozčilený status.",
        nextStep: "question1_choice1"
      },
      {
        text: "Nejsem si jistý...",
        nextStep: "question1_unsure"
      }
    ]
  },

  question1_unsure: {
    text: "Nebojte se, je to jen hra - na skutečném Facebooku se nic neobjeví.",
    type: "gameMessage",
    choices: [
      {
        text: "Dobře, napíšu rozčilený status.",
        nextStep: "question1_choice1"
      }
    ]
  }, 

  question1_choice1: {
    text: "Co napíšete? Možností je několik.",
    type: "socialPost",
    choices: [
      {
        text: "Fajn!",
        nextStep: "question1",
        scoreChange: 100,
        trustChange: -10
      }
    ]
  }
}