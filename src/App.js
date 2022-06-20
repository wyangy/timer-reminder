// import logo from "./logo.svg";
import "./App.css";
import timerCountDown from "./components/timerCountDown";
import ShowCurrentTime from "./components/ShowCurrentTime";
import ShowTimer from "./components/ShowTimer";
import PlayChime from "./components/PlayChime";
import { useState, useEffect } from "react";

function App() {
	const [hour, setHour] = useState(new Date().getHours());
	const [minute, setMinute] = useState(new Date().getMinutes());
	const [second, setSecond] = useState(new Date().getSeconds());

	const counterBegin = 5;
	const [timer, setTimer] = useState(counterBegin);

	// const [audio] = useState(new Audio("../audio/chime.mp3"));
	// const [playing, setPlaying] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	// const toggle = () => setPlaying(!playing);

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();

			setHour(date.getHours());
			setMinute(date.getMinutes());
			setSecond(date.getSeconds());

			setTimer(timerCountDown(counterBegin, timer));
			console.log(timer);

			setIsPlaying(false);
			if (timer === 0) {
				console.log("POTATO");
				setIsPlaying(true);
			}

			// playing ? audio.play() : audio.pause();
		}, 1000);

		return () => clearInterval(interval);
	}, [hour, minute, second, timer]);

	return (
		<main>
			<ShowCurrentTime hour={hour} minute={minute} second={second} />
			<ShowTimer timer={timer} />
			{/* <button onClick={() => setIsPlaying(!isPlaying)}></button> */}
			{/* {timer === 0 && <PlayChime />} */}
			{/* <PlayChime /> */}
			{/* <PlayChime isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
			<PlayChime isPlaying={isPlaying} />
		</main>
	);
}

export default App;
