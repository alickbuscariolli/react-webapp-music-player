import React from 'react';
import playButton from '../../assets/music-player/play.png';
import './PlayPuseButton.css';

const PlayButton = ({playMusic}) => {
    return <button onClick={playMusic} className="playPauseButton" ><img alt="Play button" src={playButton} ></img></button>;
}

export default PlayButton;