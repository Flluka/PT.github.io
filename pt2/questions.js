const questions = [

  {
    question:"The distance between positions C and D is 90NM. An aircraft departs position C and after having travelled 30NM, its position is pinpointed 3NM right og the intended track. Assuming no change in wind velocity, what heading alteration must be made in order to arrive at position D? ",
    answer1: "9 Left",
    answer2: "9 Right ",
    answer3: "2 Left",
    answer4: "6 Left",
    correctAnswer: 1
  },
  {
    question:"In producing chart projections, the following projection surfaces may be used: ",
    answer1: "Plane, Shpere, Cone",
    answer2: "Plane, Cylinder, Cone",
    answer3: "Cylinder, Sphere, Plane",
    answer4: "Parabola, Cone, Plane, Cylinder",
    correctAnswer: 2

  },
  {
    question: "On a direct Mercator chart at latitude of 45°N, a certain length represents a distance of 90NM on the earth. The same length on the chart will represent on the earth, at latitude 30°N, a distance of:",
    answer1: "45NM",
    answer2: "73.5NM",
    answer3: "78NM",
    answer4: "110NM",
    correctAnswer: 4
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
    answer1: "Correct at the Pole",
    answer2: "Correct at the equator",
    answer3: "Correct at the North Pole",
    answer4: "Correct at the Sout Pole",
    correctAnswer: 1
  },
  {
    question:"For a Lambert Chart with a Parallel Of Origin at 60S, the convergence Factor is: ",
    answer1: "1.0",
    answer2: "0.0",
    answer3: "0.5",
    answer4: "0.866",
    correctAnswer: 4
  },
  {
    question: "What is the latitude of the Tropic of Cancer",
    answer1: "23°1/2N",
    answer2: "23°1/2S",
    answer3: "66°1/2N",
    answer4: "45°N/S",
    correctAnswer: 1
  },
  {
    question: "Given: Magnetic Heading 165°, Drift angle 10° right, Relative bearing of NDB 320°(R). Variation 6°E. Deviation +5°. What is the true bearing of the aircraft measured from the NDB (QTE)",
    answer1: "311°(T)",
    answer2: "311°(M)",
    answer3: "300°(T)",
    answer4: "315°(T)",
    correctAnswer: 1
  },
  {
    question:"265 US - GAL equals? (specific gravity 0.80) ",
    answer1: "862kg",
    answer2: "803kg",
    answer3: "895kg",
    answer4: "940kg",
    correctAnswer: 2
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
    answer2: "5550feet",
    answer3: "4290feet",
    answer4: "5320feet",
    correctAnswer: 2
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
    answer1: "1700ft/min",
    answer2: "2000ft/min",
    answer3: "1900ft/min",
    answer4: "1800ft/min",
    correctAnswer: 3
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
    question:
      "An aircraft tracks radial 200 inbound to a VOR station with a Magnetic Heading(MH) of 010°. After being overhead the VOR station the aircraft tracks radial 090° outbound with a MH of 080°. The TAS is 240kt and the magnetic variation in the area is 5°W. What is the wind vector?(°T) ",
    answer1: "300°/50kts",
    answer2: "330°/50kts",
    answer3: "320°/50kts",
    answer4: "310°/60kts",
    correctAnswer: 3
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
    answer2: "00hr 57min",
    answer3: "00hr 58min",
    answer4: "00hr 59min",
    correctAnswer: 4
  },
  {
    question: "If the pressure altitude is 5000ft and the ambient outside air temperature is ISA +20°C, what is density altitude? :",
    answer1: "8620 feet",
    answer2: "7400 feet",
    answer3: "6980 feet",
    answer4: "7750 feet",
    correctAnswer: 2
  },
  {
    question: "On a lambert chart a straight line track crosses a meridian with a direction of 043°T and a second meridian with a direction of 055°T. If the constant of the cone is 0.75 the difference in logitude between the meridian is: ",
    answer1: "16°",
    answer2: "19°",
    answer3: "14°",
    answer4: "12°",
    correctAnswer: 1
  },
  {
    question: "if the grivation is 6°W and the variation is 8°W, what is the value of grid convergence?",
    answer1: "2°W",
    answer2: "2°E",
    answer3: "4°E",
    answer4: "6°E",
    correctAnswer: 2

      },
  {
    question: "On a Lamberts Conformal Chart, chart scale is correct?",
    answer1: "At the standard parallels",
    answer2: "At the Parallel of Origin",
    answer3: "Along the prime meridian",
    answer4: "In the area between the standard parallels",
    correctAnswer: 1

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
    answer1: "1:6000000",
    answer2: "1:1000000",
    answer3: "1:3000000",
    answer4: "1:5000000",
    correctAnswer: 1

  }
];
