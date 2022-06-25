// import logo from "./logo.svg";
import "./App.css";
import timerCountdown from "./components/timerCountdown";
import ShowCurrentTime from "./components/ShowCurrentTime";
import CountdownInput from "./components/CountdownInput";
import ShowTimer from "./components/ShowTimer";
import PlayChime from "./components/PlayChime";
import { useState, useEffect } from "react";

function App() {
	const [hour, setHour] = useState(new Date().getHours());
	const [minute, setMinute] = useState(new Date().getMinutes());
	const [second, setSecond] = useState(new Date().getSeconds());

	// const counterBegin = 5;
	const [counterBegin, setCounterBegin] = useState(0);
	const [timer, setTimer] = useState(counterBegin);

	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();

			setHour(date.getHours());
			setMinute(date.getMinutes());
			setSecond(date.getSeconds());

			setTimer(timerCountdown(counterBegin, timer));
			console.log(timer);

			setIsPlaying(false);
			if (timer === 0) {
				// console.log("POTATO");
				setIsPlaying(true);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [hour, minute, second, timer]);

	return (
		<main>
			<ShowCurrentTime hour={hour} minute={minute} second={second} />
			<CountdownInput
				// counterBegin={counterBegin}
				setCounterBegin={setCounterBegin}
			/>
			<ShowTimer timer={timer} />
			<PlayChime isPlaying={isPlaying} />
		</main>
	);
}

export default App;
