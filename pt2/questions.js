const questions = [
  {
    question:
      "The radius of the Earth is approximately:",
    answer1: "40 000km",
    answer2: "6 350km ",
    answer3: "22 000km",
    answer4: "20 000km",
    correctAnswer: 2
  },
  {
    question:
      "An aircraft at latitude 02°20´N tracks 180°T for 685 kilometres. What is its latitude at the end of the flight",
    answer1: "08°29´N",
    answer2: "06°01´N",
    answer3: "02°45´S",
    answer4: "03°50´S",
    correctAnswer: 4
  },
  {
    question: "What is the initial great circle track from Porto Alegre, Brazil (29°12´S 051°00´W) to durban, South africa (29°12´S 031°00´E)?",
    answer1: "110°T",
    answer2: "130°T",
    answer3: "105°T",
    answer4: "115°T",
    correctAnswer: 1
  },
  {
    question: "A line drawn on a chart which joins all points where the value of magnetic variation is zero is called an:",
    answer1: "Isogonal",
    answer2: "aclinic line",
    answer3: "agonic line",
    answer4: "isotach",
    correctAnswer: 3
  },
  {
    question:
      "What is the initial great circle track from sydney, Australia (30S150E) to Bueons Aires, Argentina (30W030W)?",
    answer1: "180°T",
    answer2: "150°T",
    answer3: "190°T",
    answer4: "178°T",
    correctAnswer: 1
  },
  {
    question:
      "An approximate equation for calculation conversion angle is: ",
    answer1: "CA=0.5 x dlong x sin(mean lat)",
    answer2: "CA=dlong x sin(mean lat) x sin(long)",
    answer3: "CA=(dlong-dlat) x 0.5",
    answer4: "CA=0.5 x dlat x sin(mean lat)",
    correctAnswer: 1
  },
  {
    question: "When flying on a westerly great circle track in the Southern hemisphere you will:",
    answer1: "fly a spiral and finally end ut at the south pole",
    answer2: "experience an increase in the value of track",
    answer3: "aleays have the rhumb line track between the departure point and the destination to the left of your great circle track",
    answer4: "experience a decrease in the value of true track",
    correctAnswer: 2
  },
  {
    question:
      "What is the maximum possible value of Dip Angle",
    answer1: "0°",
    answer2: "90°",
    answer3: "350°",
    answer3: "170°",
    answer4: "89°",
    correctAnswer: 2
  },
  {
    question:
      "In the northern hemisphere, the true direction of an westerly Great Circle will",
    answer1: "Increase",
    answer2: "Decrease",
    answer3: "Be the same",
    answer4: "all the answers are correct",
    correctAnswer: 2
  },
  {
    question: "You start from P (70°00.0´N 015°00.0´E) and fly westward along the parallel of latitude for 2 hours at ground speed 220kt. Whar is your longitude after two hoursus flight?",
    answer1: "006°26.0´W",
    answer2: "006°44.0´W",
    answer3: "006°78.0´W",
    answer4: "006°26.0´E",
    correctAnswer: 1
  },
  {
    question: "Seasons are due to the:",
    answer1: "Earths elliptical orbit around the sun",
    answer2: "inclination of the polar axis with the ecliptic plane",
    answer3: "Earths rotation on its polar axis",
    answer4: "variable distance between Earth and Southern",
    correctAnswer: 2
  },
  {
    question: "The direction of the Earths rotation in its axis is such that",
    answer1: "observed from the point above the North Pole, the rotation is counterclockwise",
    answer2: "an observer on the surface of the Earth always will face West when observing sunrise",
    answer3: "any point on the surface of the Earth will move eastward",
    answer4: "any point on the surface of the Earth will move westward",
    correctAnswer: 1
  },
  {
    question: "Meridians are:",
    answer1: "parallel, equally spaced, vertically straight lines",
    answer2: "inclined, equally spaced straight lines that meet at the nearer pole",
    answer3: "parallel, unequally spaced, vertical straight lines",
    answer4: "inclined, unequally spaced, curved lines that meet at the nearer pole",
    correctAnswer: 1
  },
  {
    question: "Keplers second law states that",
    answer1: "the radius vector sun-earth sweeps out equal areas in equal time",
    answer2: "the length of the radius vector sun-earth is directly proportional to the square root of its angular speed",
    answer3: "the radius vector sun-earth moves at constant angular speed",
    answer4: "the area swept out by the radius vector sun-earth per hour increases with increasing lenght of the radius vector",
    correctAnswer: 1
  },
  {
    question: "The convergency of meridians",
    answer1: "is the angular difference between meridians",
    answer2: "is the distance between the meridians in degrees, minutes and seconds",
    answer3: "is independent of latitude and longitude",
    answer4: "is greater using rhumb line track than using greater circle",
    correctAnswer: 1
  },
  {
    question:
      "Parallels of latitude, except the equator are:",
    answer1: "both rhumb lines and great circles",
    answer2: "Great circles",
    answer3: "rhumb lines",
    answer4: "are neither rhumb lines nor great circles",
    correctAnswer: 3
  },
  {
    question:
      "The compression factor of the earth is approximately",
    answer1: "is so small that it may be ignored when making ordinary maps and chart",
    answer2: "is about 1:300",
    answer3: "makes the difference between the polar diameter and the equatorial diamter about 22NM",
    answer4: "All Answers are correct",
    correctAnswer: 4
  },
  {
    question: "Isogonals are lines of equal",
    answer1: "Compass deviation",
    answer2: "Magnetic Variation",
    answer3: "Pressure",
    answer4: "Wind Velocity",
    correctAnswer: 2
  },
  {
    question:"Consider the following statements on departure",
    answer1: "as the difference of longitude increases, the departure is constant if the latitude is constant",
    answer2: "as the latitude increases, the departure between two meridians decreases",
    answer3: "departure may be calculated using the equation: departure = Sin(Lat) x Sin(Long)",
    answer4: "departure is independent of difference of longitude",
    correctAnswer: 2
  },
  {
    question:
      "Consider the following statements on rhumb lines",
    answer1: "most rhumb lines will run as spirals from the one pole to another",
    answer2: "a rhumb line will never cross a great circle",
    answer3: "a rhumb line and a great circle will never have the same true direction for some distance",
    answer4: "the true direction of a rhumb line on northern hemisphere will increase in true direction, while on southern hemisphere it will decrease",
    correctAnswer: 1
  },
  {
    question:
      "What is the change of longitude between A(45°00´N 163°14´E) and B(31°33´N 157°02E",
    answer1: "6°12´W",
    answer2: "13°27´W",
    answer3: " 7°13´W",
    answer4: "6°12´E",
    correctAnswer: 1
  },
  {
    question:
      "Postion A is (31°00´S, 176°17´W) rhumb line track (T) from A to B is 270°. Initial great circle track (T) from A to B is 266.2°. The approximate position of B is:",
    answer1: "(31°00´S, 161°32´W)",
    answer2: "(31°00´S, 173°24´E)",
    answer3: "(31°00´S, 168°58´E)",
    answer4: "(31°00´S, 173°24´W)",
    correctAnswer: 3
  },
  {
    question:
      "Consider the following statements on the properties of a great circle:",
    answer1: "the great circle will maintain their initial true direction",
    answer2: "the parallels of latitudes are all great circles",
    answer3: "the great circle running through two positions on the surface of the Earth, is the shortest distance between these two postions",
    answer4: "all answers are Correct",
    correctAnswer: 3
  },
  {
    question:
      "An aircraft is on a heading of 111°C, Variation is 7E and Deviation 4E. What is the aircrafts True Heading?",
    answer1: "122°T",
    answer2: "114°T",
    answer3: "120°T",
    answer4: "118°T",
    correctAnswer: 1
  },
  {
    question:
      "Conversion angle is: (most correct answer)",
    answer1: "The angular difference between the rhumb line and the great circle between two positions, measured at any of the postions ",
    answer2: "the difference between the rhumb line and the great circle directions",
    answer3: "the angle used to convert from true to compass directions",
    answer4: "the angle at which speech from another person enters the ear",
    correctAnswer: 1
  },
  {
    question:
      "A straight line drawn on a chart measures 4.63cm and represents 150NM. The chart scale is:",
    answer1: "1:6 000 000",
    answer2: "1:3 000 000",
    answer3: "1:1 000 000",
    answer4: "1:5 000 000",
    correctAnswer: 1
  },
  {
    question:
      "An aircrafft is on a heading of 354°C. Variation is 2W and Deviation 8E. What is the aircrafts True Heading?",
    answer1: "0°T",
    answer2: "004°T",
    answer3: "010°T",
    answer4: "030°T",
    correctAnswer: 1
  },
  {
    question:
      "What is the aprroximate latitude of the Antarctic Circle?",
    answer1: "66 1/2°S",
    answer2: "23°1/2N",
    answer3: "88 1/2°W",
    answer4: "66°1/2E",
    correctAnswer: 1
                  },
  {
    question:
      "The term departure used in navigation also has the following meaning:?",
    answer1: "distance in direction east/west, given in nautical miles",
    answer2: "distance North/South",
    answer3: "angular distance along meridian",
    answer4: "angular distance along a parallel of latitude",
    correctAnswer: 1
  },
  {
    question:
      "What is the distance in kilometres from 49°S 180°E/W to 58°S 180°E/W",
    answer1: "1 000km ",
    answer2: "540km",
    answer3: "500km",
    answer4: "800km",
    correctAnswer: 1
  },
  {
    question:
      "The great circle distance between position A(59°34.1´N 008°08.4´E) and B (30°25.9´N 171°51.6´W) is:",
    answer1: "10 800NM",
    answer2: "5 400NM",
    answer3: "4 500NM",
    answer4: "5 500NM",
    correctAnswer: 2
  },
  {
    question:
      "The maximum difference between geocentric and geodetic latitude occurs at about",
    answer1: "45° North and South",
    answer2: "90° North and South",
    answer3: "60° North and South",
    answer4: "0° North and South (Equator)",
    correctAnswer: 1
    },
  {
    question:
      "Consider the following statements on departure",
    answer1: "as the diffirence of longitude increases, the departure is constant if the latitude is constant",
    answer2: "As the latiude increases, the departure between two meridians decreases",
    answer3: "departure may be calculated using the equation: departure = sin Lat x sin Long",
    answer4: "Departure is independent of difference of longitude",
    correctAnswer: 2
      },
  {
    question:
      "The Formula for earth convergency is:",
    answer1: "Ch long x tan mean latitude",
    answer2: "1/2 ch long x sine mean latitude",
    answer3: "ch long x sine mean latitude",
    answer4: "ch long x cos mean latidude",
    correctAnswer: 3
      },
  {
    question:
      "Departure is defined as: ",
    answer1: "Distance on the Earth in East/West direction measured in difference of longitude",
    answer2: "Distance between two positions having the same latitudes but different hemispheres",
    answer3: "Distance between two positions located at the same longitude",
    answer4: "Distance on the Earth in East/West direction measures in nautical miles",
    correctAnswer: 4
    
        },
  {
    question:
      "Consider the following statements on the use of magnetic compasses in aircraft:",
    answer1: "The centre of gravity of the compass card is located below the point of suspension",
    answer2: "A strong vertical component of the terrestrial magnetic field may make the compass useless",
    answer3: "All three statements are correct",
    answer4: "By construction the compass is optimised for reacting on the direction of the horizontal component of the terrestrial magnetic field",
    correctAnswer: 3
          },
  {
    question:
      "A direct reading compass should be swung when:",
    answer1: "There is a large change in magnetic longitude",
    answer2: "The aircraft is hit by a lightning",
    answer3: "The aircraft has flown 100 hours since last compass swing",
    answer4: "The aircraft is transferred to another base involving a large change in variation",
    correctAnswer: 2
          },
  {
    question:
      "Which of the following is NOT an occurrence requiring a compass swing:",
    answer1: "Aircraft hit by lightning",
    answer2: "Major changes in aircraft equipment",
    answer3: "When specified in the aircraft maintenance schedule",
    answer4: "If transferred to another base involving a large change in longitude",
    correctAnswer: 4
    
  }
];
