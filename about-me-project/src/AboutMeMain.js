import React from 'react';
import FavQuotes from './Components/FavQuotes';
import FavSongs from './Components/FavSongs';
import FavBooks from './Components/FavBooks';
import PhotoBlurb from './Components/PhotoBlurb';
import Doggos from './Components/Doggos';
import Quiz from './Components/Quiz';
import './AboutMeMain.css';

const quotations = [
    {
        quote: "You miss 100% of the shots you don't take.",
        citation: "Wayne Gretzky  -- Michael Scott  -- Allison Ditmore"
    },
    {
        quote: "If it ain't broke, don't fix it.",
        citation: "Bert Lance"
    },
    {
        quote: "It's not a bug; it's a feature.",
        citation: "Anonymous"
    },
    {
        quote: "Oh yeah, this will definitely fix the problem...",
        citation: "famous last words"
    }
];

const music = [
    {
        song: "Break",
        artist: "Frightened Rabbit"
    },
    {
        song: "Neverending Circles (aka While Loops)",
        artist: "Chvrches"
    },
    {
        song: "Read My Mind",
        artist: "The Killers"
    },
    {
        song: "Longshot",
        artist: "Catfish and the Bottlemen"
    }
];

const quizList = [
    {
        quizQuestion: "What makes greyhounds the fastest breed of dogs?",
        answer1: "Double Suspension",
        answer2: "Springy feet",
        answer3: "Rocket blasters",
        correctAnswer: "a",
        questionNumber: "1"
    },
    {
        quizQuestion: "What Bronze Age civilization flourished on Crete?",
        answer1: "Myceneans",
        answer2: "Vikings",
        answer3: "Minoans",
        correctAnswer: "c",
        questionNumber: "2"
    },
    {
        quizQuestion: "The Silver Age poet Lucan died after a conspiracy attempt at regicide against which Roman emperor?",
        answer1: "Julius Caesar",
        answer2: "Nero",
        answer3: "Caligula",
        correctAnswer: "b",
        questionNumber: "3"
    }
];

const readingList = [
    {
        // eslint-disable-next-line no-script-url
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford"
    },
    {
        title: "Coding for Dummies",
        author: "Nikhil Abraham"
    },
    {
        title: "My First Coding Book: Packed with Flaps and Lots More to Help You Code Without a Computer!",
        author: "Kiki Prottsman"
    },
    {
        title: "Learn C the Hard Way",
        author: "Zed Shaw"
    }
];

const dogList = [
    {
        name: 'Baguette',
        source: 'https://imgur.com/u3Z67xt.png',
        nature: 'the most perfect buddy'
    },
    {
        name: 'Casper',
        source: 'https://imgur.com/E91ZzL7.png',
        nature: 'a delicate people-pleaser'
    },
    {
        name: 'Pi',
        source: 'https://imgur.com/dIzhvO7.png',
        nature: 'a cuddly force of chaos'
    },
    {
        name: 'Tavi',
        source: 'https://imgur.com/F5zSt6Z.png',
        nature: 'a high priest of the Tennis Ball Cult'
    },
    {
        name: 'Oliver',
        source: 'https://imgur.com/35Q11hx.png',
        nature: 'a ball of anxiety'
    }
]

const AboutMeMain = (props) => {
    return (
        <div>
                <PhotoBlurb />
            <div id="currently-doing">
                <div><h1>Currently...</h1></div>
                <div id="favList">
                    <div className="column" id="outer-column"><FavBooks readingList={readingList} /></div>
                    <div className="column" id="inner-column"><FavQuotes quotations={quotations} /></div>
                    <div className="column" id="outer-column"><FavSongs music={music} /></div>
                </div>
            </div>
            <br />
            <br />
            <div id="doggos">
                <Doggos dogList={dogList} />
            </div>
            <div id="quiz-container">
                <Quiz quizList={quizList} />
            </div>
        </div>
    )
}

export default AboutMeMain;