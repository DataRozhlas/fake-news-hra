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
      nextStep: "polarization_start",
    }]
  },

  polarization_start: {
    text: "O {siteName} je zájem! Teď musíme vymyslet, čemu se věnovat dál.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select"
    }]
  },

  polarization_select: {
    text: "Potřebujeme najít další téma, kterým udržíme naše stávající fanoušky a přilákáme nové. Jak to uděláme?",
    type: "gameMessage",
    choices: [{
      text: "Něco si vymyslím.",
      nextStep: "polarization_fake"
    }, {
      text: "Najdu téma na kauzu.",
      nextStep: "polarization_real"
    }]
  },

  polarization_fake: {
    text: "To není dobrý nápad. Publikování úplně smyšlených zpráv se nemusí vyplatit.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_fake2"
    }]
  },

  polarization_fake2: {
    text: "Čtenáři vás můžou nachytat při příliš zjevné lži - a vaše těžce budovaná důvěryhodnost bude pryč. Zkusíme to jinak.",
    type: "gameMessage",
    choices: [{
      text: "Jak?",
      nextStep: "polarization_real"
    }]
  },

  polarization_real: {
    text: "Vhodný cíl nejlíp najdeme na Facebooku. Stačí se podívat na statusy, které uživatelé sdílí ve velkém. Skandál na sebe nenechá dlouho čekat!",
    type: "gameMessage",
    choices: [{
      text: "Jdeme na to!",
      nextStep: "polarization_select_1"
    }]
  },

  polarization_select_1: {
    text: "Kamarádka mi říkala, že desetiletý syn její známé snědl ananas a onemocněl. Lékaři pak při kontrole zjistili, že má AIDS!",
    username: "Honza Novotný",
    type: "socialPost",
    choices: [{
      text: "Perfektní!",
      nextStep: "polarization_select_1_chosen",
    },{
      text: "Co tam máme dál?",
      nextStep: "polarization_select_2",
    }]
  },

  polarization_select_1_chosen: {
    text: "Skvělá volba! Z Honzova šokujícího příběhu se může stát obří kauza. Stačí správně postupovat.",
    type: "gameMessage",
    choices: [{
      text: "Ale jak?",
      nextStep: "polarization_select_1_angle"
    }]
  },

  polarization_select_1_angle: {
    text: "Je jasné, že za ananasovou nemoc je někdo zodpovědný. My musíme vybrat, kdo to bude: buď prohnilé ovocnářské korporace, nebo nedostatečně ostražitý stát.",
    type: "gameMessage",
    choices: [{
      text: "Korporace!",
      nextStep: "polarization_select_1_corp"
    }, {
      text: "Stát!",
      nextStep: "polarization_select_1_state"
    }]
  },

  polarization_select_1_corp: {
    text: "Takže levicový pohled? Proč ne - i když pravicový by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select_1_corp_2"
    }]
  },

  polarization_select_1_corp_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_1_corp_article_1"
    }]
  },

  polarization_select_1_corp_article_1: {
    text: "Stojí ananasy z dovozu za infekcí HIV? Přední český dovozce tropického ovoce se k případu nemocného chlapce odmítl vyjádřit",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_corp_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_corp_article_2"
    }]
  },

  polarization_select_1_corp_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_1_corp_bots"
    }]
  },

  polarization_select_1_corp_article_2: {
    text: "Neuvěřitelné! Lékaři potvrzují přítomnost HIV v ananasech. Za vším stojí korporace, která vše tutlá!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_corp_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_corp_article_3"
    }]
  },

  polarization_select_1_corp_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené tvrzením autority! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_1_corp_bots"
    }]
  },

  polarization_select_1_corp_article_3: {
    text: "Do pěti let VYMŘOU naše děti! GMO nestačí, potravinářské korporace nastražily VRAŽEDNÝ virus HIV do ananasů! Máme důkazy o spolčení zbohatlíků z nadnárodních společností!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_corp_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_corp_article_1"
    }]
  },

  polarization_select_1_corp_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_1_corp_bots"
    }]
  },

  polarization_select_1_corp_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_1_corp_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_1_corp_bots_no"
    }]
  },

  polarization_select_1_corp_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_1_corp_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_1_corp_bots_nono"
    }]
  },

  polarization_select_1_corp_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_1_corp_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_1_corp_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_1_corp_bots_fan1"
    }]
  },

  polarization_select_1_corp_bots_fan1: {
    text: "Neskutečná ostuda a ohrožení našich dětí!!! A za všechno může jakási anonymní korporace... ŠIŘTE DÁL!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_1_corp_bots_fan2"
    }]
  },

  polarization_select_1_corp_bots_fan2: {
    text: "Anonymní milardáři z podivných firem na tropických ostrovech si už dovolí fakt všechno. Tohle nám prý chtěli utajit...",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_corp_bots_success"
    }]
  },

  polarization_select_1_corp_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_1_corp_bots_fan3"
    }]
  },

  polarization_select_1_corp_bots_fan3: {
    text: "O téhle firmě jsem dodneška neslyšel. Prý vyprodukuje nejvíc ovoce na světě - a teď se ukázalo, že v jejích ananasech je HIV. Vůbec mě to nepřekvapuje...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_corp_bots_fan4"
    }]
  },

  polarization_select_1_corp_bots_fan4: {
    text: "Když mi to vyprávěla kamarádka, nevěřila jsem, a tady je to černé na bílém. To se budeme kvůli všemocným korporacím bát jíst ovoce?",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_corp_bots_end"
    }]
  },

  polarization_select_1_corp_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },

  polarization_select_1_state: {
      text: "Takže pravicový pohled? Proč ne - i když levicový by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
      type: "gameMessage",
      choices: [{
        text: "Dobře.",
        nextStep: "polarization_select_1_state_2"
      }]
    },

  polarization_select_1_state_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_1_state_article_1"
    }]
  },

  polarization_select_1_state_article_1: {
    text: "Stojí ananasy z dovozu za infekcí HIV? Česká potravinářská komora se k případu nemocného chlapce odmítla vyjádřit",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_state_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_state_article_2"
    }]
  },

  polarization_select_1_state_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_1_state_bots"
    }]
  },

  polarization_select_1_state_article_2: {
    text: "Tak tohle vám vláda tají. Lékaři ukázali, že ananasy obsahují HIV! Okamžitý zákaz? Ani náhodou!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_state_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_state_article_3"
    }]
  },

  polarization_select_1_state_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené tvrzením autority! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_1_state_bots"
    }]
  },

  polarization_select_1_state_article_3: {
    text: "Do pěti let VYMŘOU naše děti! Vláda nastražila VRAŽEDNÝ virus HIV do milovaných ananasů! Tak takhle chtějí ušetřit na školství?!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_1_state_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_1_state_article_1"
    }]
  },

  polarization_select_1_state_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_1_state_bots"
    }]
  },

  polarization_select_1_state_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_1_state_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_1_state_bots_no"
    }]
  },

  polarization_select_1_state_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_1_state_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_1_state_bots_nono"
    }]
  },

  polarization_select_1_state_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_1_state_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_1_state_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_1_state_bots_fan1"
    }]
  },

  polarization_select_1_state_bots_fan1: {
    text: "Neskutečná ostuda a ohrožení našich dětí!!! A naše skvělá vláda dělá jakoby nic... ŠIŘTE DÁL!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_1_state_bots_fan2"
    }]
  },

  polarization_select_1_state_bots_fan2: {
    text: "Ti naši politici už si dovolí fakt všechno. Tohle nám prý chtěli utajit...",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_state_bots_success"
    }]
  },

  polarization_select_1_state_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_1_state_bots_fan3"
    }]
  },

  polarization_select_1_state_bots_fan3: {
    text: "Tak ananasy jsou prý nakaženy HIV a vláda s tím nic nedělá. Když vidím, co každý den předvádí, vůbec mě to nepřekvapuje...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_state_bots_fan4"
    }]
  },

  polarization_select_1_state_bots_fan4: {
    text: "Když mi to vyprávěla kamarádka, nevěřila jsem, a tady je to černé na bílém. To se budeme kvůli neschopným ministrům bát jíst ovoce?",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_1_state_bots_end"
    }]
  },

  polarization_select_1_state_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },

  polarization_select_2: {
    text: "Dneska po obědě jsem na hlavním nádraží v Praze viděla vlak plný migrantů, bylo jich tam snad 1500. A MÉDIA MLČÍ!!!",
    username: "Martina Nováková",
    type: "socialPost",
    choices: [{
      text: "Perfektní!",
      nextStep: "polarization_select_2_chosen",
    },{
      text: "Co tam máme dál?",
      nextStep: "polarization_select_3",
    }]
  },

  polarization_select_2_chosen: {
    text: "Skvělá volba! Martinino svědectví může rozdmýchat velký skandál. Stačí ho správně podat.",
    type: "gameMessage",
    choices: [{
      text: "Ale jak?",
      nextStep: "polarization_select_2_angle"
    }]
  },

  polarization_select_2_angle: {
    text: "Za vlak plný migrantů je někoho potřeba hnát k zodpovědnosti. Na nás je, kdo to bude: buď vítačské neziskovky, nebo prolhaná vláda.",
    type: "gameMessage",
    choices: [{
      text: "Neziskovky!",
      nextStep: "polarization_select_2_ngo"
    }, {
      text: "Vláda!",
      nextStep: "polarization_select_2_gov"
    }]
  },

  polarization_select_2_ngo: {
    text: "Takže provládní pohled? Proč ne - i když protivládní by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select_2_ngo_2"
    }]
  },

  polarization_select_2_ngo_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_2_ngo_article_1"
    }]
  },

  polarization_select_2_ngo_article_1: {
    text: "Na pražském nádraží se pohybují stovky lidí neevropského původu. Co na to vítači z neziskovek?",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_ngo_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_ngo_article_2"
    }]
  },

  polarization_select_2_ngo_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_2_ngo_bots"
    }]
  },

  polarization_select_2_ngo_article_2: {
    text: "UŽ JSOU TADY: Migranti se valí do Prahy. Práce vlastizrádců placených z našich daní nese ovoce! Zjistili jsme, jak ilegálové díky neziskovkám získávají azyl",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_ngo_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_ngo_article_3"
    }]
  },

  polarization_select_2_ngo_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené vlastním „zjištěním“! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_2_ngo_bots"
    }]
  },

  polarization_select_2_ngo_article_3: {
    text: "TEROR V PRAZE!!! Na nádraží vzniká malý Islámský stát: Sluníčkářské poběhlice z neziskovek se VDÁVAJÍ ZA ILEGÁLY přímo na nástupištích!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_ngo_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_ngo_article_1"
    }]
  },

  polarization_select_2_ngo_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_2_ngo_bots"
    }]
  },

  polarization_select_2_ngo_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_2_ngo_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_2_ngo_bots_no"
    }]
  },

  polarization_select_2_ngo_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_2_ngo_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_2_ngo_bots_nono"
    }]
  },

  polarization_select_2_ngo_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_2_ngo_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_2_ngo_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_2_ngo_bots_fan1"
    }]
  },

  polarization_select_2_ngo_bots_fan1: {
    text: "Národ je v ohrožení! Dílo neziskovek je dokonáno, valí se sem stovky migrantů. Sdílejte!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_2_ngo_bots_fan2"
    }]
  },

  polarization_select_2_ngo_bots_fan2: {
    text: "Přivandrovalci přímo v Praze?! Kdy už půjdou vítači a pseudohumanisti konečně sedět??",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_ngo_bots_success"
    }]
  },

  polarization_select_2_ngo_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_2_ngo_bots_fan3"
    }]
  },

  polarization_select_2_ngo_bots_fan3: {
    text: "Podle očitého svědectví přijel na pozvání neziskovek plný vlak migrantů. Nejsem pro nulovou toleranci, ale co je moc, to je moc...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_ngo_bots_fan4"
    }]
  },

  polarization_select_2_ngo_bots_fan4: {
    text: "Už mi kvůli tomu volal kamarád. Je to úplně šílené, okamžitě sebrat aktivistům peníze!",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_ngo_bots_end"
    }]
  },

  polarization_select_2_ngo_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },

  polarization_select_2_gov: {
    text: "Takže protivládní pohled? Proč ne - i když provládní by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select_2_gov_2"
    }]
  },

  polarization_select_2_gov_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_2_gov_article_1"
    }]
  },

  polarization_select_2_gov_article_1: {
    text: "Na pražském nádraží se pohybují stovky lidí neevropského původu. Vláda přitom slibovala nulovou toleranci",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_gov_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_gov_article_2"
    }]
  },

  polarization_select_2_gov_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_2_gov_bots"
    }]
  },

  polarization_select_2_gov_article_2: {
    text: "UŽ JSOU TADY! Migranti se valí do Prahy. Zjistili jsme, jak ilegálové získávají azyl: s tichým souhlasem vlády!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_gov_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_gov_article_3"
    }]
  },

  polarization_select_2_gov_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené vlastním „zjištěním“! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_2_gov_bots"
    }]
  },

  polarization_select_2_gov_article_3: {
    text: "TO JSTE NEMĚLI VĚDĚT: Do Prahy přivandrovaly TISÍCE MIGRANTŮ! Pozvala je česká vláda za TAJNÉ DOTACE z Evropské unie. Čekají je vládní byty a život bez práce!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_2_gov_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_2_gov_article_1"
    }]
  },

  polarization_select_2_gov_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_2_gov_bots"
    }]
  },

  polarization_select_2_gov_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_2_gov_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_2_gov_bots_no"
    }]
  },

  polarization_select_2_gov_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_2_gov_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_2_gov_bots_nono"
    }]
  },

  polarization_select_2_gov_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_2_gov_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_2_gov_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_2_gov_bots_fan1"
    }]
  },

  polarization_select_2_gov_bots_fan1: {
    text: "Národ je v ohrožení! Vláda, která nás měla ochránit, selhala. Valí se sem stovky migrantů. Sdílejte!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_2_gov_bots_fan2"
    }]
  },

  polarization_select_2_gov_bots_fan2: {
    text: "Přivandrovalci přímo v Praze?! Politici slibovali nepřijmout jediného uprchlíka! Pryč s vládou!",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_gov_bots_success"
    }]
  },

  polarization_select_2_gov_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_2_gov_bots_fan3"
    }]
  },

  polarization_select_2_gov_bots_fan3: {
    text: "Podle očitého svědectví přijel na pozvání vlády plný vlak migrantů. Nejsem pro nulovou toleranci, ale sliby se mají plnit...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_gov_bots_fan4"
    }]
  },

  polarization_select_2_gov_bots_fan4: {
    text: "Už mi kvůli tomu volal kamarád. Je to úplně šílené, musíme vyrazit demonstrovat!",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_2_gov_bots_end"
    }]
  },

  polarization_select_2_gov_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },

  polarization_select_3: {
    text: "Jsem na dovolené ve Francii a na obloze jsou podivné mraky. Kousek od nás je jaderná elektrárna. Nevíte o tom něco?",
    username: "Petra Horáková",
    type: "socialPost",
    choices: [{
      text: "Perfektní!",
      nextStep: "polarization_select_3_chosen",
    },{
      text: "Co tam máme dál?",
      nextStep: "polarization_select_1",
    }]
  },

  polarization_select_3_chosen: {
    text: "Výborná volba! Petřino podezření může způsobit mezinárodní skandál. Stačí ho správně uchopit.",
    type: "gameMessage",
    choices: [{
      text: "Ale jak?",
      nextStep: "polarization_select_3_angle"
    }]
  },

  polarization_select_3_angle: {
    text: "Z hrozící jaderné katastrofy je nutné někoho obvinit - v tomhle případě stát. Můžeme to udělat buď proto, že ještě nezakázal jaderné elektrárny, nebo protože je nesvěřil do rukou kompetentním firmám.",
    type: "gameMessage",
    choices: [{
      text: "Měl je zakázat!",
      nextStep: "polarization_select_3_left"
    }, {
      text: "Měl je privatizovat!",
      nextStep: "polarization_select_3_right"
    }]
  },

  polarization_select_3_left: {
    text: "Takže levicový pohled? Proč ne - i když pravicový by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select_3_left_2"
    }]
  },

  polarization_select_3_left_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_3_left_article_1"
    }]
  },

  polarization_select_3_left_article_1: {
    text: "Pět zraněných po výbuchu jaderné elektrárny na západě Francie. Kdy skoncujeme s atomovým nebezpečím?",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_left_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_left_article_2"
    }]
  },

  polarization_select_3_left_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_3_left_bots"
    }]
  },

  polarization_select_3_left_article_2: {
    text: "Černobyl, Fukušima, Provence? Jaderná hrozba nad slunnou Francií. Odborníci varují, svět neposlouchá",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_left_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_left_article_3"
    }]
  },

  polarization_select_3_left_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené postojem autority! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_3_left_bots"
    }]
  },

  polarization_select_3_left_article_3: {
    text: "Nad Evropou se valí RADIOAKTIVNÍ MRAK! Příčinou je záhadná EXPLOZE ve francouzské jaderné elektrárně. Vlády mlčí, okamžitě kupujte jódové tablety!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_left_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_left_article_1"
    }]
  },

  polarization_select_3_left_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_3_left_bots"
    }]
  },

  polarization_select_3_left_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_3_left_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_3_left_bots_no"
    }]
  },

  polarization_select_3_left_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_3_left_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_3_left_bots_nono"
    }]
  },

  polarization_select_3_left_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_3_left_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_3_left_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_3_left_bots_fan1"
    }]
  },

  polarization_select_3_left_bots_fan1: {
    text: "Lidstvo mělo s jadernou hrozbou dávno skoncovat. Vlády musí okamžitě jednat!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_3_left_bots_fan2"
    }]
  },

  polarization_select_3_left_bots_fan2: {
    text: "Když se radioaktivní energie nezbavíme, zahubí Evropu. Ve Francii už to začalo!",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_left_bots_success"
    }]
  },

  polarization_select_3_left_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_3_left_bots_fan3"
    }]
  },

  polarization_select_3_left_bots_fan3: {
    text: "Na jaderné elektrárny jsem neměl jasný názor, ale svědectví z Francie ukazuje, jak jsou nebezpečné. Posuďte sami...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_left_bots_fan4"
    }]
  },

  polarization_select_3_left_bots_fan4: {
    text: "Opravdu kousek od našich domovů stavíme ničivé továrny na jaderné exploze? Tahle civilizace se zlikviduje sama!",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_left_bots_end"
    }]
  },

  polarization_select_3_left_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },

  polarization_select_3_right: {
    text: "Takže pravicový pohled? Proč ne - i když levicový by fungoval stejně. Hlavní je, že máme úhel, ze kterého můžeme svůj cíl rozdrtit.",
    type: "gameMessage",
    choices: [{
      text: "Dobře.",
      nextStep: "polarization_select_3_right_2"
    }]
  },

  polarization_select_3_right_2: {
    text: "Zbývá kauzu zpracovat v článku a vybrat k němu dostatečně výbušný titulek.",
    type: "gameMessage",
    choices: [{
      text: "No prosím!",
      nextStep: "polarization_select_3_right_article_1"
    }]
  },

  polarization_select_3_right_article_1: {
    text: "Pět zraněných po výbuchu jaderné elektrárny na západě Francie. Důsledek energetiky pod kontrolou neschopného státu",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_right_article_1_chosen",
      scoreChange: 100
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_right_article_2"
    }]
  },

  polarization_select_3_right_article_1_chosen: {
    text: "Mohl jste klidně být ostřejší, ale dobrá. Čtenáře kauza zaujala. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_3_right_bots"
    }]
  },

  polarization_select_3_right_article_2: {
    text: "Černobyl, Fukušima, Provence? Jaderná hrozba nad slunnou Francií. Co vše způsobí nukleární síla v rukou politiků?!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_right_article_2_chosen",
      scoreChange: 200
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_right_article_3"
    }]
  },

  polarization_select_3_right_article_2_chosen: {
    text: "Ostré a dramatické, zároveň podepřené postojem autority! Výborně, čtenáři po kauze skáčou. To nám ale nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Jakto?",
      nextStep: "polarization_select_3_right_bots"
    }]
  },

  polarization_select_3_right_article_3: {
    text: "Nad Evropou se valí RADIOAKTIVNÍ MRAK! Příčinou je záhadná EXPLOZE ve francouzské jaderné elektrárně. Vlády mlčí, okamžitě kupujte jódové tablety!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ano!",
      nextStep: "polarization_select_3_right_article_3_chosen",
      scoreChange: 50
    }, {
      text: "Raději jinak.",
      nextStep: "polarization_select_3_right_article_1"
    }]
  },

  polarization_select_3_right_article_3_chosen: {
    text: "Nepřehánějte! Takhle přefouknutý titulek zaujal jen ty nejparanoidnější čtenáře. To nám rozhodně nestačí.",
    type: "gameMessage",
    choices: [{
      text: "Co teď?",
      nextStep: "polarization_select_3_right_bots"
    }]
  },

  polarization_select_3_right_bots: {
    text: "Kauzu teď musíme trochu rozvířit. Použijeme k tomu osvědčenou metodu: falešné uživatelské profily, které můžeme nakoupit a využít k šíření článku.",
    type: "gameMessage",
    choices: [{
      text: "Super nápad!",
      nextStep: "polarization_select_3_right_bots_yes",
      scoreChange: 6000
    }, {
      text: "Je to nutné?",
      nextStep: "polarization_select_3_right_bots_no"
    }]
  },

  polarization_select_3_right_bots_no: {
    text: "Je to nutné. Začal jste s tím, že chcete něco dokázat, ne? Bez trochy popostrčení to zkrátka nepůjde.",
    type: "gameMessage",
    choices: [{
      text: "No dobře...",
      nextStep: "polarization_select_3_right_bots_yes",
      scoreChange: 6000
    }, {
      text: "Ale já nechci!",
      nextStep: "polarization_select_3_right_bots_nono"
    }]
  },

  polarization_select_3_right_bots_nono: {
    text: "Tak podívejte se. Nejsme tady pro legraci a jde nám o vážnou věc. Pokud na to nemáte, skončete, dokud je čas. Nikdo vás tu nedrží.",
    type: "gameMessage",
    choices: [{
      text: "No tak dobře, použijeme falešné účty.",
      nextStep: "polarization_select_3_right_bots_yes",
      scoreChange: 6000
    }]
  },

  polarization_select_3_right_bots_yes: {
    text: "Výborně! Přibylo vám 6000 fanoušků, kteří už se postarají o to, aby se z Honzova příběhu stala velká kauza. Koukněte, jak článek sdílí mezi své přátele.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "polarization_select_3_right_bots_fan1"
    }]
  },

  polarization_select_3_right_bots_fan1: {
    text: "Důsledek socialismu ve všech oblastech lidského života. Vlády musí privatizovat výrobu energie!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Bezva!",
      nextStep: "polarization_select_3_right_bots_fan2"
    }]
  },

  polarization_select_3_right_bots_fan2: {
    text: "Když radioaktivní energii neosvobodíme, zahubí Evropu. Francie potřebuje více kapitalismu!",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_right_bots_success"
    }]
  },

  polarization_select_3_right_bots_success: {
    text: "To vypadá slibně! Podíváme, jak se na naši akci chytili skuteční lidé.",
    type: "gameMessage",
    choices: [{
      text: "Hmm...",
      nextStep: "polarization_select_3_right_bots_fan3"
    }]
  },

  polarization_select_3_right_bots_fan3: {
    text: "Na jaderné elektrárny jsem neměl jasný názor, ale svědectví z Francie ukazuje, jak jsou nebezpečné, když na ně dohlíží nefunkční stát. Posuďte sami...",
    username: "Jiří Vlivník",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_right_bots_fan4"
    }]
  },

  polarization_select_3_right_bots_fan4: {
    text: "Opravdu necháváme naše politiky dohlížet na ničivé továrny na jaderné exploze? Tahle civilizace se zlikviduje sama!",
    username: "Zuzana Líčivá - youtuberka",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "polarization_select_3_right_bots_end"
    }]
  },

  polarization_select_3_right_bots_end: {
    text: "Další povedená akce. O skandálu díky našim nakoupeným profilům mluví i takzvaní influenceři, lidé, kteří mají na sociálních sítích velký dosah.",
    type: "gameMessage",
    choices: [{
      text: "Zase jsem to dokázal!",
      nextStep: "badge_polarization"
    }]
  },  

  badge_polarization: {
    text: "Gratuluji! Podařilo se ti zpolarizovat debatu. Blabla",
    type: "badge",
    choices: [{
      text: "Díky! Teď discredit",
      nextStep: "discredit",
    }]
  },

  discredit: {
    text: "Máme tu drobný problém.",
    type: "gameMessage",
    choices: [{
      text: "Jejda!",
      nextStep: "discredit_2"
    }, {
      text: "Co se stalo?",
      nextStep: "discredit_2"
    }]
  },  

  discredit_2: {
    text: "{siteName} je v hledáčku jednoho z takzvaných factcheckerů!",
    type: "gameMessage",
    choices: [{
      text: "A to má být kdo?",
      nextStep: "discredit_3",
    }]
  },

  discredit_3: {
    text: "Factcheckeři jsou lidé nebo organizace, kteří se zaměřují na weby jako je ten náš a uvádí naše obratně zpracované informace na pravou míru.",
    type: "gameMessage",
    choices: [{
      text: "Ach jo...",
      nextStep: "discredit_4",
    }]
  },

  discredit_4: {
    text: "V tomhle případě jde dokonce o veřejnoprávní médium. Podíváme se, co o nás píšou?",
    type: "gameMessage",
    choices: [{
      text: "Tak dobře.",
      nextStep: "discredit_5",
    }]
  },

  discredit_5: {
    text: "Čech zveřejnil video „inscenovaného topení migrantů“ na Krétě. Ve skutečnosti šlo o natáčení dokumentu",
    webName: "iROZHLAS",
    type: "webPost",
    choices: [{
      text: "Pch!",
      nextStep: "discredit_6",
    }]
  },

  discredit_6: {
    text: "S něčím takovým musíme občas počítat. Jak zareagujete?",
    type: "gameMessage",
    choices: [{
      text: "Omluvím se.",
      nextStep: "discredit_apology",
    }, {
      text: "Neudělám nic.",
      nextStep: "discredit_nothing",
    }, {
      text: "Vrátím úder!",
      nextStep: "discredit_revenge",
    }]
  },

  discredit_revenge: {
    text: "Naprosto správně! Útok můžeme vést dvěma cestami.",
    type: "gameMessage",
    choices: [{
      text: "Popřu všechna nařčení.",
      nextStep: "discredit_revenge_deny",
    }, {
      text: "Napadnu factcheckera.",
      nextStep: "discredit_revenge_attack",
    }]
  },

  discredit_apology: {
    text: "Omlouváme se za nepravdivé informace v případě videa s inscenovaným topením migrantů. Na podobné politováníhodné chyby si budeme dávat pozor.",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "V pořádku",
      nextStep: "discredit_apology_2",
    }, {
      text: "Počkat, to ne!",
      nextStep: "discredit_apology_takeback"
    }]
  },

  discredit_apology_takeback: {
    text: "Dobře děláte! Na omluvy nejsou lidé zvědaví. Nejlepší obrana je útok. Můžete ho vést dvěma způsoby.",
    type: "gameMessage",
    choices: [{
      text: "Popřu všechna nařčení.",
      nextStep: "discredit_revenge_deny",
    }, {
      text: "Napadnu factcheckera.",
      nextStep: "discredit_revenge_attack",
    }]
  },

  discredit_apology_2: {
    text: "Udělal jste chybu. Na omluvy nejsou vaši fanoušci zvědaví. Podívejte, jak reagují!",
    type: "gameMessage",
    choices: [{
      text: "Co mi zbývá...",
      nextStep: "discredit_apology_3",
    }]
  },

  discredit_apology_3: {
    text: "Takže doteď seriózní web {siteName} teď poklonkuje před lžimainstreamem? Ubozí slaboši!",
    username: "Milada Mručivá",
    type: "socialPost",
    choices: [{
      text: "Ajaj",
      nextStep: "discredit_nothing_5",
    }]
  },

  discredit_nothing: {
    text: "Zkusíme to. Kdo nic nedělá, nic nezkazí, že?",
    type: "gameMessage",
    choices: [{
      text: "Přesně!",
      nextStep: "discredit_nothing_2",
    }]
  },

  discredit_nothing_2: {
    text: "No...",
    type: "gameMessage",
    choices: [{
      text: "No?",
      nextStep: "discredit_nothing_3",
    }, {
      text: "Co je?",
      nextStep: "discredit_nothing_3",
    }]
  },

  discredit_nothing_3: {
    text: "Zas tak dobrý nápad to nebyl. Jako přiznání chyby to berou nejen factcheckeři, ale i vaši fanoušci.",
    type: "gameMessage",
    choices: [{
      text: "Nevěřím!",
      nextStep: "discredit_nothing_4",
    }]
  },

  discredit_nothing_4: {
    text: "Takže doteď seriózní {siteName} na sebe nechá kydat špínu? Velké zklamání!",
    username: "Milada Mručivá",
    type: "socialPost",
    choices: [{
      text: "Ajaj",
      nextStep: "discredit_nothing_5",
    }]
  },

  discredit_nothing_5: {
    text: "Zbývá jediná možnost.",
    type: "gameMessage",
    choices: [{
      text: "Omluva fanouškům?",
      nextStep: "discredit_nothing_apology",
    }, {
      text: "Protiútok!",
      nextStep: "discredit_nothing_revenge",
    }]
  },

  discredit_nothing_apology: {
    text: "Ne, ne, ne! Musíte přejít do protiútoku! Jinak přijdete o fanoušky definitivně.",
    type: "gameMessage",
    choices: [{
      text: "No dobře.",
      nextStep: "discredit_nothing_revenge",
    }]
  },

  discredit_nothing_revenge: {
    text: "No konečně. Zaútočit můžete dvěma způsoby.",
    type: "gameMessage",
    choices: [{
      text: "Popřu všechna nařčení.",
      nextStep: "discredit_revenge_deny",
    }, {
      text: "Napadnu factcheckera.",
      nextStep: "discredit_revenge_attack",
    }]
  },

  discredit_revenge_deny: {
    text: "(zatím konec)",
    type: "gameMessage",
    choices: [{
      text: "Popřu všechna nařčení.",
      nextStep: "discredit_revenge_deny",
    }]
  },

  discredit_revenge_attack: {
    text: "(zatím konec)",
    type: "gameMessage",
    choices: [{
      text: "Napadnu factcheckera.",
      nextStep: "discredit_revenge_attack",
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