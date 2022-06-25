import chime from "../audio/chime.mp3";
import Sound from "react-sound";

const PlayChime = ({ isPlaying }) => {
	return (
		<Sound
			url={chime}
			playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
			playFromPosition={150}
		/>
	);
};

export default PlayChime;
