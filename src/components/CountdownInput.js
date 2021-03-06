// const CountdownInput = ({ counterBegin, setCounterBegin }) => {
const CountdownInput = ({
	counterBegin,
	setCounterBegin,
	setIsCountingDown,
}) => {
	const handleSubmit = (event) => {
		event.preventDefault();

		// setErrorMessage("");
		// try {
		// 	const letterGrade = getLetterGrade(gradeScale, mark, level);
		// 	setGrade(letterGrade);
		// } catch (error) {
		// 	setErrorMessage(error.message);
		// }
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="counterBegin">
					remind me every
					<input
						id="counterBegin"
						type="number"
						min="0"
						max="100"
						step="1"
						value={counterBegin}
						onChange={(event) => {
							setCounterBegin(Number(event.target.value * 60));
							setIsCountingDown(true);
						}}
						required
					/>
					minutes
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default CountdownInput;
