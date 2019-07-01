/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addKrakenQuestion } from '../redux/actions';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionField: '',
      answersField: [
        { answer: '', id: 0 },
        { answer: '', id: 1 },
        { answer: '', id: 2 },
        { answer: '', id: 3 },
      ],
      correctAnswerField: 4,
      difficulty: '',
    };
  }

  handleQuestionChange = event => {
    this.setState({ questionField: event.target.value });
  };

  handleAnswerChange = (event, index) => {
    const { answersField } = { ...this.state };
    const currentState = answersField;
    const { value } = event.target;
    currentState[index].answer = value;
    this.setState({
      answersField: currentState,
    });
  };

  handleQuestionAddition = () => {
    if (
      this.state.questionField.trim() !== '' &&
      this.state.answersField[0].answer.trim() !== '' &&
      this.state.answersField[1].answer.trim() !== '' &&
      this.state.answersField[2].answer.trim() !== '' &&
      this.state.answersField[3].answer.trim() !== '' &&
      this.state.correctAnswerField !== 4 &&
      this.state.difficulty !== ''
    ) {
      const newQuestions = this.props.allChallengeQuestions;
      newQuestions.push({
        id: this.props.allChallengeQuestions.length,
        difficulty: this.state.difficulty,
        question: this.state.questionField,
        answers: this.state.answersField,
        correctAnswer: this.state.correctAnswerField,
        asked: false,
      });
      this.props.addKrakenQuestion(newQuestions);
      this.clearFieldsAndResetAlert();
    } else {
      // eslint-disable-next-line no-alert
      alert('Please ensure the form is filled out correctly!');
    }
  };

  handleAnswerSelection = correctIndex => {
    this.setState({ correctAnswerField: correctIndex });
  };

  handleDifficultySelection = level => {
    this.setState({ difficulty: level });
  };

  renderAnswerFields = answerField => {
    return (
      <div className="answer-container" key={answerField.id}>
        <input
          type="radio"
          name="answer"
          checked={answerField.id === this.state.correctAnswerField}
          onChange={() => this.handleAnswerSelection(answerField.id)}
        />
        <div className="answer-field-container">
          <Input
            focus
            placeholder="Write answer here"
            onChange={event => this.handleAnswerChange(event, answerField.id)}
            value={this.state.answersField[answerField.id].answer}
          />
        </div>
      </div>
    );
  };

  clearFieldsAndResetAlert = () => {
    this.setState({
      questionField: '',
      answersField: [
        { answer: '', id: 0 },
        { answer: '', id: 1 },
        { answer: '', id: 2 },
        { answer: '', id: 3 },
      ],
      correctAnswerField: 4,
      difficulty: '',
    });
    this.props.resetAlert();
  };

  render() {
    return (
      <div>
        <Modal open={this.props.alert === 'addQuestion'}>
          <Modal.Header>
            <h2>Add your own question!</h2>
          </Modal.Header>
          <Modal.Content>
            <div className="question-container">
              <div className="question-header">
                <h2>Question: </h2>
              </div>
              <Input
                focus
                placeholder="Write question here"
                onChange={this.handleQuestionChange}
              />
            </div>
            <h2>Answers: </h2>
            <p>Select the correct answer.</p>
            <div className="answers-container">
              {this.state.answersField.map(answerField =>
                this.renderAnswerFields(answerField),
              )}
            </div>
            <h2>Difficulty Level: </h2>
            <div className="difficulty-buttons">
              <div className="difficulty-button">
                <div className="difficulty-radio">
                  <input
                    type="radio"
                    name="difficulty"
                    onChange={() => this.handleDifficultySelection('easy')}
                    checked={this.state.difficulty === 'easy'}
                  />
                </div>
                <h4>Easy</h4>
              </div>
              <div className="difficulty-button">
                <div className="difficulty-radio">
                  <input
                    type="radio"
                    name="difficulty"
                    onChange={() => this.handleDifficultySelection('medium')}
                    checked={this.state.difficulty === 'medium'}
                  />
                </div>
                <h4>Medium</h4>
              </div>
              <div className="difficulty-button">
                <div className="difficulty-radio">
                  <input
                    type="radio"
                    name="difficulty"
                    onChange={() => this.handleDifficultySelection('hard')}
                    checked={this.state.difficulty === 'hard'}
                  />
                </div>
                <h4>Hard</h4>
              </div>
            </div>
            <Button primary onClick={this.handleQuestionAddition}>
              {this.props.easterEgg
                ? "We'll pass with flying colors!"
                : "Let's get Kraken!"}
            </Button>
            <Button onClick={this.clearFieldsAndResetAlert}>
              {this.props.easterEgg
                ? "I'd rather fly under the radar."
                : "I'll walk the plank instead."}
            </Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    easterEgg: state.easterEgg,
    allChallengeQuestions: state.allChallengeQuestions,
  };
};

const mapDispatchToProps = {
  addKrakenQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestion);
