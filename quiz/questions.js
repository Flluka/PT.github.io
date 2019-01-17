const questions = [
  {
    question: "Hva er en protokoll i kontekst av digital kommunikasjon?",
    answer1:
      "Et sett av regler man kan velge fritt mellom som gjør kommunikasjon effektiv og rask.",
    answer2:
      "Et internasjonalt lovverk som bestemmer hva man kan gjøre og hva man ikke kan gjøre på internett som bruker.",
    answer3:
      "En stor datafil som inneholder hvordan alle nettverk i verden er koblet sammen.",
    answer4:
      "Et regelverk som bestemmer hvordan kommunikasjon skal foregå og hvilke funksjoner som kan brukes.",
    correctAnswer: 4
  },
  {
    question:
      "Hva kalles den avsluttende aktiviteten i programvarevalideringsfasen?",
    answer1: "Utviklingstesting.",
    answer2: "Systemtesting.",
    answer3: "Totaltesting.",
    answer4: "Akseptansetesting.",
    correctAnswer: 4
  },
  {
    question: "Hvilken sikkerhetsutfordring er ”pharming”?",
    answer1: "Bruker blir ledet til en falsk versjon av en offisielt nettside.",
    answer2:
      "Bruker mottar en falsk epost som utgir seg fra å komme fra en avsender du stoler på.",
    answer3:
      "Bruk av offisielle navn på institusjoner eller personer for å lure til seg konfidensiell informasjon.",
    answer4:
      "Massivt angrep på webtjenere slik at tjenesten ikke blir tilgjengelig for tiltenkte brukere",
    correctAnswer: 1
  },
  {
    question: "Hva står forkortelsen VPN for?",
    answer1: "Virtual Protocol Node.",
    answer2: "Viral Privacy Node",
    answer3: "Virtual Private Network.",
    answer4: "Volatile Performance Network.",
    correctAnswer: 3
  },
  {
    question:
      "Hvis man skal sende data over nettet, kan elektrisk støy under transporten føre til at data utilsiktet endres. Bruk av en sjekksum (checksum) bakerst i en tallserie som skal overføres vil sikre at",
    answer1: "tallene kommer uendret fram til mottager",
    answer2:
      "mottager kan korrigere eventuelle endringer av tallene under overføring",
    answer3:
      "mottager kan oppdage, men ikke korrigere, endringer av tallene under overføring",
    answer4:
      "mottager kan oppdage endring såframt kun ett tall er blitt endret",
    correctAnswer: 3
  },
  {
    question: "DSL-kommunikasjon over telefonlinjer har den egenskapen at",
    answer1:
      "det dessverre er umulig å bruke vanlig telefon samtidig som noen bruker internettet.",
    answer2:
      "at man kan bruke vanlig telefon samtidig, men med noe forstyrrelser i lyden",
    answer3:
      "at man også kan bruke vanlig telefon med grei lyd, men at data over nettet da går tregt.",
    answer4:
      "at man kan bruke vanlig telefon samtidig, uten forstyrrelser verken for telefon eller internett.",
    correctAnswer: 4
  },
  {
    question:
      "I forbindelse med pensumstoffet om nettverkskommunikasjon står forkortelsen DSL for",
    answer1: "Data Source Location",
    answer2: "Domain Support License.",
    answer3: "Digital Subscriber Line.",
    answer4: "Direct Signal Link.",
    correctAnswer: 3
  },
  {
    question: "Binærsøk er mer effektiv enn sekvensielt søk fordi",
    answer1:
      "binærsøk også virker på sorterte lister, mens sekvensielt søk kun fungerer på usorterte lister.",
    answer2: "binærsøk er rekursiv mens sekvensielt søk er iterativ.",
    answer3:
      "binærsøk eliminerer halve datamengden for hvert oppslag mens sekvensielt søk bare eliminerer det ene elementet som ble testet.",
    answer4:
      "binære søk virker på binærtall mens sekvensielt søk bare virker på tekst.",
    correctAnswer: 3
  },
  {
    question:
      "Anta at vi har fire mulige algoritmer for å løse et problem, hvorav en er Θ(n<sup>3</sup>), en er Θ(n<sup>2</sup>), en er Θ(n log n) og en er Θ(2<sup>n</sup>). Hvis vi skulle rangere disse med den mest effektive først, den minst effektive sist, blir det:",
    answer1:
      "Θ(n log n), Θ(n<sup>2</sup>), Θ(n<sup>3</sup>), Θ(2<sup>n</sup>).",
    answer2:
      "Θ(n<sup>2</sup>), Θ(n log n), Θ(2<sup>n</sup>), Θ(n<sup>3</sup>).",
    answer3:
      "Θ(n log n), Θ(n<sup>2</sup>), Θ(2<sup>n</sup>), Θ(n<sup>3</sup>).",
    answer4:
      "Θ(2<sup>n</sup>), Θ(n<sup>3</sup>), Θ(n log n), Θ(n<sup>2</sup>).",
    correctAnswer: 1
  },
  {
    question:
      "Alle eksterne enheter som skal kommunisere med en datamaskin krever en … for å fungere",
    answer1: "Driver.",
    answer2: "ASCII-tabell.",
    answer3: "Ledning.",
    answer4: "Internett-forbindelse",
    correctAnswer: 1
  },
  {
    question: "Sekundærminne.",
    answer1: "Husker data etter at strømmen kuttes",
    answer2: "Er alltid flyktig.",
    answer3: "Er alltid kjappere enn primærminnet.",
    answer4: "Er kun skrivbart.",
    correctAnswer: 1
  },
  {
    question: "129.241.103.4 er et eksempel på",
    answer1: "En IP-adresse.",
    answer2: "En MAC-adresse.",
    answer3: "En datamaskin sitt telefonnummer.",
    answer4: "Et TCP-nummer.",
    correctAnswer: 1
  },
  {
    question: "Ved hjelp av autentisering kan vi",
    answer1: "Gjøre et usikkert nett helt sikkert.",
    answer2: "Forsikre oss om at avsenderen er den han utgir seg for.",
    answer3: "Skjule innholdet i en internett-melding.",
    answer4: "Automatisk rette opp feil i dataoverføringen.",
    correctAnswer: 2
  },
  {
    question: "Hvordan representeres tallet -4 som toer-komplement?",
    answer1: "11111100",
    answer2: "10000100",
    answer3: "00110100",
    answer4: "11111001",
    correctAnswer: 1
  },
  {
    question:
      "Syv-bits kode for E er 1000101 og for S 1010011. Hvis man skal legge til en paritetsbit (parity bit) til disse to, blir denne paritetsbiten",
    answer1: "0 for både E og S",
    answer2: "0 for E, 1 for S",
    answer3: "1 for E, 0 for S",
    answer4: "1 for både E og S",
    correctAnswer: 3
  },
  {
    question:
      "I forbindelse med pensumstoffet om nettverkskommunikasjon står forkortelsen ISP for",
    answer1: "Intelligent Security Protection",
    answer2: "Internet Service Provider",
    answer3: "Internet Security Policy",
    answer4: "Information Standard Protocol",
    correctAnswer: 2
  },
  {
    question:
      "Hastigheten for internettaksess med DSL for en hjemmedatamaskin når det gjelder nedlasting (overføre data fra internett til hjemmemaskinen) og opplasting (overføre data fra maskinen til internett) er vanligvis",
    answer1:
      "symmetrisk, dvs. nedlasting og opplasting går like raskt relativt til datamengde",
    answer2: "asymmetrisk, nedlasting går kjappere enn opplasting",
    answer3: "asymmetrisk, opplasting går kjappere enn nedlasting",
    answer4:
      "asymmetrisk i perioder med mye nett-trafikk, symmetrisk i perioder med liten trafikk (for eksempel om natten)",
    correctAnswer: 2
  },
  {
    question: "Alle farger på en skjerm kan lages ved å kombinere fargene:",
    answer1: "Turkis (Cyan), lilla (Magenta), gul (Yellow)",
    answer2: "Sort, hvitt, turkis (Cyan), lilla (Magenta), gul (Yellow)",
    answer3: "Sort, hvitt, rød, gul, blå",
    answer4: "Rød, grønn, blå",
    correctAnswer: 4
  },
  {
    question:
      "Mindre kretskort som kan plugges i hovedkortet (Motherboard) kalles:",
    answer1: "Mikroprosessor",
    answer2: "Datter-kort",
    answer3: "Barn-kort",
    answer4: "RAM",
    correctAnswer: 2
  },
  {
    question: "Hvilken påstand stemmer om Solid State Drive (SSD)?",
    answer1: "Tregere enn harddisk",
    answer2: "Laget av ”Flash Memory”",
    answer3:
      "Består av en stabel av metallskiver med en arm som sveiper over/mellom skivene",
    answer4: "Tåler dårlig støt",
    correctAnswer: 2
  },
  {
    question: "Hva er et analogt signal?",
    answer1:
      "Et kontinuerlig signal hvor den variable egenskap er gitt av en diskret funksjon, som gir verdier fra et definert og begrenset område. (a)",
    answer2:
      "Et kontinuerlig signal hvor en variabel egenskap (f.eks. amplitude eller frekvens) representerer informasjonen som overføres. (b)",
    answer3:
      "Et diskret signal som representeres ved hjelp av nuller og enere.",
    answer4: "En kombinasjon av alternativ a og b.",
    correctAnswer: 2
  },
  {
    question:
      "Hvilken type løkkestruktur er garantert å utføre handlingen minst en gang?",
    answer1: "pre-test løkke (pretest loop)",
    answer2: "post-test løkke (posttest loop)",
    answer3: "begge typer.",
    answer4: "ingen av typene.",
    correctAnswer: 2
  },
  {
    question:
      "Omtrent hvor mange ganger raskere er en 1 GHz - prosessor i forhold til en på 2 MHz.",
    answer1: "Halvparten så rask",
    answer2: "Like rask.",
    answer3: "Dobbelt så rask",
    answer4: "500 ganger så rask",
    correctAnswer: 4
  },
  {
    question: "Hva sier Nyquist-regelen?",
    answer1:
      "at samplingsrate ved lyd må være minst det dobbelte i forhold til høyeste frekvensen.",
    answer2: "at lyd over 20000Hz ikke kan høres av det menneskelige øret",
    answer3: "at tapsfri komprimering ikke er mulig for lyd",
    answer4:
      "at lyddata tapsfritt kan komprimeres med maksimalt en faktor 2*pi",
    correctAnswer: 1
  },
  {
    question: "Hva er hensikten med et paritetsbit i digitale signaler?",
    answer1: "Forteller hvor meldingen skal sendes",
    answer2: "Gjør meldingene raskere å overføre (komprimering).",
    answer3: "Bidrar til å detektere feil i digitale signaler.",
    answer4: "Krypterer signaler så overføringen av data blir sikrere.",
    correctAnswer: 3
  },
  {
    question: "Kompleksiteten til sortering ved innsetting (insertion sort) er",
    answer1: "Θ(n)",
    answer2: "Θ(n log n)",
    answer3: "Θ(n<sup>2</sup>)",
    answer4: "Θ(2n)",
    correctAnswer: 3
  },
  {
    question: "En moderne prosessor er typisk bygd opp av mange millioner små…",
    answer1: "Dioder",
    answer2: "Magneter",
    answer3: "Transistorer",
    answer4: "Kondensatorer",
    correctAnswer: 3
  },
  {
    question: "En byte med minne i datamaskinen kan lagre hvor mye?",
    answer1: "16 bits",
    answer2: "8 flyttall",
    answer3: "fire ASCII-tegn",
    answer4: "en heltallsverdi mellom 0 og 255",
    correctAnswer: 4
  },
  {
    question: "En byte hukommelse kan lagre",
    answer1: "en av 1024 forskjellige tall",
    answer2: "et ord",
    answer3: "et ASCII tegn",
    answer4: "en blokk",
    correctAnswer: 3
  },
  {
    question:
      "Hvilken av de følgende er en kjent fordel med vannfallsmodellen?",
    answer1: "Tar hensyn til brukerkrav som endrer seg i løpet av prosjektet",
    answer2:
      "Gjør prosessen synlig og enklere å monitorere for prosjektlederen.",
    answer3: "Får tidlige versjoner av systemet raskt ut til kunden.",
    answer4: "Åpner for kontinuerlig tilbakemelding fra brukerne av systemet",
    correctAnswer: 2
  },
  {
    question:
      "Morsekode representerer bokstaver som sekvenser av prikk og strek som er",
    answer1: "like lange for alle bokstaver i alfabetet",
    answer2:
      "kortere for bokstaver tidlig i alfabetet, lenger for bokstaver sist i alfabetet.",
    answer3: "kortere for vokaler, lenger for konsonanter.",
    answer4:
      "kortere for bokstaver som forekommer hyppig i vanlig tekst, lenger for sjeldnere bokstaver",
    correctAnswer: 4
  },
  {
    question:
      "Hvilken av disse er en korrekt gjengivelse av teoribokas definisjon av en algoritme? 'En algoritme er et ordnet sett av…'",
    answer1:
      "'… entydige, utførbare skritt som definerer en terminerende prosess'' (unambiguous, executable steps that defines a terminating process).",
    answer2:
      "'… entydige, effektive skritt som definerer en utførbar prosess' (unambiguous, efficient steps that defines an executable process).",
    answer3:
      "'… velformede, effektive skritt som definerer en terminerende prosess' (well-formed, efficient steps that defines a terminating process).",
    answer4:
      "'…velformede, utførbare skritt som definerer en effektiv prosess' (well-formed, efficient steps that defines an efficient process).",
    correctAnswer: 1
  },
  {
    question: "En datamaskin går i en uendelig løkke som kalles",
    answer1: "Det naturlige kretsløpet.",
    answer2: "Hent-Utfør kretsløpet.",
    answer3: "Det evige kretsløpet",
    answer4: "Beregnings-kretsløpet",
    correctAnswer: 2
  },
  {
    question: "Hva er korrekt binær representasjon av 'NTNU' i 8 bits ASCII?",
    answer1: "01001110 01010100 01001110 01010101",
    answer2: "01100001 01100100 01110011 01100110",
    answer3: "01101110 01110101 01110100 01001110",
    answer4: "01100010 01010101 01010010 01010000",
    correctAnswer: 1
  },
  {
    question:
      "I hvilket tilfelle er det mest nyttig å bruke gjenbruksorientert systemutvikling?",
    answer1:
      "Når det finnes tilgjengelig programvare som kan gjøre oppgaver systemet skal utføre",
    answer2:
      "Når det skal lages programvare for å håndtere resirkulering av søppel eller lignende systemer",
    answer3: "Når det skal gjenbrukes ideer fra tidligere prosjekter",
    answer4:
      "Når det skal gjenbrukes systemutviklere og systemdesignere fra tidligere prosjekter.",
    correctAnswer: 1
  },
  {
    question: "Kompleksiteten til binærsøk er",
    answer1: "Θ(n) hvis lista er sortert og Θ(n log n) hvis den er usortert",
    answer2:
      "Θ(log n) hvis lista er sortert og Θ(2 log n) hvis lista er usortert",
    answer3: "Θ(log n) hvis lista er sortert og Θ(n) hvis lista er usortert",
    answer4:
      "Θ(log n) hvis lista er sortert. Binærsøk er ubrukelig hvis lista er usortert",
    correctAnswer: 4
  },
  {
    question: "RAM",
    answer1: "Husker alle verdiene når strømmen kuttes",
    answer2: "Er alltid inndelt i blokker på 1 kilobyte",
    answer3: "Betyr Random Access Memory",
    answer4: "Kan trygt fjernes uten at maskinen slutter å fungere",
    correctAnswer: 3
  },
  {
    question: "Hva står bokstavene i RGB for?",
    answer1: "Red, Green, Blue",
    answer2: "Readable Graphics Byte",
    answer3: "Raster Grayscale Balance",
    answer4: "Realtime GPU Backlog",
    correctAnswer: 1
  },
  {
    question:
      "Hva kalles aktiviteten som har fokus på å identifisere den overordnede strukturen for et system inkludert dets sub-systemer?",
    answer1: "Hoveddesign",
    answer2: "Arkitekturdesign",
    answer3: "Interfacedesign",
    answer4: "Komponentdesign",
    correctAnswer: 2
  },
  {
    question: "MODEM er en forkortelse for",
    answer1: "MOdulator / DEModulator",
    answer2: "Massive Online Digital Electric Messaging",
    answer3: "MOnitored Data EMission",
    answer4: "Mapping Of Digital Electronic Mail",
    correctAnswer: 1
  },
  {
    question:
      "ASCII-kode representerer bokstavene A til Z som sekvenser av 0 og 1 som er",
    answer1: "like lange for disse bokstavene i alfabetet.",
    answer2:
      "kortere for bokstaver tidlig i alfabetet, lenger for bokstaver sist i alfabetet.",
    answer3: "kortere for vokaler, lenger for konsonanter.",
    answer4:
      "kortere for bokstaver som forekommer hyppig i vanlig tekst, lenger for sjeldnere bokstaver.",
    correctAnswer: 1
  },
  {
    question:
      "Et nettverk som knytter sammen datamaskiner og utstyr i et begrenset område som et kontor, bygning eller i en bolig betegnes med forkortelsen:",
    answer1: "LAN",
    answer2: "MAN",
    answer3: "PAN",
    answer4: "WAN",
    correctAnswer: 1
  },
  {
    question:
      "VPN (Virtual Private Network) kan gi mottageren inntrykk av at en reisende ansatt sin bærbare PC befinner seg innenfor bedriftens nettverk ved at meldinger fra denne PC'en",
    answer1: "plasseres inni en kryptert datapakke for ekstern oversendelse",
    answer2: "sendes med en tidsforsinkelse",
    answer3: "sendes ekstra hurtig, med høy prioritet",
    answer4: "sendes med en falsk avsenderadresse som inneholder et virus",
    correctAnswer: 1
  },
  {
    question:
      "Hvilken tjeneste/applikasjon på Internett krever vanligvis IKKE lav tidsforsinkelse?",
    answer1: "On-demand Video",
    answer2: "Interaktiv audio og video",
    answer3: "Online gaming",
    answer4: "IP telefoni",
    correctAnswer: 1
  },
  {
    question: "Hvilket alternativ er IKKE en del av fossefallsmetoden",
    answer1: "Kravanalyse og definisjon",
    answer2: "System- og programvaretesting",
    answer3: "Brukergrensesnittvurdering",
    answer4: "Integrasjon og systemtesting",
    correctAnswer: 3
  },
  {
    question:
      "For et problem av størrelsen n finnes fire algoritmer med forskjellig tids-kompleksitet. Hvilken vil bruke lengst tid (i verste fall) på store problemer",
    answer1: "O(1) (konstant tid)",
    answer2: "O(n) (lineær tid)",
    answer3: "O(n<sup>2</sup>) (kvadratisk tid)",
    answer4: "O(2<sup>n</sup>) (eksponentiell tid)",
    correctAnswer: 4
  },
  {
    question: "I følge Nyquist-regelen er samplefrekvensen for lyd",
    answer1: "halvparten av de frekvensene et menneske kan høre",
    answer2: "den samme som de frekvensene et menneske kan høre",
    answer3: "det dobbelte av de frekvensene et menneske kan høre",
    answer4: "3 ganger de frekvensene et menneske kan høre",
    correctAnswer: 3
  },
  {
    question: "Den riktige rekkefølgen fra minst til størst er",
    answer1: "giga, kilo, mega, tera",
    answer2: "kilo, mega, giga, tera",
    answer3: "tera, kilo, mega giga",
    answer4: "kilo, mega, tera, giga",
    correctAnswer: 2
  },
  {
    question:
      "Gitt følgende funksjon: <br/>&nbsp&nbsp&nbspfunksjon(n): <br/>&nbsp&nbsp&nbspif n < 0: <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspreturn n + funksjon(n+1) <br/>&nbsp&nbsp&nbspelse if n> 0: <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspreturn n + funksjon(n-1) <br/>&nbsp&nbsp&nbspelse:<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspreturn 0 <br/>Hva kalles den kodeblokken som kjøres hvis n==0?",
    answer1: "rekursiv del (recursive case)",
    answer2: "iterasjonsdel (iterative case)",
    answer3: "basistilfelle (base case)",
    answer4: "returklausul (return case)",
    correctAnswer: 3
  },
  {
    question: "ALU brukes i",
    answer1: "Instruction Fetch",
    answer2: "Instruction Execution",
    answer3: "Result Return",
    answer4: "Instruction Decode",
    correctAnswer: 2
  },
  {
    question: "En digital-til-analog konverterer (DAC)",
    answer1: "Endrer digital informasjon til analog",
    answer2: "Konverterer kontinuerlig lyd til digital lyd",
    answer3: "Konverterer lyd til et elektrisk signal",
    answer4: "Gir tilnærmede verdier",
    correctAnswer: 1
  },
  {
    question: "Hvilket av de følgende er ikke et høy-nivå språk",
    answer1: "Java",
    answer2: "C",
    answer3: "Assembly",
    answer4: "Visual Basic",
    correctAnswer: 3
  },
  {
    question: "Når er et sekvensielt søk effektivt?",
    answer1: "Når datamengden er sortert",
    answer2: "Når dataene er tall",
    answer3: "Sekvensielle søk er aldri effektive",
    answer4: "Når det det letes etter ligger tidlig i datamengden",
    correctAnswer: 4
  },
  {
    question:
      "Sangen «A little bit» er 3 minutter og 47 sekunder lang. Hvor mange bit trengs for å lagre den i stereo på en vanlig musikk-CD?",
    answer1: "1 411 200",
    answer2: "40 042 800",
    answer3: "84 672 000",
    answer4: "320 342 400",
    correctAnswer: 4
  },
  {
    question: "Hva er VPN",
    answer1:
      "En metode som brukes for å oversette logiske navn til et IP-nummer",
    answer2: "En del av TCP/IP spesifikasjonen",
    answer3:
      "En måte å etablere en trygg/kryptert kommunikasjonskanal mellom to maskiner",
    answer4:
      "En metode en internettleverandør bruker for å distribuere sensitivt innhold",
    correctAnswer: 3
  },
  {
    question: "En router er",
    answer1: "en datamaskin som forbinder flere nettverk",
    answer2: "et program som sender informasjonspakker mellom 2 datamaskiner",
    answer3:
      "et program som setter sammen informasjonspakkene til meldinger før den leveres til mottaker",
    answer4: "en datamaskin som er koblet på internett",
    correctAnswer: 1
  },
  {
    question:
      "Gitt navnelisten «Alice, Byron, Carol, Duane, Elaine, Floyd, Gene, Henry, Iris». Hvilken søkealgoritme vil finne Carol først (gjøre færrest sammenligninger)?",
    answer1: "Binærsøk",
    answer2: "Sekvensielt søk",
    answer3: "Begge vil finne Carol like raskt",
    answer4: "Svaret er avhengig av hvordan binærsøkalgoritmen er implementert",
    correctAnswer: 4
  },
  {
    question: "Hvor mange steg er det i Fetch/Execute syklusen",
    answer1: "3",
    answer2: "4",
    answer3: "5",
    answer4: "6",
    correctAnswer: 3
  },
  {
    question: "Programtelleren endres direkte av instruksjoner som kalles",
    answer1: "Add and Multiply",
    answer2: "Branch and Jump",
    answer3: "Input and Output",
    answer4: "Now and Next",
    correctAnswer: 2
  },
  {
    question: "Hvordan representeres det heksadesimale tallet A8 binært",
    answer1: "10101000",
    answer2: "10010100",
    answer3: "11001000",
    answer4: "10001100",
    correctAnswer: 1
  },
  {
    question: "Forkortelsen DDOS i pensum står for…",
    answer1: "Digital Disk Operating System",
    answer2: "Double Density Optical Storage",
    answer3: "Distributed Denial Of Service",
    answer4: "Data Directory On Site",
    correctAnswer: 3
  },
  {
    question:
      "Person A skal sende en konfidensiell melding til person B. Hva slags krypteringsnøkler skal i så fall brukes?",
    answer1:
      "A krypterer med A sin private nøkkel, B dekrypterer med A sin offentlige nøkkel",
    answer2:
      "A krypterer med B sin private nøkkel, B dekrypterer med A sin offentlige nøkkel",
    answer3:
      "A krypterer med B sin offentlige nøkkel, B dekrypterer med B sin private nøkkel",
    answer4:
      "A krypterer med B sin offentlige nøkkel, B dekrypterer med A sin offentlige nøkkel",
    correctAnswer: 3
  },
  {
    question:
      "Brannmur (firewall) er en type sikkerhetsteknologi. Hva er den mest korrekte og relevante påstanden når det gjelder brannmurer og trusler fra såkalte trojanske hester ('Trojan Horses')?",
    answer1:
      "Brannmurer kan verne mot trojanske hester ved å hindre uventet internett-trafikk fra utsida og inn til et system",
    answer2:
      "Brannmurer kan verne mot trojanske hester ved å hindre uventet trafikk fra innsiden og ut til internett.",
    answer3:
      "Brannmurer kan verne mot trojanske hester ved å advare brukerne mot å åpne falske epostmeldinger",
    answer4:
      "Brannmurer gir IKKE vern mot trojanske hester. Bare antivirusprogramvare er effektivt mot trojanske hester.",
    correctAnswer: 2
  },
  {
    question:
      "Vi har 1750 ulike tilstander som vi ønsker å representere. Hvor mange bit må vi minst bruke?",
    answer1: "En byte (8 bit)",
    answer2: "11 bit",
    answer3: "12 bit",
    answer4: "2 byte (16 bit)",
    correctAnswer: 2
  },
  {
    question:
      "Anta at en RGB-farge angis med heksadesimale tall. Hvilken kode representerer en mørkegrå farge?",
    answer1: "#FFFFFF",
    answer2: "#404040",
    answer3: "#506496",
    answer4: "#300000",
    correctAnswer: 2
  },
  {
    question:
      "Hvor mye plass tar 20 minutter med (ukomprimert) stereo lyd av CD-kvalitet?",
    answer1: "Omtrent 200 MB",
    answer2: "Omtrent 500 MB",
    answer3: "Omtrent 20 MB",
    answer4: "Omtrent 1 GB",
    correctAnswer: 1
  },
  {
    question:
      "Anta IEEE floating-point representation av tall. Hvilken påstand er riktig?",
    answer1:
      "Representasjonen består av tre deler: Fortegn, mantisse og eksponent.",
    answer2: "Nøyaktigheten påvirkes av antall bits i mantissen",
    answer3:
      "Størrelsen på tallområdet som kan representeres påvirkes av antall bits i eksponenten",
    answer4: "Alle påstandene er riktige.",
    correctAnswer: 4
  },
  {
    question:
      "Anta at et telefonnr (8 siffer) skal lagres. Hvilken representasjon tar minst plass?",
    answer1: "Som heltall",
    answer2: "Som en streng av ASCII-tegn",
    answer3: "Som double",
    answer4: "Alternativene tar like mye plass",
    correctAnswer: 1
  },
  {
    question: "Hvert skritt i binærsøkalgoritmen",
    answer1: "halverer søkerommet",
    answer2: "finner søkenøkkelen",
    answer3: "flytter et element",
    answer4: "bytter 2 elementer",
    correctAnswer: 1
  },
  {
    question:
      "Hvilket av følgende er et krav på ei liste der vi vil bruke innstikksorteringsalgoritmen?",
    answer1: "Listen må ha et odde antall elementer",
    answer2: "Elementene må være sorterte",
    answer3: " Det må finnes måter å fjerne og legge til elementer i listen",
    answer4: "Ingen av disse kravene trenger å være oppfylt",
    correctAnswer: 3
  },
  {
    question:
      "Hva er den raskeste sikre måten å søke etter en enkelt verdi i en usortert tallrekke?",
    answer1:
      "Skanne lineært gjennom alle elementene i rekken til verdien er funnet",
    answer2: "Sortere rekken og utføre binærsøk",
    answer3: "Velge tilfeldige elementer fra rekken til tallet er funnet",
    answer4: "Det finnes ingen raskeste sikker måte",
    correctAnswer: 1
  },
  {
    question: "Verste fall i en lineær søkealgoritme oppstår når",
    answer1: "det søkte elementet er et sted i midten av listen",
    answer2: "det søkte elementet ikke er i listen i det hele tatt",
    answer3: "det søkte elementet er det siste elementet i listen",
    answer4:
      "det søkte elementet er det siste elementet i listen eller ikke er der i det hele tatt",
    correctAnswer: 4
  },
  {
    question: "Hvilken minneteknologi er raskest?",
    answer1: "DDR-RAM",
    answer2: "SSD",
    answer3: "Cache",
    answer4: "Alle disse er like raske",
    correctAnswer: 3
  },
  {
    question: "Hvordan virker monitoren?",
    answer1: "Den viser tre forskjellige farger i hver piksel",
    answer2:
      "Den blander fargene Rød, Gul og Blå for å lage alle mulige farger",
    answer3:
      "Den regulerer lysstyrken avhengig av frekvensen på signalene fra maskinen",
    answer4: "Alle alternativene er riktige",
    correctAnswer: 1
  },
  {
    question: "Hva er sant angående primær- og sekundærminne?",
    answer1: "Primærminnet er permanent (ikke-flyktig)",
    answer2: "Sekundærminnet kalles ofte for RAM",
    answer3: "Primærminnet er mye større enn sekundærminnet",
    answer4: "Ingen av de andre alternativene er riktig",
    correctAnswer: 4
  },
  {
    question:
      "Hva er sant angående datamaskiners historiske ytelses-forbedringer",
    answer1:
      "Maskinen kan gå fortere jo tettere transistorene i hver integrerte krets er",
    answer2: "Miniatyrisering gjør at klokkefrekvensen kan være over 1 GHz",
    answer3:
      "Moores lov sier at antall transistorer på et areal dobles hvert andre år",
    answer4: "Alle alternativene er riktige",
    correctAnswer: 4
  },
  {
    question: "Hvilke fem typer hoved-kretser finnes i Prosessoren (CPU)?",
    answer1:
      "Instruksjon-hent (IF), Inst.-dekod (ID), Data-hent (DF), utfør (EX), Resultat-retur (RR)",
    answer2:
      "Kontrollenhet, Aritmetisk-logisk enhet (ALU), Register, Input- og Outputkretser",
    answer3: "Ingen av de andre alternativene er riktig",
    answer4: "BIOS, ROM, Primærminne (RAM), Sekundærminne, Cache",
    correctAnswer: 2
  },
  {
    question: "Hvilken oppgave har TCP protokollen som brukes på Internett ?",
    answer1: "Tildeling av IP adresse, nettmaske og default gateway",
    answer2: "Tilby logiske forbindelser og multipleksing av disse",
    answer3: "Feilkorrigerende koding",
    answer4: "Paritet, CRC eller Hash funksjoner",
    correctAnswer: 2
  },
  {
    question:
      "Dersom man ofte opplever at en tjeneste ikke virker når den ønskes benyttet, så beskrives dette som:",
    answer1: "Dårlig ytelse på din forbindelse til Internett",
    answer2: "Lav tilgjengelighet for den aktuelle tjenesten",
    answer3: "Lav tiltro til den aktuelle tjenesten",
    answer4: "Ustabil eller falsk DNS funksjon",
    correctAnswer: 2
  },
  {
    question:
      "Hvilke aspekter beskriver best de tekniske egenskapene ved en aksessteknologi?",
    answer1: "Kapasitet, Markedsandel og Prismodell",
    answer2: "Protokoller, Installasjon og Terminalutstyr",
    answer3: "Fleksibilitet, Pris og Bruksmønster",
    answer4: "Kvalitet, Kapasitet og Effektivitet",
    correctAnswer: 4
  },
  {
    question:
      "Hvordan kan man oppdage om en melding har blitt endret underveis fra sender til mottaker?",
    answer1: "Ved å benytte analog signatur",
    answer2: "Ved å benytte IPv6 i stedet for IPv4",
    answer3:
      "Ved å benytte funksjoner som kan brukes av mottaker til å verifisere integriteten til meldingen",
    answer4:
      "Ved å benytte funksjoner for å bevare konfidensialiteten til meldingen",
    correctAnswer: 3
  },
  {
    question:
      "Hvorfor benyttes ofte CRC for å detektere feil i digitale signaler?",
    answer1: "Fordi CRC har gode egenskaper med tanke på å oppdage burstfei",
    answer2:
      "Fordi CRC er bedre enn paritet og enkel sjekksum, samt like bra som hash funksjoner",
    answer3: "På grunn av at CRC er veldig enkelt og effektivt",
    answer4: "CRC har bra støtte i standardiserte protokoller",
    correctAnswer: 1
  },
  {
    question:
      "Hva kalles typen datamaskin som typisk brukes til tyngre oppgaver som værberegninger?",
    answer1: "Arbeidsstasjon",
    answer2: "Mikrodatamaskin",
    answer3: "Stormaskin",
    answer4: "Superdatamaskin",
    correctAnswer: 4
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE et mikrokontroller?",
    answer1: "Kalles også innebygd datamaskin",
    answer2: "Brukes som en del av diverse utstyr og kjøretøyer",
    answer3: "Benytter alltid store sekundærlager",
    answer4: "Finnes i mikrobølgeovn, tastatur, klokker, etc.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE programvare (software)?",
    answer1: "En CD-plate",
    answer2: "Operativsystemet",
    answer3: "Utstyrsdrivere (device drivers)",
    answer4: "Hjelpeprogrammer (utility programs)",
    correctAnswer: 1
  },
  {
    question: "Hvilket alternativ beskriver sekundærminne?",
    answer1: "Harddisk",
    answer2: "CD/DVD",
    answer3: "Minnepenn",
    answer4: "Alle alternativene er riktig",
    correctAnswer: 4
  },
  {
    question:
      "Hvilket alternativ beskriver IKKE en utenhet (output) i en datamaskin?",
    answer1: "Monitor",
    answer2: "CPU",
    answer3: "Høyttaler",
    answer4: "Printer",
    correctAnswer: 2
  },
  {
    question: "Hvor mange bytes er 1 kilobyte?",
    answer1: "1000 bytes",
    answer2: "1024 bytes",
    answer3: "1048 bytes",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva er korrekt angående systemprogramvaren i en datamaskin?",
    answer1:
      "Gjør det mulig for applikasjonsprogramvare å kommunisere med datamaskin",
    answer2:
      "Hjelper datamaskinen til å håndtere sine egne interne og eksterne ressurser",
    answer3:
      "Inkluderer utstyrsdrivere (device drivers) og hjelpeprogrammer (utility programs",
    answer4: "Alle alternativene er riktige",
    correctAnswer: 4
  },
  {
    question: "Hva legges i begrepet ”booting”?",
    answer1: "Prosessen å laste inn operativsystemet i minne til en datamaskin",
    answer2:
      "Prosessen å laste inn applikasjonsprogramvare i minne til en datamaskin",
    answer3: "Prosessen å skifte mellom to programmer i et operativsystem",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question:
      "Hvilket alternativ stemmer IKKE angående beskrivelser av et operativsystem?",
    answer1: "Håndterer grunnleggende dataoperasjoner på et lavt nivå",
    answer2:
      "De fleste applikasjonsprogrammer er skrevet for å kjøre på et spesifikt operativsystem",
    answer3:
      "Man kan starte programmer direkte utenom operativsystemet på de fleste universelle datamaskiner (PCer)",
    answer4:
      "Operativsystemet tar seg av oppgaver som oppstart, prosessorhåndtering, filhåndtering, oppgavehåndtering og sikkerhetshåndtering",
    correctAnswer: 3
  },
  {
    question: "Hva står forkortelsen ”BIOS” for?",
    answer1: "Binary Intermediate Operating System",
    answer2: "Basic Input/Output System.",
    answer3: "Boot In Open Software",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question:
      "Hvordan kan datamaskin med en prosessor (CPU) som kun kan kjøre en instruksjon av gangen kjøre flere programmer samtidig (multi-tasking)?",
    answer1: "Det er ikke mulig",
    answer2: "Hvert program får tildelt litt prosesseringstid",
    answer3:
      "Datamaskinen bruker andre enheter som grafikkort til å utføre programmer",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva er oppgaven til utstyrsdrivere (device drivers)?",
    answer1: "Forenkle kommunikasjon mellom datamaskinen og eksternt utstyr",
    answer2: "Bestemme hvilke programmer som skal kjøres i prosessoren (CPUen)",
    answer3:
      "Sørge for at alle eksterne enheter kan tilkobles ved hjelp av USB",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva betyr begrepet båndbredde (bandwidth)?",
    answer1:
      "Beskriver hvilke radiofrekvenser et trådløstnettverk kommuniserer over",
    answer2: "Beskriver fysisk bredde på optisk fiber eller nettverkskabler",
    answer3:
      "Uttrykk for hvilken type data som kan sendes over en kommunikasjonskanal",
    answer4:
      "Uttrykk for hvor mye data som kan sendes over en kommunikasjonskanal",
    correctAnswer: 4
  },
  {
    question: "Hvilken teknologi har potensielt størst overføringskapasitet?",
    answer1: "ADSL",
    answer2: "Optisk fiber",
    answer3: "Koaksialkabel",
    answer4: "Wi-Fi",
    correctAnswer: 2
  },
  {
    question:
      "Omtrent hvor mange unike adresser tilbyr IPv4 (Internet Protocol ver. 4)?",
    answer1: "4,29 millioner",
    answer2: "429 millioner",
    answer3: "4,29 milliarder",
    answer4: "429 milliarder",
    correctAnswer: 3
  },
  {
    question:
      "Hva består den første delen av en Uniform Resource Locator (URL) av?",
    answer1: "Domenenavn",
    answer2: "Protokoll",
    answer3: "Type webdokument (f.eks. HTML, php, asp, jsp)",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva står HTML for?",
    answer1: "Horizontal Text Modelling Language",
    answer2: "Hypertext Modelling Language",
    answer3: "Hypertext Markup Language",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question: "Hva ligger i begrepet ”spoofing”?",
    answer1: "Bombardere en nettside med stor datatrafikk",
    answer2: "Opprette nettsider som utgir seg for å være noe annet enn de er",
    answer3: "Bryte seg inn i et datasystem",
    answer4: "Sende epost med falsk avsender",
    correctAnswer: 4
  },
  {
    question: "Hva er et hovedkort (motherboard)?",
    answer1: "Bunnplata i et PC kabinett",
    answer2: "Sekundærminnet i en PC",
    answer3:
      "Et kretskort i en datamaskin der enheter som CPU, RAM, og andre enheter kobles sammen",
    answer4: "Et minnekort for å lagre ultralydbilder",
    correctAnswer: 3
  },
  {
    question: "Hva gjør en enhetstest?",
    answer1: "Tester individuelle deler av programvaren",
    answer2: "Tester at selve datamaskinen (maskinvaren) fungerer",
    answer3:
      "Tester at ulike deler av systemet fungerer sammen på en korrekt måte",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva definerer et ”peer-to-peer” nettverk?",
    answer1: "En er slave, de andre er sjefer",
    answer2: "En er sjef, de andre er salver",
    answer3: "Alle er likeverdige",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question:
      "På nettsiden www.ntnu.no/student finner du en lenke til følgende dokument 'info.html'. Hvilken type lenke er dette?",
    answer1: "Absolutt hyperlenke",
    answer2: "Relativ hyperlenke",
    answer3: "Modifiserende hyperlenke",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva er et flytskjema innen programmering?",
    answer1: "En grafisk representasjon av en algoritme",
    answer2:
      "En presis beskrivelse av en endelig serie operasjoner som skal utføres for å løse et problem",
    answer3: "En tekstlig beskrivelse som beskriver flyten i et program",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva er en pakke (packet) i nettverkssammenheng?",
    answer1:
      "En datablokk av fast lengde som sendes gjennom nettverket, fra avsender til mottaker.",
    answer2:
      "En datamelding som har ankommet og som står i kø for å bli levert til mottakermaskinen",
    answer3:
      "Den datamengden som utveksles mellom to datamaskiner som kommuniserer via nettverket.",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question:
      "Hvilken av disse lagringsenhetene er ikke en sekundærlagrings-enhet?",
    answer1: "En harddisk",
    answer2: "En datamaskins hurtigbuffer (cache)",
    answer3: "En minnepinne",
    answer4: "Alle alternativene er sekundærlagringsenheter",
    correctAnswer: 2
  },
  {
    question:
      "Hvilket mål brukes vi vanligvis på overføringskapasitet i nettverk?",
    answer1: "Bits pr sekund (bps)",
    answer2: "Gigabyte",
    answer3: "Båndbredde",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva definerer et klient/tjener ('client/server') forhold?",
    answer1: "Klienter tilbyr data og tjenester til tjenere.",
    answer2: "Klienter og tjenere tilbyr data og tjenester til hverandre",
    answer3: "Tjenere tilbyr data og tjenester til klienter",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question: "Hvordan kan en GPS bestemme en posisjon?",
    answer1:
      "En GPS beregner sin posisjon ved å lokalisere nærmeste mobile basestasjon",
    answer2:
      "En GPS beregner sin posisjon ved å bruke lokasjonen til flere satellitter",
    answer3:
      "En GPS beregner sin posisjon ved å bruke lokasjon til kun en satellitt",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva er Wi-Fi?",
    answer1: "Et sett av standarder for trådløs dataoverføring",
    answer2: "En kvalitetsbetegnelse for trådløse nett",
    answer3: "Et mål på kvaliteten på en bredbåndabonnentslinje inn til huset",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "En device driver er:",
    answer1: "en spesialdatamaskin for kjøretøy",
    answer2:
      "spesialisert programvare for input/output, slik at utstyr kan kommunisere med resten av systemet",
    answer3:
      "enheten som holder rede på neste instruksjon som skal utføres av en prosessor",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Et maskinspråk (machine language) er:",
    answer1:
      "et programmeringsspråk som oversettes av en kompilator (oversetter) til kjørbar kode",
    answer2:
      "et binær-type programmeringsspråk bygd inn i prosessoren som datamaskinen kan kjøre direkte",
    answer3:
      "er programmeringsspråk som er felles for alle datamaskiner slik at de kan kommunisere",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Ordstørrelse (word size) for en prosessor er",
    answer1: "antall ord i en tekst som kan sammenlignes i et søk",
    answer2: "antall bokstaver som kan behandles i en tekststreng",
    answer3: "antall bit en prosessor kan prosessere på en gang",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question: "Ytelse for superdatamaskiner måles i",
    answer1: "FLOPS",
    answer2: "Gigabytes",
    answer3: "Antall prosessorkjerner",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Systemklokka i en datamaskin",
    answer1: "fordeler tiden som brukes på ulike programmer",
    answer2: "bestemmer hvor raskt operasjoner i en mikroprosessor utføres",
    answer3: "sørger for at dato og tid alltid er riktig satt",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hva vil det si å vedlikeholde et informasjonssystem?",
    answer1: "Rette opp eksisterende feil i systemet",
    answer2: "Utføre endringer i systemet basert på nye betingelser",
    answer3: "Oppdatere dokumentasjon",
    answer4: "Alle alternativene er riktig",
    correctAnswer: 4
  },
  {
    question: "Hva er et flytskjema?",
    answer1: "Grafisk representasjon av en algoritme",
    answer2: "Et skjema for å fylle inn informasjon på en webside",
    answer3: "Et skjema som dokumenterer sikkerhet i et databasesystem",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva står ACID for innen databaser?",
    answer1: "Appropriate, Cynical, Isolation, Development",
    answer2: "Appropriate, Collaborative, Irrelevant, Driver",
    answer3: "Atomicity, Consistency, Isolation, Durability",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question: "Hva er en tjener i en klient-/tjenerarkitektur?",
    answer1: "En tjener utfører tjenester på vegne av en klient",
    answer2: "En tjener etterspør tjenester fra klienter",
    answer3: "En tjener er et program som vil ha noe utført på en annen maskin",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva er hovedoppgaven til en navnetjener?",
    answer1: "Å oversette domenenavn til IP-adresser",
    answer2: "Å oversette IP-adresser til domenenavn",
    answer3: "Å holde rede på definerte variabelnavn når et program kjører",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Når kan man ikke benytte seg av binærsøkingsalgoritmen?",
    answer1: "Når datamengden er så stor at det vil ta for lang tid",
    answer2:
      "Når det er stor sannsynlighet for at det man søker etter ikke finnes i datamengden",
    answer3: "Når datamengden ikke er sortert",
    answer4: "Man kan alltid bruke binærsøkingsalgoritmen",
    correctAnswer: 3
  },
  {
    question:
      "Hva er i lovverket ikke definer som sensitive personopplysninger:",
    answer1: "Etnisk bakgrunn",
    answer2: "Politisk oppfatning",
    answer3: "Filosofisk oppfatning",
    answer4: "Alle alternativene er sensitive personopplysninger",
    correctAnswer: 4
  },
  {
    question: "Hva blir resultatet når 81 kodes binært (i 2-tallsystemet)?",
    answer1: "1011011",
    answer2: "1010101",
    answer3: "1010001",
    answer4: "Ingen av alternativene er riktige",
    correctAnswer: 3
  },
  {
    question:
      "Hva tilsvarer ABCD i det heksadesimale tallsystemet (16-tallsystemet) i 10-tallsystemet?",
    answer1: "42561",
    answer2: "43981",
    answer3: "44981",
    answer4: "Ingen av alternativene er riktige",
    correctAnswer: 2
  },
  {
    question: "QoS er forkortelse for:",
    answer1: "Quantity of Storage",
    answer2: "Quality of Servers",
    answer3: "Quality of Service",
    answer4: "Ingen av alternativene er riktige",
    correctAnswer: 3
  },
  {
    question:
      "Anta at karakterene har følgende fordeling: A (12 %), B (24 %), C (35 %), D (20 %), E (7%) og F (2 %). Hva er en korrekt Huffmankoding for A-F?",
    answer1: "A: 001 B: 10 C: 11 D: 01 E: 0001 F: 0000",
    answer2: "A: 010 B: 01 C: 10 D: 111 E: 1110 F: 1111",
    answer3: "A: 1111 B: 11 C: 1 D. 111 E: 11111 F: 111111",
    answer4: "Ingen av alternativene i a, b og c",
    correctAnswer: 1
  },
  {
    question: "En IP-adresse er:",
    answer1:
      "En numerisk adresse som identifiserer en datamaskin eller annen type enhet i et IP-nettverk",
    answer2:
      "En mekanisme som gjør det mulig å kontakte en Internett Provider, for eksempel når det oppstår feil i nettet",
    answer3: "Et felt som identifiserer data i en relasjonsdatabase",
    answer4: "Ingen av alternativene i a, b og c",
    correctAnswer: 1
  },
  {
    question: "Hva betyr Random Access Memory?",
    answer1: "At det er tilfeldig hvor maskinen lagrer informasjon.",
    answer2:
      "At hukommelsescellene kan aksesseres direkte i tilfeldig rekkefølge.",
    answer3:
      "Hukommelsen er plassert på forskjellige, tilfeldige, plasser på hovedkortet.",
    answer4: "At det kan oppstå tilfeldige feil i deler av hukommelsen.",
    correctAnswer: 2
  },
  {
    question: "Når brukes fotolitografi i produksjonen av datamaskiner?",
    answer1: "Når man etser inn navnene på portene bak på maskinen. ",
    answer2: "Under produksjon av integrerte kretser.",
    answer3: "Når man lager bildene som skal inn i brukermanualen.",
    answer4: "Når man monterer integrerte kretser på kretskortene.",
    correctAnswer: 2
  },
  {
    question: "Hva er «pipelining»?",
    answer1:
      "Et uttrykk for det som skjer når man skriver mye data til harddisken samtidig.",
    answer2:
      "En teknikk der man sender data mellom de forskjellige delene i maskinen i «pipes».",
    answer3: "En teknikk der en CPU kan utføre flere instruksjoner parallelt.",
    answer4:
      "En teknikk som fungerer som en ”sikker tunnel” mellom din maskin og en tjener.",
    correctAnswer: 3
  },
  {
    question:
      "Hva finner alle burst-feil med lengde n bit, gitt en n-bit maske, men er uegnet til kryptografi?",
    answer1: "Enkel sjekksum",
    answer2: "HASH-funksjoner",
    answer3: "Paritet",
    answer4: "Syklisk sjekksum (CRC)",
    correctAnswer: 4
  },
  {
    question: "I TCP/IP-protokollen …",
    answer1: "sendes alle pakkene sendes langs den samme ruten til mottakeren.",
    answer2: "brukes pakkesvitsjing.",
    answer3: "mottas ingen ting før siste IP-pakke er framme.",
    answer4:
      "er det mindre interferens pga. at mindre biter sendes hver for seg.",
    correctAnswer: 2
  },
  {
    question: "Hva blir det binære tallet 10101010 desimalt?",
    answer1: "170",
    answer2: "180",
    answer3: "190",
    answer4: "200",
    correctAnswer: 1
  },
  {
    question: "Hvilken av følgende RGB-fargekodinger gir blått?",
    answer1: "f1faf0",
    answer2: "120012",
    answer3: "0000ff",
    answer4: "884311",
    correctAnswer: 3
  },
  {
    question:
      "Vi har en liste av navn, à la liste = [ 'Jo Å', 'Geir Li', 'Ine By'] men i praksis med vesentlig flere navn enn dette. Lista er ikke sortert og kan inneholde duplikater (dvs. samme navn kan stå flere sted i lista). Vi skal skrive en funksjon antall (liste, navn) som skal returnere et heltall som sier hvor mange ganger navnet forekommer i lista. Vi kladder følgende <br> pseudokode: <br><div class='tab'> </div>  <div class=\"code\">function antall (liste, navn):<br><div class='tab'> </div> <div class='tab'> </div>  antall ← 0 <br> <div class='tab'> </div> <div class='tab'> </div>  la n gå fra og med første til og med siste element i liste: <br> <div class='tab'> </div>  <div class='tab'> </div>  <div class='tab'> </div>  hvis n == navn:<br><div class='tab'> </div> <div class='tab'> </div> <div class='tab'> </div>  <div class='tab'> </div>  antall ←antall + 1<br><div class='tab'> </div> <div class='tab'> </div>  returner antall <br> </div> Spørsmål: Kjøretidskompleksiteten til pseudokoden over vil være?",
    answer1: "Θ(n)",
    answer2: "Θ(n log n)",
    answer3: "Θ(log n)",
    answer4: "Θ(n<sup>2</sup>)",
    correctAnswer: 1
  },
  {
    question:
      "I ei sortert liste kunne vi brukt binærsøk i stedet for løkka \"la n gå… \" i pseudokoden: <br><div class='tab'> </div>  <div class=\"code\">function antall (liste, navn):<br><div class='tab'> </div> <div class='tab'> </div>  antall ← 0 <br> <div class='tab'> </div> <div class='tab'> </div>  la n gå fra og med første til og med siste element i liste: <br> <div class='tab'> </div>  <div class='tab'> </div>  <div class='tab'> </div>  hvis n == navn:<br><div class='tab'> </div> <div class='tab'> </div> <div class='tab'> </div>  <div class='tab'> </div>  antall ←antall + 1<br><div class='tab'> </div> <div class='tab'> </div>  returner antall <br> </div> En alternativ algoritme som først sorterer lista, og deretter bruker binærsøk for å finne navnet, vil ha…",
    answer1:
      "lavere kompleksitet (dvs. være raskere) enn pseudokoden gitt over.",
    answer2: "høyere kompleksitet enn pseudokoden over.",
    answer3: "samme kompleksitet som pseudokoden over.",
    answer4:
      "høyere kompleksitet hvis navnet fins null eller én gang i lista, lavere hvis det fins flere ganger.",
    correctAnswer: 2
  },
  {
    question:
      "Funksjonen antall for ei usortert liste, som beskrevet i spørsmål 8, kan i Python implementeres ved den innebygde funksjonen count, som gjør at funksjonskroppen kan skrives som en eneste kodelinje. For eksempel <br> def antall (liste, navn): <br> <div class='tab'> </div>  return liste.count(navn) <br> Spørsmål: Hvilken kjøretidskompleksitet vil denne koden ha?",
    answer1: "Θ(1)",
    answer2: "Θ(log n)",
    answer3: "Θ(n)",
    answer4: "Θ(n<sup>2</sup>)",
    correctAnswer: 3
  },
  {
    question:
      "Hvorfor ønsker man å bruke en SSD heller enn en vanlig magnetisk harddisk?",
    answer1:
      "En SSD øker minnet på grafikkortet slik at spill og lignende flyter bedre.",
    answer2:
      "I en SSD lagres data i elektroniske kretser. Det er ingen bevegelige deler, og dermed blir disken raskere og mer pålitelig. ",
    answer3: "Det er lettere å lagre data permanent på en SSD.",
    answer4:
      "En SSD er ikke så utsatt for strømtopper og tåler derfor mer enn en magnetisk disk.",
    correctAnswer: 2
  },
  {
    question: "Hva betyr modulering i f.eks. FM og AM?",
    answer1: "Det beskriver hvordan man kan sende et signal over en bærebølge.",
    answer2: "Det beskriver hvordan man kan få oversikt over hele internett.",
    answer3:
      "Det beskriver hvordan man kan øke strømstyrken slik at flere får tilgang.",
    answer4:
      "Det beskriver hvordan man kan gruppere internett i hensiktsmessige biter.",
    correctAnswer: 1
  },
  {
    question:
      "Dersom tekststreng 'Hallo' i ASCII representeres som følgende tall heksadesimalt: 48 61 6c 6c 6f, hvordan representerer man på samme måte 'Morna'?",
    answer1: "4e 65 69 64 61",
    answer2: "4e 54 4e 55 21",
    answer3: "4d 6f 72 6e 61",
    answer4: "55 66 6g 7h 61",
    correctAnswer: 3
  },
  {
    question:
      "Hvor mange bytes trengs for å lagre et 24-bits bilde med 1280x1024 piksler uten komprimering?",
    answer1: "Ca. 3,8MB",
    answer2: "Ca. 1,2MB",
    answer3: "Ca. 24MB",
    answer4: "Ca. 24GB",
    correctAnswer: 1
  },
  {
    question:
      "Hva er den første aktiviteten i ”requirement engineering”-prosessen i følge læreboka?",
    answer1: "Gjennomførbarhetsstudie.",
    answer2: "Kravinnhenting og analyse.",
    answer3: "Kravspesifisering.",
    answer4: "Validering av krav.",
    correctAnswer: 1
  },
  {
    question: "Hva er akseptansetesting?",
    answer1: "Teste hvordan ulike deler av systemet fungerer sammen.",
    answer2: "Teste at hver enkelt funksjon i systemet fungerer som den skal.",
    answer3: "Teste at operativsystemet aksepterer systemet på plattformen.",
    answer4:
      "Teste med kundedata for å sjekke om systemet møter kundens behov.",
    correctAnswer: 4
  },
  {
    question: "Hvilken av følgende teknikker er en tapsløs komprimering?",
    answer1: "Run-length encoding.",
    answer2: "Analog-to-digital conversion.",
    answer3: "JPEG-encoding. ",
    answer4: "Check-sum generation.",
    correctAnswer: 1
  },
  {
    question:
      "Hva er det Boehm’s spiralmodell inneholder, som man ikke finner i vannfallsmodellen eller inkrementell utvikling?",
    answer1: "Risikoanalyse.",
    answer2: "Testing/Validering.",
    answer3: "Kravspesifisering.",
    answer4: "Vedlikehold.",
    correctAnswer: 1
  },
  {
    question: "En byte inneholder hvor mange bits?",
    answer1: "1",
    answer2: "8",
    answer3: "16",
    answer4: "32",
    correctAnswer: 2
  },
  {
    question:
      "Hva kalles en test der man bare ser på inputs og outputs av en funksjon?",
    answer1: "Hvitbokstest (white box test).",
    answer2: "IO-test (Input Output test).",
    answer3: "Svartbokstest (black box test).",
    answer4: "Integrasjonstest.",
    correctAnswer: 3
  },
  {
    question: "Omtrent hvor mange enheter er koblet til Internett i dag?",
    answer1: "Halvparten så mange som det finnes mennesker på jorden.",
    answer2: "Like mange som det finnes mennesker på jorden.",
    answer3: "Over tre ganger så mange som det finnes mennesker på jorden.",
    answer4: "Det er det umulig å svare på.",
    correctAnswer: 3
  },
  {
    question: "Hva er en transistor?",
    answer1:
      "Enheten som omformer 220V vekselstrøm til likestrøm som kan brukes til de ulike enhetene (CPU, lydkort, grafikkort, harddisk, RAM osv.) i datamaskinen.",
    answer2:
      "Et kretskort der man kobler samme de ulike delene i en datamaskin, som CPU, minne, lydkort, grafikkort, RAM osv.",
    answer3:
      "En bryter som det kan enten gå strøm igjennom eller ikke, som man kan endre ved hjelp av strøm.",
    answer4:
      "Algoritmen fra å gjøre om fysiske lydsignaler til digital representasjon av 0er og 1ere.",
    correctAnswer: 3
  },
  {
    question: "Hvordan representeres desimaltallet 321 som et binært tall?",
    answer1: "1100101",
    answer2: "11001001",
    answer3: "100101101",
    answer4: "101000001",
    correctAnswer: 4
  },
  {
    question: "Hva er hensikten med en DAC?",
    answer1: "Konvertere fra analogt til digitalt signal.",
    answer2: "Konvertere fra digitalt til analogt signal.",
    answer3: "Komprimere et digitalt signal.",
    answer4: "Øke samplingsraten.",
    correctAnswer: 2
  },
  {
    question:
      "Hva får vi med like mengder av rødt, grønt og blått i et punkt på en skjerm?",
    answer1: "Sort, hvitt eller gråtoner.",
    answer2: "Cyan, magenta og gult.",
    answer3: "Brunt.",
    answer4: "Fiolett.",
    correctAnswer: 1
  },
  {
    question: "Hva menes med 'sampling rate' under digitalisering av lyd?",
    answer1: "Hvor hyppig man måler lyden.",
    answer2: "Frekvensen på lyden som skal digitaliseres.",
    answer3: "Nøyaktigheten/antall bits i måleverdien.",
    answer4: "Den maksimale lydstyrken/volumet som kan digitaliseres.",
    correctAnswer: 1
  },
  {
    question: "Hva er RGB?",
    answer1: "Random GB - hukommelsen i en datamaskin.",
    answer2:
      "En fargemodell for reflektert lys som viser hvordan alle farger dannes fra primærfargene.",
    answer3:
      "En fargemodell for utstrålt lys som viser hvordan alle farger dannes fra primærfargene.",
    answer4: "Rødt, Gult og Blått - primærfargene i reflektert lys.",
    correctAnswer: 3
  },
  {
    question: "Hva er «booting» av en datamaskin?",
    answer1: "Prosessen som starter opp datamaskinen.",
    answer2: "Endre systeminnstillinger på en datamaskin.",
    answer3: "Sjekke om datamaskinen er smittet av et virus (en boot).",
    answer4: "Sparke til en datamaskin når den ikke gjør det man ønsker.",
    correctAnswer: 1
  },
  {
    question: "Hva ligger i begrepet ”system engineering” i følge læreboka?",
    answer1:
      "”System engineering” fokuserer på underliggende teorier og metoder som utgjør datasystemer.",
    answer2:
      "”System engineering” fokuserer på praktiske problemer med å produsere programvare.",
    answer3:
      "”System engineering” inkluderer alle aspekter av utvikling og evolusjon av komplekse systemer hvor programvare spiller en viktig rolle.",
    answer4: "”System engineering” og ”Software engineering” er det samme.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilke av disse enhetene er vanligvis involvert i ”Fetch/Execute Cycle”?",
    answer1: "ALU, CU (Control Unit), RAM.",
    answer2: "ROM, ALU, RAM.",
    answer3: "CU, RAM, ROM.",
    answer4: "OS, ALU, CU.",
    correctAnswer: 1
  },
  {
    question:
      "Hva går aktiviteten arkitekturdesign (architectural design) ut på?",
    answer1: "Definere grensesnitt mellom systemkomponenter.",
    answer2: "Designe hvordan hver systemkomponent skal fungere.",
    answer3: "Designe datastrukturene for hele systemet.",
    answer4:
      " Identifisere den overordnete strukturen av system, de overordnete komponentene, og hvordan de er strukturert og knyttet til hverandre.",
    correctAnswer: 4
  },
  {
    question:
      "Når det gjelder henholdsvis lagring og overføring av data så måles de vanligvis i …",
    answer1: "Bits (lagring) og Bits pr. sekund (overføring).",
    answer2: "Bits (lagring) og Byte pr. sekund (overføring).",
    answer3: "Byte (lagring) og Byte pr. sekund (overføring).",
    answer4: "Byte (lagring) og Bits pr. sekund (overføring).",
    correctAnswer: 4
  },
  {
    question: "En ulempe med inkrementell utvikling kan være:",
    answer1:
      "Må ha alle krav på plass før man kan starte på design og implementering av system.",
    answer2: "Gjør det vanskeligere å teste systemet for feil.",
    answer3: "Egner seg kun for store prosjekter.",
    answer4:
      "Arkitekturen (strukturen) til systemet har en tendens til å forringes for hvert inkrement.",
    correctAnswer: 4
  },
  {
    question: "Man kan sende stadig mer informasjon gjennom luften ved å …",
    answer1: "Bruke eldre stabile omkodere (Encoders).",
    answer2: "Bytte til lavere frekvenser.",
    answer3:
      "Utnytte interferensen som oppstår når to mottakere står i nærheten.",
    answer4: "Øke båndbredden.",
    correctAnswer: 4
  },
  {
    question:
      "Når det gjelder adresse-feltene i gammel (versjon 4) og ny IP-versjon (versjon 6), så er det slik at",
    answer1: "De bruker like mange bit.",
    answer2:
      "Den gamle versjonen har ikke nok bit til å adressere alle maskinene på Internett.",
    answer3: "Ny versjon bruker dobbelt så mange bit.",
    answer4: "Ny versjon klarer seg med halvparten så mange bit.",
    correctAnswer: 2
  },
  {
    question: "Hva er programvareevolusjon?",
    answer1: "Programvare som må endres pga. av endringer i utføringsmiljøet.",
    answer2: "Kjøre programvare på raskere datamaskiner.",
    answer3: "Programvare som blir stadig større og raskere.",
    answer4: "Programvare som blir mer og mer intelligent og fleksibel.",
    correctAnswer: 1
  },
  {
    question:
      "Anta at vi har en todimensjonal liste (liste av lister) med navn. For eksempel lister = [['Anh, Ine', 'By, Ken', …], ['By, Ken', 'Cox, Jo', …], …] Her er hver indre liste alfabetisk sortert etter etternavn og uten duplikater, men samme navn kan forekomme i flere av de indre listene. Anta også at antall elementer i hver av de indre listene er omtrent det samme som antall lister i den ytre lista. Vi ønsker en funksjon antall_n(lister, navn) som returnerer hvor mange av listene det gitte navnet fins i. Her er pseudokode for en slik løsning, bestående av to funksjoner, hvor den ene – antall_n( ) – kaller den andre som heter antall( ). <br> <div class=\"code\"> function antall_n (lister, navn): <br> <div class='tab'> </div>  ant ← 0 <br> <div class='tab'> </div>  la liste_n gå fra og med første til og med siste element lister: <br> <div class='tab'> </div>  <div class='tab'> </div>  ant ←ant + antall(liste_n, navn) # funksjonen fra pseudokoden <br> <div class='tab'> </div>  <div class='tab'> </div>  # for antall() under, vil gi 0 eller 1 <br> <div class='tab'> </div>  returner ant </div> <br> <div class=\"code\"> function antall (liste, navn): <br> <div class='tab'> </div>  antall ← 0 <br> <div class='tab'> </div>  la n gå fra og med første til og med siste element i liste: <br> <div class='tab'> </div>  <div class='tab'> </div>  hvis n == navn: <br> <div class='tab'> </div>  <div class='tab'> </div>  <div class='tab'> </div>   antall ←antall + 1 <br> <div class='tab'> </div>  returner antall </div> Kompleksiteten til denne løsningen vil være:",
    answer1: "Θ(n)",
    answer2: "Θ(n log n)",
    answer3: "Θ(n<sup>2</sup>)",
    answer4: "Θ(n<sup>3</sup>)",
    correctAnswer: 3
  },
  {
    question:
      "I stedet for å bruke funksjonen antall() inni funksjonen antall_n, kan vi bruke binærsøk, dvs. vi bytter ut ant ←ant + antall(liste_n, navn) i pseudokoen med ant ←ant + bin_search(liste_n, navn) hvor det kan antas at bin_search i dette tilfellet returnerer 1 hvis navn fins i liste_n og 0 hvis det ikke fins.  <br> <div class=\"code\"> function antall_n (lister, navn): <br> <div class='tab'> </div>  ant ← 0 <br> <div class='tab'> </div>  la liste_n gå fra og med første til og med siste element lister: <br> <div class='tab'> </div>  <div class='tab'> </div>  ant ←ant + antall(liste_n, navn) # funksjonen fra pseudokoden <br> <div class='tab'> </div>  <div class='tab'> </div>  # for antall() under, vil gi 0 eller 1 <br> <div class='tab'> </div>  returner ant </div> <br> <div class=\"code\"> function antall (liste, navn): <br> <div class='tab'> </div>  antall ← 0 <br> <div class='tab'> </div>  la n gå fra og med første til og med siste element i liste: <br> <div class='tab'> </div>  <div class='tab'> </div>  hvis n == navn: <br> <div class='tab'> </div>  <div class='tab'> </div>  <div class='tab'> </div>   antall ←antall + 1 <br> <div class='tab'> </div>  returner antall </div> Kompleksiteten til antall_n vil da bli:",
    answer1: "Θ(n)",
    answer2: "Θ(n log n)",
    answer3: "Θ(n<sup>2</sup>)",
    answer4: "Θ(n<sup>3</sup>)",
    correctAnswer: 2
  },
  {
    question: "Hva er et hovedkort (motherboard)",
    answer1:
      "Et kretskort i en datamaskin der enheter som CPU, RAM, og andre enheter kobles sammen.",
    answer2: "En minnekrets som tar vare på systemets innstillinger.",
    answer3: "En prosessor for tynne mobiltelefoner.",
    answer4: "Bunnplata i et PC kabinett.",
    correctAnswer: 1
  },
  {
    question: "Hva er en pakke (packet) i nettverkssammenheng?",
    answer1:
      "En datablokk av fast lengde som sendes gjennom nettverket, fra avsender til mottaker.",
    answer2:
      "En datamelding som har ankommet og som står i kø for å bli levert til mottakermaskinen.",
    answer3:
      "Den datamengden som utveksles mellom to datamaskiner som kommuniserer via nettverket.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hvilken av disse lagringsenhetene er ikke en sekundærlagrings-enhet?",
    answer1: "En harddisk.",
    answer2: "En datamaskins hurtigbuffer (cache).",
    answer3: "En minnepinne.",
    answer4: "Alle alternativene er sekundærlagringsenheter.",
    correctAnswer: 2
  },
  {
    question: "Hva er en protokoll i nettverkssammenheng?",
    answer1: "Et sett kommunikasjonsregler for utveksling av data.",
    answer2: "En avtale mellom nettverkseier og en bedrift som bruker nettet.",
    answer3:
      "Et register der all nettverkstrafikk blir lagret i henhold til kravene fra myndighetene.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hvilket mål brukes vi vanligvis på overføringskapasitet i nettverk?",
    answer1: "Bits pr sekund (bps).",
    answer2: "Gigabyte.",
    answer3: "Båndbredde.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva definerer et klient/tjener (client/server) forhold?",
    answer1: "Klienter tilbyr data og tjenester til tjenere.",
    answer2: "Klienter og tjenere tilbyr data og tjenester til hverandre.",
    answer3: "Tjenere tilbyr data og tjenester til klienter.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva definerer et ”peer-to-peer” nettverk?",
    answer1: "En er sjef, de andre er slaver.",
    answer2: "En er slave, de andre er sjefer.",
    answer3: "Alle er likeverdige.",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 3
  },
  {
    question: "Hvordan kan en GPS bestemme en posisjon?",
    answer1:
      "En GPS beregner sin posisjon ved å lokalisere nærmeste mobile basestasjon.",
    answer2:
      "En GPS beregner sin posisjon ved å bruke lokasjonen til flere satellitter.",
    answer3:
      "En GPS beregner sin posisjon ved å bruke lokasjon til kun en satellitt.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er Wi-Fi?",
    answer1: "Et sett av standarder for trådløs dataoverføring.",
    answer2: "En kvalitetsbetegnelse for trådløse nett.",
    answer3: "Et mål på kvaliteten på en bredbåndabonnentslinje inn til huset.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "En device driver er:",
    answer1: "en spesialdatamaskin for kjøretøy.",
    answer2:
      "spesialisert programvare for input/output, slik at utstyr kan kommunisere med resten av systemet.",
    answer3:
      "enheten som holder rede på neste instruksjon som skal utføres av en prosessor.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Et maskinspråk (machine language) er:",
    answer1:
      "et programmeringsspråk som oversettes av en kompilator (oversetter) til kjørbar kode.",
    answer2:
      "et binær-type programmeringsspråk bygd inn i prosessoren som datamaskinen kan kjøre direkte.",
    answer3:
      "er programmeringsspråk som er felles for alle datamaskiner slik at de kan kommunisere.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Ordstørrelse (word size) for en prosessor er:",
    answer1: "antall ord i en tekst som kan sammenlignes i et søk.",
    answer2: "antall bokstaver som kan behandles i en tekststreng.",
    answer3: "antall bit en prosessor kan prosessere på en gang.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Ytelse for superdatamaskiner måles i:",
    answer1: "FLOPS.",
    answer2: "Gigabytes.",
    answer3: "Antall prosessorkjerner.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Systemklokka i en datamaskin:",
    answer1: "fordeler tiden som brukes på ulike programmer.",
    answer2: "bestemmer hvor raskt operasjoner i en mikroprosessor utføres.",
    answer3: "sørger for at dato og tid alltid er riktig satt.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question:
      "Hovedformålet med forstudiefasen (fase 1) i utvikling av informasjonssystemer er:",
    answer1: "Dokumentere krav til systemet.",
    answer2: "Programmere systemet.",
    answer3: "Gjennomføre en forberedende analyse.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva vil det si å vedlikeholde et informasjonssystem?",
    answer1: "Rette opp eksisterende feil i systemet.",
    answer2: "Utføre endringer i systemet basert på nye betingelser.",
    answer3: "Oppdatere dokumentasjon.",
    answer4: "Alle alternativene er riktig.",
    correctAnswer: 4
  },
  {
    question: "Hva gjør en enhetstest?",
    answer1:
      "Tester at ulike deler av systemet fungerer sammen på korrekt måte.",
    answer2: "Tester at selve datamaskinen (maskinvaren) fungerer.",
    answer3: "Tester individuelle deler av programvaren.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva er en algoritme?",
    answer1: "Krav som stilles til et dataprogram.",
    answer2: "En test for å finne feil i et dataprogram.",
    answer3:
      "En presis beskrivelse av operasjoner som skal utføres for å løse et problem.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva er et flytskjema?",
    answer1: "Grafisk representasjon av en algoritme.",
    answer2: "Et skjema for å fylle inn informasjon på en webside.",
    answer3: "Et skjema som dokumenterer sikkerhet i et databasesystem.",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 1
  },
  {
    question: "Hva står ACID for innen databaser?",
    answer1: "Appropriate, Cynical, Isolation, Development.",
    answer2: "Appropriate, Collaborative, Irrelevant, Driver.",
    answer3: "Atomicity, Consistency, Isolation, Durability.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva er en tjener i en klient-/tjenerarkitektur?",
    answer1: "En tjener utfører tjenester på vegne av en klient.",
    answer2: "En tjener etterspør tjenester fra klienter.",
    answer3:
      "En tjener er et program som vil ha noe utført på en annen maskin.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "En del av et program består av en FOR-løkke, inne i en FOR-løkke, inne i en FOR-løkke. Alle løkkene løper gjennom tallene fra 1 til N. Tidsforbruket for denne programdelen vil være",
    answer1: "N^3",
    answer2: "3N",
    answer3: "3Nlog(N)",
    answer4: "N^2log(n)",
    correctAnswer: 1
  },
  {
    question: "Hva er hovedoppgaven til en navnetjener?",
    answer1: "Å oversette domenenavn til IP-adresser.",
    answer2: "Å oversette IP-adresser til domenenavn.",
    answer3: "Å holde rede på definerte variabelnavn når et program kjører.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "Når kan man ikke benytte seg av binærsøkingsalgoritmen?",
    answer1: "Når datamengden er så stor at det vil ta for lang tid.",
    answer2:
      "Når det er stor sannsynlighet for at det man søker etter ikke finnes i datamengden.",
    answer3: "Når datamengden ikke er sortert.",
    answer4: "Man kan alltid bruke binærsøkingsalgoritmen.",
    correctAnswer: 3
  },
  {
    question:
      "Hva er riktig rekkefølge når ulike minnetyper sorteres etter synkende hastighet?",
    answer1: "Registre, cache, primærminne, sekundærminne.",
    answer2: "Cache, registre, primærminne, sekundærminne.",
    answer3: "Primærminne, cache, sekundærminne, registre.",
    answer4: "Primærminne, registre, cache, sekundærminne.",
    correctAnswer: 1
  },
  {
    question:
      "Hva er i lovverket ikke definer som sensitive personopplysninger:",
    answer1: "Etnisk bakgrunn.",
    answer2: "Politisk oppfatning.",
    answer3: "Filosofisk oppfatning.",
    answer4: "Alle alternativene er sensitive personopplysninger.",
    correctAnswer: 4
  },
  {
    question:
      "Vi skal kode tegnene a-å, A-Å, 0-9, mellomrom, spørsmålstegn, utropstegn, punktum, kolon, semikolon og bindestrek. Hvor mange binære siffer (engelsk: bits) er nødvendig i kodene når alle tegn skal representeres med like mange binære siffer?",
    answer1: "6",
    answer2: "7",
    answer3: "8",
    answer4: "9",
    correctAnswer: 2
  },
  {
    question: "Hva blir resultatet når 81 kodes binært (i 2-tallsystemet)?",
    answer1: "1011011",
    answer2: "1010101",
    answer3: "1010001",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 3
  },
  {
    question:
      "Hva tilsvarer ABCD i det heksadesimale tallsystemet (16-tallsystemet) i 10-tallsystemet?",
    answer1: "42561",
    answer2: "43981",
    answer3: "44981",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question: "QoS er forkortelse for:",
    answer1: "Quantity of Storage.",
    answer2: "Quality of Servers.",
    answer3: "Quality of Service.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 3
  },
  {
    question:
      "Vi har en sortert liste med 100 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
    answer1: "Omtrent 20",
    answer2: "Omtrent 27",
    answer3: "Omtrent 34",
    answer4: "Omtrent 40",
    correctAnswer: 2
  },
  {
    question: "A or not (B and C) er usant (engelsk: false) når:",
    answer1: "A False, B True, C True",
    answer2: "A True, B True, C False",
    answer3: "A False, B False, C True",
    answer4: "Ingen av svarene er riktige",
    correctAnswer: 1
  },
  {
    question: "Hva er entropi?",
    answer1: "Et mål på informasjonsinnholdet i en melding.",
    answer2: "En algoritme for effektiv koding av symboler.",
    answer3:
      "En feiltilstand som gjør at lesehodet på en harddisk ikke klarer å følge sporene nøyaktig og derfor blander data fra flere spor.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "En URL (Uniform Resource Locator) har følgende format:",
    answer1: "Protokoll, maskin, sti, fil",
    answer2: "Protokoll, maskin, sti",
    answer3: "Domene, sti, fil",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "En IP-adresse er:",
    answer1:
      "En numerisk adresse som identifiserer en datamaskin eller annen type enhet i et IP-nettverk.",
    answer2:
      "En mekanisme som gjør det mulig å kontakte en Internett Provider, for eksempel når det oppstår feil i nettet.",
    answer3: "Et felt som identifiserer data i en relasjonsdatabase.",
    answer4: "Ingen av de",
    correctAnswer: 1
  },
  {
    question: "Hva er inspeksjon av programvare?",
    answer1:
      "Kjøring av programmer for å se om programvaren oppfyller kravene til systemet.",
    answer2:
      "Overvåking av variablenes verdier under programkjøring for å finne årsakene til feil.",
    answer3:
      "Gjennomgang av programmer uten at de blir kjørt, med tanke på å finne feil og å forvisse seg om at de er riktige.",
    answer4: "Ingen av de",
    correctAnswer: 3
  },
  {
    question:
      "Hva kjennetegner komprimeringsalgoritmer som er tapsløs (lossless)?",
    answer1: "Den opprinnelige datamengden kan gjenskapes nøyaktig.",
    answer2: "Den komprimerte datamengden er like stor som utgangspunktet.",
    answer3:
      "Egner seg spesielt godt for multimediedata som bilder, lyd og video.",
    answer4:
      "Fjerner bare informasjonsinnhold som ikke er viktig for menneskers oppfatning av informasjonsmengden, for eksempel i et bilde.",
    correctAnswer: 1
  },
  {
    question: "Hva sier Nyquist-regelen om samplingsfrekvensen?",
    answer1:
      "Samplingsfrekvensen må være minst halvparten av den høyeste lydfrekvensen.",
    answer2:
      "Samplingsfrekvensen må være minst den samme som den høyeste lydfrekvensen.",
    answer3:
      "Samplingsfrekvensen må være minst dobbelt så rask som den høyeste lydfrekvensen.",
    answer4: "Samplingsfrekvensen må alltid være 20KHz.",
    correctAnswer: 3
  },
  {
    question: "Hva er oppgaven til en programteller (program counter):",
    answer1: "Den holder rede på antall kodelinjer i et program.",
    answer2: "Den inneholder adressen til neste instruksjon.",
    answer3: "Den styrer antall iterasjoner i en FOR-løkke.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question: "Hvor mange symboler kan kodes med 10 bit?",
    answer1: "10",
    answer2: "512",
    answer3: "1024",
    answer4: "Ingen av de",
    correctAnswer: 3
  },
  {
    question: "Hvorfor digitalisere nettverk?",
    answer1: "Ønske om å kombinere tjenester.",
    answer2: "Enklere å utnytte kapasitet bedre med felles nettverk.",
    answer3: "Digital koding kan gi bedre feilsjekk og korrigering av feil.",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 4
  },
  {
    question: "Hva er fokuset i programvarevalideringsfasen i systemutvikling?",
    answer1: "Beskrive hva systemet skal gjøre.",
    answer2: "Designe hvordan systemet skal oppføre seg.",
    answer3: "Teste om systemet stemmer med spesifikasjonen og kundekrav.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 3
  },
  {
    question: "Hva er et Denial of Service–angrep?",
    answer1:
      "Å sende så mange forespørsler til en tjener (server) at den ikke klarer å utføre oppgavene sine.",
    answer2:
      "Å bryte seg inn på en tjener (server) og sørge for at den nekter å utføre tjenestene sine.",
    answer3:
      "Å nekte å motta meldinger fra en tjener (server) som da blir opptatt med å sende forespørslene på nytt og på nytt.",
    answer4:
      "Å sende en falsk e-post om problemer med en tjeneste, som for eksempel en nettbank, og lure brukeren til å avsløre påloggingsinformasjon for å få løst problemet.",
    correctAnswer: 1
  },
  {
    question:
      "Hva vil det si at vi at vi har “random access” (tilfeldig tilgang) til minnet?",
    answer1:
      "All data i minnet kan hentes direkte uansett hvor det befinner seg.",
    answer2: "Det er tilfeldig hva som hentes ut av minnet.",
    answer3:
      "Vi må hente ut data sekvensielt (byte for byte) for å finne det vi leter etter.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "Hva vil det si at en datamaskin er deterministisk?",
    answer1: "Den har en pessimistisk livsanskuelse som avviser fri vilje.",
    answer2:
      "Når den skal velge hvilken instruksjon den skal behandle neste gang har den ikke noe valg, men baserer valget på programmet og dataene den gis.",
    answer3: "At den har en intuisjon på hva som er lurt å gjøre.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Hvilke av alternativene under er mulige tolkninger av PandA-mønstre?",
    answer1: "True og False.",
    answer2: "Ja og Nei.",
    answer3: "+ og –.",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 4
  },
  {
    question:
      "Vi deler inn algoritmer i klasser basert på de funksjoner som beskriver deres utvikling i kjøretid best. Hvilken algoritme er i klassen Θ(log(n)):",
    answer1: "Innstikksortering (Insertion sort).",
    answer2: "Binærsøk (binary search).",
    answer3: "Sekvensielt søk (sequential search).",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Når vi studerer algoritmers effektivitet, ser vi på hvordan kjøretiden utvikler seg i forhold til mengden av input. Vi gjør analyser av bestefall, verstefall og gjennomsnittstilfellet. Hvorfor er det spesielt interessant å analysere en algoritmes kjøretid i verste fall?",
    answer1:
      "Det setter en øvre grense for hvor lang tid det tar å kjøre algoritmen.",
    answer2: "Programmerere er pessimister.",
    answer3: "Det er mer interessant med høye tall.",
    answer4: "Det forteller hvor lang tid algoritmen ca. bruker på å kjøre.",
    correctAnswer: 1
  },
  {
    question: "Hva er et datagram?",
    answer1: "Et telegram som er skrevet på data.",
    answer2: "Vekten på en dataenhet.",
    answer3: "En pakke som sendes over internett som følger IP-protokollen.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 3
  },
  {
    question:
      "Når vi overfører data over internett oppstår det ofte feil på grunn av forstyrrelser på linjene. For å oppdage slike feil brukes ofte",
    answer1: "NIC (Network Interface Card).",
    answer2: "ISP (Internet Service Provider).",
    answer3: "CRC (Cyclic Redundancy Check).",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 3
  },
  {
    question:
      "Fargene som vises på en dataskjerm representeres ofte med 24 bits RGB-koding. Fargen blå vil da representeres som:",
    answer1: "0000 0000 0000 0000 0000 0000.",
    answer2: "1111 1111 0000 0000 0000 0000.",
    answer3: "0000 0000 1111 1111 0000 0000.",
    answer4: "0000 0000 0000 0000 1111 1111.",
    correctAnswer: 4
  },
  {
    question:
      "En mikroprosessor utfører de samme fem oppgavene om og om igjen. Hvilken rekkefølge av stegene under beskriver korrekt rekkefølge på dette F/E-kretsløpet (F/E cycle)?",
    answer1:
      "Instruction Fetch – Data Fetch – Instruction Decode – Instruction Execution – Results Return.",
    answer2:
      "Results Return – Instruction Execution – Instruction Fetch – Data Fetch – Instruction Decode.",
    answer3:
      "Instruction Fetch – Instruction Decode – Data Fetch – Instruction Execution – Results Return.",
    answer4:
      "Instruction Decode – Instruction Execution – Instruction Fetch – Data Fetch – Results Return.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilken bestemt endring har vi sett de siste årene innen systemutvikling?",
    answer1: "Spesifisering av krav er ikke lengre relevant.",
    answer2:
      "Smidig (agile) systemutvikling har overtatt mer og mer for plandrevet systemutvikling.",
    answer3: "Vannfallsmodellen har overtatt for inkrementell systemutvikling.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question: "Hva er DAC?",
    answer1:
      "Et program som hjelper med beregninger (data-assisted computing).",
    answer2: "En enhet som oversetter analoge signaler til digitale signaler.",
    answer3: "En enhet som oversetter digitale signaler til analoge signaler.",
    answer4:
      "Et program som oversetter datakode til programmeringsspråket C (evt. C++).",
    correctAnswer: 3
  },
  {
    question: "Rekursjon betyr at",
    answer1: "En funksjon kaller seg selv.",
    answer2: "Kjøretiden til programmet minsker.",
    answer3: "Programmet går i evig løkke.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question:
      "Ranger effektivitetsklassene Θ(n3), Θ(n), Θ(log(n)) og Θ(n2) etter effektivitet, der minst effektiv først og deretter mer og mer effektiv",
    answer1: "Θ(n3), Θ(n2), Θ(n), Θ(log(n)).",
    answer2: "Θ(n3), Θ(n), Θ(n2), Θ(log(n)).",
    answer3: "Θ(log(n)), Θ(n3), Θ(n2), Θ(n).",
    answer4: "Θ(n), Θ(log(n)), Θ(n3), Θ(n2).",
    correctAnswer: 1
  },
  {
    question:
      "Hva kalles typen datamaskin som typisk brukes til tyngre oppgaver som værberegninger?",
    answer1: "Arbeidsstasjon.",
    answer2: "Mikrodatamaskin.",
    answer3: "Stormaskin.",
    answer4: "Superdatamaskin.",
    correctAnswer: 4
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE et mikrokontroller?",
    answer1: "Kalles også innebygd datamaskin.",
    answer2: "Brukes som en del av diverse utstyr og kjøretøyer.",
    answer3: "Benytter alltid store sekundærlager.",
    answer4: "Finnes i mikrobølgeovn, tastatur, klokker, etc.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE programvare (software)?",
    answer1: "En CD-plate.",
    answer2: "Operativsystemet.",
    answer3: "Utstyrsdrivere (device drivers).",
    answer4: "Hjelpeprogrammer (utility programs).",
    correctAnswer: 1
  },
  {
    question: "Hvilket alternativ beskriver sekundærminne?",
    answer1: "Harddisk",
    answer2: "CD/DVD",
    answer3: "Minnepenn",
    answer4: "Alle alternativene er riktig.",
    correctAnswer: 4
  },
  {
    question:
      "Hvilket alternativ beskriver IKKE en utenhet (output) i en datamaskin?",
    answer1: "Monitor",
    answer2: "CPU",
    answer3: "Høyttaler",
    answer4: "Printer",
    correctAnswer: 2
  },
  {
    question: "Hvor mange bytes er 1 kilobyte?",
    answer1: "1000 bytes",
    answer2: "1024 bytes",
    answer3: "1048 bytes",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er korrekt angående systemprogramvaren i en datamaskin?",
    asswer1:
      "Gjør det mulig for applikasjonsprogramvare å kommunisere med datamaskin.",
    answer2:
      "Hjelper datamaskinen til å håndtere sine egne interne og eksterne ressurser.",
    answer3:
      "Inkluderer utstyrsdrivere (device drivers) og hjelpeprogrammer (utility programs).",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 4
  },
  {
    question: "Hva legges i begrepet ”booting”?",
    answer1:
      "Prosessen å laste inn operativsystemet i minne til en datamaskin.",
    answer2:
      "Prosessen å laste inn applikasjonsprogramvare i minne til en datamaskin.",
    answer3: "Prosessen å skifte mellom to programmer i et operativsystem.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hvilket alternativ stemmer IKKE angående beskrivelser av et operativsystem?",
    answer1: "Håndterer grunnleggende dataoperasjoner på et lavt nivå.",
    answer2:
      "De fleste applikasjonsprogrammer er skrevet for å kjøre på et spesifikt operativsystem.",
    answer3:
      "Man kan starte programmer direkte utenom operativsystemet på de fleste universelle datamaskiner (PCer).",
    answer4:
      "Operativsystemet tar seg av oppgaver som oppstart, prosessorhåndtering, filhåndtering, oppgavehåndtering og sikkerhetshåndtering.",
    correctAnswer: 3
  },
  {
    question: "Hva står forkortelsen ”BIOS” for?",
    answer1: "Binary Intermediate Operating System.",
    answer2: "Basic Input/Output System.",
    answer3: "Boot In Open Software.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question:
      "Hvordan kan datamaskin med en prosessor (CPU) som kun kan kjøre en instruksjon av gangen kjøre flere programmer samtidig (multi-tasking)?",
    answer1: "Det er ikke mulig.",
    answer2: "Hvert program får tildelt litt prosesseringstid.",
    answer3:
      "Datamaskinen bruker andre enheter som grafikkort til å utføre programmer.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er oppgaven til utstyrsdrivere (device drivers)?",
    answer1: "Forenkle kommunikasjon mellom datamaskinen og eksternt utstyr.",
    answer2:
      "Bestemme hvilke programmer som skal kjøres i prosessoren (CPUen).",
    answer3:
      "Sørge for at alle eksterne enheter kan tilkobles ved hjelp av USB.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva betyr begrepet båndbredde (bandwidth)?",
    answer1:
      "Beskriver hvilke radiofrekvenser et trådløstnettverk kommuniserer over.",
    answer2: "Beskriver fysisk bredde på optisk fiber eller nettverkskabler.",
    answer3:
      "Uttrykk for hvilken type data som kan sendes over en kommunikasjonskanal.",
    answer4:
      "Uttrykk for hvor mye data som kan sendes over en kommunikasjonskanal.",
    correctAnswer: 4
  },
  {
    question: "Hvilken teknologi har potensielt størst overføringskapasitet?",
    answer1: "ADSL.",
    answer2: "Optisk fiber.",
    answer3: "Koaksialkabel.",
    answer4: "Wi-Fi.",
    correctAnswer: 2
  },
  {
    question: "Hva er en protokoll når man snakker om nettverk?",
    answer1:
      "Et sett med regler datamaskiner følger for å overføre data elektronisk.",
    answer2:
      "Et program som sjekker om data kan overføres mellom to datamaskiner.",
    answer3: "En standard for å representere websider.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Omtrent hvor mange unike adresser tilbyr IPv4 (Internet Protocol ver. 4)?",
    answer1: "4,29 millioner.",
    answer2: "429 millioner.",
    answer3: "4,29 milliarder.",
    answer4: "429 milliarder.",
    correctAnswer: 3
  },
  {
    question:
      "Hva består den første delen av en Uniform Resource Locator (URL) av?",
    answer1: "Domenenavn.",
    answer2: "Protokoll.",
    answer3: "Type webdokument (f.eks. HTML, php, asp, jsp).",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva står HTML for?",
    answer1: "Horizontal Text Modelling Language.",
    answer2: "Hypertext Modelling Language.",
    answer3: "Hypertext Markup Language.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva ligger i begrepet ”spoofing”?",
    answer1: "Bombardere en nettside med stor datatrafikk.",
    answer2: "Opprette nettsider som utgir seg for å være noe annet enn de er.",
    answer3: "Bryte seg inn i et datasystem.",
    answer4: "Sende epost med falsk avsender.",
    correctAnswer: 4
  },
  {
    question:
      "Binærtallet 10110100 tilsvarer hvilken verdi i ti-tallsystemet (desimaltallsystemet)?",
    answer1: "64",
    answer2: "134",
    answer3: "180",
    answer4: "190",
    correctAnswer: 3
  },
  {
    question: "Hva definerer et ”peer-to-peer” nettverk?",
    answer1: "En er slave, de andre er sjefer.",
    answer2: "En er sjef, de andre er salver.",
    answer3: "Alle er likeverdige.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question:
      "På nettsiden www.ntnu.no/student finner du en lenke til følgende dokument ”info.html”. Hvilken type lenke er dette?",
    answer1: "Absolutt hyperlenke.",
    answer2: "Relativ hyperlenke.",
    answer3: "Modifiserende hyperlenke.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question:
      "Hva kalles den siste fasen i livssyklusen til systemutvikling av informasjonssystemer?",
    answer1: "Design.",
    answer2: "Utvikling.",
    answer3: "Vedlikehold.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva er pseudokode?",
    answer1:
      "Foreløpig kode som ikke skal brukes i den endelige versjonen av et system",
    answer2: "En diagramteknikk for å beskrive algoritmer eller programmer",
    answer3:
      "De delene av et program som kan være årsak til en feil som er avdekket under testing",
    answer4:
      "En måte å beskrive algoritmer som er mindre formell enn regulære programmeringsspråk",
    correctAnswer: 4
  },
  {
    question:
      "Vi har 43 ulike symboler som vi ønsker å kode digitalt. Hva er det minste antall bits som vi må bruke?",
    answer1: "5",
    answer2: "6",
    answer3: "7",
    answer4: "8",
    correctAnswer: 2
  },
  {
    question: "Hvilken av disse aksessteknologiene gir høyest kapasitet ?",
    answer1: "Edge",
    answer2: "3G/UMTS",
    answer3: "HSDPA",
    answer4: "LTE",
    correctAnswer: 4
  },
  {
    question:
      "Retningslinjene for algoritmer sier at det lønner seg å skrive en løkke for å utføre en repeterende oppgave hvis oppgaven må utføres",
    answer1: "mer enn l gang",
    answer2: "3-5 ganger eller mer",
    answer3: "8-10 ganger eller mer",
    answer4: "20 ganger eller mer",
    correctAnswer: 1
  },
  {
    question:
      "Vi skal bruke binærsøking i en datamengde med 1 000 000 sorterte elementer. Hvor mange oppslag må vi vanligvis giøre?",
    answer1: "10",
    answer2: "20",
    answer3: "30",
    answer4: "50",
    correctAnswer: 2
  },
  {
    question: "Analog informasjon er",
    answer1: "Diskret",
    answer2: "Kontinuerlig",
    answer3: "Tilfeldig",
    answer4: "Digital",
    correctAnswer: 2
  },
  {
    question:
      "Det er grunnleggende aktiviteter som inngår i alle programvareutviklingsprosesser.",
    answer1: "Spesifikasjon, utvikling, validering, evolusjon",
    answer2: "Spesifikasjon, analyse, programmering, bruk",
    answer3: "Forstudie, implementasjon, testing, bruk",
    answer4: "Forstudie, programmering, simulering, vedlikehold",
    correctAnswer: 1
  },
  {
    question:
      "Hvor mange negative og positive heltall kan vi representere i 2 byte?",
    answer1: "2048",
    answer2: "32768",
    answer3: "65536",
    answer4: "1048576",
    correctAnswer: 3
  },
  {
    question: "Hvorfor kan et WiFi nettverk påvirke en Bluetooth forbindelse?",
    answer1: "WiFi nettverk har så sterkt signal",
    answer2: "Bluetooth og WiFi bruker samme frekvensbånd",
    answer3: "Bluetooth og WiFi bruker samme metode for koding",
    answer4:
      'Ved samtidig bruk av WiFi og Bluetooth dannes et fenomen som heter "stående bølger"',
    correctAnswer: 2
  },
  {
    question: "Hvor mange instruksjoner er vanlig i en moderne datamaskin?",
    answer1: "3-7",
    answer2: "10-20",
    answer3: "rundt 100",
    answer4: "tusenvis",
    correctAnswer: 3
  },
  {
    question: "Hva kjennetegner problemløsning etter top-down prinsippet?",
    answer1: "Vi løser de vanskeligste problemene først",
    answer2: "Vi designer før Vi programmerer en løsning",
    answer3: "Vi går fra det generelle til det spesielle",
    answer4:
      "Vi løser de enkelte delene av problemet først og bruker disse løsningene som byggeklosser i en generell løsning",
    correctAnswer: 3
  },
  {
    question:
      "Sortering ved innsetting (insertion sort) bruker omtrent 1 sekund på å sortere 1000 elementer. Hvor lang tid vil det omtrent ta å sortere 10000 elementer?",
    answer1: "2 s",
    answer2: "10 s",
    answer3: "100 s",
    answer4: "1000 s",
    correctAnswer: 3
  },
  {
    question: "Hva er pipelining?",
    answer1: "Lignende operasjoner blir utført i rekkefølge",
    answer2: "Flere instruksjoner kan være under utførelse samtidig",
    answer3: "En effektiv organisering av datamaskinens hukommelse",
    answer4: "En mekanisme for å utveksle data mellom programmer",
    correctAnswer: 2
  },
  {
    question: "Hvor mange symboler kan representeres av en sekvens på K bit?",
    answer1: "K^2",
    answer2: "2^K",
    answer3: "K",
    answer4: "2",
    correctAnswer: 2
  },
  {
    question:
      "Et nettverk sin evne til å levere uavbrutt / kontinuerlig tjeneste defineres som",
    answer1: "Skalerbarhet",
    answer2: "Tilgjengelighet",
    answer3: "Pålitelighet",
    answer4: "Ytelse",
    correctAnswer: 3
  },
  {
    question:
      "Ved digitalisering av lyd, hva oppnår vi med å bruke bit i hver punktprøve (sample)?",
    answer1: "Vi trenger ikke å punktprøve (sample) like",
    answer2: "Vi oppfyller kravene i Nyquist-regelen",
    answer3: "Vi kan representere stereo-lyd",
    answer4: "Vi får en mer nøyaktig digitalisering",
    correctAnswer: 4
  },
  {
    question: "Det å utgi seg for være noen andre på internett kalles",
    answer1: "Phishing",
    answer2: "Spoofing",
    answer3: "Phanning",
    answer4: "Aliasing",
    correctAnswer: 2
  },
  {
    question:
      "Er det horisontale eller vertikale fargebånd som komprimeres bra i GIF-filer",
    answer1: "Vertikale",
    answer2: "Horisontale",
    answer3:
      "GIF-filer komprimerer hverken vertikale eller horisontale fargebånd spesielt bra",
    answer4:
      "GIF-filer komprimerer både horisontale og vertikale fargebånd veldig bra",
    correctAnswer: 2
  },
  {
    question:
      "Hente/Utføre-kretsløpet (Fetch/Execute Cycle) i en moderne datamaskin utføres",
    answer1: "En gang i sekundet",
    answer2: "Tusenvis av gangeri sekunder",
    answer3: "Hundretusenvis av ganger i sekundet",
    answer4: "Ikke oftere enn antall ganger klokken i maskina tikker",
    correctAnswer: 4
  },
  {
    question: "Hva kjennetegner inkrementell programvareutvikling?",
    answer1:
      "Utvikler programvaren i de klart avskilte fasene krav, design, implementasjon, testing osv.",
    answer2: "Utvikler programvaren uten noen plan eller prosess",
    answer3: "Deler opp systemet i mindre deler som blir utviklet del for del",
    answer4: "Lager en rask prototype basert på eksisterende krav",
    correctAnswer: 3
  },
  {
    question:
      "I setningen “På Værnes regnet det forrige uke følgende: 6mm 3mm 12mm 4mm 0mm 8mm 6mm” vil delen ”På Værnes regnet det forrige uke følgende:” være:",
    answer1: "Informasjon",
    answer2: "Data",
    answer3: "Metadata",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Det finnes flere forskjellige typer lagring av data i en datamaskin. Hvilket av alternativene rangerer disse typene fra raskest til tregest?",
    answer1: "Registre -> cache -> primærminnet -> sekundærminnet",
    answer2: "Registre -> primærminnet -> sekundærminnet -> cache",
    answer3: "Cache -> registre -> primærminnet -> sekundærminnet",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question:
      "Når du sitter hjemme og leser nyheter på nettsidene til Adresseavisa så vil din datamaskin typisk være hva når det gjelder datakommunikasjon?",
    answer1: "Tjener",
    answer2: "Klient",
    answer3: "Bruker",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Hvor mange bits trenger du for å kode de 29 bokstavene i vårt alfabet ved enkel koding der alle bokstavene er representert med samme antall bits?",
    answer1: "4",
    answer2: "5",
    answer3: "6",
    answer4: "7",
    correctAnswer: 2
  },
  {
    question:
      "Gitt en sortert liste på 4000 verdier. Hvor mange sammenligninger må vi i verste fall gjøre for å søke etter en verdi som ikke finnes i lista ved bruk av binærsøk?",
    answer1: "8",
    answer2: "12",
    answer3: "48",
    answer4: "64",
    correctAnswer: 2
  },
  {
    question:
      "Hvor mange forskjellige verdier kan representeres ved hjelp av 8 bits?",
    answer1: "128",
    answer2: "255",
    answer3: "256",
    answer4: "64",
    correctAnswer: 3
  },
  {
    question:
      "Hva får man når man multipliserer binærtallene 1011 og 11001 med hverandre?",
    answer1: "101111001",
    answer2: "100010011",
    answer3: "110011011",
    answer4: "11110000",
    correctAnswer: 2
  },
  {
    question:
      "Hva er fordelen med inkrementell utviklingsmetode sammenliknet med vannfallsmetoden?",
    answer1:
      "Med inkrementell utvikling fullføres faser som f.eks. kravspesifikasjon helt ferdig før man går videre",
    answer2:
      "Med inkrementell utvikling deles prosjektet opp i mindre deler hvor man utfører flere faser (som kravspesifisering, design, koding) for hver del",
    answer3:
      "Med inkrementell utvikling begynner man å skrive koden først, og deretter dokumenterer man kravene og lager designet",
    answer4: "Ingen av delene",

    correctAnswer: 2
  },
  {
    question:
      "Hvilken av disse enhetene benytter seg av IP-adresser for å videreformidle informasjon på nettverket?",
    answer1: "Nav (Hub)",
    answer2: "Svitsj (Switch)",
    answer3: "Ruter (Router)",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question: "Hvilken av de følgende er en lovlig IP-addresse?",
    answer1: "116.259.241.13",
    answer2: "8.7.9.2",
    answer3: "12.234.12.104.77",
    answer4: "Ingen av de",
    correctAnswer: 2
  },
  {
    question: "Hva betyr synbarhet ved programmering av funksjoner/metoder?",
    answer1: "Alle variabler kommer tydelig frem ved listing",
    answer2: "Variabler kan nåes fra hovedkoden",
    answer3:
      "Samme navn kan brukes på variabler i forskjellige funksjoner/metoder",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question: "Hvorfor komprimeres data?",
    answer1: "For at det skal ta mindre plass",
    answer2: "For at det skal kunne gjøres tilgjengelig for alle på Internett",
    answer3: "For at data ikke skal kunne leses av uvedkommende",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er en protokoll?",
    answer1: "Et sett av kommunikasjonsregler",
    answer2:
      "Et program som oversetter programmeringskode til kode som kan kjøres på en datamaskin",
    answer3: "Hovedkomponenten i en vanlig datamaskin",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva brukes en prosessor hovedsakelig til?",
    answer1:
      "Direkte kjøre kode skrevet i JSP, Matlab eller andre programmeringsspråk",
    answer2: "Utføre regneoperasjoner på og sammenlikninger av registre",
    answer3:
      "Utføre regneoperasjoner på og sammenlikninger direkte på data lagret i primærminnet (RAM",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "I hvilket tilfelle kan man IKKE benytte seg av binærsøkalgoritmen?",
    answer1: "Når man har for stor datamengde (tar for lang tid)",
    answer2: "Når dataene ikke er sortert",
    answer3: "Når man ikke vet om det man søker etter finnes i dataene",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hva er tallet 1365 representert som et binært tall?",
    answer1: "11100101011",
    answer2: "10110101010",
    answer3: "10101010101",
    answer4: "10100110100",
    correctAnswer: 3
  },
  {
    question: "Hva er hovedoppgaven til kontrollenheten i en prosessor?",
    answer1:
      "Holde orden på hvor langt prosessoren har kommet i JSP- eller Matlabprogrammet",
    answer2: "Kontrollere at regneoperasjonene i ALU er korrekte",
    answer3: "Ha kontroll på hvor neste instruksjon ligger i minnet (RAM)",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "TCP/IP er en samling av protokoller som inneholder protokollene:",
    answer1: "HTTP, HTML, PHP, TCP, SMTP",
    answer2: "HTTP, FTP, TCP, IP, SMTP",
    answer3: "Kun TCP og IP",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hva er den viktigste oppgaven til en nettverksruter?",
    answer1: "Koble sammen flere nettverkssegmenter av samme type",
    answer2: "Forsterke og rense signaler i nettverket",
    answer3: "Koble sammen ulike nettverk og nettverkssegmenter",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Minnehierarki i en datamaskin sortert på hastighet er som følger:",
    answer1: "registre, cache, primærminne, sekundærminne",
    answer2: "cache, registre, primærminne, sekundærminne",
    answer3: "primærminne, cache, registre, sekundærminne",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hvor mange bits benyttes i nåværende IP-adresser (IPv4)?",
    answer1: "32 bits",
    answer2: "16 bits",
    answer3: "48 bits",
    answer4: "64 bits",
    correctAnswer: 1
  },
  {
    question:
      "01010101 i binærtallsystemet, er det samme som (i titallsystemet)?",
    answer1: "105",
    answer2: "95",
    answer3: "85",
    answer4: "75",
    correctAnswer: 3
  },
  {
    question:
      "4095 (i titallsystemet) skal kodes heksadesimalt (16-tallsystemet). Hvor mange siffer blir det i resultatet?",
    answer1: "5",
    answer2: "4",
    answer3: "3",
    answer4: "2",
    correctAnswer: 3
  },
  {
    question: "Hva er den viktigste oppgaven til en nettverkssvitsj?",
    answer1: "Sørge for at alle påkoblede maskiner mottar alle datapakker.",
    answer2: "Overvåke og stenge ute uønsket nettverkstrafikk.",
    answer3:
      "Fordele datatrafikken slik at datapakkene kommer frem til riktig mottaker.",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Vi har en sortert liste med 5 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
    answer1: "Omtrent 20",
    answer2: "Omtrent 30",
    answer3: "Omtrent 40",
    answer4: "Omtrent 50",
    correctAnswer: 1
  },
  {
    question: "Testing av programkode vil si at man:",
    answer1: "Går gjennom programkoden og prøver å finne feil.",
    answer2: "Lar noen utvalgte brukere prøve systemet.",
    answer3:
      "Kjører programkoden og sjekker at forholdet mellom inndata og utdata er som forventet.",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Hva er fordelen med asymmetrisk kryptering fremfor symmetrisk kryptering?",
    answer1: "Man kan publisere den ene nøkkelen.",
    answer2:
      "Det er vanskeligere å knekke koden fordi man må finne to ulike nøkler.",
    answer3:
      "Man kan være sikker på identiteten til den som har sendt meldingen (autentisering).",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er nettverkstjenester?",
    answer1: "E-post, filoverføring og trådløst nettverk.",
    answer2: "Fildeling, WWW og e-post.",
    answer3: "Filoverføring, TCP/IP og WWW.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "CPU er forkortelse for:",
    answer1: "Central Pipelining Unit.",
    answer2: "Coordinating Processor Unit.",
    answer3: "Central Processing Unit.",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Et tall av typen double lagres i 8 byte. Omtrent hvor mange slike tall kan lagres i en gigabyte (GB)?",
    answer1: "Ca. 134 000.",
    answer2: "Over 100 millioner.",
    answer3: "Omtrent en milliard.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "På hvilken måte skiller harddisk seg fra primærminne (RAM):",
    answer1: "Det tar lengre tid å skrive eller lese.",
    answer2: "Dataene er sikre mot strømbrudd.",
    answer3: "Begge utsagnene er feil.",
    answer4: "Begge utsagnene er riktig.",
    correctAnswer: 4
  },
  {
    question: "A and (B or C) er True (sant) for:",
    answer1: "A True, B True, C False",
    answer2: "A True, B False, C False",
    answer3: "A False, B True, C True",
    answer4: "A False, B False, C True",
    correctAnswer: 1
  },
  {
    question:
      "Hovedgrunnen til at vi deler opp lengre programmer ved å bruke metoder:",
    answer1: "Det går raskere å kjøre programmet.",
    answer2: "Programmet får høyere funksjonalitet.",
    answer3: "Det er lettere å forstå programmet.",
    answer4: "Det ser bedre ut",
    correctAnswer: 3
  },
  {
    question: "Hva stemmer ikke om kommentarer i programkode?",
    answer1: "Programmet tar større plass på harddisken.",
    answer2: "De gjør det lettere å forstå koden.",
    answer3: "Programmet kjører langsommere.",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question:
      "Hvor mange bit trenger du til å kode det norske alfabetet (29 forskjellige bokstaver) ved enkel koding hvor alle symbolene er representert med samme antall bit.",
    answer1: "5 bits",
    answer2: "6 bits",
    answer3: "8 bits",
    answer4: "10 bits",
    correctAnswer: 1
  },
  {
    question:
      "Hvilken type minne har normalt høyest tilgangstid (access time) i en datamaskin?",
    answer1: "Registre",
    answer2: "Cache",
    answer3: "Primærminne",
    answer4: "Sekundærminne",
    correctAnswer: 3
  },
  {
    question: "En ulempe med åpen kildekode (open source) er:",
    answer1: "Du kan ikke endre produktet selv",
    answer2: "Det er store firma står som regel bak utviklingen",
    answer3: "Du har normalt ikke krav på brukerstøtte",
    answer4: "Folk kan stjele alt du har skrevet",
    correctAnswer: 3
  },
  {
    question: "Hva er svart-boks testing?",
    answer1:
      "Testing som konsentrerer seg om systemets eller modulens indre oppbygning",
    answer2:
      "Testing som ikke ser på systemets eller modulens indre oppbygning",
    answer3:
      "Testing som konsentrerer seg om hvordan de ulike delene i et system fungerer sammen",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hva er kjernen i et operativsystem?",
    answer1: "Den delen som tar i mot input fra brukeren",
    answer2: "Den delen som administrerer maskinressurser",
    answer3: "Det mediet som operativsystemet installeres fra",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hvorfor krypteres data?",
    answer1: "For at data ikke skal kunne leses av uvedkommende",
    answer2: "For at det skal ta mindre plass",
    answer3: "For at det skal kunne gjøres tilgjengelig for alle på Internett",
    answer4: "FOr at det kan krypteres",
    correctAnswer: 1
  },
  {
    question: "En protokoll er:",
    answer1:
      "Et program som oversetter kildekode til maskinkode slik at det kan kjøres på en datamaskin",
    answer2: "En enhet som gjør beregninger og sammenlikninger i en datamaskin",
    answer3: "Et sett av kommunikasjonsregler",
    answer4: "Et type filsystem",
    correctAnswer: 3
  },
  {
    question: "Er binærsøk alltid raskere enn sekvensielt søk?",
    answer1: "Binærsøk er alltid raskere enn sekvensielt søk uansett",
    answer2:
      "Binærsøk er alltid raskere enn sekvensielt søk på sorterte datamengder",
    answer3: "Sekvensielt søk kan være raskere enn binærsøk",
    answer4: "Ingen av delene",
    correctAnswer: 3
  },
  {
    question: "Hva gjør man når man designer et system under systemutvikling?",
    answer1: "Beskriver hva systemet skal gjøre",
    answer2: "Beskriver hvordan systemet skal lages",
    answer3: "Beskriver kun hvordan systemet skal se ut",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "I det binære tallsystemet, hva er 010 multiplisert med 101?",
    answer1: "111",
    answer2: "1010",
    answer3: "1111",
    answer4: "0011",
    correctAnswer: 2
  },
  {
    question: "Hva er inspeksjon i systemutvikling?",
    answer1:
      "Inspeksjon innebærer å finne feil eller forsikre seg om at feil ikke finnes uten å kjøre programmet",
    answer2:
      "Inspeksjon innebærer å undersøke om de som programmerer lager ryddige programmer som er lette å lese",
    answer3: "Inspeksjon innebærer å finne feil i koden ved å kjøre programmet",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er en normal konfigurasjon av en klient-tjener arkitektur?",
    answer1: "Få tjenere, mange klienter",
    answer2: "Mange tjenere, få klienter",
    answer3: "Mange tjenere, mange klienter",
    answer4: "Få tjenere, få klienter",
    correctAnswer: 1
  },
  {
    question:
      "En bit av et program består av ei for-løkke inne i ei for-løkke. Begge løkkene løper igjennom tallverdiene 1:N. Tidsforbruket til denne programbiten vil være proporsjonalt med -",
    answer1: "N",
    answer2: "N log N",
    answer3: "N^2",
    answer4: "N^3",
    correctAnswer: 3
  },
  {
    question:
      "Gitt ei sortert liste av 272 verdier. Vi søker etter en verdi som ikke finnes i lista. Hvor mange sammenligninger må vi i verste fall gjøre ved bruk av binærsøk?",
    answer1: "136",
    answer2: "8",
    answer3: "9",
    answer4: "18",
    correctAnswer: 3
  }
];
