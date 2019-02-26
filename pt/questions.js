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
    correctAnswer: 4
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
    correctAnswer: 4

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
    correctAnswer: 4

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
    answer1: "1115UTC",
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
    question: "An aircraft flies from waypoint 7 (63°00´N, 073°00´W) to waypoint 8 (62°00´N, 073°00´W). The aircraft position is (62°00´N. 073°10´W). The cross track distance in relation to the planned track is:",
    answer1: "4.7NM R",
    answer2: "8.8NM L",
    answer3: "8.8NM R ",
    answer4: "4.7NM L",
    correctAnswer: 1

   },
  {
    question: "A lambert conformal chart has standard parallels of 48°N and 60°N. What is constant of the cone?",
    answer1: "0.809",
    answer2: "0.588",
    answer3: "0.866 ",
    answer4: "0.743",
    correctAnswer: 1
  },
{
    Question:"With respect to chart projections, what does conformal mean?",
        answer1: "Angles on the earth varies with longitude",
        answer2: "Angles on the earth are variable",
        answer3: "Angles on the earth are incorrectly represented on the chart",
        answer4: "Angles on the earth are correctly represented on the chart",
        correctAnswer: 4
      },
    {

        Question:"   The polar stereographic projection is a ",
        answer1: "a conical projection",
        answer2: "A plane projection ",
        answer3: "A cylindrical projection",
        answer4: "oblique spheroid",
        correctAnswer: 2
      },
    {

        question:"Parallels of latitude on a direct mercator chart are",
        answer1: "Equally spaced lines",
        answer2: "Parallel straight lines unequally spaced. ",
        answer3: "Parallel straight lines equally spaced.",
        answer4: "lines joining at equal magnetic dip",
        correctAnswer: 2
      },
    {


        question:"On a direct mercator, meridians are:",
        answer1: "Equally deviation.",
        answer2: "Lines with zero variation",
        answer3: "Parallel, equally spaced, straight lines",
        answer4: "Equally spaced lines",
        correctAnswer: 3
      },
    {
        question:"On a normal mercator chart, scale is",
        answer1: "Correct at the north pole",
        answer2: "Correct at equator",
        answer3: "Correct at the poles",
        answer4: "Incorrect at the poles",
        correctAnswer: 2
      },
    {
    
        question:"On a direct mercator  chart at latitude 15*S a certain length represents a distance of 120 nm on the earth. The same length on the chart will represent on the Earth, at latitude 10*N, a distance of",
        answer1: "122.3 nm",
        answer2: "119 nm ",
        answer3: "140 nm",
        answer4: "98 nm",
        correctAnswer: 1
      },
    {
    question:"On a lambert conformal conic chart, greath circles that are not meridians are:",
        answer1: "Convex lines joining at the poles",
        answer2: "Straight lines",
        answer3: "Curves concave to the parallel of origin",
        answer4: "Curves convex to the parallel of origin",
        correctAnswer: 3
      },
    {

    question:"On a lambert chart with parallel of origin of 40*S , a straight line track is drawn from cape town, south africa(33S 020E) to Buenos Aires (35S 061W) . If the outbound track from cape town is 255*, what will be the",
        answer1: "068(m) ",
        answer2: "283 (T)",
        answer3: "307* (M)",
        answer4: " 307* (T)",
        correctAnswer: 4
      },
    {

    question:"On a lambert chart with convergence factor, a straight line is drawn from Bahrain(26N 050E) in direction of 080*T measured at Bahrain. What will be the direction of track measured at 072E.",
        answer1: "259(T)",
        answer2: "091 (T)",
        answer3: "146(T)",
        answer4: "091 (M)",
        correctAnswer: 2
      },
    {

    question:"Grid convergence",
        answer1: "Is southerly for positions east of the grid datum meridian in the northern hemisphere.",
        answer2: "Is easterly for positions east of the grid datum meridian in the northern hemisphere.",
        answer3: "Is westerly for positions east of the grid datum meridian in the northern hemisphere.",
        answer4: "Is northerly for positions east of the grid datum meridian in the northern hemisphere.",
        correctAnswer: 3
      },
    {

    question:"An aircraft is at 75*N 140*W steering 330*T. For a grid aligned with the prime meridian the grid track on a polar stereographic chart will be.",
        answer1: "Grid track = 110* ",
        answer2: "Grid track = 115* ",
        answer3: "Grid track = 096* ",
        answer4: "Grid track = 103",
        correctAnswer: 1
      },
    {

    question:"Grivation",
        answer1: "Is the sum of Grid convergence and true heading",
        answer2: "Is the sum of Grid convergence and magnetic heading",
        answer3: "Is the sum of Grid convergence and deviation",
        answer4: "Is the sum of Grid convergence and variation",
        correctAnswer: 4
      },
    {

    question:"If the grid convergence is 100*E and variation is 40*W, what is the Grivation?",
        answer1: "060E",
        answer2: "060W",
        answer3: "160E",
        answer4: "170E",
        correctAnswer: 1
      },
    {

    question:"At 80*N on a North polar stereographic chart, chart convergence is:",
        answer1: "Less than earth convergence",
        answer2: "Greater than earth convergence",
        answer3: "Equal at equator",
        answer4: "Equal at 20*N",
        correctAnswer: 2
      },
    {

    question:"Using  chart E(LO) 1/2.DME distance from Connaught(5354.8 N 00849.1W) is 28 nm and DME distance from Cranmore (53*18.1´N 008*56.5´W) is 35 nm. The aircraft is on a easterly heading and both DME´s are increasing. What is the position of the aircraft?",
        answer1: "N57*37´W008*15´",
        answer2: "N51*37´W008*18´",
        answer3: "S53*37´E008*11´",
        answer4: "N53*37´W008*11´",
        correctAnswer: 4
      },
    {

    question:"On a direct mercator  chart at latitude 15*S a certain length represents a distance of 120 nm on the earth. The same length on the chart will represent on the Earth, at latitude 10*N, a distance of",
        answer1: "122.3 nm",
        answer2: "119 nm ",
        answer3: "140 nm",
        answer4: "98 nm",
        correctAnswer: 1
      },
    {

    question:"Given Magnetid heading 026*. Drift angle 20*R . Relative bearing of NDB 160*(R) . What is the magnetic bearing of the aircraft measured from the NDB?",
        answer1: "009*",
        answer2: "006*",
        answer3: "186",
        answer4: "226",
        correctAnswer: 2
      },
    {

    question:"On a 12% glide slope with a groundspeed of 540 kts the required rate of descent is",
        answer1: "6500 ft/min",
        answer2: "6400 ft/min",
        answer3: "6800 ft/min",
        answer4: "600 ft/min",
        correctAnswer: 1
      },
    {

    question:"The pressure altitude is FL55 , the qnh is 994 hPa, the SAT is +25*C . What is the density altitude",
        answer1: "6700 ft",
        answer2: "7900 ft",
        answer3: "7100 ft",
        answer4: "8300 ft",
        correctAnswer: 2
      },
    {

    question:"Given: Aircraft at FL150 overhead an airport. Elevation of airport 720 ft. QNH is 1003. OAT at FL150 is -5*C. What is the True alt?",
        answer1: "15370 ft",
        answer2: "14760 ft",
        answer3: "16140 ft",
        answer4: "13680 ft",
        correctAnswer: 1
      },
    {

    question:"What is the weight in KG of 380 us gallons at a specific gravity of 0,78?",
        answer1: "1248 kg",
        answer2: "1468 kg",
        answer3: "985 kg",
        answer4: "1123 kg",
        correctAnswer: 4
      },
    {

    question:"What is the ratio between  litre and the US-Gal?",
        answer1: "1 us gallons equals 2.28 kg",
        answer2: "1 US-gal equals 3,79 litres.",
        answer3: "1 US-gal equals 3,21 litres",
        answer4: "1 US-gal equals 3,99 litres",
        correctAnswer: 2
      },
    {

    question:"An MEF figure of 16 on a topographical chart indicates: ",
        answer1: "The maximum elevation in the quadrangle is 1300 ft",
        answer2: "The maximum elevation in the quadrangle is 1600 ft",
        answer3: "The maximum elevation in the quadrangle is 1900 ft",
        answer4: "The maximum elevation in the quadrangle is 2600 ft",
        correctAnswer: 2
      },
    {

    question:"Given distance A to B is 90 nm. Fix is obtained 60 nm along and 4 nm to the right of course..",
        answer1: "3R",
        answer2: "8L",
        answer3: "12L",
        answer4: "12R",
        correctAnswer: 3
      },
    {

    question:"What is the approximate latitude of the antartic circle?",
        answer1: "0/0",
        answer2: "66 1/2* S",
        answer3: "23 ½ n",
        answer4: "66 1/2* N",
        correctAnswer: 2
      },
    {

    question:"Given distance A to B is 90 nm. Fix is obtained 60 nm along and 4 nm to the right of course",
        answer1: "3R",
        answer2: "8L",
        answer3: "12L",
        answer4: "12R",
        correctAnswer: 3
      },
    {

    question:"The angle between the plane of ecliptic and the plane of equator is approximately:",
        answer1: "16.5*",
        answer2: "23.5*",
        answer3: "12.5*",
        answer4: "19.5*",
        correctAnswer: 2
      },
    {

    question:"The direction of the earths rotation on its axis is such that:",
        answer1: "Observed from the point above the north pole, the rotation is counter clockwise in easterly direction.",
        answer2: "Observed from the point above the north pole, the rotation is westerly.",
        answer3: "Observed from the point above the north pole, the rotation is clockwise.",
        answer4: "Observed from the point above the north pole, the rotation is counter clockwise.",
        correctAnswer: 4
      },
    {

    question:"The compression factor of the earth is approximately:",
        answer1: "0.0023",
        answer2: "0.002",
        answer3: "0.003",
        answer4: "0.3",
        correctAnswer: 3
      },
    {
    question: "Given distance A to B is 90 nm Fix is obtained 60 nm along and 4 nm to the right of course",
        answer1: "3R",
        answer2: "8L",
        answer3: "12L",
        answer4: "12R",
        correctAnswer: 3
      },
    {

    question:"At what approximate date is the earth closest to the sun (perihilion)?",
        answer1: "end of december ",
        answer2: "end of july",
        answer3: "beginning of july",
        answer4: "Beginning of January",
        correctAnswer: 4
      },
    {

    question:"The term Aphelion is used to describe:",
        answer1: "The situation when the distance between the sun and the earth is the longest.",
        answer2: "The situation when the distance between the sun and the earth is the closest.",
        answer3: "The situation when the distance between the sun and the earth is the very close",
        answer4: "depending on season",
        correctAnswer: 1
      },
    {
    question:"If the LMT in Singapore (0000 N 104*39´E) is 0815 on 8 december, what is the LMT in honolulu hawai, USA (23*00´N 157*17´W)",
        answer1: "1447 ST on 7th Dec",
        answer2: "1447 UTC on 7th Dec",
        answer3: "1447 LMT on 7th Dec",
        answer4: "1447 LMT on 8th Dec",
        correctAnswer: 3
      },
    {
    question:"If the LMT in Auckland, New Zealand (35*00´S 174*39´E) is  2359 LMT on 8 december, what is the LMT in Los angeles, California USA(33N 118W)",
        answer1: "0428 LMT on 8th Dec",
        answer2: "0418 LMT on 8th Dec",
        answer3: "0428 LMT on 7th Dec",
        answer4: "0438 LMT on 8th Dec",
        correctAnswer: 1
      },
    {
    question:"What is the time (UTC) of sunrise on 6th December at Vancouver, British colombia, canada (50*N 123*W) ",
        answer1: "15:40 on 6th Dec",
        answer2: "12:54 on 6th Dec",
        answer3: "15:44 on 6th Dec",
        answer4: "15:54 on 6th Dec",
        correctAnswer: 3
      },
    {
    question:"What is the UTC of sunrise in Cape Town, South africa (35S 018E) on 7th December?",
        answer1: "0327 GMT",
        answer2: "0327 LMT",
        answer3: "0327 ST",
        answer4: "0327 UTC",
        correctAnswer: 4
      },
    {
    question:"What is the standard time (ST) of sunset in Doha, Qatar ( 25*00`N 051*32´E) on 14 october?",
        answer1: "1709 ST",
        answer2: "1709 UTC",
        answer3: "1709 LMT",
        answer4: "1709 GMT",
        correctAnswer: 1
      },
    {
    question:"What is the standard time (ST) of sunset in Doha, Qatar ( 25*00`N 051*32´E) on 14 october?",
        answer1: "1709 ST",
        answer2: "1709 UTC",
        answer3: "1709 LMT",
        answer4: "1709 GMT",
        correctAnswer: 1
      },
    {
    question:"What is the standard time (ST) of sunset in Doha, Qatar ( 25*00`N 051*32´E) on 14 october?",
        answer1: "1709 ST",
        answer2: "1709 UTC",
        answer3: "1709 LMT",
        answer4: "1709 GMT",
        correctAnswer: 1
      },
    {
    question:"An aircraft takes off from Guam at 2300 ST on 30 april local date. After a flight of 11 hr 15 min, it lands at Los angeles(california) .What is the standard time and local date of arrival(assume summer time rules apply) ?",
        answer1: "1715 on 29 april",
        answer2: "1715 on 30 april",
        answer3: "1715 on 31 april",
        answer4: "1715 on 28 april",
        correctAnswer: 2
      },
    {
    question:"If the Standard time in casablanca, Morocco( 34*N 008W) is 2300ST on 8th December, what is the summer time in auckland, New zealand (36*S 175*E)",
        answer1: "1400 hrs summer time on 9th december",
        answer2: "1300 hrs summer time on 9th december",
        answer3: "1100 hrs summer time on 9th december",
        answer4: "1200 hrs summer time on 9th december",
        correctAnswer: 4
      },
    {
    question:"What is the standard time in Hawai when it is 0600 ST on the 16th of February in queensland, australia.",
        answer1: "1000 ST on the 15th",
        answer2: "1000 UTC on the 15th",
        answer3: "1000 ST on the 14th",
        answer4: "1100 ST on the 15th",
        correctAnswer: 1
      },
    {
    question:"When approaching the international date line from the east, you....",
        answer1: "Should be prepared to decrease your date by 1.",
        answer2: "Should be prepared to increase your date by 1.",
        answer3: "Should be prepared to decrease your date by 2.",
        answer4: "Scream alluha ackbar",
        correctAnswer: 1
      },
    {
    question:"Standard time is",
        answer1: "The time enforced by the Teodors authority to be used in  country or an area.",
        answer2: "The time enforced by the ISIS authority to be used in  country or an area.",
        answer3: "The time enforced by the legal authority to be used in  country or an area.",
        answer4: "The time enforced by the united nations to be used in  country or an area.",
        correctAnswer: 3
  }
];
