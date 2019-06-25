import React from 'react';
import { Modal, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addKrakenQuestion } from './../redux/actions';

class AddQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionField: '',
            answersField: ['', '', '', ''],
            correctAnswerField: 4,
            difficulty: ''
        }
    }
    
    handleQuestionChange = (event) => {
        this.setState({questionField: event.target.value})
    }

    handleAnswerChange = (event, index) => {
        const {answersField} = this.state;
        this.setState({...answersField, [index]: event.target.value})
    }

    handleQuestionAddition = () => {
        if (this.state.questionField.trim() !== '' 
        && this.state.answersField[0].trim() !== '' 
        && this.state.answersField[1].trim() !== ''
        && this.state.answersField[2].trim() !== ''
        && this.state.answersField[3].trim() !== ''
        && this.state.correctAnswerField !== 4
        && this.state.difficulty !== ''){
            this.props.addKrakenQuestion({
                difficulty: this.state.difficulty,
                question: this.state.questionField,
                answers: this.state.answersField,
                correctAnswer: this.state.correctAnswerField
            })
            this.props.resetAlert();
        }
        else {
            alert("Please ensure the form is filled out correctly!")
        }
    }

    handleAnswerSelection = (correctIndex) => {
        this.setState({correctAnswerField: correctIndex})
    }

    handleDifficultySelection = (level) => {
        this.setState({difficulty: level})
    }

    cancelAnswerAddition = () => {
        this.setState({
            questionField: '',
            answersField: ['', '', '', ''],
            correctAnswerField: 4,
            difficulty: '',
        })
        this.props.resetAlert();
    }

    render(){
        return(
            <div>
            <Modal open={this.props.alert === "addQuestion"}>
            <Modal.Header><h2>Add your own question!</h2></Modal.Header>
            <Modal.Content>
                <div className="question-container">
                    <div className="question-header"><h2>Question: </h2></div>
                    <Input focus fluid placeholder="Write question here" onChange={this.handleQuestionChange} />
                </div>
                <h2>Answers: </h2>
                <p>Select the correct answer.</p>
                <div className="answers-container">
                {
                    this.state.answersField.map((answerField) => 
                    <div className="answer-container"><input type="radio" name="answer" 
                        checked={this.state.answersField.indexOf(answerField) === this.state.correctAnswerField} 
                        onChange={()=>this.handleAnswerSelection(this.state.answersField.indexOf(answerField))}></input>
                        <div className="answer-field-container"><Input focus fluid placeholder="Write answer here" onChange={(event)=>this.handleAnswerChange(event, this.state.answersField.indexOf(answerField))} /></div></div>
                    )
                }
                </div>
                <h2>Difficulty Level: </h2>
                <div className="difficulty-buttons">
                <div className="difficulty-button">
                    <div className="difficulty-radio"><input type="radio" name="difficulty" onChange={(event)=>this.handleDifficultySelection(event, "easy")} checked={this.state.difficulty === "easy"} /></div>
                    <h4>Easy</h4>
                </div>
                <div className="difficulty-button">
                    <div className="difficulty-radio"><input type="radio" name="difficulty" onChange={(event)=>this.handleDifficultySelection(event, "medium")} checked={this.state.difficulty === "medium"}/></div>
                    <h4>Medium</h4>
                </div>
                <div className="difficulty-button">
                    <div className="difficulty-radio"><input type="radio" name="difficulty" onChange={(event)=>this.handleDifficultySelection(event, "hard")} checked={this.state.difficulty === "hard"}/></div>
                    <h4>Hard</h4>
                </div>
                </div>
                <Button primary onClick={this.handleQuestionAddition}>Let's get Kraken!</Button>
                <Button onClick={this.cancelAnswerAddition}>I'll walk the plank instead.</Button>
            </Modal.Content>
        </Modal>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    addKrakenQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);