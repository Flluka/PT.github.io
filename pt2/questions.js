const questions = [
  {
    question:
      "The radius of the Earth is approximately:",
    answer1: "Advection fog",
    answer2: "Radiation fog ",
    answer3: "Steam fog ",
    answer4: "Frontal fog",
    correctAnswer: 1
  },
  {
    question:
      "An aircraft at latitude 02°20´N tracks 180°T for 685 kilometres. What is its latitude at the end of the flight",
    answer1: "nil",
    answer2: "Light",
    answer3: "Moderate or Heavy",
    answer4: "heavy, possibly hail",
    correctAnswer: 3
  },
  {
    question: "Wha is the initial great circle track from Porto Alegre, Brazil (29°12´S 051°00´W) to durban, South africa (29°12´S 031°00´E)?",
    answer1: "is generally weaker at higher level or with greater thickness",
    answer2: "is generally stronger at lower level or with greater thickness",
    answer3: "is generally weaker at lower level or with less thickness",
    answer4: "is generally stronger at higher level with greater thickness",
    correctAnswer: 4
  },
  {
    question: "From position A(10°00.0´N 030°00.0´W) an aircraft flies 600NM due south, then 600NM due East, then 600NM due North, then 600NM due West.What is the final direction of the track at B?",
    answer1: "Ns",
    answer2: "Ac",
    answer3: "Ci",
    answer4: "Cs",
    correctAnswer: 1
  },
  {
    question:
      "The direction of initial great circle track from C(48S 170W) to B (58S 150W) is 130°T. What is the final  direction of the track.",
    answer1: "Coriolis force is added to the pressure gradient",
    answer2: "Coriolis force opposes centrifugal force",
    answer3: "Centrifugal force opposes the pressure gradient",
    answer4: "Centrifugal force is added the pressure gradient",
    correctAnswer: 3
  },
  {
    question:
      "An approximate equation for calculation conversion angle is: ",
    answer1: "290/20",
    answer2: "290/40",
    answer3: "230/10",
    answer4: "215/5",
    correctAnswer: 2
  },
  {
    question: "In the southern hemisphere the true direction of an westerly Great Circle will:",
    answer1: "Thermal",
    answer2: "Orographic",
    answer3: "Frontal",
    answer4: "formed by lifting processes",
    correctAnswer: 3
  },
  {
    question:
      "What is the maximum possible value of Dip Angle",
    answer1: "surface cooling",
    answer2: "decreasing wind speed",
    answer3: "Surface heating",
    answer4: "Lifting against the slope of a hill",
    correctAnswer: 3
  },
  {
    question:
      "In the northern hemisphere, the true direction of an westerly Great Circle will",
    answer1: "Is inclined towards the area of low pressure",
    answer2: "Is inclined towards the area of high pressure",
    answer3:
      "Blows along the isobars with high pressure to the left in the northern hemisphere",
    answer4:
      "blows along the isobars with high pressure to the right in the northern hemisphere",
    correctAnswer: 1
  },
  {
    question: "A great circle track joins position A(59°S 141°W) and B (51°S 148°W) How does the true track change whhen flying from position A to position B?",
    answer1: "200ft",
    answer2: "800ft",
    answer3: "2000ft",
    answer4: "10000ft",
    correctAnswer: 2
  },
  {
    question: "Seasons are due to the:",
    answer1: "more strongly around a headland",
    answer2: "Along a narrow valley",
    answer3: "Down the side of ravine",
    answer4: "up the side of ravine",
    correctAnswer: 2
  },
  {
    question: "The direction of the Earths rotation in its axis is such that",
    answer1: "Ns",
    answer2: "St",
    answer3: "Ac",
    answer4: "Cc",
    correctAnswer: 4
  },
  {
    question: "Meridians are:",
    answer1: "lol",
    answer2:
      "A change of horizontal wind direction and/or speed with horizontal distance",
    answer3: "A change of vertical wind direction and/or speed",
    answer4:
      "A change of horizontal wind direction and/or speed with change in level",
    correctAnswer: 4
  },
  {
    question: "Keplers second law states that",
    answer1: "a marked increase in ground wind speed",
    answer2: "a marked increase in wind speed close to the ground",
    answer3: "warm air moving over warm surface",
    answer4: "Ground cooling due to radiation",
    correctAnswer: 4
  },
  {
    question: "The magnetic equator is best defined as:",
    answer1: "greater than 1000m visibility, no icing",
    answer2: "greater than 1000ft visibility, no icing",
    answer3: "greater than 1000m visibility, icing",
    answer4: "greater than 1000ft visibility, icing",
    correctAnswer: 1
  },
  {
    question:
      "Parallels of latitude, except the equator are:",
    answer1: "Extreme Turbulence",
    answer2: "Light Turbulence",
    answer3: "Severe Turbulence",
    answer4: "Moderate Turbulence",
    correctAnswer: 4
  },
  {
    question:
      "The compression factor of the earth is approximately",
    answer1: "Light Turbulence",
    answer2: "Extreme Turbulence",
    answer3: "Severe Turbulence",
    answer4: "Moderate Turbulence",
    correctAnswer: 4
  },
  {
    question: "Isogonals are lines of equal",
    answer1: "Areas of high level clear air Turbulence",
    answer2: "Jet streams",
    answer3: "Stratospheric inversions",
    answer4: "Mountain waves",
    correctAnswer: 4
  },
  {
    question:
      "Which is the correct equation for Departure",
    answer1:
      "Conditional instability, wind speed constant from a direction parallel to the mountain range",
    answer2:
      "Wind speed excess of 20kt at the surface and increasing with height, wind direction perpendicular to the general direction of the range",
    answer3:
      "Significant moisture loss due to precipitation, rapid lowering of the tropopause in the area of the mountain range.",
    answer4:
      "Steep dry adiabatic lapse rate, wind speed increasing and changing direction rapidly with increase in height",
    correctAnswer: 2
  },
  {
    question:
      "Consider the following statements on rhumb lines",
    answer1: "precipitation is liftedd by air blowing over the hills",
    answer2: "High RH, Unstable air",
    answer3: "Clear sky, little wind, dry air",
    answer4: "Humid, stable air blowing onto a range of hills",
    correctAnswer: 4
  },
  {
    question:
      "When flying on a westerly great circle track in the southern hemisphere you will",
    answer1: "Backs then steady",
    answer2: "Constantly backs",
    answer3: "Backs then veers",
    answer4: "Veers then backs",
    correctAnswer: 2
  },
  {
    question:
      "Postion A is (31°00´S, 176°17´W) rhumb line track (T) from A to B is 270°. Initial great circle track (T) from A to B is 266.2°. The approximate position of B is:",
    answer1: "Charles Law",
    answer2: "Boyles Law",
    answer3: "Normands Theorem",
    answer4: "Buys Ballots law",
    correctAnswer: 4
  },
  {
    question:
      "Consider the following statements on the properties of a great circle:",
    answer1: "Impossible to asses",
    answer2: "greater",
    answer3: "Exactly the same",
    answer4: "less",
    correctAnswer: 4
  },
  {
    question:
      "An aircraft at postion 60°N 005°W tracks 090°(T) for 315km. On completion of the flight the longitude will be:",
    answer1: "Veer and increase",
    answer2: "back and increase",
    answer3: "veer and decrease",
    answer4: "back and decrease",
    correctAnswer: 4
  },
  {
    question:
      "What is the longitude of a postion 6NM to the East of 58°42´N 094°00´W?",
    answer1: "The wind veers and increases by night",
    answer2: "The wind backs and decreases by night",
    answer3: "The wind veers and decreases by night",
    answer4: "The wind backs and increases by night",
    correctAnswer: 2
  }
];
