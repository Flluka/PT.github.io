const questions = [
  {
    question:"Given: True Heading = 310°, TAS = 200kt, GS = 176kt, Drift Angle 7° right. Calculate the W/V?",
    answer1: "270°/33kts",
    answer2: "360°/33kts",
    answer3: "090°/33kts",
    answer4: "180°/33kts",
    correctAnswer: 1
  },
  {
    question:"Pressure Altitude 41000ft, Temperature -70°C, CAS = 270kts. What is TAS?",
    answer1: "472kts",
    answer2: "496kts",
    answer3: "473kts",
    answer4: "497",
    correctAnswer: 1
    
  },
  {
    question: "Given: Distamce A to B = 120NM. After 60NM aircraft is 4NM to the right of couse. What heading alteration should be made in order to arrive at point B?",
    answer1: "8° right",
    answer2: "8° left",
    answer3: "12° right",
    answer4: "4° left",
    correctAnswer: 2
  },
  {
    question: "A distance of 436 nautical miles is equivalent to:",
    answer1: "500 statute miles",
    answer2: "501 km",
    answer3: "501 statute miles",
    answer4: "501 metres",
    correctAnswer: 3
  },
  {
    question:"Your heading is 295°T. Your drift is 15° port(left). Variation is 5°W. Deviation is 2°E. What is your compass track?",
    answer1: "263°(C)",
    answer2: "313°(C)",
    answer3: "283°(C)",
    answer4: "300°(C)",
    correctAnswer: 3
  },
  {
    question:"Given: IAS 240kt, FL 150, OAT -20. What is the TAS?",
    answer1: "298kt",
    answer2: "280kt",
    answer3: "352kt",
    answer4: "260kt",
    correctAnswer: 1
  },
  {
    question: "Given: TAS = 200kt, Track (T) = 110°, W/V = 015/40kt. Calculate the HDG (°T) and GS?",
    answer1: "121 - 207kts",
    answer2: "099 - 199kts",
    answer3: "097 - 201kts",
    answer4: "121 - 199kts ",
    correctAnswer: 2
  },
  {
    question: "Temperature at FL410 is -45. What is the ISA deviation",
    answer1: "11.5",
    answer2: "12",
    answer3: "10",
    answer4: "5",
    correctAnswer: 1
  },
  {
    question:
      "Given: FL350. Mach 0.80, OAT -55°C. Calculate the values for TAS and local speed of sound (LSS)",
    answer1: "460kt, LSS 296kt",
    answer2: "237kt, LSS 296kt",
    answer3: "461kt, LSS 576kt",
    answer4: "490kt, LSS 460kt",
    correctAnswer: 3
  },
  {
    question: "Outside air temperature at FL210 is -35°C. What is the ISA deviation ",
    answer1: "8",
    answer2: "-42",
    answer3: "7",
    answer4: "-8",
    correctAnswer: 4
  },
  {
    question: "Total Air temperature (TAT) is -30°C, TAS 438kts. What is the static air temperature (SAT)? ",
    answer1: "-56.5°C",
    answer2: "-56°C",
    answer3: "-50°C",
    answer4: "-41°C",
    correctAnswer: 3
  },
  {
    question: "Pressure Altitude 30 000ft, Temperature -40°C, CAS = 260kts. What is TAS?",
    answer1: "415kt",
    answer2: "413kt ",
    answer3: "421kt",
    answer4: "412kt",
    correctAnswer: 4
  },
  {
    question: "For a landing on runway 23 (227° Magnetic) surface W/V reported by the ATIS is 180/30kts. VAR is 13°E. Calculate the cross wind component",
    answer1: "20kts",
    answer2: "22kts",
    answer3: "26kts",
    answer4: "15kts",
    correctAnswer: 2
  },
  {
    question: "Given: TAS = 90kt, HDG(T) = 355°, W/V = 120/20kt. Calculate track (°T) and GS?",
    answer1: "006 - 95kts",
    answer2: "345 - 102kts",
    answer3: "358 - 101kts",
    answer4: "359 - 102kts",
    correctAnswer: 2
  },
  {
    
    question: "Your required track (the track you must fly) is 045(T). Your drift will be 20° starboard. Variation is +10°. What magnetic heading should you fly to give the required track? ",
    answer1: "055° (M)",
    answer2: "017° (M)",
    answer3: "015° (M)",
    answer4: "020° (M)",
    correctAnswer: 3
  },
  {
    question:
      "Given: TAS = 485kt, HDG(T) = 168°, W/V = 130/75kt, Calculate the Track (°T) and GS?",
    answer1: "175 - 432kts",
    answer2: "173 - 424kts",
    answer3: "175 - 420kts",
    answer4: "174 - 428kts",
    correctAnswer: 4
  },
  {
    question: "Given: Pressure Altitude 24 000ft, TAS 320kts, TAT -35, What is the approximate SAT?",
    answer1: "-46°C",
    answer2: "-44°C",
    answer3: "-50°C",
    answer4: "-56.5°C",
    correctAnswer: 1
  },
  {
    question:"What is 48 000KG in pound is approximately",
    answer1: "21 818lb",
    answer2: "105 600lb",
    answer3: "110 700lb",
    answer4: "56 300lb",
    correctAnswer: 2
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
    question: "In a triangle of velocities a vector drawn with two arrows shows:",
    answer1: "TAS and Heading ",
    answer2: "Groundspeed and Track",
    answer3: " IAS and Heading",
    answer4: "Wind direction and speed",
    correctAnswer: 2
  },
  {
    question: "Given: TAS = 227kt, Required Track(T) = 316°, W/V = 205/15kt. Calculate the HDG(°T) and GS?",
    answer1: "319 - 235kts",
    answer2: "311 - 230kts",
    answer3: "310 - 233kts",
    answer4: "313 - 232kts",
    correctAnswer: 4
  },
  {
    question: " The TAS is 415kts, the Mach No. is 0.7. What is the ambient temperature?",
    answer1: "-44",
    answer2: "-41",
    answer3: "-50",
    answer4: "-40",
    correctAnswer: 2
    
    
      },
  {
    question: "The distance between position A and B is 180NM. An aircraft departs postion A and after having travelled 60NM, its position is pinpointed 4NM left of the intended trac. Assuming no change in wind velocity, what alteration of heading must be made in order to arrive at position B?",
    answer1: "2° left",
    answer2: "6° right",
    answer3: "4° right",
    answer4: "8° right",
    correctAnswer: 2
    
   },
  {
    question: "Which statement regarding the triangle of velocities is correct?",
    answer1: "The three vectors must represent the same unit of time",
    answer2: "Finner ikke alternativ",
    answer3: "Finner ikke alternativ",
    answer4: "Finner ikke alternativ",
    correctAnswer: 1
    
   },
  {
    question: "Given: True HDG = 233°, TAS = 480kts, Track (T) = 240°, GS = 523kts. Calculate the W/V?",
    answer1: "105°/75kts",
    answer2: "110°/75kts",
    answer3: "115°/75kts",
    answer4: "113°/75kts",
    correctAnswer: 2
     },
  {
    question: "The TAS is 500kts, the Mach No is 0,82 What is the ambient temperature. ",
    answer1: "-42°",
    answer2: "-29°",
    answer3: "244°",
    answer4: "-109°",
    correctAnswer: 2

    },
  {
    question: "Given: Runway direction 305°(M), Surface W/V 260°(M)/30kt. Calculate the crosswind component?",
    answer1: "21kts",
    answer2: "27kts",
    answer3: "24kts",
    answer4: "18kts",
    correctAnswer: 1
    
    },
  {
    question: "Given: TAS 470kts, FL 330, Temperature ISA +6. Calculate the Mach Numder? ",
    answer1: "0.725",
    answer2: "0.81",
    answer3: "0.8",
    answer4: "0.82",
    correctAnswer: 3
    
    },
  {
    question: "Given: True HDG = 307°, TAS = 230kt, Track (T) = 313°, GS = 210kt. Calculate W/V ",
    answer1: "255°/25kts",
    answer2: "257°/35kts",
    answer3: "260°/30kts",
    answer4: "265°/30kts",
    correctAnswer: 3
    
    
      },
  {
    question: "An aircraft takes off from the aerodrome with 14 000lb of fuel with SG 0.8. After 15 hours, how much fuel remains with a consumption of 850lmp Gals/hr?",
    answer1: "41 000lb",
    answer2: "38 000lb",
    answer3: "35 000lb",
    answer4: "42 000lb",
    correctAnswer: 2
    
  },
  {
    question: "Given: TAS = 485kt, OAT = ISA +10°C, FL 410, Calculate the Mach Number?",
    answer1: "0.85",
    answer2: "0.9",
    answer3: "0.825",
    answer4: "0.87",
    correctAnswer: 3
    
    },
  {
    question: "The weight in pounds of 6550 litres of fuel at SG 0.79 is:",
    answer1: "11400",
    answer2: "12400",
    answer3: "10400",
    answer4: "9700",
    correctAnswer: 1
        
    },
  {
    question: "Where will the wind vector be drawn in a triangle of velocities?",
    answer1: "From the beginning of the ground vector to the end of the air vector",
    answer2: "From the end of the air vector to the end of the ground vector",
    answer3: "From the beginning of the air vector to the end of the ground vector",
    answer4: "From the end of the ground vector to the end of the air vector ",
    correctAnswer: 2
    
      },
  {
    question: "Given: Distamce A to B = 120NM. After 60NM aircraft is 4NM to the left of course. What heading alteration should be made in order to arrive at point B?",
    answer1: "8° right",
    answer2: "8° left",
    answer3: "6° right",
    answer4: "4° right",
    correctAnswer: 1
    
        },
  {
    question: "Your heading is 359°. Your drift is 2° Starboard (right). Variation is 7°E. Deviation is -1°. What is your compass track? ",
    answer1: "353°",
    answer2: "355°",
    answer3: "003°",
    answer4: "007°",
    correctAnswer: 2
  }
];

