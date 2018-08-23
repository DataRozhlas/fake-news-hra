"use strict";

// types: gameMessage, socialPost, postReakce, webName, gameBadge, webPost
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
    text: "Naprostý souhlas! Konečně někdo sdílí pravdu!",
    name: "Pepa", 
    type: "postReakce",
    choices: [{
      text: "Díky",
      nextStep: "question1_after2",
    }]
  },

  question1_after2: {
    text: "A prolhaná média mlčí.. díky za info! ",
    name: "Julie", 
    type: "postReakce",
    choices: [{
      text: "Rádo se stalo",
      nextStep: "feedback",
    }]
  },

  feedback: {
    text: "Gratuluji! Váš smyšlený status zmátl několik přátel. Jak se cítíte? ",
    type: "gameMessage",
    choices: [{
      text: "Skvěle!",
      nextStep: "goPro",
    }, {
    text: "Tohle není správné..",
      nextStep: "feedback_unsure"
    }]
  },

  feedback_unsure: {
    text: "Ale! Trošku překroutit realitu přece není nezákonné. Navíc je to zábava, uvidíte!",
    type: "gameMessage",
    choices: [{
      text: "Tak dobře",
      nextStep: "goPro",
    }, {
    text: "Když já nevím..",
      nextStep: "theend"
    }]
  },

    theend: {
      text: "Konec hry. Pokud máte ambice stát se pořádným dezinformátorem morálku musíte odložit stranou!",
      type: "gameMessage",
      choices: [{
        text: "Zkusit to znovu",
        nextStep: "start",
      }] 
   }, 

   goPro: {
    text: "Tak to být! Je na čase rozjet to ve velkém!",
    type: "gameMessage",
    choices: [{
      text: "Založit dezinformační web",
      nextStep: "startWeb",
    }] 
  },

  startWeb: {
    text: "Důležitý je název a správný slogan.",
    type: "gameMessage",
    choices: [{
      text: "Rozumím! Vybrat název mého webu.",
      nextStep: "startWeb_choice1",
    }] 
  },

  startWeb_choice1: {
    text: "Protistádo",
    slogan: "O čem mainstreamová média mlčí!",
    type: "webName",
    choices: [{
      text: "Eh, dál",
      nextStep: "startWeb_choice2",
    }, {
      text: "Beru!",
      nextStep: "startWeb_done",
    }]
  },

  startWeb_choice2: {
    text: "Nezávislé zprávy",
    slogan: "Bez cenzury!",
    type: "webName",
    choices: [{
      text: "Ne",
      nextStep: "startWeb_choice3",
    }, {
      text: "Skvělé",
      nextStep: "startWeb_done",
    }]
  },

  startWeb_choice3: {
    text: "Český Maják",
    slogan: "Nejaktuálnější zprávy bez politické korektnosti.",
    type: "webName",
    choices: [{
      text: "Zpátky na začátek",
      nextStep: "startWeb_choice1",
    }, {
      text: "To je ono!",
      nextStep: "startWeb_done",
    }]
  },

  startWeb_done: {
    text: "Správná volba. Pod jakým pseudonymem budete články publikovat, šéfredaktore?",
    type: "gameMessage",
    choices: [{
      text: "Vedoucí cirkusu",
      nextStep: "badge_impersonation",
    }, {
      text: "Pravdomluvka",
      nextStep: "badge_impersonation",
    }, {
      text: "Pseudonym? Pod vlastním jménem!",
      nextStep: "startWeb_doneExplain",
    }]
  },

  startWeb_doneExplain: {
    text: "Většina dezinformačních webů publikuje články anonymně. Zkuste to ještě jednou.",
    type: "gameMessage",
    choices: [{
      text: "Ok",
      nextStep: "startWeb_done",
    }] 
  },

  badge_impersonation: {
    text: "Gratuluji! Z běžného uživatele Facebooku jste se stal šéfredaktrem zpravodajského webu!",
    type: "gameBadge",
    choices: [{
      text: "pulikovat první článek",
      nextStep: "createcontent",
    }]
  },

  createcontent: {
    text: "Jaký bude obsah vašeho webu?",
    type: "gameMessage",
    choices: [{
      text: "emotivní",
      nextStep: "createcontent_emotion",
    }, {
      text: "seriozní",
      nextStep: "createcontent_serious",
    }]
  },

  createcontent_emotion: {
    text: "Správně! Emoce mohou pomoct zprávy šířit mezi lidmi. Co dál?",
    type: "gameMessage",
    choices: [{
      text: "Podívat se o čem píši zpravodajské weby a napadnout jejich zprávy",
      nextStep: "newsheadlines",
    },{
      text: "vymyslím si vlastní konspiraci.",
      nextStep: "conspiracy",
    }]
  },

  createcontent_serious: {
    text: "Neblázněte! Vždyť chcete dosáhnout role deziformátora! Co dál?",
    type: "gameMessage",
    choices: [{
      text: "dobře, chci si hrát s lidskými emocemi",
      nextStep: "createcontent_emotion",
    },{
      text: "vymyslím si vlastní konspiraci",
      nextStep: "conspiracy",
    }]
  },

  newsheadlines: {
    text: "Bývalého ruského agenta Sergeje Skripala propustili z nemocnice, kde se ocitl, když byl vystaven nervově paralytické látce Novičok",
    type: "webPost",
    choices: [{
      text: "to je ono!",
      nextStep: "newsheadlines_novicok",
    },{
      text: "Novičok je nuda, dál!",
      nextStep: "newsheadlines_2",
    }]
  },

  newsheadlines_2: {
    text: "Nová hymna stála 600 tisíc korun. 'Velkou částí jsem přispěl sám,' řekl předseda Českého olympijského výboru",
    type: "webPost",
    choices: [{
      text: "překroutit zprávu",
      nextStep: "newsheadlines_hymna",
    },{
      text: "Hmm, zpátky na Skripala",
      nextStep: "newsheadlines",
    }]
  },

  newsheadlines_novicok: {
    text: "Velikonoční zázrak: Otrávená dcera Skripala ožila. Snědl britský agent novičok, nebo artyčok? Britové obelhali celý svět už jednou s Irákem!",
    type: "webPost",
    choices: [{
      text: "pulikovat",
      nextStep: "newsheadlines_reactions",
    }]
  },

  newsheadlines_hymna: {
    text: "Nová verze české hymny je útokem na Českou republiku a její státnost. Kakofonie disharmonických zvuků má zakódované audiotomy bratří Cohenů, které vyzývají posluchače k sebevraždě. Český olympijský výbor zkouší na českém národu pokus se satanskými symboly, jaké jsme viděli při otevírání Gotthardského tunelu! Tuto skladbu si nepouštějte ani do sluchátek a už vůbec ne před malými dětmi!",
    type: "webPost",
    choices: [{
      text: "publikovat",
      nextStep: "newsheadlines_reactions_hymna",
    }]
  },

  conspiracy: {
    text: "Nová verze české hymny je útokem na Českou republiku a její státnost. Kakofonie disharmonických zvuků má zakódované audiotomy bratří Cohenů, které vyzývají posluchače k sebevraždě. Český olympijský výbor zkouší na českém národu pokus se satanskými symboly, jaké jsme viděli při otevírání Gotthardského tunelu! Tuto skladbu si nepouštějte ani do sluchátek a už vůbec ne před malými dětmi!",
    type: "gameMessage",
    choices: [{
      text: "publikovat!!",
      nextStep: "newsheadlines_reactions_hymna",
    }]
  },

  newsheadlines_reactions: {
    text: "Naprostý souhlas! Konečně někdo sdílí pravdu!",
    name: "Majda", 
    type: "postReakce",
    choices: [{
      text: "více!",
      nextStep: "newsheadlines_reactions_2",
    }]
  },

  newsheadlines_reactions_2: {
    text: "Hrůza! Proč nám o tom média mlčí???",
    name: "Honza", 
    type: "postReakce",
    choices: [{
      text: "ano!",
      nextStep: "nextstep",
    }]
  },
  
  newsheadlines_reactions_hymna: {
    text: "Co je to za blbost? Tomuhle máme věřit?",
    name: "Majda", 
    type: "postReakce",
    choices: [{
      text: "a sakra!",
      nextStep: "newsheadlines_reactions_hymna2",
    }]
  },

  newsheadlines_reactions_hymna2: {
    text: "Děláte z nás blázny! Taková blbost",
    name: "Honza", 
    type: "postReakce",
    choices: [{
      text: "co teď?",
      nextStep: "nextstepfail",
    }]
  },

  nextstep: {
    text: "tady to končí",
    name: "Honza", 
    type: "postReakce",
    choices: [{
      text: "co teď?",
      nextStep: "nextstepfail",
    }]
  },

  nextstepfail: {
    text: "tady to končí",
    name: "Honza", 
    type: "postReakce",
    choices: [{
      text: "co teď?",
      nextStep: "nextstepfail",
    }]
  },
}
