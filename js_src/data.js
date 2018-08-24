// types: gameMessage, socialPost, postReakce, webName, gameBadge, webPost
const gameData = {
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
      text: "Pokud máte ambice stát se pořádným dezinformátorem morálku musíte odložit stranou!",
      type: "gameMessage",
      choices: [{
        text: "no tak dobře..",
        nextStep: "goPro",
      }] 
   }, 

   goPro: {
    text: "Tak to má být! Je na čase rozjet to ve velkém! Co takhle založit vlastní dezinformační web?",
    type: "gameMessage",
    choices: [{
      text: "souhlas",
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
    text: "Na většině dezinformačních webů vycházejí články anonymně",
    type: "gameMessage",
    choices: [{
      text: "Ok",
      nextStep: "startWeb_done",
    }] 
  },

  badge_impersonation: {
    text: "Gratuluji! Z běžného uživatele Facebooku jste se stal šéfredaktorem dezinformačního webu!",
    type: "gameBadge",
    choices: [{
      text: "Díky!",
      nextStep: "createcontent_explain",
    }]
  },

  createcontent_explain: {
    text: "Způsobů jak vytvořit dezinformace je hned několik. Zkuste publikovat první článek.",
    type: "gameMessage",
    choices: [{
      text: "napsat článek",
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
      text: "podívám se o čem píši zpravodajské weby a napadnu jejich zprávy",
      nextStep: "newsheadlines",
    },{
      text: "vymyslím si vlastní konspiraci",
      nextStep: "conspiracy",
    }]
  },

  createcontent_serious: {
    text: "Neblázněte! Vždyť chcete dosáhnout role deziformátora!",
    type: "gameMessage",
    choices: [{
      text: "dobře, chci si hrát s lidskými emocemi",
      nextStep: "createcontent_emotion",
    }]
  },

  newsheadlines: {
    text: "Bývalého ruského agenta Sergeje Skripala propustili z nemocnice, kde se ocitl, když byl vystaven nervově paralytické látce Novičok",
    type: "webPost",
    choices: [{
      text: "o tomhle napíšu, že Britové lhali!",
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
      text: "hmm, zpátky na Skripala",
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
      nextStep: "badge_emotion",
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

  badge_emotion: {
    text: "Gratuluji! Podařilo se vám využít lidské emoce k šíření dezinformací!",
    type: "gameBadge",
    choices: [{
      text: "chci pokračovat",
      nextStep: "search_fb",
    }]
  },

  nextstepfail: {
    text: "Uff, na tohle vám neskočili. Ale ještě není pozdě váš web zachránit.",
    type: "gameMessage",
    choices: [{
      text: "polepším se!",
      nextStep: "search_fb",
    }]
  },

  search_fb: {
    text: "Co takhle kouknout do diskuzí na Facebooku a najít téma, které lidi zajímá",
    type: "gameMessage",
    choices: [{
      text: "jdu na to!",
      nextStep: "tipsandtricks",
    }]
},

  tipsandtricks: {
    text: "Jen pár rad předtím, než článek napíšete",
    type: "gameMessage",
    choices: [{
      text: "sem s nimi!",
      nextStep: "titulek",
    }]
  },

  titulek: {
    text: "Exkluzivní! Šokující! VELKÁ PÍSMENA !!!! Nejdůležitější je u článku titulek. Mnohol lidí více nepřečte",
    type: "gameMessage",
    choices: [{
      text: "CO DÁL?!!!",
      nextStep: "foto",
    }]
  },

  foto: {
    text: "---- FOTOMONTÁŽ",
    type: "gameMessage",
    choices: [{
      text: "přece si to celé nemůžu vymyslet..",
      nextStep: "zdroj",
    }]
  },

    zdroj: {
        text: "Právě naopak. --- zahraniční dezinformační weby nebo pochybné studie. Ještě jedna důležitá věc než vás na to pustím, mistře",
        type: "gameMessage",
        choices: [{
          text: "rychle!",
          nextStep: "nalepkovani",
        }]       
  },

  nalepkovani: {
    text: "sluníčkáři, Pražská kavárna, presstituky, Soros! Nebojte se nálepkování",
    type: "gameMessage",
    choices: [{
      text: "jsem připraven zkusit si to na tématu z diskuze na facebooku!",
      nextStep: "searchfb_post1",
    }]
  },

  searchfb_post1: {
    text: "Desetiletý chlapec snědl ananas a onemocněl. Když lékaři provedli zdravotní kontrolu zjistili, že má AIDS.",
    type: "socialPost",
    choices: [{
      text: "dál",
      nextStep: "searchfb_post2",
    },{
        text: "o tomhle napíšu!",
        nextStep: "post1_publish",
    }]
},

searchfb_post2: {
    text: "Dneska po obědě jsem viděl na hlavním nádraží v Praze 1500 migrantů a MÉDIA MLČÍ!!!",
    type: "socialPost",
    choices: [{
      text: "tohle ne",
      nextStep: "searchfb_post3"
    }, {
      text: "tohle ano",
      nextStep: "post2_publish",
    }]
  },

  searchfb_post3: {
    text: "Jsem na dovolené ve Francii a na obloze jsou podivné mraky, kousek od nás je jaderná elektrárna. Nevíte o tom něco?",
    type: "socialPost",
    choices: [{
      text: "zpátky k ananasu",
      nextStep: "searchfb_post1"
    }, {
      text: "tohle je to pravé",
      nextStep: "post3_publish",
    }]
  },

  post1_publish: {
    text: "článek o 1",
    type: "webPost",
    choices: [{
      text: "vydat na web!",
      nextStep: "problem",
    }]
  },

  post2_publish: {
    text: "článek o 2",
    type: "webPost",
    choices: [{
      text: "vydat na web",
      nextStep: "problem",
    }]
  },

  post3_publish: {
    text: "Nad Evropou se valí radioaktivní mrak pocházející zřejmě z podivné exploze ve francouzské jaderné elektrárně. Vlády mlčí, Francie se snaží bagatelizovat celý incident slovy o neškodnosti radionuklidů a my doporučujeme nakoupit okamžitě jódové tablety a dozimetry!",
    type: "webPost",
    choices: [{
      text: "zveřejnit!",
      nextStep: "problem",
    }]
  }, 

  problem: {
    text: "Máme problém",
    type: "webMessage",
    choices: [{
      text: "nemám rád problémy",
      nextStep: "problem_explain",
    },{
      text: "co se děje?",
      nextStep: "problem_explain",
    }]
  }, 

  problem_explain: {
    text: "nějaký fact checker se zmiňuje o tvém webu",
    type: "webMessage",
    choices: [{
      text: "to snad ne, ukažte mi to",
      nextStep: "factchecker_post",
    }]
  },

  factchecker_post: {
    text: "Falešná zpráva. Tento web šíří dezinformace. Zpravodajský server iROZHLAS.cz pravdivost zprávy vyvrátil.",
    type: "socialPost",
    choices: [{
      text: "hmmm",
      nextStep: "problem_explain",
    }]
},

  problem_explain: {
    text: "jak budete reagovat?",
    type: "webMessage",
    choices: [{
      text: "přiznám chybu a omluvím se",
      nextStep: "factchecker_omluva",
    },{
      text: "nařčení popřu a zaútočím zpátky!",
      nextStep: "factchecker_utok",
    }]
  },

  factchecker_omluva: {
    text: "Omluva? Nepřichází v úvahu! Nejlepší obrana je útok!",
    type: "webMessage",
    choices: [{
      text: "zaútočit na fact checkery",
      nextStep: "factchecker_utok",
    }]
  },

  factchecker_utok: {
    text: "O veřejnoprávním Českém rozhlasu a „novinářích“ kteří pro něj pracují se dávno ví, že nám zatajují informace! A to je platíme vlastními penězi! ",
    type: "socialPost",
    choices: [{
      text: "a je to!",
      nextStep: "factchecker_reakcelidi",
    }]
  },

  factchecker_reakcelidi: {
    text: "nějaký fact checker blabla",
    type: "socialPost",
    choices: [{
      text: "haha!",
      nextStep: "badge_manipulace",
    }]
  },

  badge_manipulace: {
    text: "Gratuluji! Podařilo se ti zmanipulovat lidi na internetech. Blabla",
    type: "gameBadge",
    choices: [{
      text: "Díky!",
      nextStep: "whatsnext",
    }]
  },

  whatsnext: {
    text: "tady to končí",
    type: "gameBadge",
    choices: [{
      text: "Díky!",
      nextStep: "whatsnext",
    }]
  },
}