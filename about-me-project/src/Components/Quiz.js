import React from 'react';
// import EvaluateQuiz from './EvaluateQuiz';

const Quiz = (props) => {
    // let show = false;
    // const changeShow = () => {
    //     console.log(show);
    //     show = !show;
    //     console.log(show);
    // };
    return (
        <div>
            <h1>"Test Your Knowledge" Trivia Quiz</h1>
            <div id="all-questions">
            {props.quizList.map(quizItem =>
               <div id="question">
               <p>{quizItem.quizQuestion}
               <br />
               <input type="radio" id="a" name={quizItem.questionNumber} />a. {quizItem.answer1}<br />
               <input type="radio" id="b" name={quizItem.questionNumber} />b. {quizItem.answer2}<br />
               <input type="radio" id="c" name={quizItem.questionNumber} />c. {quizItem.answer3}
               </p>
            </div>
               )}
            </div>
            {/* <div id="evaluate-quiz-button">
            <button onClick={changeShow}>Check my knowledge!</button>
            <div>
                <EvaluateQuiz show={show}></EvaluateQuiz>
            </div>
            </div> */}
            <br />
        </div>
    )
}
export default Quiz;