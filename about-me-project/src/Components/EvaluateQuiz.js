import React from 'react'

const EvaluateQuiz = (props) => {
    return(
         <div text-align="center" style={{display: props.show ? "block" : "none"}}>
            <div><h2>The correct answers are...</h2><br />
                <p><div>Question 1: a</div>
                <div>Question 2: c</div>
                <div>Question 3: b</div> </p>
            </div>
            <div><h1>You nailed it!</h1></div>
        </div>
    )
}

export default EvaluateQuiz;
