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
Answer1: "CAVOK, if the visibility is above 10 km",
Answer2: "OVC060",
Answer3: "BKN600CB", 
Answer4: "OVC060CB", 
 correctAnswer: 4 
 },
  {
question: "Geostationary satellites have a position height over earths surface of:",
Answer1:"35800m",
Answer2:"35800 ft",
Answer3:"35800 km", 
Answer4:"not a fixed height",
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
questio: "which of the following processes within a layer may lead to the building of CU and CB clouds?",
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
question: "thunderstorms require a trigger action to release the conditional instability. Which of the following would be the LEAST sutible as a trigger:",
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
answer2: "Dry with little or no cloud, possible reduction in the visibility due to dusty conditions in NW winds.", 
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
question: "What degree of turbulence, if any, is likely to be encountered while flying through a cold front in the summer over Central Europe at FL100?",
answer1: "Moderate turbulence in NS cloud",
answer2: "Severe turbulence in CB cloud",
answer3: "Light turbulence in CB",
answer4: "Light turbulence in ST cloud",
 correctAnswer: 2
 },
  {
question: "Which of the following conditions are you most likely to encounter when approaching an active warm front at medium to low level?",
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
question: "In which of the following 1850UTC METAR reports, is the probability of fog formation, in the coming night, the highest?",
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
answer4: "A METAR signifies actual weather report at an aerodrome and is generally issued with half hour intervals.",
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
question: "REFER TO DIAGRAM 163
TAF 060600Z 0606/0616 25006KT 8000 BKN240 BECMG 0607/0610 OVC200 BECMG 0610/0613 23010KT 8000 OVC100 BECMG 0613/0616 23014KT 6000 RA SCT030 OVC050=
At which airport is the following weather development taking place?",
answer1: "LEMD",
answer2: "EDDL",
answer3: "LFPO",
answer4: "LOWW",
 correctAnswer: 2
 },
  {
question: "Flight from Bordeaux to Amsterdam, ETA 2100UTC. What lowest cloud base is forecasted for arrival at Amsterdam?
TAF EHAM 281500Z 2816/2901 14010KT 6000FT -RA SCT025 BECMG 2816/281812015G25KT SCT008 BKN013 TEMPO 2818/2823 3000 RA BKN005 OVC101 BECMG 2823/2901 25020KT 8000NSW",
answer1: "250FT",
answer2: "500FT",
answer3: "800FT",
answer4: "500M",
 correctAnswer: 3
 },
  {
question: "Flight from Lisbon to Bordeaux, ETA 1800UTC. What type of precipitation is forecasted on the approach to Bordeaux?
TAF LFBD 281300z 2815/2824 26015KT 9999 SHRA BKN 020 TEMPO 2816/2820 26020G30KT 8000 +SHRA BKN015CB PROB30 TSRA",
answer1: "Continuous moderate rain",
answer2: "Heavy rainshowers",
answer3: "Moderate snow showers",
answer4: "Light drizzle and fog",
 correctAnswer: 2
 },
  {
question: "REFER TO DIAGRAM 166
To which aerodrome is the following TAF most applicable?
TAF 2310/2319 24014KT 6000 SCT030 BKN100 TEMPO 2311/2313 25020G38KT 2500 +TSRA SCT008 BKN025CB BECMG 2313/2315 9999 28012KT SCT030",
answer1: "LEMD",
answer2: "LOWW",
answer3: "EKCH",
answer4: "LFPG", 
 correctAnswer: 4
 },
  {
question: "Refer to following TAF extract
BECMG 1821 2000 BR BKN004 2124 0500 FG VV001
What visibility is forecast for 2400UTC",
answer1: "500M", 
answer2: "2000M",
answer3: "Between 500m and 2000m",
answer4: "0m and 1000m", 
 correctAnswer: 1
 },
  {
question: "Refer to the following TAF extract
BECMG 1821 2000 BR BKN004 BECMG 2124 0500 FG VV001
What does the BECMG data indicate for 18 and 21 hour time frame?",
answer1: "The new conditions are achieved between 1800 and 2100 UTC",
answer2: "many long term changes in the original weather",
answer3: "Many short term changes in the original weather",
answer4: "a quick change to the new conditions between 1800 and 1900 utc", 
 correctAnswer: 1
 },
  {
question: "Refer to the following extract:
BECMG 1821 2000 BR BKN004 BECMG 2124 0500 FG VV001
What does the abbreviation BKN004 mean?",
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





























   
   
   
   
   
   

   
  }
];
