  const questions = [
  {
   
  question: "what is true avout land breeze", 
  answer1: "only at noon", 
  answer2: "only at day", 
  answer3: "Blows from land towards sea at night",
  answer4: "Blows from sea towards land at afternoon",
  correctAnswer: 3
  },
  {

  question: "Which of the following surfaces is likely to produce a higher than average diurnal variation of temp?",
  answer1: "rock of concrete",
  answer2: "water", 
  answer3: "snow", 
  answer4: "vegitation",
  correctAnswer: 1

  },
  {
  question: "Flying at FL 180 in the NH where the wind is geostrophic, the true altitude remains constant. what is true for the wind?", 
  answer1: "There is a crosswind from the left", 
  answer2: "there is a crosswind from the right", 
  answer3: "there is no crosswind",
  answer4: "without knowing the temperature at FL 180, this question can not be answered", 
  correctAnswer: 3

  },
  {
  question: "You are flying at FL 250, heading 090. The wind is comming from your left. Which of the following is correct?", 
  answer1: "you are flying towards an are of high pressure",
  answer2: "you have an area of cold air to the right",
  answer3: "You have cold air behind you",
  answer4: "you are flying towards an area of low pressure", 
  correctAnswer: 4

  },
  {
  question: "You are flying in the 500hPa pressure surface in the direction of 270 dgr. In the NH. Which of the following statements is correct whe we assume that the wind is geostrophic?",
  answer1: "in in this pressure the wind comes from the direction 180 degrees", 
  answer2: "in in this pressure the wind comes from the direction  360 degrees", 
  answer3: "in in this pressure the wind comes from the direction  090 degrees",
  answer4: "in in this pressure the wind comes from the direction 270 degrees",
  correctAnswer: 2
  },
  {
  question: "In the NH the speed of the thermal wind in the layer between 5000 ft and 14000ft is given as 60kts and low temp lies to the NE. The geostrophic wind at 5000 is 200/35. which of the following is most likely wind at 14000 ft", 
  answer1: "235/70",
  answer2: "280/70",    
  answer3: "330/25", 
  answer4: "305/35", 
  correctAnswer: 2
  },
  {
  question: "An aircraft departrs from A, elevation 1200', With QNH 980 hPa set. The altimeter is not reset. When landing at B, elevation 2500', where the QNH 1005, the altimeter will read.",
  answer1: "1950",
  answer2: "3175", 
  answer3: "550", 
  answer4: "1825",  
  correctAnswer: 4

  },
  {
  question: "Which of the following describes a warm occlusion?",
  answer1: "the air mass ahead of the front is drier than the air mass behind the front", 
  answer2: "the warmer air mass is ahead of the original warm front", 
  answer3: "the coldest air mass is ahead of the original warm front", 
  answer4: "the air mass behind the front is more unstable than the air mass ahead of the front", 
  correctAnswer: 3 
  },
  {
  question: "What type of low pressure area is associated with a surface front",
  answer1: "A cold air pool",
  answer2: "Polar front Low",
  answer3: "A low on the lee side of a mountain",
  answer4: "Heat low",
  correctAnswer: 2
 },
  {
  question: "In which of the following 1850UTC METAR reports, is the probability of fog formation, in the coming  night, the highest?",
  answer1: "22004 6000 -RA SCT012 OVC030 17/14 Q1009 NOSIG",
  answer2: "VRB01KT 8000 SCT250 11/10 Q1028 BECMG 3000 BR", 
  answer3: "VRB02KT 2500 HZ SCT120 14/M08 Q1035 NOSIG",
  answer4: "00000KT 9999 SCT300 21/01 Q1032 NOSIG",
  correctAnswer: 2
 },
  {
  question: "What does the term METAR signify?",
  answer1: "METAR in flight forecast, issued by the meteorological station several times daily",
  answer2: "A METAR is a landing forecast added to the actual weather report as a brief prognostic report",
  answer3: "A METAR is a warning of dangerous meteorological conditions within a FIR",
  answer4: "A METAR signifies actual weather report at an aerodrome and is generally issued with half hour  intervals.",
  correctAnswer: 4
 },
  {
  question: "How long from the time of observations is a TREND in a METAR?",
  answer1: "30 minutes",
  answer2: "9 hours",
  answer3: "1 hour",
  answer4: "2 hours",
  correctAnswer: 4
 },
  {
  question: "When will the surface wind in a METAR record a gust factor?",
  answer1: "With gusts of at least 25KT",
  answer2: "With gusts of at least 35kt",
  answer3: "When gusts are at least 15knots above the mean wind speed",
  answer4: "When gusts are at least 10knots above the mean wind speed",
  correctAnswer: 4
 },
  {
  question: "The wind direction in a METAR is measured relative to",
  answer1: "The Greenwich meridian",
  answer2: "Grid north",
  answer3: "Magnetic north",
  answer4: "True North", 
  correctAnswer: 4
 },
  {

  question: "Refer to following TAF extract BECMG 1821 2000 BR BKN004 2124 0500 FG VV001 What visibility is forecast for 2400UTC",
  answer1: "500M", 
  answer2: "2000M",
  answer3: "Between 500m and 2000m",
  answer4: "0m and 1000m", 
  correctAnswer: 1
 },
  {
  question: "Refer to the following TAF extract BECMG 1821 2000 BR BKN004 BECMG 2124 0500 FG VV001 What does the BECMG data indicate for 18 and 21 hour time frame?",
  answer1: "The new conditions are achieved between 1800 and 2100 UTC",
  answer2: "many long term changes in the original weather",
  answer3: "Many short term changes in the original weather",
  answer4: "a quick change to the new conditions between 1800 and 1900 utc", 
 correctAnswer: 1
 },
  {
  question: "Refer to the following extract BECMG 1821 2000 BR BKN004 BECMG 2124 0500 FG VV001  What does the abbreviation BKN004 mean?",
  answer1: "5-7 octas, ceiling 400ft",
  answer2: "1-2 octas, ceiling 400ft",
  answer3: "1-4 octas, ceiling 400m",
  answer4: "4-8 octas, ceiling 400m",
  correctAnswer: 1
 },
  {
  question: "The TAF weather messages are", 
  answer1: "Airport forecast", 
  answer2: "Landing forecast", 
  answer3: "Hourly or semi hourly weather observation",
  answer4: "Special weather observations",
  correctAnswer: 1
 },
  {
  question: "What information is given on Significant weather chart?",
  answer1: "The significant weather that is observed at the time given on the chart",
  answer2: "The significant weather in a period 3hours before and 3hours after the time given on the chart",
  answer3: "The significant weather forecast for a period of 6 hours after the time given on chart.",
  answer4: "The significant weather forecast for the time given on the chart",
  correctAnswer: 4
 },
  {
  question: "Which of the following pressure systems is most likely to be associated with strong winds?",
  answer1: "ridge of a high pressure",
  answer2: "A Col",
  answer3: "An Anticyclone",
  answer41: "A depression",
  correctAnswer: 4
 },
  { 
  question: "Does the following report make sense?  METAR LSZH 182320Z VRB02KT 5000 MIFG 02/02 Q1015 NOSIG",
  answer1: "The report is not possible, because, with a temperature of 2 degrees and dew point of 2 degrees   there must be uniform fog",
  answer2: "The report would never be seen, because shallow fog is not reported when the visibility is more than 2km",
  answer3: "The report is nonsense, because it is impossible to observe a visibility of 5km if shallow fog is reported.",
  answer4:  "The report is possible becaus, shallow fog is defined as a thin layer of fog below eye level",
  correctAnswer: 4
 },
  {
  question: "The mean position of the polar fron over the North Atlantic /uk is",
  answer1:  "Newfoundland to NW Scotland in summer",
  answer2:  "further north in winter than summer",
  answer3: "Florida to NW Scotland in summer",
  answer4: "Florida to NW Scotland in winter",
  correctAnswer: 1
 },
  { 
  question: "If air in transit is heated from bellow it tends to become more:",
  answer1:  "Neutrally stable",
  answer2: "Unstable",
  answer3:  "None of these",
  answer4:  "Stable",
  correctAnswer: 2
 },
  {
  question: "A non-occuled frontal wave passes the airport. What form of precipitation do you expect?",
  answer1: "Showers during some 2 hours until the warm fron arrives. Drizzle in the warm sector within 12 hours.  Rain or snow on the passage of the cold front.",
  answer2: "Rain or snow for about 12 hours until the warm front arrives. Within the warm sector rainfall increases. On the arrival of the cold front precipitation ceases.",
  answer3:  "Continous rain or snow during several hours until the warm front arrives. The percipitation stops for several hours or becomes intermittent light within the warm sector. On the arrival of the cold front, showers occur.", 
  answer4: "Continous rain or snow while the frontal wave passes for a periode of some 24 hours",
  correctAnswer: 3
 },
  {
  question: "What is the relationship between QFE and QNH at an airport 50ft below MSL?",
  answer1:  "QFE = QNH",
  answer2: "QFE <QNH",
  answer3: "QFE>QNH",
  answer4: "There is no clear relationship",
  correctAnswer: 3
 },
  { 
  question: "What type of fronts are most likely to be present during winter in Central Europe when temperatures close to the ground are bellow 0 degrees and freezing rain starts to fall?", 
  answer1: "Cold fronts.",
  answer2: "Cold occlusions",
  answer3: "Warm fronts, warm occlusions",
  answer4: "High level cold fronts",
  correctAnswer: 3
 },
  {
  question: "After passing at right angels through a very active cold front in the direction towards the cold air, what will you encounter at FL50, in the northern hemisphere immediately after a marked changein temperature?", 
  answer1: "A veering in the wind direction",
  answer2: "An increase in tailwind",
  answer3: "A backing in the wind direction",
  answer4: "A decrease in tailwind",
  correctAnswer: 1
 },
  {
  question: "During the passage of a warm front the wind",
  answer1: "Veers throughout the passage",
  answer2: "backs then veers on passage",
  answer3: "backs throughout the passage",
  answer4: "Veers then backs on passage",
  correctAnswer: 1
 },
  {
  question: "In which approximate direction does the center of a frontal depression moves?",
  answer1: "In the direction of the warm sector isobars",
  answer2: "In the direction of the isobars a head of the warm front",
  answer3: "In the direction of the sharpest pressure increase",
  answer4: "In the direction of the isobars behind the cold front",
  correctAnswer: 1
 },
  {
  question: "On the passage of a cold front the surface wind... the pressure... and the temperature.....", 
  answer1: "backs/ rises/ falls",
  answer2: "backs/falls/rises",
  answer3: "veers/rises/ falls", 
  answer4: "veers/falls/ rises",
  correctAnswer: 3
 },
  {
  question: "What is the type, intensity and seasonal variation of precipitation in the equatorial region?",
  answer1: "Warm fronts are common with continuous rain. The frequency is the same throughout the year",
  answer2: "Rainshowers, hail showers and thunderstorms occur the whole year, but the frequency is highest    during two periods: April - May and October- November",
  answer3: "Showers of rain or hail occur throughout the year, but the frequency is highest in January",
  answer4: "Precipitation is generally in the form of showers but continuous rain occurs also. The greatest   intensity is in July.",
  correctAnswer: 2
 },
  {
  question: "Which is true of a secondary depression in the northern hemisphere?",
  answer1: "It tends to move around the primary in an anticyclone sense",
  answer2: "It rapidly closes on, and merges with the primary",
  answer3: "It tends to move around the primary in an cyclone sense",
  answer4: "it tends to maintain its position relative to the primary.",
  correctAnswer: 3
 },
  {
  question: "In relation to the total weight of the atmosphere, the weight of the atmosphere between mean sea level and a height of 5500m is",
  answer1: "99%",
  answer2: "50%",
  answer3: "1%",
  answer4: "25%",
  correctAnswer: 2
 },
  {
  question: "During summer, a weak pressure gradient covers a coastal airfield in Eastern England resulting in mainly clear skies. The surface wind at dawn was calm. If the alignment of the coastline in the vicinity of the airfield is predominantly North/South, the surface wind is likely to become.",
  answer1: "easterly to south-easterly and increase in velocity by afternoon",
  answer2: "westerly and then southerly by evening",
  answer3: "easterly and then westerly by afternoon",
  answer4: "westerly and increase in velocity by afternoon",
  correctAnswer: 1
 },
  {
  question: "You are flying at at 2500ft /AGL, the wind is 180 degrees, and intend to land at an airport, at sea level directly below. From approximately which direction would you expect the surface wind (mid-latitude, northern hemisphere)?",
  answer1: "South-southwest",
  answer2: "South.",
  answer3: "Southwest",
  answer4: "South- southeast.", 
  correctAnswer: 4
 },
  {
  question: "Which of the following types of jet streams can be observed all year round?",
  answer1: "Equatorial jet stream /arctic jet stream",
  answer2: "Arctic jet stream/ subtropical jet stream",
  answer3: "Equatorial jet stream/ Polar front jet stream",
  answer4: "Subtropical jet stream / Polar front jet stream",
  correctAnswer: 4
 },
  {
  question: "The weather normally associated with polar maritime air near the UK is:",
  answer1: "Overcast moderate intermittent rain",
  answer2: "overcast,moderate drizzle",
  answer3: "broken cloud, moderate continuous rain",
  answer4: "broken cloud, moderate or heavy rain showers",
  correctAnswer: 4
 },
  {
  question: "What cloud type can produce freezing rain?",
  answer1: "Stratocumulus",
  answer2: "Stratus",
  answer3: "Cumulonimbus",
  answer4: "Nimbostratus",
  correctAnswer: 4
 },
  {
  question: "What type of cloud is being described? A generally grey cloud layer with fairly uniform base and uniform apperance, which may give drizzle or snow grains. When the sun is visible through the cloud, the outline is clearly discernible. Sometimes it appears in the form of ragged patches.",
  answer1: "Nimbostratus",
  answer2: "Altostratus",
  answer3: "Cirrostratus",
  answer4: "Stratus",
  correctAnswer: 4
   },
  {
  question: "The worst turbulence in connection to a jetstream (N.H) would be expected when flying:",
answer1: "in the middle of the core.",
answer2: "in the warm sector.",
answer3: "in the jetstream to the left of the core.",
answer4: "in the jetstream to the right of the core.",
correctAnswer: 3
 },
  {
question: "What is the average height of the polar frontal jetstream core?",
answer1: "FL390",
answer2: "FL300-500",
answer3: "FL200",
answer4: "FL250",
correctAnswer: 2
 },
  {
question: "(For this question use annex 1415) What is the speed of the jetstream NORTH of Oslo?", 
answer1: "105kt",
answer2: "50kt",
answer3:"45kt",
answer4: "85kt",
correctAnswer: 4
 },
  {
question: "ITCZ weather is:",
answer1: "Occasional showers with continuous rain.",
answer2: "Usually clear Wx, especially during the winter.",
answer3: "Often thundery through strong convergence.",
answer4: "Light winds from the South-West.", 
correctAnswer: 3
 },
  {
question: "Fog and cloud formation takes place by:",
answer1: "Condensation",
answer2: "Evaporation",
answer3: "Sublimation",
answer4: "Inversion",
correctAnswer: 1
 },
  {
question: "Between the subtropical highs and ITCZ the wind at low levels is called:",
answer1: "anti trade winds.",  
answer2: "monsoon winds.",
answer3: "trade winds.",
answer4: "anti monsoon winds.",
correctAnswer: 3
 },
  {
question: "Which wind systems converge on the ITCZ when it lies at the equator?",
answer1: "SW monsoon and NW monsoon.",
answer2: "SE trade winds and NE trade winds.",
answer3: "SW monsoon and NW trade winds.",
answer4: "NW monsoon and SW trade winds.", 
correctAnswer: 2
 },
  {
question: "Fog which releases only 2m above ground or 10m above the sea is called:",
answer1: "Mist",
answer2: "Drifting fog",
answer3: "Smog",
answer4: "Shallow fog", 
correctAnswer: 4
 },
  {
question: "Advection fog:",
answer1: "Can sometimes last for 24 hours or more in winter.", 
answer2: "Is most likely with Polar Maritime air.",
answer3: "Will only clear by insolation.",
answer4: "Only occurs at night and early morning.",
correctAnswer: 1
 },
  {
question: "What causes advection fog?", 
answer1: "Warm air moving over a warm surface.",
answer2: "Warm moist air moving over snow.",
answer3: "Warm moist air moving over land during summertime.",
answer4: "Cold air moving over a warmer surface.",
correctAnswer: 2
 },
  {
question: "Under which of these conditions is radiation fog most likely to form?", 
answer1: "Strong surface winds.",
answer2: "Very low temperatures.",
answer3: "Little or no cloud, almost calm, high relative humidity.", 
answer4: "Very dry air.",
correctAnswer: 3
 },
  {
question: "What is the relationship between RVR and Meteorological visibility in homogenous fog?",
answer1: "RVR=MET-visibility.",
answer2: "RVR > MET-visibility.",
answer3: "RVR < MET-visibility.",
answer4: "Can’t be stated with the conditions given.",
correctAnswer: 2
 },
  {
question: "In the Northern hemisphere, the wind moves relative to a high pressure area in what direction?",
answer1: "Directly outwards from the high pressure area.",
answer2: "Counter-clockwise around the high pressure area.",
answer3: "Directly towards the high pressure area.",
answer4: "Clockwise around the high pressure area.",
correctAnswer: 4
 },
  {
question: "The wind is one important factor when planning a flight. You are planning a flight at FL180. Which upper winds chart should be considered?",
answer1: "600hPa",
answer2: "700hPa",
answer3: "500phPa",
answer4: "FL180 is not a standard pressure level. Therefore, 600, 700 or 500 hPa charts should be used at pilots discretion.", 
correctAnswer: 3
 },
  {
question: "How does the wind change when moving down into the friction layer?",
answer1: "The speed decreases to ca. 50% over land and backs by ca. 30˚ in the N.H.",
answer2: "The speed decreases to ca. 90% over sea and backs by ca. 10˚ in the N.H.",
answer3: "The speed decreases to ca. 70% over sea and veers by ca. 30˚ in the S.H.",
answer4: "The speed decreases to ca. 50% over land and backs by ca. 30˚ in the S.H.",
correctAnswer: 1
 },
  {
question: "Extensive cloud and precipitation is often associated with a non frontal thermal depression because of:",
answer1: "surface convergence and upper level divergence causing widespread descent of air in the depression.",
answer2: "surface divergence and upper level convergence causing widespread ascent of air in the depression.",
answer3: "surface convergence and upper level divergence causing widespread ascent of air in the depression.",
answer4: "surface divergence and upper level convergence causing widespread descent of air in the depression.",
correctAnswer: 3
 },
  {
question: "In the lower layers of the atmosphere due to friction the wind changes direction towards the low pressure area because:",
answer1: "the pressure gradient increases.",
answer2: "turbulence is formed and pressure increases.", 
answer3: "wind speed decreases and therefore coriolois force decreases.",
answer4: "turbulence is formed and pressure decreases.", 
correctAnswer: 3
 },
  {
question: "During a flight over the sea at FL100 from Marseille (QNH 1016hPa) to Palma de Mallorca (QNH 1016hPa), the true altitude is constantly decreasing. What is the probable reason for this?",
answer1: "The altimeter is faulty.",
answer2: "The air at Marseille is warmer than at Palma de Mallorca.",
answer3: "One of the QNH values must be wrong.",
answer4: "The air at Palma de Mallorca is warmer than at Marseille.",
correctAnswer: 2
 },
  {
question: "Air masses originating in NE Canada and the North Atlantic in winter most commonly reach NW Europe as:",
answer1: "unstable cold moist air (Pm).", 
answer2: "stable warm moist air (Tm).",
answer3: "unstable warm moist air (Tm).",
answer4: "stable cold dry air (Pc).",
correctAnswer: 1
 },
  {
question: "Compared to the tropopause over the North Pole, the tropopause over the equator is:",
answer1: "Colder & lower.",
answer2: "Higher & colder.",
answer3: "Warmer & lower.",
answer4: "Higher & warmer.",
correctAnswer: 2
 },
  {
 question:
      "What type of air mass reach Europe with a south-westerly airflow, during summer? ",
    answer1: "cE",
    answer2: "mE",
    answer3: "mT",
    answer4: "cT",
    correctAnswer: 3
  },
  {
    question:
      "Where do you find the most probable location for finding FZRA during wintertime ",
    answer1: "In front of a cold front",
    answer2: "Behind a cold front",
    answer3: "In front of a warm front",
    answer4: "Behind a warm front",
    correctAnswer: 3
  },
  {
    question: "Tropical Revolving Storms can effect the Florida area of the USA during;",
    answer1: "May",
    answer2: "December",
    answer3: "February",
    answer4: "August",
    correctAnswer: 4
  },
  {
    question: "Flying from Lisbon to Dakar (North-West Africa) during July , where would you expect to find the ITCZ:?",
    answer1: "The Canaries",
    answer2: "Close to Dakar",
    answer3: "Ober Algiers",
    answer4: "At the equator",
    correctAnswer: 2
  },
  {
    question:
      "Before making your approach to India the latest TAF states: TEMPO 1212/1216 +TS. what is likely total time for +TS during the afternoon:",
    answer1: "1h",
    answer2: "2h",
    answer3: "4h",
    answer4: "6h",
    correctAnswer: 2
  },
  {
    question:
      "What effect does temperature have on tropical revolving storms?",
    answer1: "Ocean temperature below 29C causes tropical revolving storms to dissipate",
    answer2: "Ocean temperature of at least 26,5C are required to sustain a tropical revolving storm",
    answer3: "Temperature will not affect the storms, as long as there is an adequate supply of moisture",
    answer4: "Ocean temperatures above 31C are required to sustain a tropical revolving storm",
    correctAnswer: 2
  },
  {
    question: "With regard to Darwin in Northern Australia, what weather would you expect to encounter in July?",
    answer1: "Dry weather associated with high pressure and the ITCZ",
    answer2: "Dry with little or no cloud, possible reduction in visibility due to dusty conditions in NE winds",
    answer3: "Dry with little or no cloud, possible reduction in visibility due to dusty conditions in SE winds",
    answer4: "Wet and stormy from Cu/Cb/Ts from the SW monsoon",
    correctAnswer: 3
  },
  {
    question: "With regard to airframe icing and supercooled water droplets. What type of ice is associated with the droplets striking the airframe partly freezing on impact, and an amount flowing back before freezing?",
    answer1: "Rime ice",
    answer2: "Clear Ice",
    answer3: "Hoar Frost",
    answer4: "Opaque",
    correctAnswer: 2
  },
  {
    question:
      "The Bora wind is",
    answer1: "A katabatic wind that blows from Balkan to the Mediterranean sea",
    answer2: "An anabatic wind that blows from the Mediterranean sea to balkan",
    answer3: "An anabatic wind that blows from the Mediterranean sea to the Alps",
    answer4: "The same as a foehn wind",
    correctAnswer: 1
  },
  {
    question:
      "How are well separated CB clouds described on the significant weather chart?",
    answer1: "EMBD",
    answer2: "NSC",
    answer3: "FRE",
    answer4: "OCNL",
    correctAnswer: 4
  },
  {
    question: "METAR: ENGM 210200Z 13014KT 2000 FZFG FEW010 10/12 Q1001 What does the abbreviation FZFG mean:",
    answer1: "Heavy precipitation ",
    answer2: "freezing fog",
    answer3: "freezing clouds",
    answer4: "Wind calm",
    correctAnswer: 2
  },
  {
    question: "How is the wind measured for a METAR",
    answer1: "wind direction is given with reference to grid north",
    answer2: "The wind is measured from magnetic north",
    answer3: "The wind is given with reference to true north",
    answer4: "The wind blows towards magnetic north",
    correctAnswer: 3
  },
  {
    question: "In a METAR you see the coding R16/P1300. What does the imply?",
    answer1: "RVR has passed the maximum value which is possible to measure with this transmissometer",
    answer2: "RVR equipment is problematic",
    answer3: "RVR is improving",
    answer4: "RVR is varying",
    correctAnswer: 1
  },
  {
    question: "Which of the four answers is a correct interpretation of data from the following METAR? 16003KT 0400 R14/1500 R16/1000N FZFG VV03 M02/M02 Q1026 BECMG 2000=",
    answer1: "meteorological visibility 1000, RVR 400 meter freezing level at 300 meters variable winds temperature winds",
    answer2:
      "meteorological visibility 400m RVR for runway 16 1000m dewpoint -2 freezing fog",
    answer3: "RVR for runway 16 1000ft meteorological visibility increasing in the next 2 hours 2000m vertical visibility 300m temperature -2",
    answer4:
      "RVR for runway 14 is less than 1500m meteorological visibility 400m QNH 1026 wind 160 at 3kt",
    correctAnswer: 2
  },
  {
    question: "For how long is a TAF valid",
    answer1: "9h",
    answer2: "6-9h",
    answer3: "the period of the validity is given in the TAF",
    answer4: "6h",
    correctAnswer: 3
  },
  {
    question: "The air density is e.g. important when you will create lift. When will the air density be greatest?:",
    answer1: "At an airport at height and at high temperature",
    answer2: "At an airport at low areas at high temperatures",
    answer3: "At an airport at low areas and at low temperatures and at high pressure",
    answer4: "At an airport at height with high relative humidity",
    correctAnswer: 3
  },
  {
    question:
      "When will the surface wind in a METAR record a gust factor",
    answer1: "> or = mean wind at +10kt",
    answer2: "When the mean wind is higher than 10kt",
    answer3: "When the mean wind is higher than 5kt",
    answer4: "Always",
    correctAnswer: 1
  },
  {
    question:
      "in aerodrome reports and forecasts the height of the cloudbase refers to?",
    answer1: "The height above mean sea level",
    answer2: "The height above aerodrome elevation",
    answer3: "The pressure altitude of the cloudbase",
    answer4: "The height above the highest peak, hill or mountain in the area",
    correctAnswer: 2

   
  }
];
