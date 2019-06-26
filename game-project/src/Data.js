import Boat1 from './images/Ships/Boat1.jpeg';
import Boat2 from './images/Ships/Boat2.jpg';
import Boat3 from './images/Ships/Boat3.jpg';
import Boat4 from './images/Ships/Boat4.jpg';
import Boat5 from './images/Ships/Boat5.jpg';
import Boat6 from './images/Ships/Boat6.jpg';

export const challenges = [
  {
    difficulty: 'medium',
    question: 'Which ocean basin is the most geologically active?',
    answers: [
      { answer: 'Arctic Ocean', id: 0 },
      { answer: 'Atlantic Ocean', id: 1 },
      { answer: 'Indian Ocean', id: 2 },
      { answer: 'Pacific Ocean', id: 3 },
    ],
    correctAnswer: 3,
    asked: false,
  },
  {
    difficulty: 'hard',
    question: 'What are thermohaline currents?',
    answers: [
      { answer: 'Cold water currents from Arctic', id: 0 },
      { answer: 'Warm water currents from Africa', id: 1 },
      { answer: 'Currents that move up and down in the ocean', id: 2 },
      {
        answer: 'Currents that in a circular pattern around land masses',
        id: 3,
      },
    ],
    correctAnswer: 2,
    asked: false,
  },
  {
    difficulty: 'medium',
    question: 'What type of water is more dense?',
    answers: [
      { answer: 'Cold, polar water', id: 0 },
      { answer: 'Warm water around the equator', id: 1 },
      { answer: 'Water close to the shore', id: 2 },
      { answer: 'Water above deep trenches', id: 3 },
    ],
    correctAnswer: 0,
    asked: false,
  },
  {
    difficulty: 'easy',
    question: 'What are basalts?',
    answers: [
      { answer: 'Magma moving across the ocean floor', id: 0 },
      { answer: 'Volcanic rocks on the ocean floor', id: 1 },
      { answer: 'Volcanic eruptions under the water', id: 2 },
      { answer: 'Volcanic ash found in the ocean', id: 3 },
    ],
    correctAnswer: 1,
    asked: false,
  },
  {
    difficulty: 'medium',
    question:
      'Which famous pirate was the first ship commander to circumnavigate the world successfully?',
    answers: [
      { answer: 'Black Bart', id: 0 },
      { answer: 'Blackbeard', id: 1 },
      { answer: 'Henry Morgan', id: 2 },
      { answer: 'Francis Drake', id: 3 },
    ],
    correctAnswer: 3,
    asked: false,
  },
  {
    difficulty: 'hard',
    question:
      'What was the name of "One-Eyed" Willy\'s pirate ship in The Goonies?',
    answers: [
      { answer: 'Inferno', id: 0 },
      { answer: 'El Muerto', id: 1 },
      { answer: 'The Black Pearl', id: 2 },
      { answer: 'Nebuchadnezzar', id: 3 },
    ],
    correctAnswer: 0,
    asked: false,
  },
  {
    difficulty: 'easy',
    question:
      "What ruthless, tyrannical pirate did Captain Hook purportedly sail under in J.M. Barrie's Peter Pan?",
    answers: [
      { answer: 'Calico Jack', id: 0 },
      { answer: 'Bartholomew "Black Bart" Roberts', id: 1 },
      { answer: 'Blackbeard', id: 2 },
      { answer: 'Captain Kidd', id: 3 },
    ],
    correctAnswer: 2,
    asked: false,
  },
  {
    difficulty: 'easy',
    question:
      'What is the ternical term for the black flag featuring the skill and crossbones that has become inextricably linked with pirate lore?',
    answers: [
      { answer: "The Death's Head Flag", id: 0 },
      { answer: 'The Ruse de Guerre', id: 1 },
      { answer: 'The Bleeding Heart', id: 2 },
      { answer: 'The Jolly Roger', id: 3 },
    ],
    correctAnswer: 3,
    asked: false,
  },
  {
    difficulty: 'medium',
    question:
      'What name did pirates give to ships they successfully managed to sack?',
    answers: [
      { answer: 'Prize', id: 0 },
      { answer: 'Gift', id: 1 },
      { answer: 'Gam', id: 2 },
      { answer: 'Tack', id: 3 },
    ],
    correctAnswer: 0,
    asked: false,
  },
  {
    difficulty: 'hard',
    question:
      'Which Caribbean port city was largely destroyed by a cataclysmic earthquake in June of 1692, leaving a hefty contingent of pirates to find another refuge and base of operations?',
    answers: [
      { answer: 'Tortuga', id: 0 },
      { answer: 'Portobello', id: 1 },
      { answer: 'Port Royal', id: 2 },
      { answer: 'Havana', id: 3 },
    ],
    correctAnswer: 2,
    asked: false,
  },
  {
    difficulty: 'hard',
    question:
      'The modern dollar sign ($) is derived from symbols that appeared on which infamous manner of pirate currency?',
    answers: [
      { answer: 'Dubloons', id: 0 },
      { answer: 'Ducats', id: 1 },
      { answer: 'Escudos', id: 2 },
      { answer: 'Pieces of eight', id: 3 },
    ],
    correctAnswer: 3,
    asked: false,
  },
  {
    difficulty: 'medium',
    question:
      "What was the name of the ship that Jim Hawkins, Captain Alexander Smollett, and Long John Silver sail aboard in Robert Louis Stevenson's classic pirate story Treasure Island?",
    answers: [
      { answer: 'The Pequod', id: 0 },
      { answer: 'The Hispaniola', id: 1 },
      { answer: 'The Beagle', id: 2 },
      { answer: 'The Black Spot', id: 3 },
    ],
    correctAnswer: 1,
    asked: false,
  },
  {
    difficulty: 'easy',
    question:
      'Which Romantic poet in 1814 penned an epic poem entitled "The Corsair," which was wildly popular in its time and partially responsible for the radically idealized and much0glamorized pirate lifestyle commonly presented to audiences today in films and television shows?',
    answers: [
      { answer: 'Percy Bysshe Shelley', id: 0 },
      { answer: 'Lord Byron', id: 1 },
      { answer: 'Samuel Taylor Coleridge', id: 2 },
      { answer: 'John Keats', id: 3 },
    ],
    correctAnswer: 1,
    asked: false,
  },
  {
    difficulty: 'easy',
    question:
      'Which of the following types of pirate was officially licensed by a sovereign nation to raid and seize goods carried by the ships of "hostile" nations?',
    answers: [
      { answer: 'Privateer', id: 0 },
      { answer: 'Buccaneer', id: 1 },
      { answer: 'Corsair', id: 2 },
      { answer: 'Buckaroo', id: 3 },
    ],
    correctAnswer: 0,
    asked: false,
  },
  {
    difficulty: 'medium',
    question:
      'What is the contemporary name for the Caribbean island that 16th century pirates referred to as Hispaniola?',
    answers: [
      { answer: 'Jamaica', id: 0 },
      { answer: 'Cuba', id: 1 },
      { answer: 'Haiti', id: 2 },
      { answer: 'Puerto Rico', id: 3 },
    ],
    correctAnswer: 2,
    asked: false,
  },
];

export const boats = [Boat1, Boat2, Boat3, Boat4, Boat5, Boat6];
