export const gameData = {
  // types: gameMessage, socialPost, webName, badge, webPost
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
      nextStep: "penName_chosen",
    }, {
      text: "Pravdomluvka",
      nextStep: "penName_chosen",
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
      nextStep: "penName_chosen",
    }, {
      text: "Pravdomluvka",
      nextStep: "penName_chosen",
    }] 
  },

  penName_chosen: {
    text: "Gratuluji, {penName}! Z běžného uživatele Facebooku jste se stal šéfredaktorem webu!",
    type: "gameMessage",
    choices: [{
      text: "Hurá!",
      nextStep: "penName_chosen2",
      scoreChange: 30,
      trustChange: 25
    }]
  },

  penName_chosen2: {
    text: "A web musí být vidět na Facebooku. Pár dalších naštvaných statusů, tentokrát přímo na facebookové stránce {siteName}, a fanoušci začínají přibývat.",
    type: "gameMessage",
    choices: [{
      text: "Jupí!",
      nextStep: "badge_impersonation",
    }]
  },

  badge_impersonation: {
    text: "Dostal jste odznak IMPERSONATION!",
    type: "badge",
    badge: "impersonation",
    choices: [{
      text: "Pokračujeme!",
      nextStep: "firstContent_explain",
    }]
  },

  firstContent_explain: {
    text: "Hurá do práce! Čas na publikaci prvního článku.",
    type: "gameMessage",
    choices: [{
      text: "Tak dobře.",
      nextStep: "firstContent",
    }]
  },

  firstContent: {
    text: "Jaký se váš web bude tvářit?",
    type: "gameMessage",
    choices: [{
      text: "Emotivně",
      nextStep: "firstContent_emotion",
    }, {
      text: "Seriózně",
      nextStep: "firstContent_serious",
    }]
  },

  firstContent_serious: {
    text: "Chyba! Nejlépe získáte čtenáře využitím jejich emocí.",
    type: "gameMessage",
    choices: [{
      text: "Tak do nich!",
      nextStep: "firstContent_emotion",
    }]
  },

  firstContent_emotion: {
    text: "Správně! Nejlépe bude fungovat, když se vyjádříme ke žhavě aktuálnímu tématu. Co se inspirovat odjinud?",
    type: "gameMessage",
    choices: [{
      text: "Po něčem kouknu.",
      nextStep: "firstContent_choice1",
    }, {
      text: "Chci psát o tuningu!",
      nextStep: "firstContent_horses",
    },]
  },

  firstContent_horses: {
    text: "No... úpravy aut jsou určitě podnětné téma, ale {siteName} má být zpravodajský web, pamatujete?",
    type: "gameMessage",
    choices: [{
      text: "Ach jo...",
      nextStep: "firstContent_choice1",
    }]
  },

  firstContent_choice1: {
    webName: "iDnes.cz",
    text: "Vojáci v misích drží nebezpečí daleko od našich hranic",
    type: "webPost",
    choices: [{
      text: "Tohle napadnu!",
      nextStep: "firstContent_choice1_chosen",
    }, {
      text: "Vojáci? Pff...",
      nextStep: "firstContent_choice2",
    }]
  },

  firstContent_choice2: {
    webName: "iROZHLAS",
    text: "Zemi do konce století hrozí oteplení o více než dva stupně, varují vědci. Přijdou sucha i silné hurikány",
    type: "webPost",
    choices: [{
      text: "Tohle napadnu!",
      nextStep: "firstContent_choice2_chosen",
    }, {
      text: "To raději ty vojáky",
      nextStep: "firstContent_choice1",
    }]
  },

  firstContent_choice1_chosen: {
    text: "Zahraniční vojenské mise jsou žhavé téma. Co si o nich myslíte?",
    type: "gameMessage",
    choices: [{
      text: "Je to vlastizrada!",
      nextStep: "firstContent_choice1_select",
    }, {
      text: "Spojenecké závazky musíme plnit.",
      nextStep: "firstContent_choice1_unsure",
    }]
  },

  firstContent_choice1_unsure: {
    text: "Ale prosímvás, to tvrdí kdekdo! Jak chcete získat fanoušky takhle nudným postojem?",
    type: "gameMessage",
    choices: [{
      text: "Změna klimatu je stejně lákavější.",
      nextStep: "firstContent_choice2_chosen",
    }, {
      text: "Dobře, měním názor!",
      nextStep: "firstContent_choice1_surenow",
    }]
  },

  firstContent_choice1_surenow: {
    text: "Názorová flexibilita je v naší branži potřeba! Už tedy máte za to, že vojenské mise jsou trestuhodná šílenost?",
    type: "gameMessage",
    choices: [{
      text: "Samozřejmě!",
      nextStep: "firstContent_choice1_select",
    }, {
      text: "Co jste říkal o té změně klimatu?",
      nextStep: "firstContent_choice2_chosen",
    }]
  },

  firstContent_choice1_select: {
    text: "Výborně! Na vašem názoru stejně nesejde - jde nám o čtenost. Čas ukázat lidem pravdu o českých vojácích.",
    type: "gameMessage",
    choices: [{
      text: "Jak to provedeme?",
      nextStep: "firstContent_choice1_attacktype",
    }]
  },

  firstContent_choice2_chosen: {
    text: "Proč ne. Co si myslíte o změně klimatu?",
    type: "gameMessage",
    choices: [{
      text: "Úplný nesmysl!",
      nextStep: "firstContent_choice2_select",
    }, {
      text: "Je to vážný problém.",
      nextStep: "firstContent_choice2_unsure",
    }]
  },

  firstContent_choice2_unsure: {
    text: "Vždyť to tvrdí skoro každý! Jak chcete získat fanoušky takhle nudným postojem?",
    type: "gameMessage",
    choices: [{
      text: "Radši napíšu o vojácích.",
      nextStep: "firstContent_choice1_chosen",
    }, {
      text: "Dobře, ještě to zvážím.",
      nextStep: "firstContent_choice2_surenow",
    }]
  },

  firstContent_choice2_surenow: {
    text: "Takže už souhlasíte, že teorie o změně klimatu jsou sprosté podvody?",
    type: "gameMessage",
    choices: [{
      text: "Je to tak!",
      nextStep: "firstContent_choice2_select",
    }, {
      text: "Jak že bylo to s těmi vojáky?",
      nextStep: "firstContent_choice1_chosen",
    }]
  },

  firstContent_choice2_select: {
    text: "Výborně! Na vašem názoru stejně nesejde - jde nám o čtenost. Čas ukázat lidem pravdu o globálním oteplování.",
    type: "gameMessage",
    choices: [{
      text: "Jak to provedeme?",
      nextStep: "firstContent_choice2_attacktype",
    }]
  },

  firstContent_choice1_attacktype: {
    text: "Zaútočíme na jejich emoce. Jak přesně, to už je na vás.",
    type: "gameMessage",
    choices: [{
      text: "Objasním teoretické pozadí.",
      nextStep: "firstContent_choice1_attack_boring",
    }, {
      text: "Zdiskredituju armádu.",
      nextStep: "firstContent_choice1_attack_personal",
    }, {
      text: "Dám do toho srdíčko.",
      nextStep: "firstContent_choice1_attack_emotional",
    }]
  },

  firstContent_choice1_attack_boring: {
    text: "Chápu, že jste v tom nový, ale koho budou podle vás zajímat nějaké teorie?! Laskavě vyberte jinou možnost.",
    type: "gameMessage",
    choices: [{
      text: "Zdiskredituju armádu.",
      nextStep: "firstContent_choice1_attack_personal",
    }, {
      text: "Dám do toho srdíčko.",
      nextStep: "firstContent_choice1_attack_emotional",
    }]
  },

  firstContent_choice1_attack_personal: {
    text: "Správně, jen to těm zeleným mozkům natřete! Jak to uděláte?",
    type: "gameMessage",
    choices: [{
      text: "Napíšu článek.",
      nextStep: "firstContent_choice1_attack_personal_article_intro",
    }, {
      text: "Nasdílím obrázek.",
      nextStep: "firstContent_choice1_attack_personal_picture_intro",
    }]
  },

  firstContent_choice1_attack_personal_article_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_personal_article_1"
    }]
  },

  firstContent_choice1_attack_personal_article_1: {
    text: "Šílení generálové posílají české hochy do sebevražedných misí!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_article_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_article_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_personal_article_1_chosen: {
    text: "To je ono! O mladé životy má starost každý. Přibylo vám pár fanoušků. Co na váš článek říkají?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_article_react1"
    }]
  },

  firstContent_choice1_attack_personal_article_2: {
    text: "Proč válčíme v zemích, které na nás neútočí? Velitelé českých jednotek NEZNAJÍ ODPOVĚĎ!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_article_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_article_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice1_attack_personal_article_2_chosen: {
    text: "Skvělé! Dokázal jste z armádních špiček udělat hlupáky. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_article_react1"
    }]
  },

  firstContent_choice1_attack_personal_article_3: {
    text: "ODHALENÍ: Takzvaně česká afghánská mise podléhá německému velení!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_article_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_article_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice1_attack_personal_article_3_chosen: {
    text: "Výtečně! Na faktické správnosti vašeho sólokapru nezáleží, důležité je, že k vám přivedl nové fanoušky. Co na článek říkají?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_article_react1"
    }]
  },

  firstContent_choice1_attack_personal_article_react1: {
    text: "Dělají si z nás legraci? Okamžitě stáhněte naše vojáky!!!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_personal_article_react2"
    }]
  },

  firstContent_choice1_attack_personal_article_react2: {
    text: "Sama bych to neřekla líp než {penName}. Já i moje rodina už budeme volit jen ty, kteří těmhle zrůdnostem zamezí.",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice1_attack_personal_picture_intro: {
    text: "obrázek armáda personal intro",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_personal_picture_1"
    }]
  },

  firstContent_choice1_attack_personal_picture_1: {
    text: "obrázek armáda personal 1",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_picture_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_picture_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_personal_picture_1_chosen: {
    text: "obrázek armáda personal 1 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_picture_react1"
    }]
  },

  firstContent_choice1_attack_personal_picture_2: {
    text: "obrázek armáda personal 2",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_picture_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_picture_2_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_personal_picture_2_chosen: {
    text: "obrázek armáda personal 2 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_picture_react1"
    }]
  },

  firstContent_choice1_attack_personal_picture_3: {
    text: "obrázek armáda personal 3",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_picture_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_picture_3_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_personal_picture_3_chosen: {
    text: "obrázek armáda personal 3 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_picture_react1"
    }]
  },

  firstContent_choice1_attack_personal_picture_react1: {
    text: "obrázek armáda personal react 1",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_personal_picture_react2"
    }]
  },

  firstContent_choice1_attack_personal_picture_react2: {
    text: "obrázek armáda personal react 2",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice1_attack_emotional: {
    text: "Dobrá volba. Zasáhněte fanouškům jejich citlivá místa! Jak to uděláte?",
    type: "gameMessage",
    choices: [{
      text: "Napíšu článek.",
      nextStep: "firstContent_choice1_attack_emotional_article_intro",
    }, {
      text: "Nasdílím obrázek.",
      nextStep: "firstContent_choice1_attack_emotional_picture_intro",
    }]
  },

  firstContent_choice1_attack_emotional_article_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_emotional_article_1"
    }]
  },

  firstContent_choice1_attack_emotional_article_1: {
    text: "Exkluzivní ZPOVĚĎ matky mrtvého vojína: Zemřel úplně zbytečně!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_article_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_article_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_emotional_article_1_chosen: {
    text: "Dobrá práce! Když rozhovor naláká dost lidí, nevadí, že je tak trochu vymyšlený. Co na něj říkají vaši noví fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_article_react1"
    }]
  },

  firstContent_choice1_attack_emotional_article_2: {
    text: "Masové hroby v Iráku i Afghanistánu. Může v nich skončit i vaše dítě",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_article_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_article_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice1_attack_emotional_article_2_chosen: {
    text: "Výborně! Útočit na strach rodičů o vlastní děti je zaručená taktika, která vám přinesla nové fanoušky. Jak na ni reagují?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_article_react1"
    }]
  },

  firstContent_choice1_attack_emotional_article_3: {
    text: "Reportáž: Z amerických válečných hrdinů jsou opuštění bezdomovci. Chceme snad, aby Češi končili stejně?",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_article_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_article_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice1_attack_emotional_article_3_chosen: {
    text: "V pořádku. Postrašit čtenáře děsivými příběhy odjinud se vyplácí! Jak na článek reagují fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_article_react1"
    }]
  },

  firstContent_choice1_attack_emotional_article_react1: {
    text: "Při čtení tohohle příběhu jsem měl slzy v očích. Zastavme zbytečné válčení!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_emotional_article_react2"
    }]
  },

  firstContent_choice1_attack_emotional_article_react2: {
    text: "Sledovat {siteName} se vyplácí. Pravda o armádě je krutá, ale vláda ji nesmí tajit. STOP ČESKÝM ŽOLDÁKŮM!",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice1_attack_emotional_picture_intro: {
    text: "obrázek armáda emotional intro",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_emotional_picture_1"
    }]
  },

  firstContent_choice1_attack_emotional_picture_1: {
    text: "obrázek armáda emotional 1",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_picture_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_picture_1_chosen",
      scoreChanůge: 55
    }]
  },

  firstContent_choice1_attack_emotional_picture_1_chosen: {
    text: "obrázek armáda emotional 1 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_picture_react1"
    }]
  },

  firstContent_choice1_attack_emotional_picture_2: {
    text: "obrázek armáda emotional 2",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_picture_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_picture_2_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_emotional_picture_2_chosen: {
    text: "obrázek armáda emotional 2 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_picture_react1"
    }]
  },
  
  firstContent_choice1_attack_emotional_picture_3: {
    text: "obrázek armáda emotional 3",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_picture_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_picture_3_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_emotional_picture_3_chosen: {
    text: "obrázek armáda emotional 3 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_picture_react1"
    }]
  },

  firstContent_choice1_attack_emotional_picture_react1: {
    text: "obrázek armáda emotional react 1",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_emotional_picture_react2"
    }]
  },

  firstContent_choice1_attack_emotional_picture_react2: {
    text: "obrázek armáda emotional react 2",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice2_attacktype: {
    text: "Zaútočíme na jejich emoce. Jak přesně, to už je na vás.",
    type: "gameMessage",
    choices: [{
      text: "Objasním teoretické pozadí.",
      nextStep: "firstContent_choice2_attack_boring",
    }, {
      text: "Zdiskredituju klimatické vědce.",
      nextStep: "firstContent_choice2_attack_personal",
    }, {
      text: "Dám do toho srdíčko.",
      nextStep: "firstContent_choice2_attack_emotional",
    }]
  },

  firstContent_choice2_attack_boring: {
    text: "Chápu, že jste v tom nový, ale koho budou podle vás zajímat nějaké teorie?! Laskavě vyberte jinou možnost.",
    type: "gameMessage",
    choices: [{
      text: "Zdiskredituju klimatické vědce.",
      nextStep: "firstContent_choice2_attack_personal",
    }, {
      text: "Dám do toho srdíčko.",
      nextStep: "firstContent_choice2_attack_emotional",
    }]
  },

  firstContent_choice2_attack_personal: {
    text: "Jen do nich, do chytrolínů! Jak to uděláte?",
    type: "gameMessage",
    choices: [{
      text: "Napíšu článek.",
      nextStep: "firstContent_choice2_attack_personal_article_intro",
    }, {
      text: "Nasdílím obrázek.",
      nextStep: "firstContent_choice2_attack_personal_picture_intro",
    }]
  },

  firstContent_choice2_attack_personal_article_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_personal_article_1"
    }]
  },

  firstContent_choice2_attack_personal_article_1: {
    text: "Kdo platí podvržené pseudostudie o oteplování? LŽI samozvaných expertů dokazují: koho chleba jíš, toho píseň zpívej!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_article_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_article_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_personal_article_1_chosen: {
    text: "Správně! Ať už někoho za jeho práci platí kdokoliv, vždy to u části lidí vyvolá podezření. Co na článek říkají vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_article_react1"
    }]
  },

  firstContent_choice2_attack_personal_article_2: {
    text: "ODHALENO! Přední „odborník“ na změny klimatu nachytán s tajným milencem!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_article_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_article_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice2_attack_personal_article_2_chosen: {
    text: "Dobrá taktika! Napadnout morální profil toho, koho chceme zdiskreditovat, se vyplácí - i když nařčení nesouvisí s jeho prací. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_article_react1"
    }]
  },

  firstContent_choice2_attack_personal_article_3: {
    text: "Univerzity pod diktaturou neomarxismu. Ukážeme vám, jak politická korektnost zakazuje vědcům říkat pravdu o klimatické změně!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_article_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_article_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice2_attack_personal_article_3_chosen: {
    text: "Skvěle! Útok můžete vždy vést tak, že dané téma onálepkujete nepopulárním označením. Jak na to reagují vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_article_react1"
    }]
  },

  firstContent_choice2_attack_personal_article_react1: {
    text: "Konečně někdo ukázal, jak se to s takzvanými experty ve skutečnosti má! {siteName} je můj nový oblíbený web!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_personal_article_react2"
    }]
  },

  firstContent_choice2_attack_personal_article_react2: {
    text: "Hrají si na vědce, ale jsou to jen loutky - a {penName} to dokazuje. Sdílejte!",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice2_attack_personal_picture_intro: {
    text: "obrázek armáda personal intro",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_personal_picture_1"
    }]
  },

  firstContent_choice2_attack_personal_picture_1: {
    text: "obrázek armáda personal 1",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_picture_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_picture_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_personal_picture_1_chosen: {
    text: "obrázek armáda personal 1 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_picture_react1"
    }]
  },

  firstContent_choice2_attack_personal_picture_2: {
    text: "obrázek armáda personal 2",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_picture_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_picture_2_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_personal_picture_2_chosen: {
    text: "obrázek armáda personal 2 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_picture_react1"
    }]
  },

  firstContent_choice2_attack_personal_picture_3: {
    text: "obrázek armáda personal 3",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_picture_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_picture_3_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_personal_picture_3_chosen: {
    text: "obrázek armáda personal 3 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_picture_react1"
    }]
  },

  firstContent_choice2_attack_personal_picture_react1: {
    text: "obrázek armáda personal react 1",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_personal_picture_react2"
    }]
  },

  firstContent_choice2_attack_personal_picture_react2: {
    text: "obrázek armáda personal react 2",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice2_attack_emotional: {
    text: "Dobrá volba. Zasáhněte fanouškům jejich citlivá místa! Jak to uděláte?",
    type: "gameMessage",
    choices: [{
      text: "Napíšu článek.",
      nextStep: "firstContent_choice2_attack_emotional_article_intro",
    }, {
      text: "Nasdílím obrázek.",
      nextStep: "firstContent_choice2_attack_emotional_picture_intro",
    }]
  },

  firstContent_choice2_attack_emotional_article_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_emotional_article_1"
    }]
  },

  firstContent_choice2_attack_emotional_article_1: {
    text: "Důsledek fám o změně klimatu? Šikana firem a miliony lidí bez práce! Přečtěte si, kdy mezi nimi budete vy",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_article_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_article_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_emotional_article_1_chosen: {
    text: "To by šlo! Když se čtenáři budou cítit přímo ohroženi, zvedne je to ze židle. Jak na článek reagují fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_article_react1"
    }]
  },

  firstContent_choice2_attack_emotional_article_2: {
    text: "EXKLUZIVNĚ! Našim dětem vymývají mozky. Ekofašismus už servírují i nejmenším",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_article_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_article_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice2_attack_emotional_article_2_chosen: {
    text: "Ucházející volba. Lidé nemají rádi, když jsou jejich děti vystaveny ideologii - tedy aspoň když je jiná, než jakou vyznávají oni. Co o článku říkají fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_article_react1"
    }]
  },

  firstContent_choice2_attack_emotional_article_3: {
    text: "Smrt nevinné ženy (†70) zavinili klimatičtí „experti“ a jejich tragická předpověď počasí! A není to první osudový omyl. Budeme jim věřit, že chybu neudělají znova?!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_article_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_article_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice2_attack_emotional_article_3_chosen: {
    text: "Proč ne? Spojit něčí práci s úmrtím nevinného člověka může fungovat. Jak reagují čtenáři?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_article_react1"
    }]
  },

  firstContent_choice2_attack_emotional_article_react1: {
    text: "To už snad přestává všechno. Kdy už ekoteroristi přestanou otravovat vzduch??? Lidi, udělejme s tím konečně něco!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_emotional_article_react2"
    }]
  },

  firstContent_choice2_attack_emotional_article_react2: {
    text: "Dnes už snad nejde věřit nikomu. A šrouby se dál utahují... Aspoň máme na naší straně {siteName}.",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice2_attack_emotional_picture_intro: {
    text: "obrázek armáda emotional intro",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_emotional_picture_1"
    }]
  },

  firstContent_choice2_attack_emotional_picture_1: {
    text: "obrázek armáda emotional 1",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_picture_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_picture_1_chosen",
      scoreChanůge: 55
    }]
  },

  firstContent_choice2_attack_emotional_picture_1_chosen: {
    text: "obrázek armáda emotional 1 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_picture_react1"
    }]
  },

  firstContent_choice2_attack_emotional_picture_2: {
    text: "obrázek armáda emotional 2",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_picture_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_picture_2_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_emotional_picture_2_chosen: {
    text: "obrázek armáda emotional 2 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_picture_react1"
    }]
  },
  
  firstContent_choice2_attack_emotional_picture_3: {
    text: "obrázek armáda emotional 3",
    image: "http://dev.datarozhlas.cz/fake-news-hra/data/blank_profile.png",
    type: "image",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_picture_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_picture_3_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_emotional_picture_3_chosen: {
    text: "obrázek armáda emotional 3 chosen",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_picture_react1"
    }]
  },

  firstContent_choice2_attack_emotional_picture_react1: {
    text: "obrázek armáda emotional react 1",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_emotional_picture_react2"
    }]
  },

  firstContent_choice2_attack_emotional_picture_react2: {
    text: "obrázek armáda emotional react 2",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  ban: {
    text: "S první vlaštovkou slavíte úspěch! Gratuluju, čeká vás hvězdná kariéra.",
    type: "gameMessage",
    choices: [{
      text: "Díky!",
      nextStep: "ban2"
    }, {
      text: "Věděl jsem, že na to mám.",
      nextStep: "ban2"
    }]
  },
  
  ban2: {
    text: "Ne tak rychle. Kdy jste naposledy otevřel Facebook?",
    type: "gameMessage",
    choices: [{
      text: "Co se děje?",
      nextStep: "ban3"
    }]
  },

  ban3: {
    text: "Váš nekompromisně vyrobený obsah byl na poměry Facebooku zřejmě radikální až moc. Vysloužil jste si 24hodinovou blokaci.",
    type: "gameMessage",
    choices: [{
      text: "To ne!",
      nextStep: "ban4"
    }, {
      text: "Co teď?",
      nextStep: "ban4"
    }]
  },

  ban4: {
    text: "Hraje nám to do karet. Jestli jsou na něco lidé alergičtí, je to cenzura. Stačí trochu zahrát na emoce a fanoušci se pohrnou!",
    type: "gameMessage",
    choices: [{
      text: "Nemůžu se dočkat!",
      nextStep: "ban5"
    }]
  },

  ban5: {
    text: "Blok končí a my můžeme na Facebooku vydat šťavnatý příspěvek v nové roli internetového disidenta. Na co budeme apelovat?",
    type: "gameMessage",
    choices: [{
      text: "Na strach",
      nextStep: "ban_fear"
    }, {
      text: "Na naštvanost",
      nextStep: "ban_anger"
    }]
  },

  ban_fear: {
    text: "Když si chodili pro ostatní, mlčel jsem. Když si přišli pro mě, nezbyl nikdo, kdo by se ozval. Takhle brzy dopadneme všichni - pokud nebudeme šířit necenzurovanou pravdu. My si cestu vždy najdeme i přes zákazy. Na {siteName} se můžete spolehnout.",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To by mohlo zabrat.",
      nextStep: "ban_done",
      scoreChange: 267,
      trustChange: 15
    }]
  },

  ban_anger: {
    text: "Neuvěřitelné, co si Facebook dovoluje! Pod zástěrkou „demokracie“ se vrací komunistická cenzura. Odvaha už zase není levná!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To by mohlo zabrat.",
      nextStep: "ban_done",
      scoreChange: 267,
      trustChange: 15
    }]
  },

  ban_done: {
    text: "To se Facebooku povedlo! Informaci o cenzuře nepohodlných názorů sdílelo několik velkých jmen na sociálních sítích. Fanoušci přibývají ve velkém.",
    type: "gameMessage",
    choices: [{
      text: "Super!",
      nextStep: "emotion_done"
    }]
  },

  emotion_done: {
    text: "Podařilo se nám zmanipulovat emoce čtenářů tak, aby šířili náš obsah!",
    type: "gameMessage",
    choices: [{
      text: "Dostanu odměnu?",
      nextStep: "badge_emotion"
    }]
  },

  badge_emotion: {
    text: "Dostal jste odznak EMOTION!",
    type: "badge",
    badge: "emotion",
    choices: [{
      text: "Pokračujeme!",
      nextStep: "search_fb",
    }]
  },

  search_fb: {
    text: "(TADY KONČÍ ZREDIGOVANÁ ČÁST) Co takhle kouknout do diskuzí na Facebooku a najít téma, které lidi zajímá",
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