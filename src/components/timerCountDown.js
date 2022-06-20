const timerCountDown = (counterBegin, currentCounter) => {
	if (currentCounter !== 0) {
		return currentCounter - 1;
	}

	return (currentCounter = counterBegin);
};

export default timerCountDown;
