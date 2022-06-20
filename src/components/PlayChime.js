import chime from "../audio/chime.mp3";
import Sound from "react-sound";

// const PlayChime = ({ isPlaying, setIsPlaying }) => {
const PlayChime = ({ isPlaying }) => {
	// const PlayChime = () => {
	// const playStatus = () => {
	// 	if (isPlaying === true) {
	// 		return Sound.status.PLAYING;
	// 	}

	// 	return Sound.status.STOPPED;
	// };

	return (
		<Sound
			url={chime}
			// playStatus={playStatus}
			playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
			playFromPosition={150}
			// onPlaying={setIsPlaying(false)}
			onFinishedPlaying={Sound.status.STOPPED}
		/>
	);

	// return <Sound url={chime} playStatus={Sound.status.PLAYING} />;
};

export default PlayChime;
