import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Какую патологию ЖКТ вы видите?',
			answerOptions: [
				{ answerText: 'Рак', isCorrect: false },
				{ answerText: 'Полип', isCorrect: true },
				{ answerText: 'Ангиодисплазия', isCorrect: false },
				{ answerText: 'Лимфангиэктазия', isCorrect: false },
			],
		},
		{
			questionText: 'Какую патологию ЖКТ вы видите?',
			answerOptions: [
				{ answerText: 'Рак', isCorrect: false },
				{ answerText: 'Полип', isCorrect: false },
				{ answerText: 'Ангиодисплазия', isCorrect: false },
				{ answerText: 'Лимфангиэктазия', isCorrect: true },
			],
		},
		{
			questionText: 'Какую патологию ЖКТ вы видите?',
			answerOptions: [
				{ answerText: 'Рак', isCorrect: false },
				{ answerText: 'Полип', isCorrect: false },
				{ answerText: 'Ангиодисплазия', isCorrect: true },
				{ answerText: 'Лимфангиэктазия', isCorrect: false },
			],
		},
		{
			questionText: 'Какую патологию ЖКТ вы видите?',
			answerOptions: [
				{ answerText: 'Рак', isCorrect: false },
				{ answerText: 'Полип', isCorrect: false },
				{ answerText: 'Ангиодисплазия', isCorrect: true },
				{ answerText: 'Лимфангиэктазия', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Вы набрали {score} очков из {questions.length}. Продолжайте тренироваться!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Снимок {currentQuestion + 1}</span>/{questions.length}
						</div>
						
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div><img src={require("./imgs/" + currentQuestion + ".jpg")} className="image"/>
						<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
