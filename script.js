const athletes = [
  {
    "name": "Alchimista",
    "power": "Trasmutazione e scatto",
    "ability": "Quando ottengo 1 o 2 per il movimento principale, posso invece muovermi di 4 caselle.",
    "image": "images/IMG_3304.png",
    "originalName": "Alchemist",
    "tags": [
      "Alchemist"
    ]
  },
  {
    "name": "Baba Yaga",
    "power": "Gambetto",
    "ability": "Faccio inciampare qualsiasi corridore che si ferma sulla mia casella, o quando mi fermo sulla sua.",
    "image": "images/IMG_3305.png",
    "originalName": "Baba Yaga",
    "tags": [
      "Baba Yaga"
    ]
  },
  {
    "name": "Banana",
    "power": "Scivolone",
    "ability": "Faccio inciampare qualsiasi corridore che mi supera.",
    "image": "images/IMG_3306.png",
    "originalName": "Banana",
    "tags": [
      "Banana"
    ]
  },
  {
    "name": "Dirigibile",
    "power": "A tutto gas",
    "ability": "Se inizio il turno prima della seconda curva del percorso, ottengo +3 al movimento principale. Sulla curva o dopo di essa, ottengo -1.",
    "image": "images/IMG_3307.png",
    "originalName": "Blimp",
    "tags": [
      "Blimp"
    ]
  },
  {
    "name": "Centauro",
    "power": "Zoccolata",
    "ability": "Quando supero un corridore, quel corridore arretra di 2 caselle.",
    "image": "images/IMG_3308.png",
    "originalName": "Centaur",
    "tags": [
      "Centaur"
    ]
  },
  {
    "name": "Ragazza pon-pon",
    "power": "Forza, forza!",
    "ability": "Prima del movimento principale, posso far avanzare di 2 caselle i corridori all’ultimo posto. Se lo faccio, avanzo di 1 casella.",
    "image": "images/IMG_3309.png",
    "originalName": "Cheerleader",
    "tags": [
      "Cheerleader"
    ]
  },
  {
    "name": "Allenatore",
    "power": "Bel ritmo!",
    "ability": "Tutti i corridori sulla mia casella ottengono +1 al movimento principale, me compreso.",
    "image": "images/IMG_3310.png",
    "originalName": "Coach",
    "tags": [
      "Coach"
    ]
  },
  {
    "name": "Imitatore",
    "power": "Copiato!",
    "ability": "Ho il potere del corridore attualmente in testa. In caso di parità, scelgo io.",
    "image": "images/IMG_3311.png",
    "originalName": "Copycat",
    "tags": [
      "Copycat"
    ]
  },
  {
    "name": "Mercante di dadi",
    "power": "Affari rischiosi",
    "ability": "Chiunque può ritirare il dado del movimento principale una volta per turno. Quando lo fa un altro corridore, avanzo di 1 casella.",
    "image": "images/IMG_3312.png",
    "originalName": "Dicemonger",
    "tags": [
      "Dicemonger"
    ]
  },
  {
    "name": "Duellante",
    "power": "Duello!",
    "ability": "Ogni volta che un corridore condivide la mia casella, posso gridare DUELLO! Tiriamo i dadi e chi ottiene il risultato più alto avanza di 2 caselle. Vinco i pareggi.",
    "image": "images/IMG_3313.png",
    "originalName": "Duelist",
    "tags": [
      "Duelist"
    ]
  },
  {
    "name": "Uovo",
    "power": "Strapazzato",
    "ability": "Prima della mia corsa, pesco 3 nuovi corridori dal mazzo e ne scelgo uno. Ho i suoi poteri.",
    "image": "images/IMG_3314.png",
    "originalName": "Egg",
    "tags": [
      "Egg"
    ]
  },
  {
    "name": "Infradito",
    "power": "Scambio al volo",
    "ability": "Posso rinunciare al tiro per il movimento principale e scambiare invece la mia posizione con quella di un altro corridore.",
    "image": "images/IMG_3315.png",
    "originalName": "Flip Flop",
    "tags": [
      "Flip Flop"
    ]
  },
  {
    "name": "Genio",
    "power": "Usa la testa",
    "ability": "Posso prevedere il numero che otterrò per il movimento principale. Se indovino, svolgo un altro turno dopo questo.",
    "image": "images/IMG_3316.png",
    "originalName": "Genius",
    "tags": [
      "Genius"
    ]
  },
  {
    "name": "Melma",
    "power": "Impiastricciati",
    "ability": "Gli altri corridori hanno -1 al movimento principale.",
    "image": "images/IMG_3317.png",
    "originalName": "Gunk",
    "tags": [
      "Gunk"
    ]
  },
  {
    "name": "Lepre",
    "power": "Superbia",
    "ability": "Ho +2 al movimento principale. Se inizio il turno da solo in testa, salto il movimento principale.",
    "image": "images/IMG_3318.png",
    "originalName": "Hare",
    "tags": [
      "Hare"
    ]
  },
  {
    "name": "Provocatore",
    "power": "Gioia maligna",
    "ability": "Quando un corridore termina il turno entro 1 casella dal punto in cui lo ha iniziato, avanzo di 2 caselle.",
    "image": "images/IMG_3319.png",
    "originalName": "Heckler",
    "tags": [
      "Heckler"
    ]
  },
  {
    "name": "Bebè gigante",
    "power": "Davvero enorme",
    "ability": "Nessuno può mai trovarsi sulla mia casella, tranne alla Partenza. Ogni volta che accadrebbe, il corridore va invece nella casella immediatamente dietro di me.",
    "image": "images/IMG_3320.png",
    "originalName": "Huge Baby",
    "tags": [
      "Huge Baby"
    ]
  },
  {
    "name": "Ipnotizzatore",
    "power": "Ssssst",
    "ability": "Prima del movimento principale, posso teletrasportare un corridore sulla mia casella.",
    "image": "images/IMG_3321.png",
    "originalName": "Hypnotist",
    "tags": [
      "Hypnotist"
    ]
  },
  {
    "name": "Bruco",
    "power": "Striscia striscia",
    "ability": "Quando un altro corridore ottiene 1 per il movimento principale, salta quel movimento e io avanzo di 1 casella.",
    "image": "images/IMG_3322.png",
    "originalName": "Inchworm",
    "tags": [
      "Inchworm"
    ]
  },
  {
    "name": "Lacchè",
    "power": "Molto bene, signore",
    "ability": "Quando un altro corridore ottiene 6 per il movimento principale, avanzo di 2 caselle prima che si muova.",
    "image": "images/IMG_3323.png",
    "originalName": "Lackey",
    "tags": [
      "Lackey"
    ]
  },
  {
    "name": "Rospo saltatore",
    "power": "Salta la rana",
    "ability": "Durante il movimento salto le caselle occupate da altri corridori.",
    "image": "images/IMG_3324.png",
    "originalName": "Leaptoad",
    "tags": [
      "Leaptoad"
    ]
  },
  {
    "name": "Gambe",
    "power": "Corsa leggera",
    "ability": "Posso rinunciare al tiro per il movimento principale e avanzare invece di 5 caselle.",
    "image": "images/IMG_3325.png",
    "originalName": "Legs",
    "tags": [
      "Legs"
    ]
  },
  {
    "name": "Perdente adorabile",
    "power": "Che tenerezza!",
    "ability": "Prima del movimento principale, ricevo 1 gettone punto se sono da solo all’ultimo posto.",
    "image": "images/IMG_3326.png",
    "originalName": "Lovable Loser",
    "tags": [
      "Lovable Loser"
    ]
  },
  {
    "name": "Mago",
    "power": "Puff!",
    "ability": "Posso ritirare il dado del movimento principale fino a due volte.",
    "image": "images/IMG_3327.png",
    "originalName": "Magician",
    "tags": [
      "Magician"
    ]
  },
  {
    "name": "Stratega",
    "power": "So tutto io",
    "ability": "All’inizio del mio primo turno, prevedo quale corridore vincerà. Se indovino, la corsa termina immediatamente e arrivo secondo.",
    "image": "images/IMG_3328.png",
    "originalName": "Mastermind",
    "tags": [
      "Mastermind"
    ]
  },
  {
    "name": "B.O.C.C.A.",
    "power": "Gnam",
    "ability": "Quando mi fermo su una casella con esattamente un altro corridore, quel corridore viene eliminato dalla corsa.",
    "image": "images/IMG_3329.png",
    "originalName": "M.O.U.T.H.",
    "tags": [
      "M.O.U.T.H."
    ]
  },
  {
    "name": "Festaiolo",
    "power": "Magnetismo animale",
    "ability": "Prima del movimento principale, tutti i corridori si muovono di 1 casella verso di me. Ogni altro corridore sulla mia casella mi dà +1 al movimento principale.",
    "image": "images/IMG_3330.png",
    "originalName": "Party Animal",
    "tags": [
      "Party Animal"
    ]
  },
  {
    "name": "Scienziato missilistico",
    "power": "Kaboom!",
    "ability": "Quando tiro per il movimento principale, posso muovermi del doppio del risultato. Se lo faccio, inciampo dopo il movimento.",
    "image": "images/IMG_3331.png",
    "originalName": "Rocket Scientist",
    "tags": [
      "Rocket Scientist"
    ]
  },
  {
    "name": "Romantico",
    "power": "Ah, l’amore!",
    "ability": "Quando qualcuno si ferma su una casella con esattamente un altro corridore, avanzo di 2 caselle.",
    "image": "images/IMG_3332.png",
    "originalName": "Romantic",
    "tags": [
      "Romantic"
    ]
  },
  {
    "name": "Scattino",
    "power": "Un passetto alla volta",
    "ability": "Quando si attiva il potere di un altro corridore, avanzo di 1 casella.",
    "image": "images/IMG_3333.png",
    "originalName": "Scoocher",
    "tags": [
      "Scoocher"
    ]
  },
  {
    "name": "Sisifo",
    "power": "Continua a rotolare",
    "ability": "Prima della mia corsa, prendo 4 gettoni punto. Quando ottengo 6 per il movimento principale, invece di muovermi mi teletrasporto alla Partenza e perdo 1 gettone punto.",
    "image": "images/IMG_3334.png",
    "originalName": "Sisyphus",
    "tags": [
      "Sisyphus"
    ]
  },
  {
    "name": "Capitano",
    "power": "Lupo di mare",
    "ability": "Quando qualcuno ottiene 1 per il movimento principale, il prossimo turno spetta a me.",
    "image": "images/IMG_3335.png",
    "originalName": "Skipper",
    "tags": [
      "Skipper"
    ]
  },
  {
    "name": "Pignolo",
    "power": "A dire il vero…",
    "ability": "Gli altri corridori possono tagliare il traguardo solo muovendosi dell’esatto numero di caselle necessario. Se lo oltrepasserebbero, non si muovono.",
    "image": "images/IMG_3336.png",
    "originalName": "Stickler",
    "tags": [
      "Stickler"
    ]
  },
  {
    "name": "Remora",
    "power": "A rimorchio!",
    "ability": "Quando un corridore sulla mia casella si muove, posso raggiungere la sua nuova casella.",
    "image": "images/IMG_3337.png",
    "originalName": "Suckerfish",
    "tags": [
      "Suckerfish"
    ]
  },
  {
    "name": "Terzo incomodo",
    "power": "Fate spazio",
    "ability": "Prima del movimento principale, posso teletrasportarmi su qualsiasi casella con esattamente 2 corridori.",
    "image": "images/IMG_3338.png",
    "originalName": "Third Wheel",
    "tags": [
      "Third Wheel"
    ]
  },
  {
    "name": "Gemello",
    "power": "Doppia occasione",
    "ability": "Prima della mia corsa, posso scegliere un corridore che ha vinto una corsa precedente e gareggiare con i suoi poteri.",
    "image": "images/IMG_3339.png",
    "originalName": "Twin",
    "tags": [
      "Twin"
    ]
  }
];

const expansionAthletes = [
  {
    "name": "Morso",
    "power": "HUUAARRGGHHH!!!!",
    "ability": "Quando ottengo 1 o 2 per il movimento principale, mi trasformo in una B.O.C.C.A. MANNARA che elimina tutti i corridori che supera.",
    "image": "images/expansion/Bite Mark.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Bite Mark"
    ],
    "originalName": "Bite Mark"
  },
  {
    "name": "Cane pasticcione",
    "power": "Pista di guai",
    "ability": "Quando sono all’ultimo posto, triplico il risultato del tiro per il movimento principale. Altrimenti, eseguo il movimento principale all’indietro.",
    "image": "images/expansion/Blunderdog.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Blunderdog"
    ],
    "originalName": "Blunderdog"
  },
  {
    "name": "Ghepardo baro",
    "power": "Zampa lesta",
    "ability": "Invece di tirare per il movimento principale, imposto segretamente il dado su un numero a scelta. Se il giocatore alla mia destra indovina il numero, non mi muovo.",
    "image": "images/expansion/Cheatah.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Cheatah"
    ],
    "originalName": "Cheatah"
  },
  {
    "name": "Critico",
    "power": "Battute pungenti",
    "ability": "Posso far ritirare il dado del movimento principale ai corridori davanti a me una volta per turno.",
    "image": "images/expansion/Critic.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Critic"
    ],
    "originalName": "Critic"
  },
  {
    "name": "Diva",
    "power": "Che dramma!",
    "ability": "Se sono all’ultimo posto all’inizio del turno, scambio la mia posizione con quella del corridore in testa. Altrimenti, la scambio con quella dell’ultimo.",
    "image": "images/expansion/Diva.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Diva"
    ],
    "originalName": "Diva"
  },
  {
    "name": "Sosia gangster",
    "power": "Fatti da parte",
    "ability": "Il corridore che arriva primo viene invece eliminato. Ottengo il suo potere.",
    "image": "images/expansion/Doppelgangster.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Doppelgängster"
    ],
    "originalName": "Doppelgängster"
  },
  {
    "name": "Gloth",
    "power": "Torpore gelatinoso",
    "ability": "Ho -1 al movimento principale. Quando la corsa finisce, ricevo 3 punti se non ho superato la seconda curva.",
    "image": "images/expansion/Gloth.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Gloth"
    ],
    "originalName": "Gloth"
  },
  {
    "name": "Cavaliere suino",
    "power": "In groppa",
    "ability": "Inizio la corsa su un maiale che dà +2 al movimento principale di chi lo cavalca. Quando un corridore si ferma sulla casella del maiale, lo prende.",
    "image": "images/expansion/Hog Knight.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Hog Knight"
    ],
    "originalName": "Hog Knight"
  },
  {
    "name": "Rana saltellante",
    "power": "Boioioing",
    "ability": "Quando termino il turno 1 casella dietro a un corridore, svolgo un turno extra.",
    "image": "images/expansion/Hopfrog.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Hopfrog"
    ],
    "originalName": "Hopfrog"
  },
  {
    "name": "Albergo",
    "power": "Monopolio",
    "ability": "Quando un corridore si ferma sulla mia casella, mi paga 1 punto. Se non può, inciampa.",
    "image": "images/expansion/Hotel.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Hotel"
    ],
    "originalName": "Hotel"
  },
  {
    "name": "Icaro",
    "power": "Volo rischioso",
    "ability": "Ho +3 al movimento principale. Se ottengo 6 per il movimento principale, vengo eliminato.",
    "image": "images/expansion/Icarus.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Icarus"
    ],
    "originalName": "Icarus"
  },
  {
    "name": "Re dello sgambetto",
    "power": "Regicaduta",
    "ability": "All’inizio del mio turno, posso far inciampare il corridore in testa.",
    "image": "images/expansion/Kingtripper.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Kingtripper"
    ],
    "originalName": "Kingtripper"
  },
  {
    "name": "Kraken",
    "power": "Venite qui!",
    "ability": "Una volta per corsa, all’inizio del mio turno, posso teletrasportare tutti gli altri corridori sulla mia casella e farli inciampare.",
    "image": "images/expansion/Kraken.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Kraken"
    ],
    "originalName": "Kraken"
  },
  {
    "name": "Il Sabotatore",
    "power": "Tre… addio!",
    "ability": "Quando gli altri corridori ottengono 3 per il movimento principale, si muovono invece all’indietro.",
    "image": "images/expansion/LeSaboteur.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Le Saboteur"
    ],
    "originalName": "Le Saboteur"
  },
  {
    "name": "Atleta magico",
    "power": "Muscolomanzia",
    "ability": "In base al tiro per il movimento principale…\n1: avanzo di 7 caselle.\n2: l’ultimo corridore si teletrasporta da me.\n3: mi teletrasporto da un altro corridore e lo faccio inciampare.\n4: avanzo di 4 caselle e svolgo un turno extra.\n5: il corridore in testa arretra di 5 caselle.\n6: avanzo di 6 caselle e faccio inciampare tutti i corridori che supero.",
    "image": "images/expansion/Magical Athlete.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Magical Athlete"
    ],
    "originalName": "Magical Athlete"
  },
  {
    "name": "Talpa",
    "power": "Scava scava",
    "ability": "Se non ci sono corridori entro 1 casella da me, posso rinunciare al tiro per il movimento principale e avanzare invece di 6 caselle.",
    "image": "images/expansion/Mole.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Mole"
    ],
    "originalName": "Mole"
  },
  {
    "name": "Signor Dado",
    "power": "Sì! Ancora!",
    "ability": "Tiro tutti e sei i dadi per il movimento principale e scelgo un qualsiasi numero uscito più di una volta.",
    "image": "images/expansion/Mr. Dice Guy.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Mr. Dice Guy"
    ],
    "originalName": "Mr. Dice Guy"
  },
  {
    "name": "Poltiglia",
    "power": "Ammasso mostruoso",
    "ability": "Quando ottengo 1 o 2 per il movimento principale, pesco una carta corridore e ne ottengo il potere per il resto della corsa.",
    "image": "images/expansion/Mush.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Mush"
    ],
    "originalName": "Mush"
  },
  {
    "name": "Nemesi",
    "power": "Sfida personale",
    "ability": "Quando gli altri corridori tirano per il movimento principale, posso tirare anch’io. Se ottengo lo stesso numero, avanzo di altrettante caselle.",
    "image": "images/expansion/Nemesis.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Nemesis"
    ],
    "originalName": "Nemesis"
  },
  {
    "name": "Figlio di papà",
    "power": "Sfacciatamente ricco",
    "ability": "Inizio la corsa sulla prima curva del percorso.",
    "image": "images/expansion/Nepo Baby.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Nepo Baby"
    ],
    "originalName": "Nepo Baby"
  },
  {
    "name": "Nulla",
    "power": "Vuoto",
    "ability": "I corridori davanti a me hanno -1 al movimento principale e non hanno poteri.",
    "image": "images/expansion/Null.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Null"
    ],
    "originalName": "Null"
  },
  {
    "name": "Sorpassatore",
    "power": "Intrighi funebri",
    "ability": "Ho +1 al movimento principale per ogni corridore davanti a me.",
    "image": "images/expansion/Overtaker.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Overtaker"
    ],
    "originalName": "Overtaker"
  },
  {
    "name": "Guastafeste",
    "power": "Troppo rumore",
    "ability": "Tutti i 6 devono essere ritirati. Quando succede, avanzo di 1 casella.",
    "image": "images/expansion/Party Pooper.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Party Pooper"
    ],
    "originalName": "Party Pooper"
  },
  {
    "name": "Pinguino",
    "power": "A pancia in giù",
    "ability": "Ogni volta che un corridore mi supera, inciampo. Mentre sono inciampato, raddoppio il tiro per il movimento principale invece di saltarlo.",
    "image": "images/expansion/Penguin.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Penguin"
    ],
    "originalName": "Penguin"
  },
  {
    "name": "Recidivo",
    "power": "Si ricomincia",
    "ability": "Dopo la mia prima corsa, gareggio come corridore aggiuntivo per il mio giocatore in tutte le corse rimanenti.",
    "image": "images/expansion/Re-Runner.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Re-Runner"
    ],
    "originalName": "Re-Runner"
  },
  {
    "name": "Esibizionista",
    "power": "Guardate qui!",
    "ability": "Dopo il tiro per il movimento principale, posso continuare a tirare e sommare ogni risultato al movimento. Se ottengo un risultato uguale o inferiore al precedente, non mi muovo.",
    "image": "images/expansion/Show-Off.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Show-Off"
    ],
    "originalName": "Show-Off"
  },
  {
    "name": "Anima gemella",
    "power": "Fiamma gemella",
    "ability": "Prima della mia corsa, scelgo un corridore avversario. Se inizio il turno entro 5 caselle da lui, mi teletrasporto sulla sua casella.",
    "image": "images/expansion/Soulmate.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Soulmate"
    ],
    "originalName": "Soulmate"
  },
  {
    "name": "Demone della velocità",
    "power": "Velocità terminale",
    "ability": "Ho +1 al movimento principale per ogni punto del mio giocatore. Vengo eliminato se all’inizio del turno ho almeno 4 caselle di vantaggio.",
    "image": "images/expansion/Speed Demon.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Speed Demon"
    ],
    "originalName": "Speed Demon"
  },
  {
    "name": "Cattivo perdente",
    "power": "Non vale!",
    "ability": "Se all’inizio del mio turno tutti gli altri corridori sono almeno 5 caselle davanti a me, la corsa viene annullata e ricevo 3 punti.",
    "image": "images/expansion/Spoilsport.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Spoilsport"
    ],
    "originalName": "Spoilsport"
  },
  {
    "name": "Patrigno",
    "power": "Fatti avanti",
    "ability": "Il corridore alla mia sinistra ha +2 al movimento principale. Se arriva primo, ricevo 3 punti.",
    "image": "images/expansion/Stepdad.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Stepdad"
    ],
    "originalName": "Stepdad"
  },
  {
    "name": "Corridore nudo",
    "power": "In bella mostra",
    "ability": "Quando supero uno o più corridori, ricevo 1 punto.",
    "image": "images/expansion/Streaker.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Streaker"
    ],
    "originalName": "Streaker"
  },
  {
    "name": "Schianto",
    "power": "Traffico in tilt",
    "ability": "Gli altri corridori entro 1 casella da me ottengono 1 in tutti i tiri.",
    "image": "images/expansion/Stunner.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Stunner"
    ],
    "originalName": "Stunner"
  },
  {
    "name": "Scambiatutto",
    "power": "Marsupio scambiante",
    "ability": "Quando termino il turno entro 1 casella da un altro corridore, posso scambiare chi controlla i due corridori: il suo giocatore prende la mia carta e io prendo la sua.",
    "image": "images/expansion/Switcharoo.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Switcharoo"
    ],
    "originalName": "Switcharoo"
  },
  {
    "name": "Coda",
    "power": "A ruota",
    "ability": "All’inizio del mio turno, posso teletrasportarmi nella casella dietro al corridore più vicino davanti a me.",
    "image": "images/expansion/Tail.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Tail"
    ],
    "originalName": "Tail"
  },
  {
    "name": "L’Idrante",
    "power": "Lavaggio potente",
    "ability": "Alla fine del mio turno, tiro un dado e faccio inciampare ogni corridore che si trova davanti a me entro quel numero di caselle.",
    "image": "images/expansion/The Hose.png",
    "expansion": true,
    "tags": [
      "second wind",
      "The Hose"
    ],
    "originalName": "The Hose"
  },
  {
    "name": "Controfigura",
    "power": "Il metodo",
    "ability": "Prima della mia corsa, copio il potere di un corridore avversario.",
    "image": "images/expansion/Understudy.png",
    "expansion": true,
    "tags": [
      "second wind",
      "Understudy"
    ],
    "originalName": "Understudy"
  }
];

const extraMileAthletes = [
  {
    "name": "Scatola",
    "power": "Non sbagliare mira",
    "ability": "Tutti i giocatori devono tirare i dadi nella scatola. Se un dado tocca fuori dalla scatola, avanzo di 2 caselle.",
    "image": "images/extra-mile/Box.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Box",
      "non ufficiale"
    ],
    "originalName": "Box"
  },
  {
    "name": "Orologio rotto",
    "power": "Tic tac",
    "ability": "Tiro 2 dadi per il movimento principale e mi muovo del risultato più basso. Se ottengo un doppio, mi muovo della somma dei due dadi.",
    "image": "images/extra-mile/Broken Clock.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Broken Clock",
      "non ufficiale"
    ],
    "originalName": "Broken Clock"
  },
  {
    "name": "Cletus",
    "power": "Caccia grossa",
    "ability": "Invece del movimento principale, posso scegliere un corridore entro 3 caselle da me. Tiriamo entrambi: se otteniamo lo stesso numero, viene eliminato; se il mio è più alto, eseguo il movimento principale; se il suo è più alto, avanza di 1 casella.",
    "image": "images/extra-mile/Cletus.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Cletus",
      "non ufficiale"
    ],
    "originalName": "Cletus"
  },
  {
    "name": "Dottor Paradosso",
    "power": "Collasso temporale",
    "ability": "Parto dal traguardo e corro all’indietro. Se condivido una casella con un altro corridore, mi teletrasporto al traguardo. Se succede, ottengo +3 al movimento principale.",
    "image": "images/extra-mile/Doc Paradox.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Doc Paradox",
      "non ufficiale"
    ],
    "originalName": "Doc Paradox"
  },
  {
    "name": "Dottor Dado",
    "power": "Visita a domicilio",
    "ability": "Non posso mai inciampare. Prima del movimento principale, posso teletrasportarmi da un corridore inciampato per farlo rialzare immediatamente. Se mi teletrasporto all’indietro, ho +2 al movimento.",
    "image": "images/extra-mile/Doctor Dice.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Doctor Dice",
      "non ufficiale"
    ],
    "originalName": "Doctor Dice"
  },
  {
    "name": "Dom e Gary",
    "power": "Gatto e topo",
    "ability": "Dom: se supero Gary o condivido la sua casella, lo elimino e ottengo +2 al movimento principale. Gary: parto dalla casella 4 e mi muovo sempre subito prima di Dom. Se arrivo primo o secondo, rubo quei punti.",
    "image": "images/extra-mile/Dom and Gary.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Dom and Gary",
      "non ufficiale"
    ],
    "originalName": "Dom and Gary"
  },
  {
    "name": "Eco",
    "power": "Prova audio",
    "ability": "Invece del movimento principale, posso muovermi del numero ottenuto dal corridore precedente.",
    "image": "images/extra-mile/Echo.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Echo",
      "non ufficiale"
    ],
    "originalName": "Echo"
  },
  {
    "name": "Biscottino",
    "power": "Mangiami",
    "ability": "Ho 4 vite. Ogni volta che un corridore arriva sulla mia casella, perdo 1 vita e ottengo +1 al movimento principale. Vengo eliminato quando finisco le vite.",
    "image": "images/extra-mile/Gingy.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Gingy",
      "non ufficiale"
    ],
    "originalName": "Gingy"
  },
  {
    "name": "Collaberto",
    "power": "Appiccicoso",
    "ability": "Gli altri corridori sulla mia casella hanno -2 al movimento principale. Quando un corridore mi supera, ha -1 al movimento in corso.",
    "image": "images/extra-mile/Gluebert.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Gluebert",
      "non ufficiale"
    ],
    "originalName": "Gluebert"
  },
  {
    "name": "Testa",
    "power": "Capovolgimento",
    "ability": "Posso capovolgere il dado e usare il numero sulla faccia inferiore.",
    "image": "images/extra-mile/Heads.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Heads",
      "non ufficiale"
    ],
    "originalName": "Heads"
  },
  {
    "name": "Vasetto di miele",
    "power": "Piatto goloso",
    "ability": "Prima della mia corsa, aggiungo 1 punto per corsa a un piatto comune e segno una casella con un gettone punto. Se un corridore arriva su quella casella, tira un dado e prende dal piatto tanti gettoni punto quanto il risultato. Avanzo di 1 casella per ogni gettone raccolto.",
    "image": "images/extra-mile/Honey Pot.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Honey Pot",
      "non ufficiale"
    ],
    "originalName": "Honey Pot"
  },
  {
    "name": "Re Pete",
    "power": "Tassa del cortile",
    "ability": "Ogni volta che un altro corridore ottiene 5 o 6, ha -1 al movimento. Io avanzo di 1 casella.",
    "image": "images/extra-mile/King Pete.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "King Pete",
      "non ufficiale"
    ],
    "originalName": "King Pete"
  },
  {
    "name": "Scansafatiche",
    "power": "In poltrona",
    "ability": "Non posso lasciare la Partenza finché non ottengo 6. Quando ottengo 6, mi teletrasporto dal corridore in testa e svolgo immediatamente un altro turno.",
    "image": "images/extra-mile/Lazy Bones.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Lazy Bones",
      "non ufficiale"
    ],
    "originalName": "Lazy Bones"
  },
  {
    "name": "Tiratore scelto",
    "power": "Tiro mancino",
    "ability": "Prima del movimento principale, posso prendere di mira un giocatore a più di 3 caselle da me. Tiro i dadi e sommo i risultati, cercando di ottenere il numero della casella su cui si trova. Se ci riesco, viene eliminato. Altrimenti, avanza di 1 casella.",
    "image": "images/extra-mile/Marksman.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Marksman",
      "non ufficiale"
    ],
    "originalName": "Marksman"
  },
  {
    "name": "Paperone",
    "power": "Pagare per vincere",
    "ability": "Posso rinunciare al tiro per il movimento principale e pagare 1 gettone punto per muovermi invece da 1 a 8 caselle.",
    "image": "images/extra-mile/Moneybags.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Moneybags",
      "non ufficiale"
    ],
    "originalName": "Moneybags"
  },
  {
    "name": "Signor Volpe",
    "power": "Obiezione!",
    "ability": "Tre volte per corsa posso gridare «Obiezione!». Questo mi permette di impedire l’attivazione del potere di un personaggio.",
    "image": "images/extra-mile/Mr. Fox.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Mr. Fox",
      "non ufficiale"
    ],
    "originalName": "Mr. Fox"
  },
  {
    "name": "Strambo",
    "power": "Tiro a effetto",
    "ability": "Quando ottengo un numero pari, ho -2 al movimento. Quando ottengo un numero dispari, ho +3 al movimento.",
    "image": "images/extra-mile/Oddball.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Oddball",
      "non ufficiale"
    ],
    "originalName": "Oddball"
  },
  {
    "name": "Pooh",
    "power": "Orsetto semplice",
    "ability": "Quando si attivano più abilità nello stesso turno, avanzo di 1 casella. Se inciampo, mi rialzo immediatamente.",
    "image": "images/extra-mile/Pooh.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Pooh",
      "non ufficiale"
    ],
    "originalName": "Pooh"
  },
  {
    "name": "Robin Hood",
    "power": "Per i poveri",
    "ability": "Se condivido una casella con il primo in classifica o lo supero, gli prendo 1 gettone punto e lo do all’ultimo. Poi avanzo di 2 caselle.",
    "image": "images/extra-mile/Robin Hood.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Robin Hood",
      "non ufficiale"
    ],
    "originalName": "Robin Hood"
  },
  {
    "name": "Babbo Natale",
    "power": "Buoni o cattivi",
    "ability": "Quando arrivo su una casella con altri corridori, avanzo di 1 casella per ciascuno. Quei giocatori tirano: con 1–3 arretrano di 1 casella, con 4–6 avanzano di 2.",
    "image": "images/extra-mile/Saint Nick.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Saint Nick",
      "non ufficiale"
    ],
    "originalName": "Saint Nick"
  },
  {
    "name": "Bullo",
    "power": "I soldi della merenda",
    "ability": "Se ottengo 3, tutti gli altri corridori inciampano. Possono evitare di saltare il turno ottenendo 1–3 per rialzarsi. Se ci riescono, avanzo di 2 caselle.",
    "image": "images/extra-mile/School Bully.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "School Bully",
      "non ufficiale"
    ],
    "originalName": "School Bully"
  },
  {
    "name": "Esploratore",
    "power": "Mai perso",
    "ability": "Dopo il tiro ma prima del movimento, posso teletrasportarmi di 1 casella avanti o indietro rispetto alla mia posizione.",
    "image": "images/extra-mile/Scout.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Scout",
      "non ufficiale"
    ],
    "originalName": "Scout"
  },
  {
    "name": "Mescolatore",
    "power": "Carte in aria",
    "ability": "Prima della corsa, mescolo e distribuisco casualmente le carte personaggio di tutti. La carta ricevuta determina il nuovo potere. Posso ripeterlo se sono da solo all’ultimo posto.",
    "image": "images/extra-mile/Shuffler.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Shuffler",
      "non ufficiale"
    ],
    "originalName": "Shuffler"
  },
  {
    "name": "Oca svampita",
    "power": "A zonzo",
    "ability": "Non seguo il dado. Mi muovo in base a questa tabella: 6 = 10, 5 = 7, 4 = 5, 3 = 2, 2 = 0, 1 = -3.",
    "image": "images/extra-mile/Silly Goose.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Silly Goose",
      "non ufficiale"
    ],
    "originalName": "Silly Goose"
  },
  {
    "name": "Occhi di serpente",
    "power": "Tutto in gioco",
    "ability": "Prima della mia corsa, scommetto sulla vittoria di un corridore. Se indovino, ricevo il triplo della puntata. Se sbaglio, perdo la puntata.",
    "image": "images/extra-mile/Snake Eyes.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Snake Eyes",
      "non ufficiale"
    ],
    "originalName": "Snake Eyes"
  },
  {
    "name": "Snobbato",
    "power": "Scegli me",
    "ability": "Ho +X al movimento principale, dove X è il numero di corridori scelti prima di me in questo giro di selezione.",
    "image": "images/extra-mile/Snub.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Snub",
      "non ufficiale"
    ],
    "originalName": "Snub"
  },
  {
    "name": "Bimbo terribile",
    "power": "Capricci",
    "ability": "Se ottengo 1 o 2, tiro di nuovo il dado prima di muovermi. Tutti i corridori entro quel numero di caselle da me inciampano.",
    "image": "images/extra-mile/Terrible Toddler.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Terrible Toddler",
      "non ufficiale"
    ],
    "originalName": "Terrible Toddler"
  },
  {
    "name": "Ladro",
    "power": "Colpo grosso",
    "ability": "Prima della mia corsa, scelgo segretamente un altro corridore. Alla fine della corsa, rivelo chi ho scelto e rubo tutti i punti raccolti da quel corridore.",
    "image": "images/extra-mile/Thief.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Thief",
      "non ufficiale"
    ],
    "originalName": "Thief"
  },
  {
    "name": "Troll del pedaggio",
    "power": "Paga il pedaggio",
    "ability": "Prima della mia corsa, segno una casella del tabellone con un gettone punto. Ogni volta che un personaggio si ferma su quella casella, ricevo 1 gettone punto.",
    "image": "images/extra-mile/Toll Troll.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Toll Troll",
      "non ufficiale"
    ],
    "originalName": "Toll Troll"
  },
  {
    "name": "Arbitro imparzialissimo",
    "power": "Falsa partenza",
    "ability": "Ogni volta che un altro corridore passa in testa, inciampa.",
    "image": "images/extra-mile/Totally Fair Ref.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Totally Fair Ref",
      "non ufficiale"
    ],
    "originalName": "Totally Fair Ref"
  },
  {
    "name": "Sussurro",
    "power": "Spazio personale",
    "ability": "Se mi fermo su una casella occupata, mi sposto sulla casella libera più vicina in una delle due direzioni. Se un corridore si ferma sulla mia casella, avanzo fino alla prossima casella libera.",
    "image": "images/extra-mile/Whisper.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Whisper",
      "non ufficiale"
    ],
    "originalName": "Whisper"
  },
  {
    "name": "Strega Nocciola",
    "power": "Pozione di strega",
    "ability": "Posso dividere il movimento principale tra avanzare e costringere gli altri corridori ad arretrare.",
    "image": "images/extra-mile/Witch Hazel.png",
    "extraMile": true,
    "tags": [
      "extra mile",
      "unofficial",
      "Witch Hazel",
      "non ufficiale"
    ],
    "originalName": "Witch Hazel"
  }
];

const interactionData = [
  {
    "racers": [
      "Alchimista",
      "Allenatore"
    ],
    "text": "Se Alchimista ottiene 1 o 2 e usa Trasmutazione e scatto, il +1 di Allenatore si applica al movimento principale di 4 caselle: Alchimista si muove quindi di 5."
  },
  {
    "racers": [
      "Alchimista",
      "Melma"
    ],
    "text": "Se Alchimista ottiene 1 o 2 e usa Trasmutazione e scatto per muoversi di 4 caselle, Melma riduce il movimento a 3. Il risultato del dado rimane 1 o 2."
  },
  {
    "racers": [
      "Alchimista",
      "Bruco"
    ],
    "text": "Se Alchimista ottiene 1, Bruco gli fa saltare il movimento principale. Alchimista non può quindi usare Trasmutazione e scatto per muoversi di 4 caselle."
  },
  {
    "racers": [
      "Alchimista",
      "Capitano"
    ],
    "text": "Se Alchimista ottiene 1 e usa Trasmutazione e scatto per muoversi di 4 caselle, Capitano si attiva comunque perché il risultato del dado è 1. Capitano svolge il turno successivo a quello di Alchimista."
  },
  {
    "racers": [
      "Baba Yaga",
      "Duellante"
    ],
    "text": "Se Duellante condivide la casella di Baba Yaga, possono duellare, ma Duellante inciampa comunque a causa di Baba Yaga."
  },
  {
    "racers": [
      "Baba Yaga",
      "Bebè gigante"
    ],
    "text": "I due non possono condividere una casella, quindi Bebè gigante non può essere fatto inciampare da Baba Yaga."
  },
  {
    "racers": [
      "Baba Yaga",
      "Ipnotizzatore"
    ],
    "text": "Ipnotizzatore può teletrasportare Baba Yaga sulla propria casella, ma Ipnotizzatore inciampa."
  },
  {
    "racers": [
      "Baba Yaga",
      "Festaiolo"
    ],
    "text": "Se Festaiolo sposta simultaneamente dei corridori sulla casella di Baba Yaga, Baba Yaga non li fa inciampare."
  },
  {
    "racers": [
      "Banana",
      "Centauro"
    ],
    "text": "Se Centauro supera Banana, Zoccolata fa arretrare Banana di 2 caselle; poi Banana fa inciampare Centauro perché l’ha superata."
  },
  {
    "racers": [
      "Banana",
      "Rospo saltatore"
    ],
    "text": "Rospo saltatore salta la casella occupata da Banana, ma questo conta comunque come un sorpasso. Banana lo fa quindi inciampare dopo il movimento."
  },
  {
    "racers": [
      "Dirigibile",
      "Allenatore"
    ],
    "text": "Se Dirigibile condivide la casella di Allenatore, il +1 di Allenatore si applica al movimento principale di Dirigibile in aggiunta al suo +3 o -1."
  },
  {
    "racers": [
      "Dirigibile",
      "Melma"
    ],
    "text": "Il -1 di Melma si applica al movimento principale di Dirigibile. Prima della seconda curva, il +3 di Dirigibile e il -1 di Melma danno +2; sulla seconda curva o dopo di essa, i due -1 danno -2."
  },
  {
    "racers": [
      "Allenatore",
      "Melma"
    ],
    "text": "Se Allenatore e Melma sono sullo stesso tabellone, il -1 di Melma si applica al movimento principale di Allenatore insieme al suo +1. I modificatori si annullano: Allenatore usa il normale risultato del dado."
  },
  {
    "racers": [
      "Allenatore",
      "Gambe"
    ],
    "text": "Corsa leggera di Gambe conta come movimento principale, quindi si applica il +1 di Allenatore. Gambe si muove di 6 caselle invece di 5."
  },
  {
    "racers": [
      "Imitatore",
      "Melma"
    ],
    "text": "Se Imitatore copia Melma, tutti gli altri corridori hanno -2 al movimento; Melma e Imitatore hanno ciascuno -1."
  },
  {
    "racers": [
      "Imitatore",
      "Lepre"
    ],
    "text": "Se Imitatore copia Lepre, ottiene il suo +2 al movimento. Se cambia il corridore in testa, Imitatore passa immediatamente al potere del nuovo primo."
  },
  {
    "racers": [
      "Imitatore",
      "Bebè gigante"
    ],
    "text": "Se Imitatore copia Bebè gigante, il potere di Bebè gigante ha la precedenza."
  },
  {
    "racers": [
      "Imitatore",
      "Corridore in testa"
    ],
    "text": "Imitatore copia continuamente il corridore attualmente in testa, non solo all’inizio del proprio turno. Se cambia il primo, il potere di Imitatore cambia immediatamente."
  },
  {
    "racers": [
      "Mercante di dadi",
      "Bruco"
    ],
    "text": "Se un corridore ottiene 1 e ritira usando l’abilità di Mercante di dadi, il primo risultato di 1 è considerato come mai avvenuto."
  },
  {
    "racers": [
      "Mercante di dadi",
      "Mago"
    ],
    "text": "I tiri ripetuti con il potere di Mago non fanno muovere Mercante di dadi. Mercante di dadi si muove solo quando un altro corridore usa il suo potere per ritirare."
  },
  {
    "racers": [
      "Mercante di dadi",
      "Scattino"
    ],
    "text": "Ogni volta che un altro corridore usa il potere di Mercante di dadi per ritirare, Mercante di dadi avanza di 1 casella e anche Scattino avanza di 1 perché è stato ripetuto un tiro."
  },
  {
    "racers": [
      "Mercante di dadi",
      "Capitano"
    ],
    "text": "Se un corridore ottiene 1 e ritira usando l’abilità di Mercante di dadi, il primo risultato di 1 è considerato come mai avvenuto."
  },
  {
    "racers": [
      "Duellante",
      "Bebè gigante"
    ],
    "text": "Duellante non può condividere la casella di Bebè gigante, quindi non possono duellare."
  },
  {
    "racers": [
      "Duellante",
      "Remora"
    ],
    "text": "Se Duellante vince un duello contro Remora, avanza di 2 caselle e Remora può seguirlo sulla nuova casella. Poiché condividono di nuovo una casella, possono duellare ancora. La sequenza può continuare finché Duellante vince e Remora lo segue."
  },
  {
    "racers": [
      "Duellante",
      "B.O.C.C.A."
    ],
    "text": "Se Duellante sfida B.O.C.C.A. e B.O.C.C.A. vince, B.O.C.C.A. avanza di 2 caselle. Se termina quel movimento su una casella con esattamente un altro corridore, lo elimina. Se B.O.C.C.A. arriva sulla casella di Duellante, non duellano e Duellante viene mangiato."
  },
  {
    "racers": [
      "Duellante",
      "Pignolo"
    ],
    "text": "Se Duellante vince un duello vicino al traguardo e il movimento di 2 caselle lo oltrepasserebbe, Pignolo impedisce il passaggio. Duellante non si muove."
  },
  {
    "racers": [
      "Melma",
      "Provocatore"
    ],
    "text": "Se Melma riduce il movimento principale di un corridore e questi termina il turno entro 1 casella da dove lo ha iniziato, Provocatore si attiva e avanza di 2 caselle."
  },
  {
    "racers": [
      "Melma",
      "Lacchè"
    ],
    "text": "Melma modifica il movimento, non il risultato del dado. Chi ottiene 6 ha comunque tirato un 6, quindi Lacchè avanza di 2 caselle prima di quel corridore."
  },
  {
    "racers": [
      "Melma",
      "Gambe"
    ],
    "text": "Melma riduce da 5 a 4 caselle Corsa leggera di Gambe. Corsa leggera conta comunque come movimento principale di Gambe."
  },
  {
    "racers": [
      "Melma",
      "Scattino"
    ],
    "text": "Scattino avanza di 1 casella per ogni -1 che Melma applica al movimento principale di un altro corridore."
  },
  {
    "racers": [
      "Bebè gigante",
      "B.O.C.C.A."
    ],
    "text": "Bebè gigante non può essere mangiato da B.O.C.C.A."
  },
  {
    "racers": [
      "Bebè gigante",
      "Festaiolo"
    ],
    "text": "Se il potere di Festaiolo sposta Bebè gigante sulla casella di Festaiolo, tutti i corridori che si trovano su quella casella vengono spostati indietro di 1."
  },
  {
    "racers": [
      "Bebè gigante",
      "Scattino"
    ],
    "text": "Se il potere di Scattino lo porta sulla casella di Bebè gigante, Bebè gigante lo colloca 1 casella più indietro."
  },
  {
    "racers": [
      "Bebè gigante",
      "Remora"
    ],
    "text": "Remora non può seguire Bebè gigante."
  },
  {
    "racers": [
      "Bruco",
      "Mago"
    ],
    "text": "Mago può ritirare un 1 prima che si risolva l’effetto di Bruco. Se il nuovo risultato non è 1, Bruco non si attiva."
  },
  {
    "racers": [
      "Bruco",
      "Capitano"
    ],
    "text": "Quando un altro corridore ottiene 1, Bruco gli fa saltare il movimento principale e avanza di 1 casella. Capitano svolge poi il turno successivo. Si attivano entrambe le abilità."
  },
  {
    "racers": [
      "Rospo saltatore",
      "Scattino"
    ],
    "text": "Scattino avanza di 1 casella per ogni casella occupata saltata da Rospo saltatore. Se Rospo saltatore ne salta due, Scattino si muove due volte."
  },
  {
    "racers": [
      "Mago",
      "Scattino"
    ],
    "text": "Ogni tiro ripetuto da Mago attiva Scattino, che avanza di 1 casella per ciascun tiro ripetuto, anche se quel risultato alla fine non viene utilizzato."
  },
  {
    "racers": [
      "Festaiolo",
      "Baba Yaga"
    ],
    "text": "Se Festaiolo sposta simultaneamente dei corridori sulla casella di Baba Yaga, Baba Yaga non li fa inciampare perché arrivano contemporaneamente."
  },
  {
    "racers": [
      "Festaiolo",
      "B.O.C.C.A."
    ],
    "text": "Quando Festaiolo sposta B.O.C.C.A. simultaneamente su un altro corridore, B.O.C.C.A. non elimina quel corridore in seguito all’arrivo simultaneo."
  },
  {
    "racers": [
      "Festaiolo",
      "Romantico"
    ],
    "text": "Quando Festaiolo sposta simultaneamente i corridori verso di sé, Romantico non si attiva per quegli arrivi simultanei."
  },
  {
    "racers": [
      "Scienziato missilistico",
      "Allenatore"
    ],
    "text": "Se Scienziato missilistico condivide la casella di Allenatore, il +1 di Allenatore si applica al suo movimento principale, anche quando è raddoppiato."
  },
  {
    "racers": [
      "Scienziato missilistico",
      "Melma"
    ],
    "text": "Melma riduce di 1 la distanza finale del movimento principale di Scienziato missilistico. Se Scienziato missilistico raddoppia il tiro, Melma riduce di 1 il movimento già raddoppiato."
  },
  {
    "racers": [
      "Scienziato missilistico",
      "Bruco"
    ],
    "text": "Se Scienziato missilistico ottiene 1 e lo raddoppia a 2, Bruco si attiva comunque perché il dado ha dato 1. Scienziato missilistico salta il movimento principale: il raddoppio non impedisce l’effetto di Bruco."
  },
  {
    "racers": [
      "Scienziato missilistico",
      "Capitano"
    ],
    "text": "Se Scienziato missilistico ottiene 1 e lo raddoppia a 2, Capitano si attiva comunque perché il risultato del dado è 1."
  },
  {
    "racers": [
      "Romantico",
      "Remora"
    ],
    "text": "Se Remora segue il movimento di Romantico e arriva contemporaneamente, Romantico non si attiva per l’arrivo di Remora."
  },
  {
    "racers": [
      "Scattino",
      "Remora"
    ],
    "text": "Se Scattino si muove mentre condivide una casella con Remora, Remora può seguirlo sulla nuova casella. Il movimento di Remora può attivare di nuovo Scattino, quindi la sequenza può continuare."
  },
  {
    "racers": [
      "Pignolo",
      "Lepre"
    ],
    "text": "Il +2 di Lepre può farle oltrepassare il traguardo. In quel caso Pignolo impedisce il movimento e Lepre non taglia il traguardo."
  },
  {
    "racers": [
      "Terzo incomodo",
      "Baba Yaga"
    ],
    "text": "Se Terzo incomodo si teletrasporta su una casella con Baba Yaga, l’abilità di Baba Yaga fa inciampare Terzo incomodo."
  }
];

/* =========================
   STATE
========================= */

const allAthletes = [
  ...athletes,
  ...expansionAthletes,
  ...extraMileAthletes
];

let currentFilter = "all";
let currentProfileIndex = -1;
let visibleAthletes = [];
let touchStartX = 0;
let touchStartY = 0;

/* =========================
   DOM ELEMENTS
========================= */

const searchInput = document.getElementById("searchInput");
const characterGrid = document.getElementById("characterGrid");
const characterCount = document.getElementById("characterCount");
const noResults = document.getElementById("noResults");

const allFilterButton =
  document.getElementById("allFilterButton");

const baseFilterButton =
  document.getElementById("baseFilterButton");

const expansionFilterButton =
  document.getElementById("expansionFilterButton");

const extraMileFilterButton =
  document.getElementById("extraMileFilterButton");

const profileModal =
  document.getElementById("profileModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModalButton =
  document.getElementById("closeModal");

const prevProfileButton =
  document.getElementById("prevProfile");

const nextProfileButton =
  document.getElementById("nextProfile");

const profileImage =
  document.getElementById("profileImage");

const profileName =
  document.getElementById("profileName");

const profileAbilityName =
  document.getElementById("profileAbilityName");

const profileAbilityText =
  document.getElementById("profileAbilityText");

const interactionList =
  document.getElementById("interactionList");

const interactionCount =
  document.getElementById("interactionCount");

const noInteractions =
  document.getElementById("noInteractions");

/* =========================
   SECURITY / HTML ESCAPING
========================= */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================
   FILTERING
========================= */

function getFilteredAthletes() {
  if (currentFilter === "base") {
    return athletes;
  }

  if (currentFilter === "expansion") {
    return expansionAthletes;
  }

  if (currentFilter === "extra-mile") {
    return extraMileAthletes;
  }

  return allAthletes;
}

function getVisibleAthletes() {
  const searchTerm =
    searchInput.value.trim().toLowerCase();

  const filtered =
    getFilteredAthletes();

  if (!searchTerm) {
    return filtered;
  }

  return filtered.filter((athlete) => {
    const nameMatch =
      athlete.name
        .toLowerCase()
        .includes(searchTerm);

    const tagMatch =
      (athlete.tags || []).some(tag =>
        tag.toLowerCase().includes(searchTerm)
      );

    return nameMatch || tagMatch;
  });
}

/* =========================
   CHARACTER CARDS
========================= */

function createCharacterCard(athlete) {
  const card =
    document.createElement("article");

  card.className =
    "character-card";

  card.tabIndex = 0;

  card.setAttribute(
    "role",
    "button"
  );

  card.setAttribute(
    "aria-label",
    `Apri la scheda di ${athlete.name}`
  );

  let badge = "";

  if (athlete.expansion) {
    badge =
      `<div class="second-wind-badge">Second Wind</div>`;
  }

  if (athlete.extraMile) {
    badge =
      `<div class="extra-mile-badge">
        Extra Mile
        <span>(non ufficiale)</span>
      </div>`;
  }

  card.innerHTML = `
    <img
      class="character-card-image"
      src="${escapeHtml(athlete.image)}"
      alt="${escapeHtml(athlete.name)}"
      loading="lazy"
    >

    <div class="character-card-content">
      <h3 class="character-card-name">
        ${escapeHtml(athlete.name)}
        <span class="original-name" lang="en">${escapeHtml(athlete.originalName)}</span>
      </h3>

      <div class="character-card-power">
        ${escapeHtml(athlete.power)}
      </div>

      <div class="character-card-ability">
        ${escapeHtml(athlete.ability)}
      </div>

      ${badge}
    </div>
  `;

  card.addEventListener(
    "click",
    () => {
      openProfile(athlete.name);
    }
  );

  card.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openProfile(athlete.name);
      }
    }
  );

  return card;
}

/* =========================
   RENDER CHARACTER GRID
========================= */

function renderCharacters() {
  visibleAthletes =
    getVisibleAthletes();

  characterGrid.innerHTML = "";

  if (
    visibleAthletes.length === 0
  ) {
    noResults.classList.remove(
      "hidden"
    );
  } else {
    noResults.classList.add(
      "hidden"
    );

    const fragment =
      document.createDocumentFragment();

    visibleAthletes.forEach(
      (athlete) => {
        fragment.appendChild(
          createCharacterCard(
            athlete
          )
        );
      }
    );

    characterGrid.appendChild(
      fragment
    );
  }

  characterCount.textContent =
    `${visibleAthletes.length} ${visibleAthletes.length === 1 ? "corridore" : "corridori"}`;
}

/* =========================
   FILTER BUTTONS
========================= */

function setFilter(filter) {
  currentFilter = filter;

  allFilterButton.classList.toggle(
    "active",
    filter === "all"
  );

  baseFilterButton.classList.toggle(
    "active",
    filter === "base"
  );

  expansionFilterButton.classList.toggle(
    "active",
    filter === "expansion"
  );

  extraMileFilterButton.classList.toggle(
    "active",
    filter === "extra-mile"
  );

  renderCharacters();
}

/* =========================
   FIND RACER
========================= */

function findAthleteByName(name) {
  return allAthletes.find(
    athlete =>
      athlete.name === name
  );
}

/* =========================
   INTERACTIONS
========================= */

function getInteractionsForAthlete(name) {
  return interactionData.filter(
    interaction =>
      interaction.racers.includes(name)
  );
}

function createInteractionHtml(
  interaction
) {
  const racerButtons =
    interaction.racers
      .map((racer, index) => {
        const separator =
          index > 0
            ? `<span class="interaction-separator">×</span>`
            : "";

        return `
          ${separator}

          <button
            class="interaction-character"
            type="button"
            data-racer="${escapeHtml(racer)}"
          >
            ${escapeHtml(racer)}
          </button>
        `;
      })
      .join("");

  return `
    <article class="interaction-card">
      <div class="interaction-racers">
        ${racerButtons}
      </div>

      <div class="interaction-text">
        ${escapeHtml(
          interaction.text
        )}
      </div>
    </article>
  `;
}

function renderInteractions(athlete) {
  if (
    athlete.expansion ||
    athlete.extraMile
  ) {
    interactionList.innerHTML = "";

    interactionCount.textContent = "";

    noInteractions.textContent =
      "Interazioni non ancora disponibili nel sito originale.";

    noInteractions.classList.remove(
      "hidden"
    );

    return;
  }

  const interactions =
    getInteractionsForAthlete(
      athlete.name
    );

  interactionList.innerHTML = "";

  noInteractions.textContent =
    "Nessuna interazione particolare elencata.";

  if (
    interactions.length === 0
  ) {
    interactionCount.textContent = "";

    noInteractions.classList.remove(
      "hidden"
    );

    return;
  }

  noInteractions.classList.add(
    "hidden"
  );

  interactionCount.textContent =
    `${interactions.length} ${interactions.length === 1 ? "interazione" : "interazioni"}`;

  const fragment =
    document.createDocumentFragment();

  interactions.forEach(
    (interaction) => {
      const wrapper =
        document.createElement(
          "div"
        );

      wrapper.innerHTML =
        createInteractionHtml(
          interaction
        );

      const card =
        wrapper.firstElementChild;

      card
        .querySelectorAll(
          ".interaction-character"
        )
        .forEach(button => {
          button.addEventListener(
            "click",
            () => {
              openProfile(
                button.dataset.racer
              );
            }
          );
        });

      fragment.appendChild(card);
    }
  );

  interactionList.appendChild(
    fragment
  );
}

/* =========================
   PROFILE
========================= */

function renderProfile(athlete) {
  profileImage.src =
    athlete.image;

  profileImage.alt =
    athlete.name;

  profileName.innerHTML =
    `${escapeHtml(athlete.name)}<span class="original-name" lang="en">${escapeHtml(athlete.originalName)}</span>`;

  profileAbilityName.textContent =
    athlete.power;

  profileAbilityText.innerHTML =
    escapeHtml(
      athlete.ability
    ).replace(
      /\n/g,
      "<br>"
    );

  renderInteractions(athlete);
}

function openProfile(name) {
  const athlete =
    findAthleteByName(name);

  if (!athlete) {
    return;
  }

  visibleAthletes =
    getVisibleAthletes();

  let index =
    visibleAthletes.findIndex(
      item =>
        item.name === name
    );

  if (index === -1) {
    visibleAthletes =
      allAthletes;

    index =
      visibleAthletes.findIndex(
        item =>
          item.name === name
      );
  }

  if (index === -1) {
    return;
  }

  currentProfileIndex =
    index;

  renderProfile(
    visibleAthletes[
      currentProfileIndex
    ]
  );

  profileModal.classList.add(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  updateProfileNavigation();
}

function closeProfile() {
  profileModal.classList.remove(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

  currentProfileIndex = -1;
}

/* =========================
   PROFILE NAVIGATION
========================= */

function updateProfileNavigation() {
  const hasPrevious =
    currentProfileIndex > 0;

  const hasNext =
    currentProfileIndex >= 0 &&
    currentProfileIndex <
      visibleAthletes.length - 1;

  prevProfileButton.disabled =
    !hasPrevious;

  nextProfileButton.disabled =
    !hasNext;
}

function showPreviousProfile() {
  if (
    currentProfileIndex <= 0
  ) {
    return;
  }

  currentProfileIndex -= 1;

  renderProfile(
    visibleAthletes[
      currentProfileIndex
    ]
  );

  updateProfileNavigation();
}

function showNextProfile() {
  if (
    currentProfileIndex < 0 ||
    currentProfileIndex >=
      visibleAthletes.length - 1
  ) {
    return;
  }

  currentProfileIndex += 1;

  renderProfile(
    visibleAthletes[
      currentProfileIndex
    ]
  );

  updateProfileNavigation();
}

/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
  "input",
  () => {
    renderCharacters();
  }
);

/* =========================
   FILTER EVENTS
========================= */

allFilterButton.addEventListener(
  "click",
  () => {
    setFilter("all");
  }
);

baseFilterButton.addEventListener(
  "click",
  () => {
    setFilter("base");
  }
);

expansionFilterButton.addEventListener(
  "click",
  () => {
    setFilter("expansion");
  }
);

extraMileFilterButton.addEventListener(
  "click",
  () => {
    setFilter("extra-mile");
  }
);

/* =========================
   MODAL EVENTS
========================= */

closeModalButton.addEventListener(
  "click",
  closeProfile
);

modalOverlay.addEventListener(
  "click",
  closeProfile
);

prevProfileButton.addEventListener(
  "click",
  showPreviousProfile
);

nextProfileButton.addEventListener(
  "click",
  showNextProfile
);

/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener(
  "keydown",
  (event) => {
    if (
      !profileModal.classList.contains(
        "open"
      )
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeProfile();
    }

    if (event.key === "ArrowLeft") {
      showPreviousProfile();
    }

    if (event.key === "ArrowRight") {
      showNextProfile();
    }
  }
);

/* =========================
   SWIPE NAVIGATION
========================= */

profileModal.addEventListener(
  "touchstart",
  (event) => {
    if (
      event.touches.length !== 1
    ) {
      return;
    }

    touchStartX =
      event.touches[0].clientX;

    touchStartY =
      event.touches[0].clientY;
  },
  {
    passive: true
  }
);

profileModal.addEventListener(
  "touchend",
  (event) => {
    if (
      !touchStartX ||
      !touchStartY
    ) {
      return;
    }

    const touchEndX =
      event.changedTouches[0].clientX;

    const touchEndY =
      event.changedTouches[0].clientY;

    const deltaX =
      touchEndX - touchStartX;

    const deltaY =
      touchEndY - touchStartY;

    touchStartX = 0;
    touchStartY = 0;

    if (
      Math.abs(deltaX) < 60
    ) {
      return;
    }

    if (
      Math.abs(deltaX) <
      Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      showNextProfile();
    } else {
      showPreviousProfile();
    }
  }
);

/* =========================
   INITIALIZE
========================= */

currentFilter = "all";

allFilterButton.classList.add(
  "active"
);

baseFilterButton.classList.remove(
  "active"
);

expansionFilterButton.classList.remove(
  "active"
);

extraMileFilterButton.classList.remove(
  "active"
);

renderCharacters();
