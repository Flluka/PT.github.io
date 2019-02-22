const questions = [
  {
    question:"The distance between positions C and D is 90NM. An aircraft departs position C and after having travelled 30NM, its position is pinpointed 3NM right og the intended track. Assuming no change in wind velocity, what heading alteration must be made in order to arrive at position D? ",
    answer1: "6 Left",
    answer2: "9 Right ",
    answer3: "2 Left",
    answer4: "9 Left",
    correctAnswer: 4
  },
  {
    question:"In producing chart projections, the following projection surfaces may be used: ",
    answer1: "Plane, Shpere, Cone",
    answer2: "Cylinder, Sphere, Plane",
    answer3: "Plane, Cylinder, Cone",
    answer4: "Parabola, Cone, Plane, Cylinder",
    correctAnswer: 3

  },
  {
    question: "On a direct Mercator chart at latitude of 45°N, a certain length represents a distance of 90NM on the earth. The same length on the chart will represent on the earth, at latitude 30°N, a distance of:",
    answer1: "45NM",
    answer2: "110NM",
    answer3: "78NM",
    answer4: "73.5NM",
    correctAnswer: 2
  },
  {
    question: "The countries having a standard time slow on UTC:",
    answer1: "Will often have an earlier standard date than the UTC date",
    answer2: "Will generally be located at western longitudes",
    answer3: "Will often experience sunrise earlier than the sunrise occurs at the Greenwhich meridian",
    answer4: "Will generally be located at eastern longitudes",
    correctAnswer: 2
  },
  {
    question:"On a Polar Stereographic chart, chart convergence is:",
    answer1: "Correct at the south pole",
    answer2: "Correct at the equator",
    answer3: "Correct at the North Pole",
    answer4: "Correct at the pole",
    correctAnswer: 4
  },
  {
    question:"For a Lambert Chart with a Parallel Of Origin at 60S, the convergence Factor is: ",
    answer1: "1.0",
    answer2: "0.866",
    answer3: "0.5",
    answer4: "0.0",
    correctAnswer: 2
  },
  {
    question: "What is the latitude of the Tropic of Cancer",
    answer1: "23°1/2S",
    answer2: "23°1/2N",
    answer3: "66°1/2N",
    answer4: "45°N/S",
    correctAnswer: 2
  },
  {
    question: "Given: Magnetic Heading 165°, Drift angle 10° right, Relative bearing of NDB 320 (R). Variation 6°E. Deviation +5°. What is the true bearing of the aircraft measured from the NDB (QTE)",
    answer1: "315°(T)",
    answer2: "311°(M)",
    answer3: "300°(T)",
    answer4: "311°(T)",
    correctAnswer: 1
  },
  {
    question:"265 US - GAL equals? (specific gravity 0.80) ",
    answer1: "862kg",
    answer2: "940kg",
    answer3: "895kg",
    answer4: "803kg",
    correctAnswer: 4
  },
  {
    question: "Preparing a chart for use of grid means:",
    answer1: "Pre - calculating grid directions for all positions marked on the chart",
    answer2: "Mark the chart with lines and values for grid latitude and longitude",
    answer3: "Selecting suitable grid tracks, position line and bearings",
    answer4: "Selecting a meridian on the chart drawing line on chart, parallel to the meridian selected",
    correctAnswer: 4
  },
  {
    question: "OAT = +35°C, Pressure Alt= 5000 feet, What is true alt?",
    answer1: "4550feet",
    answer2: "5320feet",
    answer3: "4290feet",
    answer4: "5550feet",
    correctAnswer: 4
  },
  {
    question: "What do you understand by the term whiteout?",
    answer1: "Flight condition when you suddenly enter a cloud and everything gets white outside the cockpit windows",
    answer2: "When the terrain is covered with snow and the horizon blend with the sky, visual determination of height becoming difficult",
    answer3: "Flying in heavy snow",
    answer4: "Taking off from snow covered lake",
    correctAnswer: 2
  },
  {
    question: "An aircraft at FL290 is required to commence descent when 50NM from a VOR and to cross that VOR at FL80. Mean GS during descent is 271kts. What is the minimum descent required?",
    answer1: "1900ft/min",
    answer2: "2000ft/min",
    answer3: "1700ft/min",
    answer4: "1800ft/min",
    correctAnswer: 1
  },
  {
    question: "An aircraft is maintaining a 5.2% gradient at 7NM from the runway, on a flat terrain its height is approximately:",
    answer1: "680ft",
    answer2: "2210ft",
    answer3: "1890ft",
    answer4: "3640ft",
    correctAnswer: 2
  },
  {

    question: "Using Chart E(LO)1/2. SHA VOR (52°43´N 08°53´W) DME 41NM. CRK VOR (51°50´N 008°29´W) DME 30NM. The aircraft is on a west southerly heading and both DMEs decreasing. What is the position of the aircraft?",
    answer1: "52°15´N 008°06´W",
    answer2: "52°05´N 009°15´W",
    answer3: "52°15`N 009°15´W",
    answer4: "52°25´N 008°10´W",
      correctAnswer: 1
  },
  {
    question: "An aircraft tracks radial 200 inbound to a VOR station with a Magnetic Heading(MH) of 010°. After being overhead the VOR station the aircraft tracks radial 090° outbound with a MH of 080°. The TAS is 240kt and the magnetic variation in the area is 5°W. What is the wind vector?(°T) ",
    answer1: "320°/50kts",
    answer2: "330°/50kts",
    answer3: "300°/50kts",
    answer4: "310°/60kts",
    correctAnswer: 1
  },
  {
    question: "An aircraft is at position (53°N, 006°W) and has a landmark at position (52°47´N 004°45´W), with a relative bearing of 060°. Given: Compass Heading = 051°. Variation = 16°W. Deviation = 2°E. What is the true bearing of the position line to be plotted from the landmark to the aircraft on a Lambert chart with standard parallels at 37°N and 65°N?",
    answer1: "276°",
    answer2: "278°",
    answer3: "250°",
    answer4: "277°",
    correctAnswer: 2
  },
  {
    question: "How much time does it take for the mean sun to move from meridian 145°15´E to meridian 023°45´W?",
    answer1: "08 hours 16 minutes",
    answer2: "9 hours 41 minutes",
    answer3: "11 hours 16 minutes",
    answer4: "06 hours 15 minutes",
    correctAnswer: 3
  },
  {
    question: "Given: GS = 105kt. Distance from A to B = 103NM. What is the time from A to B? ",
    answer1: "01hr 01min",
    answer2: "00hr 59min",
    answer3: "00hr 58min",
    answer4: "00hr 57min",
    correctAnswer: 2
  },
  {
    question: "If the pressure altitude is 5000ft and the ambient outside air temperature is ISA +20°C, what is density altitude? :",
    answer1: "8620 feet",
    answer2: "7750 feet",
    answer3: "6980 feet",
    answer4: "7400 feet",
    correctAnswer: 4
  },
  {
    question: "On a lambert chart a straight line track crosses a meridian with a direction of 043°T and a second meridian with a direction of 055°T. If the constant of the cone is 0.75 the difference in logitude between the meridian is: ",
    answer1: "14°",
    answer2: "19°",
    answer3: "16°",
    answer4: "12°",
    correctAnswer: 3
  },
  {
    question: "if the grivation is 6°W and the variation is 8°W, what is the value of grid convergence?",
    answer1: "2°W",
    answer2: "6°E",
    answer3: "4°E",
    answer4: "2°E",
    correctAnswer: 4

    },
  {
    question: "On a Lamberts Conformal Chart, chart scale is correct?",
    answer1: "In the area between the standard parallels",
    answer2: "At the Parallel of Origin",
    answer3: "Along the prime meridian",
    answer4: "At the standard parallels", 
    correctAnswer: 4

   },
  {
    question: "Grid Convergence:",
    answer1: "Named easterly when Grid North appears to be east of true North ",
    answer2: "Indenpendent of lonigtude, depending only of latitude",
    answer3: "1 on equatorial Mercator chart",
    answer4: "the difference in direction between Grid North and True North",
    correctAnswer: 4
   },
  {
    question: "A straight line drawn on a chart measures 4.63cm and represents 150NM. The chart scale is: ",
    answer1: "1:5000000",
    answer2: "1:1000000",
    answer3: "1:3000000",
    answer4: "1:6000000",
    correctAnswer: 4
   },
  {
    question: "What is th approximate latitude of the Tropic of Capricorn? ",
    answer1: "66.5°N",
    answer2: "23.5°S",
    answer3: "23.5°N",
    answer4: "45.0°N/S",
    correctAnswer: 2
    
    },
  {
    question: "Given: True Track 245° Drift 5° right Variation 3°E. Compass hdg 242°. Calculate the Magnetic Heading?",
    answer1: "247°",
    answer2: "243°",
    answer3: "237°",
    answer4: "253°",
    correctAnswer: 3
    
    },
  {
    question: "A useful method of pilot resolving, during visual flight, any uncertainty in the aircrafts position is to maintain visual contact with the ground and: ",
    answer1: "fly the expanding circles until a pinpoint is obtained",
    answer2: "fly the reverse of the heading being flown prior to becoming uncertain until a pinpoint is obtained", 
    answer3: "set heading towards a line feature such as coastline, motorway, river or railway", 
    answer4: "fly reverse headings and associated timings until the point of departure is regained",
    correctAnswer: 3
    
   },
  {
    question: "An aircraft is flying from SALCO to BERRY HEAD on magnetic track 007°, TAS 445kt. The wind is 050°(T)/40kt. Variation 5°W, deviation +2° at 1000UTC the relative bearing of locator PY is 311°. At 1003UTC the relative bearing of locator PY is 266°. Calculate the distance of the aircraft from locator PY at 1003UTC",
    answer1: "22NM",
    answer2: "24NM",
    answer3: "23NM",
    answer4: "21NM",
    correctAnswer: 4
    
   },
  {
    question: "On which of the following chart projections is it not possible to represent the North and South Poles", 
    answer1: "Lamberts Conformal",
    answer2: "Tranverse Mercator",
    answer3: "Direct Mercator",
    answer4: "Polar stereographic",
    correctAnswer: 3
    
    },
  {
    question: "On a True Heading of 090° the aircraft experiences drift of 5°R. On a true Heading of 180° the aircraft experiences no drift. On both headings the TAS is 200kt and it is assumed that the wind is the same. What is the experienced wind speed and direction ",
    answer1: "360°/17kt",
    answer2: "360°/34kt",
    answer3: "180°/34kt",
    answer4: "180°/17kt",
    correctAnswer: 1
    
    },
  {
    question: "The Equation of time: ",
    answer1: "is used when calculating the difference between UTC and LMT ",
    answer2: "states the differences between celestial time an apparent time",
    answer3: "is used to calculate mean time when standard time is known ",
    answer4: "states the difference in time of transit of the mean sun and the apparent sun any particular day", 
    correctAnswer: 4 
    
   },
  {
    question: "An aircraft take off from an aerodrome with an elevation of 1483FT, QFE = 963hPa. Five minutes later, passing 5000FT on the QFE, the second altimeter set on 1013hPa will indicate approximately: (use 1hPa = 30ft) ",
    answer1: "6900FT",
    answer2: "4000FT",
    answer3: "3500FT",
    answer4: "6500FT",
    correctAnswer: 2
    
   },
  {
    question: "Given: Pressure altitude 29000FT, OAT -55°C. QNH 1013hPa. Calculate the Density Altitude?  ",
    answer1: "33500FT",
    answer2: "26000FT",
    answer3: "31000FT",
    answer4: "27500FT",
    correctAnswer: 4
    },
  {
    question: "Given: Distance A to B is 100NM. Fix obtained 40NM along and 6NM to the left of the course. What heading alterartion must be mate to reach B? ",
    answer1: "6°Right ",
    answer2: "9°Right",
    answer3: "18°Right",
    answer4: "15°Right",
    correctAnswer: 3
    
    },
  {
    question: "Given: A polar stereographic chart in the northern hemisphere, whose grid is aligned with the prime meridian. Grid track 344°(G), Longitude 115°00´W. Calculate the True course?",
    answer1: "099°(T)",
    answer2: "279°(T)",
    answer3: "229°(T)",
    answer4: "049°(T)",
    correctAnswer: 3
    
    },
  {
    question: "Given: Magnetic Heading 311°, Drift angle 10°left, Relative bearing of NDB 270°(R). what is the magnetic bearing of the NDB measured from the aircraft (QDM to the NDB) ",
    answer1: "211°",
    answer2: "208°",
    answer3: "221°",
    answer4: "180°",
    correctAnswer: 3
    
   },
  {
    question: "An aircraft is planned to fly from position A to position , distance 250NM at an average GS of 115kts. It departs A at 09:00UTC. After flying 75NM along track from A, the aircraft is 1.5NM behind planned time. Using the actual GS experienced, what is the revised ETA at B?",
    answer1: "11150UTC",
    answer2: "1110UTC",
    answer3: "1044UTC",
    answer4: "1050UTC",
    correctAnswer: 1
    
       },
  {
    question: "On a direct mercator chart, a rhumb line appears as a:",
    answer1: "Straight line",
    answer2: "curve convex to the nearer pole ",
    answer3: "omplex/spiral curve",
    answer4: "small circle concave to the nearer pole",
    correctAnswer: 1
    
   },
  {
    question: "Which statement is true about the parallel of origin of a conformal chart? ",
    answer1: "The parallel of origin together with the standard parallel(s), are the only parallels at which the chart is conformal",
    answer2: "The parallel of origin is the parallel at which the scale reaches its maximum value ",
    answer3: "The parallel of origin is the parallel at which the scale reaches its minimum value ",
    answer4: "The parallel of origin is the only parallel at which the chart is conformal",
    correctAnswer: 3
    
   },
  {
    question: "Given: ILS GP angle = 3.5%, GS = 150kt. What is the approximate rate of descent? ",
    answer1: "900FT/MIN",
    answer2: "800FT/MIN ",
    answer3: "700FT/MIN ",
    answer4: "1000FT/MIN",
    correctAnswer: 1
    
      },
  {
    question: "An aircraft flies from waypoint 7 (63°00´N, 073°00´W) to waypoint 8 (63°00´N, 073°00´W). The aircraft position is (62°00´N. 073°10´W). The cross track distance in relation to the planned track is:",
    answer1: "4.7NM R",
    answer2: "8.8NM L",
    answer3: "8.8NM R ",
    answer4: "4.7NM L",
    correctAnswer: 1
  }
];
