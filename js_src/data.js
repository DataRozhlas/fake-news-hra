export const gameData = {
  // types: gameMessage, socialPost, postReakce, webName, gameBadge, webPost
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
    text: "Státu nevadí kšefty s chudobou ani exekuce, zato lije peníze do prohnilých neziskovek. Dělá se mi zle!",
    type: "socialPost",
    username: "Naštvaný občan",
    choices: [{
      text: "Neziskovky mě nezajímají.",
      nextStep: "question1_choice2"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 16,
      trustChange: 0
    }]
  },

  question1_choice2: {
    text: "Česká televize s námi neustále manipuluje. Kvůli politické korektnosti porušuje vlastní kodex a možná i zákon!",
    type: "socialPost",
    username: "Naštvaný občan",
    choices: [{
      text: "ČT je mi ukradená.",
      nextStep: "question1_choice3"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 27,
      trustChange: 0
    }]
  },

  question1_choice3: {
    text: "Neomarxistická EU ničí české zemědělce! Na našich polích se pásly statisíce krav, vyráběli jsme mléko pro celou zemi - a dnes?",
    type: "socialPost",
    username: "Naštvaný občan",
    choices: [{
      text: "EU? Nuda...",
      nextStep: "question1_choice1"
    }, {
      text: "Sdílím!",
      nextStep: "question1_after",
      scoreChange: 21,
      trustChange: 0
    }]
  },

  question1_after: {
    text: "Váš rozezlený status sdílelo několik přátel a přibylo vám pár sledujících. Gratuluji! Jak se cítíte?",
    type: "gameMessage",
    choices: [{
      text: "Skvěle!",
      nextStep: "goPro",
    }, {
    text: "No nevím...",
      nextStep: "feedback_unsure"
    }]
  },

  feedback_unsure: {
    text: "Ale no tak! Trošku překroutit realitu přece není nezákonné. Navíc to může být docela zábava!",
    type: "gameMessage",
    choices: [{
      text: "No dobře.",
      nextStep: "goPro",
    }, {
      text: "Ale já nechci!",
      nextStep: "feedback_unsure2"
    }]
  },

  feedback_unsure2: {
    text: "S takovým přístupem to daleko nedotáhnete. Rozmyslete si to, můžete si slušně vydělat!",
    type: "gameMessage",
    choices: [{
      text: "Tak fajn.",
      nextStep: "goPro",
    }] 
  }, 

  goPro: {
    text: "Tak to má být! Je na čase rozjet to ve velkém. Co podnikneme?",
    type: "gameMessage",
    choices: [{
      text: "Založím si blog.",
      nextStep: "startBlog",
    }, {
      text: "Založím si zpravodajský web!",
      nextStep: "startWeb"
    }] 
  },

  startBlog: {
    text: "Blog?! Copak je rok 2005? Pokud chcete v tomhle byznysu uspět, potřebujete trochu sebevědomí. A zpravodajský web.",
    type: "gameMessage",
    choices: [{
      text: "To je fakt.",
      nextStep: "startWeb",
    }] 
  },

  startWeb: {
    text: "Úspěšný web musí mít zapamatovatelný název a chytlavý slogan. Mám tu pár možností.",
    type: "gameMessage",
    choices: [{
      text: "Sem s nimi!",
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
      nextStep: "choosePenName",
    }]
  },

  startWeb_choice2: {
    text: "Necenzurované zprávy",
    slogan: "Nezávislé, nefiltrované, pravdivé",
    type: "webName",
    choices: [{
      text: "Ne",
      nextStep: "startWeb_choice3",
    }, {
      text: "Skvělé",
      nextStep: "choosePenName",
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
      nextStep: "choosePenName",
    }]
  },

  choosePenName: {
    text: "{siteName}! Správná volba. Pod jakým pseudonymem budete články publikovat, pane šéfredaktore?",
    type: "gameMessage",
    choices: [{
      text: "Vedoucí cirkusu",
      nextStep: "badge_impersonation",
    }, {
      text: "Pravdomluvka",
      nextStep: "badge_impersonation",
    }, {
      text: "Pseudonym? Pod vlastním jménem!",
      nextStep: "choosePenName2",
    }]
  },

  choosePenName2: {
    text: "Nesmysl. Copak by vám čtenáři věřili, že přinášíte tajné informace, pokud byste se je nebáli zveřejňovat pod vlastním jménem? Vyberte si pseudonym.",
    type: "gameMessage",
    choices: [{
      text: "Vedoucí cirkusu",
      nextStep: "badge_impersonation",
    }, {
      text: "Pravdomluvka",
      nextStep: "badge_impersonation",
    }] 
  },

  badge_impersonation: {
    text: "Gratuluji, {penName}! Z běžného uživatele Facebooku jste se stal šéfredaktorem dezinformačního webu!",
    type: "gameMessage",
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