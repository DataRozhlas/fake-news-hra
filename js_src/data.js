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
    text: "Chcete se stát dezinformátorem, který hýbe veřejným děním?",
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
    text: "Necenzurovaný deník",
    slogan: "Nezávislý, nefiltrovaný, pravdivý",
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
      text: "Principál",
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
      text: "Principál",
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
    text: "První část je za námi! Naučil jste se, jak ze i z obyčejných uživatelů internetu můžou stát šéfredaktoři.",
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
      text: "Tohle použiju!",
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
      text: "Tohle použiju!",
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
    text: "Správně, jen to těm zeleným mozkům natřete! Máte zpravodajský server, tak na něj napište článek.",
    type: "gameMessage",
    choices: [{
      text: "Jak na to?",
      nextStep: "firstContent_choice1_attack_personal_intro",
    }]
  },

  firstContent_choice1_attack_personal_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_personal_1"
    }]
  },

  firstContent_choice1_attack_personal_1: {
    text: "Šílení generálové posílají české hochy do sebevražedných misí!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_personal_1_chosen: {
    text: "To je ono! O mladé životy má starost každý. Přibylo vám pár fanoušků. Co na váš článek říkají?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_react1"
    }]
  },

  firstContent_choice1_attack_personal_2: {
    text: "Proč válčíme v zemích, které na nás neútočí? Velitelé českých jednotek NEZNAJÍ ODPOVĚĎ!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice1_attack_personal_2_chosen: {
    text: "Skvělé! Dokázal jste z armádních špiček udělat hlupáky. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_react1"
    }]
  },

  firstContent_choice1_attack_personal_3: {
    text: "ODHALENÍ: Takzvaně česká afghánská mise podléhá německému velení!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_personal_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_personal_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice1_attack_personal_3_chosen: {
    text: "Výtečně! Na faktické správnosti vašeho sólokapru nezáleží, důležité je, že k vám přivedl nové fanoušky. Co na článek říkají?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_personal_react1"
    }]
  },

  firstContent_choice1_attack_personal_react1: {
    text: "Dělají si z nás legraci? Okamžitě stáhněte naše vojáky!!!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_personal_react2"
    }]
  },

  firstContent_choice1_attack_personal_react2: {
    text: "Sama bych to neřekla líp než {penName}. Já i moje rodina už budeme volit jen ty, kteří těmhle zrůdnostem zamezí.",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice1_attack_emotional: {
    text: "Dobrá volba. Zasáhněte fanouškům jejich citlivá místa! Máte zpravodajský server, tak na něj napište článek.",
    type: "gameMessage",
    choices: [{
      text: "Jak na to?",
      nextStep: "firstContent_choice1_attack_emotional_intro",
    }]
  },

  firstContent_choice1_attack_emotional_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice1_attack_emotional_1"
    }]
  },

  firstContent_choice1_attack_emotional_1: {
    text: "Exkluzivní ZPOVĚĎ matky mrtvého vojína: Zemřel úplně zbytečně!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice1_attack_emotional_1_chosen: {
    text: "Dobrá práce! Když rozhovor naláká dost lidí, nevadí, že je tak trochu vymyšlený. Co na něj říkají vaši noví fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_react1"
    }]
  },

  firstContent_choice1_attack_emotional_2: {
    text: "Masové hroby v Iráku i Afghanistánu. Může v nich skončit i vaše dítě",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice1_attack_emotional_2_chosen: {
    text: "Výborně! Útočit na strach rodičů o vlastní děti je zaručená taktika, která vám přinesla nové fanoušky. Jak na ni reagují?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_react1"
    }]
  },

  firstContent_choice1_attack_emotional_3: {
    text: "Reportáž: Z amerických válečných hrdinů jsou opuštění bezdomovci. Chceme snad, aby Češi končili stejně?",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice1_attack_emotional_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice1_attack_emotional_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice1_attack_emotional_3_chosen: {
    text: "V pořádku. Postrašit čtenáře děsivými příběhy odjinud se vyplácí! Jak na článek reagují fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice1_attack_emotional_react1"
    }]
  },

  firstContent_choice1_attack_emotional_react1: {
    text: "Při čtení tohohle příběhu jsem měl slzy v očích. Zastavme zbytečné válčení!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice1_attack_emotional_react2"
    }]
  },

  firstContent_choice1_attack_emotional_react2: {
    text: "Sledovat {siteName} se vyplácí. Pravda o armádě je krutá, ale vláda ji nesmí tajit. STOP ČESKÝM ŽOLDÁKŮM!",
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
    text: "Jen do nich, do chytrolínů! Máte zpravodajský server, tak na něj napište článek.",
    type: "gameMessage",
    choices: [{
      text: "Jak na to?",
      nextStep: "firstContent_choice2_attack_personal_intro",
    }]
  },

  firstContent_choice2_attack_personal_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_personal_1"
    }]
  },

  firstContent_choice2_attack_personal_1: {
    text: "Kdo platí podvržené pseudostudie o oteplování? LŽI samozvaných expertů dokazují: koho chleba jíš, toho píseň zpívej!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_personal_1_chosen: {
    text: "Správně! Ať už někoho za jeho práci platí kdokoliv, vždy to u části lidí vyvolá podezření. Co na článek říkají vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_react1"
    }]
  },

  firstContent_choice2_attack_personal_2: {
    text: "ODHALENO! Přední „odborník“ na změny klimatu nachytán s tajným milencem!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice2_attack_personal_2_chosen: {
    text: "Dobrá taktika! Napadnout morální profil toho, koho chceme zdiskreditovat, se vyplácí - i když nařčení nesouvisí s jeho prací. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_react1"
    }]
  },

  firstContent_choice2_attack_personal_3: {
    text: "Univerzity pod diktaturou neomarxismu. Ukážeme vám, jak politická korektnost zakazuje vědcům říkat pravdu o klimatické změně!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_personal_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_personal_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice2_attack_personal_3_chosen: {
    text: "Skvěle! Útok můžete vždy vést tak, že dané téma onálepkujete nepopulárním označením. Jak na to reagují vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_personal_react1"
    }]
  },

  firstContent_choice2_attack_personal_react1: {
    text: "Konečně někdo ukázal, jak se to s takzvanými experty ve skutečnosti má! {siteName} je můj nový oblíbený web!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_personal_react2"
    }]
  },

  firstContent_choice2_attack_personal_react2: {
    text: "Hrají si na vědce, ale jsou to jen loutky - a {penName} to dokazuje. Sdílejte!",
    username: "Majda",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "ban"
    }]
  },

  firstContent_choice2_attack_emotional: {
    text: "Dobrá volba. Zasáhněte fanouškům jejich citlivá místa! Máte zpravodajský server, tak na něj napište článek.",
    type: "gameMessage",
    choices: [{
      text: "Jak na to?",
      nextStep: "firstContent_choice2_attack_emotional_intro",
    }]
  },

  firstContent_choice2_attack_emotional_intro: {
    text: "O úspěchu článku rozhoduje dobrý titulek. Nic jiného stejně lidi většinou nečtou. Dám vám pár možností.",
    type: "gameMessage",
    choices: [{
      text: "OK",
      nextStep: "firstContent_choice2_attack_emotional_1"
    }]
  },

  firstContent_choice2_attack_emotional_1: {
    text: "Důsledek fám o změně klimatu? Šikana firem a miliony lidí bez práce! Přečtěte si, kdy mezi nimi budete vy",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_2"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_1_chosen",
      scoreChange: 55
    }]
  },

  firstContent_choice2_attack_emotional_1_chosen: {
    text: "To by šlo! Když se čtenáři budou cítit přímo ohroženi, zvedne je to ze židle. Jak na článek reagují fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_react1"
    }]
  },

  firstContent_choice2_attack_emotional_2: {
    text: "EXKLUZIVNĚ! Našim dětem vymývají mozky. Ekofašismus už servírují i nejmenším",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_3"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_2_chosen",
      scoreChange: 64
    }]
  },

  firstContent_choice2_attack_emotional_2_chosen: {
    text: "Ucházející volba. Lidé nemají rádi, když jsou jejich děti vystaveny ideologii - tedy aspoň když je jiná, než jakou vyznávají oni. Co o článku říkají fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_react1"
    }]
  },

  firstContent_choice2_attack_emotional_3: {
    text: "Smrt nevinné ženy (†70) zavinili klimatičtí „experti“ a jejich tragická předpověď počasí! A není to první osudový omyl. Budeme jim věřit, že chybu neudělají znova?!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Ech...",
      nextStep: "firstContent_choice2_attack_emotional_1"
    }, {
      text: "Vydávám!",
      nextStep: "firstContent_choice2_attack_emotional_3_chosen",
      scoreChange: 85
    }]
  },

  firstContent_choice2_attack_emotional_3_chosen: {
    text: "Proč ne? Spojit něčí práci s úmrtím nevinného člověka může fungovat. Jak reagují čtenáři?",
    type: "gameMessage",
    choices: [{
      text: "Koukneme se!",
      nextStep: "firstContent_choice2_attack_emotional_react1"
    }]
  },

  firstContent_choice2_attack_emotional_react1: {
    text: "To už snad přestává všechno. Kdy už ekoteroristi přestanou otravovat vzduch??? Lidi, udělejme s tím konečně něco!",
    username: "Jeroným",
    type: "socialPost",
    choices: [{
      text: "Super!",
      nextStep: "firstContent_choice2_attack_emotional_react2"
    }]
  },

  firstContent_choice2_attack_emotional_react2: {
    text: "Dnes už snad nejde věřit nikomu. A šrouby se dál utahují... Aspoň máme na naší straně {siteName}.",
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
    text: "Druhá část je za námi! Teď už víte, že zprávy, které hrají na city, se šíří mnohem líp než ty se suchými fakty.",
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
    text: "Třetí část dokončena! Už chápete, jak snadno jde na internetu vyhrotit debatu o ožehavých tématech.",
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
    text: "Takže doteď seriózní {siteName} teď poklonkuje před lžimainstreamem? Ubozí slaboši!",
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
    text: "Může být. Odpovíme těm šťouralům tak, že si to za rámeček nedají!",
    type: "gameMessage",
    choices: [{
      text: "Dobře!",
      nextStep: "discredit_revenge_deny_1",
    }]
  },

  discredit_revenge_deny_1: {
    text: "Nařčení veřejnoprávních pisálků jsou absurdní! Nikdy jsme o topení migrantů nepsali!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_deny_1_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_deny_2",
    }]
  },

  discredit_revenge_deny_1_chosen: {
    text: "No, to bylo slabé. Vaše lež byla až moc zjevná. Stejně vás ale vaši věrní fanoušci brání.",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "discredit_revenge_deny_1_chosen_1",
    }]
  },

  discredit_revenge_deny_1_chosen_1: {
    text: "Veřejnoprávní média lživě útočí na {siteName}! My ale tenhle hon na čarodějnice z peněz daňových poplatníků dobře známe!",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_deny_1_chosen_2",
    }]
  },

  discredit_revenge_deny_1_chosen_2: {
    text: "Český rozhlas dál tají PRAVDU o nekontrolované migraci. Přesně kvůli tomuhle zvolili Trumpa!",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_deny_response_1",
    }]
  },

  discredit_revenge_deny_2: {
    text: "Vaše cenzurovaná, politicky korektní pravda možná někomu stojí za slepé následování. My ale máme alternativní fakta!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_deny_2_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_deny_3",
    }]
  },

  discredit_revenge_deny_2_chosen: {
    text: "Obratný postup! Zpochybnil jste jednoznačná fakta a upozornil na existenci více možných pravd. To je v našem oboru klasická taktika.",
    type: "gameMessage",
    choices: [{
      text: "Co na to fanoušci?",
      nextStep: "discredit_revenge_deny_2_chosen_1",
    }]
  },

  discredit_revenge_deny_2_chosen_1: {
    text: "V dnešní složité době má každý svou vlastní verzi událostí. V tom, jestli mají pravdu podplacená veřejnoprávní média, nebo {siteName}, mám ale jasno!",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_deny_2_chosen_2",
    }]
  },

  discredit_revenge_deny_2_chosen_2: {
    text: "Český rozhlas neváhá tajit PRAVDU o nekontrolované migraci. Přesně kvůli tomuhle zvolili Trumpa!",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_deny_response_1",
    }]
  },

  discredit_revenge_deny_3: {
    text: "Že je naše autentické video inscenované? Český rozhlas se opravdu překonává. Nezapomínejme, že v tomto takzvaně nestranném médiu už léta řádí NEOMARXISMUS!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_deny_3_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_deny_1",
    }]
  },

  discredit_revenge_deny_3_chosen: {
    text: "Factcheckera jste patřičně onálepkoval a tím z něj udělal jednoznačně zideologizovaného protivníka. Bezvadná práce!",
    type: "gameMessage",
    choices: [{
      text: "Co na to fanoušci?",
      nextStep: "discredit_revenge_deny_3_chosen_1",
    }]
  },

  discredit_revenge_deny_3_chosen_1: {
    text: "Manipulátoři ovládají veřejnoprávní média! Budeme věřit jim, nebo nezávislému webu, který nemá důvod neříkat necenzurovanou pravdu?",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_deny_3_chosen_2",
    }]
  },

  discredit_revenge_deny_3_chosen_2: {
    text: "Neomarxisti ve školách, v poslaneckých lavicích a teď už i v Českém rozhlase. Dnes už ale cenzurovat nemůžou. Šiřme video dál!",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_deny_response_1",
    }]
  },  

  discredit_revenge_deny_response_1: {
    text: "Naše taktika se vyplatila! Factchecker je najednou v defenzivě a místo útoků se sám obhajuje.",
    type: "gameMessage",
    choices: [{
      text: "Fakt?",
      nextStep: "discredit_revenge_deny_response_2",
    }]
  },

  discredit_revenge_deny_response_2: {
    text: "Nařčení webu {siteName} se nezakládá na pravdě. Server iROZHLAS.cz pracuje s fakty naprosto standardně.",
    username: "iROZHLAS",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "discredit_done",
    }]
  },

  discredit_revenge_attack: {
    text: "Dobrá volba. Když na protivníka vytáhneme pořádnou špínu, nebude se stačit divit!",
    type: "gameMessage",
    choices: [{
      text: "Dobře!",
      nextStep: "discredit_revenge_attack_1",
    }]
  },

  discredit_revenge_attack_1: {
    text: "„Novináři“ z Českého rozhlasu jezdí na luxusní dovolené za NAŠE PENÍZE! Není divu, že skáčou, jak politická korektnost píská!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_attack_1_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_attack_2",
    }]
  },

  discredit_revenge_attack_1_chosen: {
    text: "Vyvolat závist vždycky zabírá. Naši fanoušci už sdílí příspěvky na naši podporu. Dobrá práce!",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "discredit_revenge_attack_1_chosen_1",
    }]
  },

  discredit_revenge_attack_1_chosen_1: {
    text: "Na naše děti sbíráme víčka a veřejnoprávní pisálci si žijí jako prasata v žitě? Přispívejme radši na nezávislé projekty jako {siteName}!",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_attack_1_chosen_2",
    }]
  },

  discredit_revenge_attack_1_chosen_2: {
    text: "Český rozhlas pořádá hon na čarodějnice, sám má ale máslo na hlavě! Přesně kvůli tomuhle zvolili Trumpa!",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_attack_response_1",
    }]
  },

  discredit_revenge_attack_2: {
    text: "Tyranie v Českém rozhlase: zaměstnanci si během dvanáctihodinových směn nesmí dojít ani na záchod!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_attack_2_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_attack_3",
    }]
  },

  discredit_revenge_attack_2_chosen: {
    text: "Slušná práce. Protivník si vaše obvinění může popírat, jak chce - pravdu by přece stejně nepřiznal.",
    type: "gameMessage",
    choices: [{
      text: "Co na to fanoušci?",
      nextStep: "discredit_revenge_attack_2_chosen_1",
    }]
  },

  discredit_revenge_attack_2_chosen_1: {
    text: "{siteName} přináší skandální odhalení otřesných pracovních podmínek ve veřejnoprávních médiích. Tam snad psát pravdu ani nejde!",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_attack_2_chosen_2",
    }]
  },

  discredit_revenge_attack_2_chosen_2: {
    text: "Český rozhlas připomíná spíš továrnu v Bangladéši. Jen nám místo levného oblečení servírují „informace“.",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_attack_response_1",
    }]
  },

  discredit_revenge_attack_3: {
    text: "SKANDÁL: Ředitel veřejnoprávního Českého rozhlasu OBĚDVÁ ŠTĚŇÁTKA! Jak můžeme něco takového platit z vlastních kapes?!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Do nich!",
      nextStep: "discredit_revenge_attack_3_chosen",
    },{
      text: "Něco dalšího?",
      nextStep: "discredit_revenge_attack_1",
    }]
  },

  discredit_revenge_attack_3_chosen: {
    text: "Tohle vám moc bodů nepřineslo. Na očividné lži většina lidí neskočí. Naštěstí už máte tvrdé jádro fanoušků...",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "discredit_revenge_attack_3_chosen_1",
    }]
  },

  discredit_revenge_attack_3_chosen_1: {
    text: "Jaká odhalení z veřejnoprávních temnot přijdou teď? Pedofilie? Kanibalismus? Rozhlas i televizi je nutné co nejdříve zestátnit!",
    username: "Martin Procházka",
    type: "socialPost",
    choices: [{
      text: "Pěkné!",
      nextStep: "discredit_revenge_attack_3_chosen_2",
    }]
  },

  discredit_revenge_attack_3_chosen_2: {
    text: "{siteName} opět přichází s fakty, která ostatní zamlčují. Rozhlasu už nevěřím jediné slovo!",
    username: "Libuše Nová",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "discredit_revenge_attack_response_1",
    }]
  },  

  discredit_revenge_attack_response_1: {
    text: "Naše taktika se vyplatila! Factchecker je najednou v defenzivě a místo útoků se sám obhajuje.",
    type: "gameMessage",
    choices: [{
      text: "Fakt?",
      nextStep: "discredit_revenge_attack_response_2",
    }]
  },

  discredit_revenge_attack_response_2: {
    text: "Obvinění ze strany webu {siteName} jsou naprosto lživá. Český rozhlas zvažuje právní kroky.",
    username: "iROZHLAS",
    type: "socialPost",
    choices: [{
      text: "Výborně!",
      nextStep: "discredit_done",
    }]
  },

  discredit_done: {
    text: "Uhráli jsme to! Dokázal jste zdiskreditovat oponenty a sám u svých příznivců zabodovat.",
    type: "gameMessage",
    choices: [{
      text: "Je to tak!",
      nextStep: "badge_discredit",
    }, {
      text: "Díky!",
      nextStep: "badge_discredit",
    }]
  },

  badge_discredit: {
    text: "Čtvrtá část zvládnuta! Diskreditovat oponenty zvládáte hravě.",
    type: "badge",
    choices: [{
      text: "Jupí!",
      nextStep: "trolling",
    }]
  },

  trolling: {
    text: "Za dobu svého šéfredaktorského působení jste se toho naučil hodně. Zkusíme na závěr rozjet něco velkého, co říkate?",
    type: "gameMessage",
    choices: [{
      text: "Do toho!",
      nextStep: "trolling_pickTopic",
    }]
  },

  trolling_pickTopic: {
    text: "Jako vždy začneme kvalitním obsahem, kterým zaujmeme fanoušky.",
    type: "gameMessage",
    choices: [{
      text: "Jak jinak",
      nextStep: "trolling_pickTopic_1",
    }]
  },

  trolling_pickTopic_1: {
    text: "63 důvodů, proč nejezdit do Brna",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "To chci!",
      nextStep: "trolling_pickTopic_1_chosen"
    }, {
      text: "Cože to?",
      nextStep: "trolling_pickTopic_2"
    }]
  },

  trolling_pickTopic_1_chosen: {
    text: "Prosím? Jste opravdu {penName}? Je tohle opravdu {siteName}? Neexistuje snad nic, co by vašim čtenářům bylo víc ukradené než Brno.",
    type: "gameMessage",
    choices: [{
      text: "Pravda, chce to něco lepšího.",
      nextStep: "trolling_pickTopic_2_onechoice",
    }]
  },

  trolling_pickTopic_2_onechoice: {
    text: "Tajná diamantová ložiska pod Milešovkou odhalena! Vláda je chce za pakatel prodat Egypťanům!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Přesně to!",
      nextStep: "trolling_pickTopic_2_chosen"
    }]
  },

  trolling_pickTopic_2: {
    text: "Tajná diamantová ložiska pod Milešovkou odhalena! Vláda je chce za pakatel prodat Egypťanům!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "To chci!",
      nextStep: "trolling_pickTopic_2_chosen"
    }, {
      text: "Cože to?",
      nextStep: "trolling_pickTopic_3",
    }]
  },

  trolling_pickTopic_2_chosen: {
    text: "České diamanty v rukou cizinců? Vládní spiknutí? Přesně na to naši fanoušci slyší! Jak zprávu posunete?",
    type: "gameMessage",
    choices: [{
      text: "Kritickou analýzou",
      nextStep: "trolling_skeptic"
    }, {
      text: "Přilitím oleje do ohně",
      nextStep: "trolling_doubt_1"
    }]
  },

  trolling_pickTopic_3: {
    text: "Čeští vědci objevili nový druh medvěda. Pojmenovali ho po Marku Ebenovi",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "To chci!",
      nextStep: "trolling_pickTopic_3_chosen"
    }, {
      text: "Cože to?",
      nextStep: "trolling_pickTopic_1",
    }]
  },

  trolling_pickTopic_3_chosen: {
    text: "Zpráva je to sice roztomilá, ale člověče, my tu neděláme rubriku Koktejl na víkend, my se snažíme změnit svět! Příště víc přemýšlejte.",
    type: "gameMessage",
    choices: [{
      text: "No tak ty diamanty",
      nextStep: "trolling_pickTopic_2_chosen"
    }]
  },

  trolling_skeptic: {
    text: "Pozadí diamantové kauzy je složitější, než se zdá. Podle všeho jde o nafouknutý nesmysl, příslušné smlouvy navíc podepsala už předchozí vláda.",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Poctivá novinářská práce.",
      nextStep: "trolling_skeptic_reply1"
    }]
  },

  trolling_skeptic_reply1: {
    text: "{siteName} se nimrá ve skandálu roku, ale to hlavní nám neřekne: KDO ZA LOUPEŽÍ NAŠICH DIAMANTŮ STOJÍ?",
    username: "Tereza Sedláková",
    type: "socialPost",
    choices: [{
      text: "Ale no tak!",
      nextStep: "trolling_skeptic_reply2"
    }]
  },

  trolling_skeptic_reply2: {
    text: "Tereza má pravdu. Chceme slyšet skutečná fakta, ne nicneříkající žvásty!",
    username: "Marek Dvořák",
    type: "socialPost",
    choices: [{
      text: "Jejda...",
      nextStep: "trolling_skeptic_whatnow"
    }]
  },

  trolling_skeptic_whatnow: {
    text: "Fanoušci mluví jasně. Každá kauza má svého viníka - a vy na něj musíte ukázat prstem.",
    type: "gameMessage",
    choices: [{
      text: "Milerád!",
      nextStep: "trolling_doubt_1"
    }, {
      text: "To nechci...",
      nextStep: "trolling_skeptic_resist"
    }]
  },

  trolling_skeptic_resist: {
    text: "Po tom všem máte ještě pochybnosti?! Proboha, vždyť právě kvůli svým fanouškům tohle všechno děláte!",
    type: "gameMessage",
    choices: [{
      text: "Máte pravdu, půjdu jim na ruku.",
      nextStep: "trolling_doubt_1"
    }]
  },

  trolling_doubt_1: {
    text: "Egyptská mafie drží Čechy pod krkem kvůli hrstce diamantů! Tak špatný obchod nemohla česká vláda schválit dobrovolně. Zavlaje na Milešovce arabská vlajka?!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Takhle ne",
      nextStep: "trolling_doubt_2"
    }, {
      text: "Beru!",
      nextStep: "trolling_doubt_1_chosen",
    }]
  },

  trolling_doubt_1_chosen: {
    text: "Zahraniční vlivy, ohrožení suverenity i náznak muslimské hrozby. Dobrá práce! Jak reagují vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Uvidíme!",
      nextStep: "trolling_doubt_1_reply1"
    }]
  },

  trolling_doubt_1_reply1: {
    text: "Takže islamisté už ovládají naše politiky? Milešovku si ukrást nenecháme!",
    username: "Tereza Sedláková",
    type: "socialPost",
    choices: [{
      text: "Rozhodně.",
      nextStep: "trolling_doubt_1_reply2"
    }]
  },

  trolling_doubt_1_reply2: {
    text: "Loupež za bílého dne! Eurohujerská vláda dělá, že nic nevidí, a Arabům projde úplně všechno...",
    username: "Marek Dvořák",
    type: "socialPost",
    choices: [{
      text: "Určitě.",
      nextStep: "trolling_doubt_1_success"
    }]
  },

  trolling_doubt_1_success: {
    text: "Vypadá to, že rozdmýcháváte slušný skandál. Začínají o něm psát i spřízněná alternativní média.",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "trolling_altmed1"
    }]
  },

  trolling_doubt_2: {
    text: "DIAMANTOVÍ ZAPRODANCI: Premiér a jeho sebranka si mastí kapsu na českých drahokamech! Vytěžit národní bohatství chtějí v holportu s egyptskými cizáky!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Takhle ne",
      nextStep: "trolling_doubt_3"
    }, {
      text: "Beru!",
      nextStep: "trolling_doubt_2_chosen",
    }]
  },

  trolling_doubt_2_chosen: {
    text: "Odhalení korupce a vlastizrady vyvolá ten správný koktejl emocí. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Uvidíme!",
      nextStep: "trolling_doubt_2_reply1"
    }]
  },

  trolling_doubt_2_reply1: {
    text: "Od začátku bylo jasné, že vládě nejde věřit, ale tohle předčí veškerá očekávaní! Musí padat hlavy!",
    username: "Tereza Sedláková",
    type: "socialPost",
    choices: [{
      text: "Rozhodně.",
      nextStep: "trolling_doubt_2_reply2"
    }]
  },

  trolling_doubt_2_reply2: {
    text: "Proč místo diamantů rovnou neprodají nás?! Vláda patří za mříže!",
    username: "Marek Dvořák",
    type: "socialPost",
    choices: [{
      text: "Určitě.",
      nextStep: "trolling_doubt_2_success"
    }]
  },

  trolling_doubt_2_success: {
    text: "Vypadá to, že rozdmýcháváte slušný skandál. Začínají o něm psát i spřízněná alternativní média.",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "trolling_altmed1"
    }]
  },

  trolling_doubt_3: {
    text: "SUPERTAJNÁ OPERACE pod Milešovkou! Přichází NOVÝ SVĚTOVÝ ŘÁD! České diamanty se stanou základem ČIPŮ NA KONTROLU LIDSTVA!!!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Takhle ne",
      nextStep: "trolling_doubt_1"
    }, {
      text: "Beru!",
      nextStep: "trolling_doubt_3_chosen",
    }]
  },

  trolling_doubt_3_chosen: {
    text: "Ehm... no... tak dobře. Co na to vaši fanoušci?",
    type: "gameMessage",
    choices: [{
      text: "Uvidíme!",
      nextStep: "trolling_doubt_3_reply1"
    }]
  },

  trolling_doubt_3_reply1: {
    text: "To jim nestačí ovládat svět??? Chtějí nás zlikvidovat úplně??!? SATANSKÁ TOTALITA JE BLÍZKO!!!",
    username: "Tereza Sedláková",
    type: "socialPost",
    choices: [{
      text: "Rozhodně.",
      nextStep: "trolling_doubt_3_reply2"
    }]
  },

  trolling_doubt_3_reply2: {
    text: "Jsme jen loutky v rukou mocných. Až zakážou i {siteName}, bude konec...",
    username: "Marek Dvořák",
    type: "socialPost",
    choices: [{
      text: "Určitě.",
      nextStep: "trolling_doubt_3_success"
    }]
  },

  trolling_doubt_3_success: {
    text: "Neuvěřitelné, vám snad projde cokoliv. Jediné štěští, že vaši fanoušci jsou stejní blázni jako vy. Kauzy už se začínají chytat spřízněná alternativní média.",
    type: "gameMessage",
    choices: [{
      text: "Co píšou?",
      nextStep: "trolling_altmed1"
    }]
  },

  trolling_altmed1: {
    text: "Diamanty pod Milešovkou? Chystá se další podraz na obyčejné lidi!",
    username: "Tato země je naše",
    type: "socialPost",
    choices: [{
      text: "Ještě nějaké?",
      nextStep: "trolling_altmed2"
    }]
  },

  trolling_altmed2: {
    text: "Pravda musí vyjít najevo! Spolu s nezávislým serverem {siteName} se případem Milešovka budeme intenzivně zabývat.",
    username: "Nekorektní večerník",
    type: "socialPost",
    choices: [{
      text: "To rozhodně!",
      nextStep: "trolling_push1"
    }]
  },

  trolling_push1: {
    text: "„Případ Milešovka“? Proč ne. Pojďme ho dál přiživovat. Jakým způsobem?",
    type: "gameMessage",
    choices: [{
      text: "Podvrhnu důkazy",
      nextStep: "trolling_push1_evidence"
    }, {
      text: "Vymyslím si svědka",
      nextStep: "trolling_push1_witness"
    }]
  },

  trolling_push1_evidence: {
    text: "Dobrý nápad. Pár zfalšovaných dokumentů nemůže naší věci uškodit.",
    type: "gameMessage",
    choices: [{
      text: "Že?",
      nextStep: "trolling_push1_evidence_1"
    }]
  },

  trolling_push1_evidence_1: {
    text: "ÚNIK TAJNÉ DOHODY: V případu Milešovka vše zorganizoval ministr zahraničí, premiér přikyvoval!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To jde.",
      nextStep: "trolling_push1_mainstream1"
    }, {
      text: "Dál!",
      nextStep: "trolling_push1_evidence_2"
    }]
  },

  trolling_push1_evidence_2: {
    text: "Případ Milešovka exkluzivně! {siteName} získal fotografie ze setkání ministra zahraničí s egyptským princem!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To jde.",
      nextStep: "trolling_push1_mainstream1"
    }, {
      text: "Dál!",
      nextStep: "trolling_push1_evidence_1"
    }]
  },

  trolling_push1_witness: {
    text: "Dobrý nápad. Takový přímý účastník nekalostí nemůže naší věci uškodit.",
    type: "gameMessage",
    choices: [{
      text: "Že?",
      nextStep: "trolling_push1_witness_1"
    }]
  },

  trolling_push1_witness_1: {
    text: "Nové skutečnosti v případu Milešovka! Byl jsem u toho, když Češi prodávali diamanty Egypťanům, říká poradce ministra zahraničí",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To jde.",
      nextStep: "trolling_push1_mainstream1"
    }, {
      text: "Dál!",
      nextStep: "trolling_push1_witness_2"
    }]
  },

  trolling_push1_witness_2: {
    text: "EXKLUZIVNĚ Z MILEŠOVKY: Diamanty tu skutečně jsou! {siteName} mluvil s geologem, který vládě doporučil vytěžit český poklad!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "To jde.",
      nextStep: "trolling_push1_mainstream1"
    }, {
      text: "Dál!",
      nextStep: "trolling_push1_witness_1"
    }]
  },

  trolling_push1_mainstream1: {
    text: "A jedeme! Naší kauzičky se chytají i obvykle prolhaná mainstreamová média!",
    type: "gameMessage",
    choices: [{
      text: "Ukažte!",
      nextStep: "trolling_push1_mainstream2"
    }]
  },

  trolling_push1_mainstream2: {
    text: "Kolem prodeje pozemků pod Milešovkou se vznáší pochybnosti. Hora může skrývat diamantová ložiska, upozorňují kritici",
    webName: "iROZHLAS",
    type: "webPost",
    choices: [{
      text: "Aby ne!",
      nextStep: "trolling_push2"
    }]
  },

  trolling_push2: {
    text: "Rozhodně teď nesmíme v tlaku polevit. Co podniknete dál?",
    type: "gameMessage",
    choices: [{
      text: "Očerním ministra",
      nextStep: "trolling_push2_discredit1"
    }, {
      text: "Zapojím falešné účty",
      nextStep: "trolling_push2_fake1"
    }]
  },

  trolling_push2_discredit1: {
    text: "V případu Milešovka se pomalu ukazuje viník - ministr zahraničí. Pojďme ho pořádně podusit.",
    type: "gameMessage",
    choices: [{
      text: "Jinak to nepůjde.",
      nextStep: "trolling_push2_discredit2"
    }]
  },  

  trolling_push2_discredit2: {
    text: "Kdo stojí za ostudou na Milešovce? Ministr zahraničí! Prodej diamantů Egypťanům připravoval roky. Za arabské peníze koupil palác v Karibiku!",
    webName: "{siteName}",
    type: "webPost",
    choices: [{
      text: "Muhaha!",
      nextStep: "trolling_push2_mainstream1"
    }]
  },  

  trolling_push2_fake1: {
    text: "V případu Milešovka se pomalu ukazuje viník - ministr zahraničí. Pojďme postrčit veřejné mínění proti němu.",
    type: "gameMessage",
    choices: [{
      text: "Jinak to nepůjde.",
      nextStep: "trolling_push2_fake2"
    }]
  },  

  trolling_push2_fake2: {
    text: "Pravdu už nelze dál zakrývat: ministerstvo zahraničí se paktuje s Egypťany a rozkrádá českou zem!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Moje řeč!",
      nextStep: "trolling_push2_fake3"
    }]
  },

  trolling_push2_fake3: {
    text: "Víte, že ve vládě sedí vlastizrádce? Naše diamanty chce prodat Egypťanům a sám má nahrabáno na sto let dopředu!",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Muhaha!",
      nextStep: "trolling_push2_mainstream1"
    }]
  },

  trolling_push2_mainstream1: {
    text: "A mainstream poslušně reaguje!",
    type: "gameMessage",
    choices: [{
      text: "Ovce!",
      nextStep: "trolling_push2_mainstream2"
    }]
  },

  trolling_push2_mainstream2: {
    text: "Egypťané měli pod taktovkou ministerstva zahraničí vytěžit Milešovku. Od ministra je to nehoráznost, říká premiér",
    webName: "iROZHLAS",
    type: "webPost",
    choices: [{
      text: "A máme je!",
      nextStep: "trolling_push3"
    }]
  },  

  trolling_push3: {
    text: "Nádhera! K završení akce už chybí jen malý kousek.",
    type: "gameMessage",
    choices: [{
      text: "Ministr musí rezignovat!",
      nextStep: "trolling_push3_resign"
    }, {
      text: "Necháme řádit falešné účty!",
      nextStep: "trolling_push3_fake1"
    }]
  },

  trolling_push3_fake1: {
    text: "Ministr zahraničí lže a prodává naši zemi cizákům! Žádáme jeho okamžitou rezignaci! Pane premiére, konejte!",
    username: "Eva Autentická",
    type: "socialPost",
    choices: [{
      text: "Přesně tak!",
      nextStep: "trolling_push3_fake2"
    }]
  },

  trolling_push3_resign: {
    text: "Ministr zahraničí lže a prodává naši zemi cizákům! {siteName} a jeho čtenáři žádají jeho okamžitou rezignaci! Pane premiére, konejte!",
    username: "{siteName}",
    type: "socialPost",
    choices: [{
      text: "Ano!",
      nextStep: "trolling_push3_fake2"
    }]
  },

  trolling_push3_fake2: {
    text: "Demokracie je na rozcestí! Pokud ministr zahraničí zůstane ve své funkci, můžeme rovnou zakázat volby! LIDI, TOHLE SI NESMÍME NECHAT LÍBIT!",
    username: "František Skutečný",
    type: "socialPost",
    choices: [{
      text: "Tesat!",
      nextStep: "trolling_push3_final1"
    }]
  },

  trolling_push3_final1: {
    text: "Ale co to? Ministerstvo zahraničí svolává mimořádnou tiskovou konferenci!",
    type: "gameMessage",
    choices: [{
      text: "No tohle!",
      nextStep: "trolling_push3_final2"
    }]
  },

  trolling_push3_final2: {
    webName: "Česká televize",
    text: "Ministr zahraničí končí: „Kvůli vylhanému případu Milešovka nenechám padnout vládu.“ Premiér krok uvítal",
    type: "webPost",
    choices: [{
      text: "Neskutečné!",
      nextStep: "trolling_push3_final3",
    }]
  },

  trolling_push3_final3: {
    text: "Nevycházím z údivu. Povedlo se vám vyvolat celonárodní kauzu a přimět ministra k rezignaci - a stačilo k tomu jen pár taktických útoků na citlivá místa a hrstka falešných facebookových profilů!",
    type: "gameMessage",
    choices: [{
      text: "Jsem génius!",
      nextStep: "trolling_push3_final4"
    }]
  },

  trolling_push3_final4: {
    text: "Zkusil jste si, jak se z naštvaného občana stát šéfredaktorem vlastního webu, jak využívat emoce čtenářů, jak vyhrotit veřejnou debatu, jak diskreditovat protivníky i jak všechno tohle spojit a dokázat něco velkého.",
    type: "gameMessage",
    choices: [{
      text: "Díky za pomoc",
      nextStep: "trolling_push3_final5"
    }]
  },

  trolling_push3_final5: {
    text: "A tady hra končí. Díky za spolupráci, doufáme, že jste se bavili! Budeme rádi, když nám ještě odpovíte na dvě otázky.",
    type: "gameMessage",
    choices: [{
      text: "Klidně.",
      nextStep: "survey1"
    }, {
      text: "Nechci.",
      nextStep: "finish"
    }]
  },

  survey1: {
    text: "Kolik vám je let? atd.",
    type: "gameMessage",
    choices: [{
      text: "Konec hry",
      nextStep: "finish"
    }]
  },

  finish: {
    text: "KONEC HRY! Stali jste se mistry zpravodajské manipulace a povedlo se vám nasbírat X sledujících. Tady bude finální skóre a sdílítka na FB a Twitter.",
    type: "gameMessage",
    choices: []
  }
  
}