const questions = [
  {
    question:"Which of the following is not true regarding the effects of the CG being too far forwards",
    answer1: "The control feel heavy and the fuel flow increase",
    answer2: "The aeroplance may over be reluctant to rotate at take off increasing the take off distance ",
    answer3: "The longitudinal stability increases and the stall speed reduces ",
    answer4: "The stalling speed will increase and the range and endurance decrease",
    correctAnswer: 3
  },
  {
    question:"What is the maximum crate mass that can be placed on a 30lb spreader 4ft x 2ft 9in, of the maximum area distribution load is 84lb per sq ft?",
    answer1: "924lb",
    answer2: "944lb",
    answer3: "974lb",
    answer4: "894lb",
    correctAnswer: 4

  },
  {
    question: "Which of the following is not true regarding the effects of overloading?",
    answer1: "The aeroplane structure could distort or fail laterally or longitudinally ",
    answer2: "The brakes will suffer greater heating and could cause tyre to catch fire ",
    answer3: "Range, maximum speed and rate of climb all reduce ",
    answer4: "The stall speed and angle of climb increase",
    correctAnswer: 4
  },
  {
    question: "The MZFM is: ",
    answer1: "maximum mass due to landing runway limitations ",
    answer2: "The maximum permitted take off mass, which is greater of the limiting structural and performance take off mass",
    answer3: "The maximum mass authorized for a certain aeroplane not including traffic load no fuel load",
    answer4: "the maximum permissible aeroplane mass with no useable fuel",
    correctAnswer: 4
  },
  {
    question:"Which of the following is the smallest pallet which can support 800lb crate on a floow with a maximum area load of 68lb per square foot ",
    answer1: "3ft 9in x 3ft 1in",
    answer2: "3ft 6in x 3ft 4in",
    answer3: "4ft x 3ft 3in",
    answer4: "4ft 4in x 2ft 9in",
    correctAnswer: 4
  },
  {
    question:"What is the RTOM for an A320 given the following data? MSTOM 73 000kg, MSLM 66 000kg. PLTOM 69 500kg, PLLM 59 900kg",
    answer1: "59 900kg",
    answer2: "73 500kg",
    answer3: "66 000kg",
    answer4: "69 500kg ",
    correctAnswer: 4
  },
  {
    question: "Given the following what is the AUM given BEM is 15 000kg, OM 22 000kg, variable load 1000kg ZFM 24 000kg",
    answer1: "29 000kg",
    answer2: "31 000kg",
    answer3: "37 000kg",
    answer4: "30 000kg",
    correctAnswer: 4
  },
  {
    question: "Which of the following is not true regarding the effects of the CG being too far forwards?",
    answer1: "Longitudinal stability reduces and fuel flow increases",
    answer2: "The aeroplane is reluctant to rotate at take off and mas nose in on landing",
    answer3: "The stall speed and fuel flow both increases",
    answer4: "The aeroplane is insufficiently manoeuvrable ",
    correctAnswer: 1
  },
  {
    question:"B767 - 300ER has a maximum take off weight of 401 000lb, what is the weight in Kilograms? ",
    answer1: "182 050kg",
    answer2: "8 884 000kg",
    answer3: "884 000kg ",
    answer4: "88 420kg",
    correctAnswer: 1
  },
  {
    question: "What is the DOM and the Traffic Load known as?",
    answer1: "Zero Fuel Mass",
    answer2: "The all up mass",
    answer3: "Useful Load",
    answer4: "Operating Mass",
    correctAnswer: 1
  },
  {
    question: "Which of the following is not true regarding the effects of overloading?",
    answer1: "Overloading can cause an aeroplane structure to distort or fail but does not effect the aeroplane mass",
    answer2: "Range, maximum speed and rate of climb all reduce ",
    answer3: "The take off distance and fuel flow both increase",
    answer4: "The aeroplane may overrun on landing due to increased stalling speed, redcued deceleration and possivle brake fade ",
    correctAnswer: 4
  },
  {
    question: "The PLLM is:",
    answer1: "The maximum mass due to landing runway limitations",
    answer2: "The maximum permitted take off mass",
    answer3: "The maximum permitted landing mass",
    answer4: "The maximum permissble aeroplane mass with no useable fuel",
    correctAnswer: 1
  },
  {
    question: "What is the maximum crate mass that can be placed on 2 planks, each 4ft x 1ft 4in and 20lb. The area distribution load is 80lb per sq ft?",
    answer1: "813lb",
    answer2: "833lb",
    answer3: "853lb",
    answer4: "893lb",
    correctAnswer: 1
  },
  {
    question: "Which of the following is not true regarding the effects of overloading?",
    answer1: "The landing distance increases and the stall speed decreases",
    answer2: "The acceleration on take off and angle of climb both reduces",
    answer3: "The brakes could fade resulting in runway over run",
    answer4: "The endurance and maximum ceiling reduce",
    correctAnswer: 1
  },
  {

    question: "You uplift 5400 US Gall of fuel with SG 0.80, what is the weight of the fuel?",
    answer1: "160 405N",
    answer2: "200 507N",
    answer3: "192 656N",
    answer4: "156 980N",
      correctAnswer: 1
  },
  {
    question: "What is the allowed take off mass for an A320 given the following information: RTOM 73 500KG, RLM 60 500KG, MZFM 59 000KG, take off fuel 12 000KG and trip fuel 8500KG",
    answer1: "73 500kg",
    answer2: "71 000kg",
    answer3: "67 500kg",
    answer4: "69 000kg",
    correctAnswer: 4
  },
  {
    question: "What is the RLM for a B767 -400ER given the following data? MSTOM 204 117KG, MSLM 158 758KG, PLTOM 183 500KG, PLLM 149 900KG",
    answer1: "158 758kg",
    answer2: "183 500kg",
    answer3: "204 117kg",
    answer4: "149 900kg",
    correctAnswer: 4
  },
  {
    question: "Given the following what is the AUM given BEM 15 000kg. OM 22 00kg, variable load 1000kg ZFM 25 000KG",
    answer1: "37 000KG",
    answer2: "32 000KG",
    answer3: "29 000KG",
    answer4: "31 000KG",
    correctAnswer: 4
  },
  {
    question: "What is the allowed take off mass for an A340-600 given the following information: MSTOM 360 000KG, PLTOM 390 000KG. MSLM 262 000KG. plm 254 000KG. MZFM 246 000KG. Take Off fuel 149 000KG and trip fuel 128 000KG. MRM 381 200KG and stat up and taxi 1500KG",
    answer1: "382 000kg",
    answer2: "395 000kg",
    answer3: "380 000kg",
    answer4: "379 700kg",
    correctAnswer: 4
  },
  {
    question: "Given the following what is the traffic load? BEM 15 000kg, OM 22 000KG, Variable load 1000kg ZFM 24 000kg",
    answer1: "6000kg",
    answer2: "9000kg",
    answer3: "4000kg",
    answer4: "8000kg",
    correctAnswer: 4
  
  }
];
