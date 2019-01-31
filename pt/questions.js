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
  
  question: "The altimeter subscale is set to 1030 hPa and the altimeter reads 3500'. QNH is 994 hPa. what is the altitude of the aircraft?",
  answer1: "2990",
  answer2: "4472",
  answer3: "3500",
  answer4: "2528",   
  correctAnswer: 4
  },
  {

  question: "Take off from an airport with QNH 1020 hPa. When passing through the transition altitude you are resetting your altimeter to the standard. What happens with the altimeter reading?", 
  answer1: "increase",
  answer2: "apparently nothing", 
  answer3: "decrease",
  answer4: "it showsks 5000",
  correctAnswer: 3
  },
  {

  question: "An aircraft is flying at FL60 indicated towards a mountain range with an elevation of 3900'. if during the flight the QNH in the mountain area falls to 989 hPa and the altimeter sub scale is not reset, what will the terrain clearence be over the mountain range?", 
  answer1: "2748",
  answer2: "2100",
  answer3: "2568",
  answer4: "1452",
  correctAnswer: 4
  },
  {

  question: "The temperature and dewpoint are within 1 degree of each other. what is most likely during the following night?",
  answer1: "Fog and low St",
  answer2: "Clear and cold",
  answer3: "Ts",
  answer4: "good visibillity", 
  correctAnswer: 1
  },
  {
  question: "Througout the 24 hrs of a day the relativ humidity can be expected to:",
  answer1: "increase during the day and decrease at night",
  answer2: "stay reasonably constant througout the 24hrs",
  answer3: "Reduce during the day and increase at night",
  answer4: "only change with a change of airmass",
  correctAnswer: 3
  },
  {
  question: "From summer to winter, the movement of the jetstreams over the north atlantic and their speed change, will be:",
  answer1: "N and increase",
  answer2: "N and decrease",
  answer3: "S and increase",	
  answer4: "S and decrease",
  correctAnswer: 3
  },
  {
  question: "Radiation fog is most likely to be formed:",
  answer1: "During the day in tropical areas",
  answer2: "after a cold and gusty night",
  answer3: "over land during a clear night with calm winds",
  answer4: "over sea after a clear night with calm winds.",
  correctAnswer: 3
  },
  {
  question: "NH. Eastarly jet - when and where does it exist?",
  answer1: "summer, southern asia",
  answer2: "winter, southern europe",
  answer3: "summer, southern europe",
  answer4: "winter, nothern canada",
  correctAnswer: 1
  },
  {
  question: "Where is the coldest part of cold occlusion?,", 
  answer1: "just at the point of the occlusion", 
  answer2: "before the front",
  answer3: "behind the front",
  answer4: "under warm airmass",
  correctAnswer: 3
  },
  {
  question: "Where does the tropical maritime air originate?",
  answer1: "North Africa",
  answer2: "The inlands of Siberia",
  answer3: "Azorean Islands in the Atlantic Ocean",		
  answer4: "Greenland",
  correctAnswer: 3
  },
  {
  question: "What type of front/occlusion usually moves the fastest?",
  answer1: "warm occlusion",
  answer2: "cold front",
  answer3: "warm front",
  answer4: "cold occlusion", 
  correctAnswer: 2
  },
  {
  question: "What conditions will cause the lowest surface temperature during night?",
  answer1: "clear skies, calm winds", 
  answer2: "cloudy skies, strong wind",
  answer3: "clear skies, strong wind",
  answer4: "cloudy skies, calm wind.",
  correctAnswer: 1
  },
  {


  question: "over an airfield cumulonimbus clouds are covering the sky. The cloud ceiling is 6000 ft. How will the actual METAR look like?",
  answer1: "CAVOK, if the visibility is above 10 km",
  answer2: "OVC060",
  answer3: "BKN600CB", 
  answer4: "OVC060CB", 
  correctAnswer: 4 
 },
  {
  question: "Geostationary satellites have a position height over earths surface of:",
  answer1:"35800m",
  answer2:"35800 ft",
  answer3:"35800 km", 
  answer4:"not a fixed height",
  correctAnswer: 3
 },
  {
  question: "A satellite relayed TV images are transmitted to the earths station:",
  answer1: "in real time",
  answer2: "With a delay of 30 min.",
  answer3: "only during day time",
  answer4: "only during night time",
  correctAnswer: 1
 },
  {
  questtion: "Satellite images are used to:",
  answer1: "locate cloud systems and fronts in different areas.",
  answer2: "to achieve 14 days forecasts.",
  answer3: "locate areas of moderate icing",
  answer4: "locate wind currents at the ground.",
  correctAnswer: 1
 },
  {
  question: "An inversion is one in which:",
  answer1: "there is no horizontal gradient of temperature",
  answer2: "there is no change of temperature with heght.",
  answer3: "there is an increase of temperature as height increases",
  answer4: "there is a decrease of tempersture as height increases.", 
  correctAnswer: 3
 },
  {
  question: "The area in which the most severe turbelence could be experienced in the relation to standing waves is:",
  answer1: "In the rotor zone, only if cloud is present",
  answer2: "midway between the lenticularis clouds.",
  answer3: "mainly in connection with the first rotor zone.", 
  answer4: "on the wind side of the mountain.",
  correctAnswer: 3
 },
  {
  question: "in which air mass are extremly low temperatures encountered?",
  answer1: "maritme air",
  answer2: "Polar continental air", 
  answer3: "Polar maritme air.",
  answer4: "Tropical continental",
  correctAnswer: 2
 },
  {
  question: "in which of the following regions does polar maritme air originate?",
  answer1: "region of British isles.",
  answer2: "Baltic sea",
  answer3: "Black sea",
  answer4: "East of greenland", 
  correctAnswer: 4 
 },
  {
  question: "what is an airmass?",
  answer1: "a mass of air with a size of at least 500 000 metric tons.",
  answer2: "a mass of air covering an area of at least 100 square km",
  answer3: "a volume of air subject to change in its mass",
  answer4: "a mass of air with uniform characteristics with regard to humidity and temperature", 
  correctAnswer: 4
 },
  {
  question: "to what is the altitude information relative, provided that QFE is seleceted.",
  answer1: "The respective airfield", 
  answer2: "Sea level",
  answer3: "Ground level",
  answer4: "Sea level in the international standard atmosphere.",
  correctAnswer: 1
},
  {
  question: "What happens if a certain airmass is compressed to a smaller volume?",
  answer1: "pressure  decrease, temperature decrease, Densiity  decrease",
  answer2: "pressure  Increase, temperature decrease, Densiity  decrease",
  answer3: "pressure  Increase, temperature decrease, Densiity  Increase",
  answer4: "pressure  Increase, temperature Increase, Densiity  Increase", 
  correctAnswer: 4
 },
  {
  question: "which of the following processes within a layer may lead to the building of CU and CB clouds?",
  answer1: "frontal lifting within stable layers",
  answer2: "subsidence",
  answer3: "radiation",
  answer4: "Convection",
  correctAnswer: 4
 },
  {
  question: "When is an airmass said to be «stable»?", 
  answer1: "where there is little or no horizontal movement (advection)",
  answer2: "when there is no or little vertical movement. (convection)", 
  answer3: "when the air behaves as predicted by the meteorologists",
  answer4: "when no rain is present.",
  correctAnswer: 3
 },
  {
  question: "thunderstorms require a trigger action to release the conditional instability. Which of the        following would be the LEAST sutible as a trigger:",
  answer1: "convergensce in temperate latitudes",
  answer2: "Convergence in tropical latitudes.",
  answer3: "Subsidence in tropical latitudes", 
  answer4: "convection in polar latitudes.",
  question: 3
 },
  {
  question: "How will the dewpoint change during a shower of rain?", 
  answer1: "It will probably inccrease", 
  answer2: "it will probably be higher than the temperature",
  answer3: "it will probably decrease.",
  answer4: "it will be unaffected.",
  correctAnswer: 1
},
  {
  question: "with regard to Drwin (northern territories) Australia, what weather would you expect to encounter in january?", 
  answer1: "dry weather associated with the high pressure area in the inlands.",
  answer2: "Dry with little or no cloud, possible reduction in the visibility due to dusty conditions in NW   winds.", 
  answer3: "Moist weather, risk of TRS due to the proximity of ITCZ", 
  answer4: "Wet and stormy from CU/CB/TS from the SW monsoon.", 
  correctAnswer: 3
 },
  {
  question: "which of these four METAR reports suggests that a thunderstorm is likely in the next few hours?",
  answer1: "1350Z 21005kt 9999 SCT040CB SCT100 26/18 Q1016 TEMPO 24018G30KT TS =",
  answer2: "1350Z 16004kt 8000 SCT110 OVC220 02/m02 Q1008 NOSIG=",
  answer3: "1350Z 34003kt 0800 SN VV002 m02/m04 Q1014 NOSIG",
  answer4: "1350Z 04012kt 3000 OVC012 04/03 Q1022 BECMG 5000=",
  correctAnswer: 1
 },
  {
  question: "When in flight with the OAT decreasing and crossing  jet stream at 2000 ft below the axis of the Jet core the aircraft will experience:", 
  answer1: "Drift to port",
  answer2: "Drift to starboard",
  answer3: "Tail wind component",
  answer4: "Headwind component.",
  correctAnswer: 2
 },
  { 
  question: "an aircraft on a transatlantic flight from new York to London will cross the surface position of a cold front at 1000 UTC. The cold front jet is aligned SW-NE and is associated with the cold front. What is the direction of maximum drift and at what time will it happen?", 
  answer1: "Right and after 1000 UTC",
  answer2: "Right and before 1000 UTC",
  answer3: "Left and before 1000 UTC", 
  answer4: "Left and after 1000 UTC",
  correctAnswer: 3
 },
  {
  question: "A Jetstream is", 
  answer1: "A current of fast moving air which is normally found in the lower stratosphere", 
  answer2: "A current of fast moving air in the upper troposphere often associated with high latitude anticyclones",
  answer3: "A current of fast moving air in the upper troposphere often associated with a surface frontal depression.",
  answer4: "a current of fast moving air in the upper troposphere which always blows from a westerly direction in both hemispheres especially near Equator",
  correctAnswer: 3
 },
  {
  question: "The cloud and precipitation associated with Tropical maritime air over Europe is:",
  answer1: "SC and Showers",
  answer2: "CU/CB and showers",
  answer3: "ST and Rain",
  answer4: "ST/SC and drizzle/light rain",
  correctAnswer: 4
 },
  {
  question: "The mean position of the polar front in the north atlantic is:",
  answer1: "From Florida to the north of UK in July",
  answer2: "Frok North of the UK to Newfoundland in January",
  answer3: "From SW UK to Newfoundland in July",
  answer4: "From Florida to SW UK in January",
  correctAnswer: 4
  },
  {
  question: "Depressions associated with developing frontal waves can be assumed to move in the direction of the 3000ft wind:",
  answer1: "Behind the cold front",
  answer2: "At the apex of the wave",
  answer3: "Ahead of the warm front",
  answer4: "In the warm sector",
  correctAnswer: 4
  },
  {
  question: "What types of cloud will you see flying at FL50 towards a warm front?",
  answer1: "At some 500km AS, later CS and some 80km before the front CB",
  answer2: "At some 500km from the front, groups of CB, later some 250km thickening AS",
  answer3: "Mainly clear skies. At some 100km from the front, NS begins",
  answer4: "At some 800km CS, later AS, and some 300km NS until the front.",
  correctAnswer: 4
 },
  {
  question: "What degree of turbulence, if any, is likely to be encountered while flying through a cold front in    the summer over Central Europe at FL100?",
  answer1: "Moderate turbulence in NS cloud",
  answer2: "Severe turbulence in CB cloud",
  answer3: "Light turbulence in CB",
  answer4: "Light turbulence in ST cloud",
  correctAnswer: 2
 },
  {
  question: "Which of the following conditions are you most likely to encounter when approaching an active warm   front at medium to low level?",
  answer1: "Severe thunderstorm at low altitude",
  answer2: "Low cloud and poor visibility", 
  answer3: "Extreme turbulence and severe lightning striking the ground",
  answer4: "High cloud base, good surface visibility, and isolated TS",
  correctAnswer: 2
 },
  {
  question: "In case of fronts, what cloud formation is most likely to occur at low levels when a warm air mass overrides a cold air mass?",
  answer1: "Cumulus",
  answer2: "Nimbostratus", 
  answer3: "Cumulinimbus",
  answer4: "Altostratus",
  correctAnswer: 2
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
  question: "In the TAF for Athens, during the summer, for the time of your landing you note: TEMPO TS. What is maximum time this deterioration in weather can last in anyone instance?",
  answer1: "120 minutes",
  answer2: "60 minutes",
  answer3: "10 minutes",
  answer4: "20 minutes",
  CorrectAnswer: 2
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
