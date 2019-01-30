const questions = [
  {
    question:
      "Flight from Bordeaux to Amsterdam, ETA 2100UTC. What is the minimum visibility forecast for ETA Amsterdam? TAF EHAM 281500Z 281601 14010KT 6000-RA SCT025 BECMG 1618 12015G25KT SCT008 BKN013 TEMPO1823 3000 RA BKN005 OVC010 BECMG 2301 25020KT 8000 NSW",
    answer1: "3km",
    answer2: "5NM",
    answer3: "5km",
    answer4: "6km",
    correctAnswer: 1
  },
  {
    question:
      "Refer to the following TAF extract: BECMG 1821 BR BKN004 PROB30 TEMPO 2124 FG VV001 What does the abbreviation PROB30 mean?:",
    answer1: "Probability of 30%",
    answer2: "Conditions will last for at least 30 minutes",
    answer3: "The cloud ceiling should lift to 3000ft",
    answer4: "Change expected in less than 30 minutes.",
    correctAnswer: 1
    
  },
  {
    question: "Central Europe is situated in the zone of: ",
    answer1: "Mid-latitude climate",
    answer2: "Snow climate",
    answer3: "Dry climate",
    answer4: "Subarctic climate",
    correctAnswer: 1
  },
  {
    question: "An aircraft is flying through the polar front jet stream from south to north, beneath the core. How would the OAT change, in the northern hemispher, during this portion of the flight?",
    answer1: "It decreases",
    answer2: "It increases",
    answer3: "it first increases, then decreases",
    answer4: "it remains constant",
    correctAnswer: 1
  },
  {
    question:
      "Which of the following statements is an interpretation of the METAR? 00000KT 0200 R14/0800U FZFG VV001 m03/m03 Q1022 BECMG 0800.",
    answer1: "Visibility for runway 14 800 metres, fog with hoar frost, RVR for runway 16 or more than 1500 metres. ",
    answer2: "Visibility 200 feet, RVR for runway 16 more than 1500 metres, vertical visibility 100 feet, fog with hoar frost.",
    answer3: "Visibility 200 metres, RVR for runway 16 1500 metres, temperature -3°, vertical visibility 100 metres.",
    answer4: "RVR for runway 14 800 metres, vertical visibility 100 feet, calm, visibility improving to 800 metres in the next 2 hours",
    correctAnswer: 4
  },
  {
    question:
      "The boundary between polar and tropical air is known as:",
    answer1: "Tropical Front",
    answer2: "Cold Front",
    answer3: "Polar Front",
    answer4: "Warm Front",
    correctAnswer: 3
  },
  {
    question: "Refeer to diagram 132. Assuming the usual direction of movement, to which position will the polar frontal wave have moved?",
    answer1: "4",
    answer2: "2",
    answer3: "3",
    answer4: "1",
    correctAnswer: 3
  },
  {
    question:
      "Flight to Lisbon to Bordeaux, ETA 18:00 UTC. At ETA bordeaux what is the lowest quoted visibility forecast? TAF LFBD 281400Z 281524 26015KT 9999 SHRA BKN020 TEMPO 1620 26020G30KT 8000 +SHRA BKN015CB PROB30 TSRA",
    answer1: "10 or more km",
    answer2: "8 NM",
    answer3: "10 NM",
    answer4: "8km",
    correctAnswer: 4
  },
  {
    question:
      "What type of front/occlusion usually moves the fastest?",
    answer1: "Warm Occlusion",
    answer2: "Cold Front",
    answer3: "Warm Front",
    answer4: "Cold Occlusion",
    correctAnswer: 2
  },
  {
    question: "Does the following report make sense? METAR LSZH 182320Z VRB02KT 5000 MIFG 02/02 Q1015 NOSIG",
    answer1: "The report is not possible, because with a temperature of 2°C and a dew point 2°C there must be uniform fog.",
    answer2: "The report would never be seen, because shallow fog is not reported when the visibility is more than 2km",
    answer3: "The report is nonsense, because it is impossible to observe a visibility of 5km if shallow fog is reported",
    answer4: "The report is possible, because shallow fog is defined as a thin layer of fog below eye level",
    correctAnswer: 4
  },
  {
    question: "The mean position of the polar fron over the North Atlantic/UK is",
    answer1: "Newfoundland to NW Scotland in summer",
    answer2: "Further north in winter than summer",
    answer3: "Florida to NW Scotland in summer",
    answer4: "Florida to NW Scotland in winter",
    correctAnswer: 1
  },
  {
    question: "During the passage of a warm fron the wind",
    answer1: "Veers throughout the passage",
    answer2: "Backs then veers on passage ",
    answer3: "Backs throughout the passage",
    answer4: "Veers then backs on passage",
    correctAnswer: 1
  },
  {
    question: "The weather normally associated with polar maritime air near the UK is:",
    answer1: "Overcast moderate intermittent rain",
    answer2: "Overcast, moderate drizzle",
    answer3: "Broken cloud, moderate continuous rain",
    answer4: "Broken cloud, moderate or heavy rain showers",
    correctAnswer: 4
  },
  {
    question: "Ahead of a warm front (northern hemisphere) the wind direction changes from the surface up to the tropopause. The effect of this change is that the wind:",
    answer1: "Veers in the friction layer and veers above the friction layer",
    answer2: "Veers in the friction layer and backs above the friction layer",
    answer3: "Backs in the friction layer and backs above th friction layer",
    answer4: "Backs in the friction layer and veers above the friction layer",
    correctAnswer: 1
  },
  {
    
    question: "Between which latitudes are you most likely to find the subtropical high-pressure belt?",
    answer1: "25° - 35°",
    answer2: "35° - 55°",
    answer3: "55° - 75°",
    answer4: "10° - 15°",
    correctAnswer: 1
  },
  {
    question:
      "In an intense through of low pressure over iceland during wintertime the weather likely to be experienced is:",
    answer1: "Strong wind associated with an almost clear sky",
    answer2: "Strong wind with subsidence at low levels",
    answer3: "Strong wind shear, convection and snow showers",
    answer4: "Light wind, good visibility and a high cloud ceiling",
    correctAnswer: 3
  },
  {
    question: "The polar front is the boundary between",
    answer1: "Arctic air and polar air",
    answer2: "Arctic air and tropical air",
    answer3: "Maritime polar air and continental polar air",
    answer4: "Polar air and tropical air",
    correctAnswer: 4
  },
  {
    question:"The approximate inclined plane of a warm front is",
    answer1: "1/500",
    answer2: "1/300",
    answer3: "1/250",
    answer4: "1/150",
    correctAnswer: 4
  },
  {
    question:
      "Refer to diagram 135. Assuming the usual direction of movement, where will this polar frontal wave have moved?",
    answer1: "1",
    answer2: "2",
    answer3: "4",
    answer4: "3",
    correctAnswer: 4
  },
  {
    question:
      "What is the wind speed given in a METAR report based on?",
    answer1: "The average speed of the previous 30 minutes",
    answer2: "The average speed of the previous 10 minutes",
    answer3: " The strongest gust in the previous hours",
    answer4: "The actual speed at the time of recording",
    correctAnswer: 2
  },
  {
    question:
      "Rime ice is caused by",
    answer1: "Small supercooled water droplets",
    answer2: "Rapid re-freezing of large water droplets",
    answer3: "Large supercooled water droplets",
    answer4: "Slow freezing of water droplets onto the wing",
    correctAnswer: 1
  },
  {
    question:
      "If small supercooled water droplets hit an aerofoil they will:",
    answer1: "Partially freeze and run back giving clear ice",
    answer2: "Partially freeze and run back giving rime ice",
    answer3: "Freeze in impact giving rime ice",
    answer4: "Freeze on impact giving clear ice",
    correctAnswer: 3
  },
  {
    question:
      "The trade winds on the northern hemisphere blow from",
    answer1: "West",
    answer2: "South - West",
    answer3: "North - East",
    answer4: "North",
    correctAnswer: 3
  },
  {
    question: "What is the main energy source of a tropical revolving storm?",
    answer1: "The Equatorial jet stream ",
    answer2: "Temperature difference between equatorial low pressure through and subtropical high pressure belt",
    answer3: "Cold air advancing from temperate latitudes",
    answer4: "Latent heat released from condesing water vapour",
    correctAnswer: 4  
     },
  {
    question: "Air masses originating in NE Canada and the North Atlantic in winter most commonly reach NW Europe as:",
    answer1: "Unstable cold air moist (Pm)",
    answer2: "Stable warm moist air (Tm)",
    answer3: "Unstable warm moist air (Tm)",
    answer4: "Stable cold dry air (Pc)",
    correctAnswer: 1
      },
  {
    question: "With regard to airframee icing and super cooled water droplets, what type of ice is associated with the droplets striking the airframe partly freezing on impact, and an amount flowing back before freezing.",
    answer1: "Rime Ice",
    answer2: "Clear Ice",
    answer3: "Hoar Frost",
    answer4: "Opaque",
    correctAnswer: 2
    
     },
  {
    question: "If air in transit is heated from below it tends to become more",
    answer1: "Neutrally stable",
    answer2: "Unstable",
    answer3: "none of these",
    answer4: "stable",
    correctAnswer: 2
    
     },
  {
    question: "Which of the following describes a warm occlusion",
    answer1: "The air mass ahead of the front is drier than the air mass behind the front",
    answer2: "The warmer air mass is ahead of the original warm front",
    answer3: "The coldest air mass is ahead of the original warm front",
    answer4: "The air mass behind the front is more unstable than the air mass ahead of the front",
    correctAnswer: 3
    
      },
  {
    question: "When do cold occlusions occur most frequently in Europe?",
    answer1: "Summer",
    answer2: "Winter and spring",
    answer3: "Winter",
    answer4: "Autumn and winter",
    correctAnswer: 1
      },
  {
    question: "What is the type, intensity and seasonal variation of precipitation in the equatorial region",
    answer1: "Warm fronts are common with continuous rain. The frequency is the same throughout the year",
    answer2: "Rainshowers, hail showers and thunderstorms occur the whole year, but the frequency is highest during two periods: April - May",
    answer3: "Showers of rain occur throughout the year, the frequency is highest in January",
    answer4: "Precipitation is generally in the form of showers but continuous rain occurs also. The greatest intensity is in July",
    correctAnswer: 2
  }
];
