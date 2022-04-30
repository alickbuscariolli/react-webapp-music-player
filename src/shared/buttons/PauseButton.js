import React from 'react';
import pauseButton from '../../assets/music-player/pause.png'
import './PlayPuseButton.css';

const PauseButton = ({pauseMusic}) => {
    return <button onClick={pauseMusic} className="playPauseButton" ><img alt="Pause button" src={pauseButton} ></img></button>;
}

export default PauseButton;