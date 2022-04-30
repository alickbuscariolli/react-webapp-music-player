import React from 'react';
import '../../../../../shared/css/Theme.css';
import PauseButton from '../../../../../shared/buttons/PauseButton';
import PlayButton from '../../../../../shared/buttons/PlayButton';
import './MusicPlayerMobileControls.css';
import { COLORS } from '../../../../../shared/theme/Colors';

const MusicPlayerMobileControls = ({isPlaying, playMusic, pauseMusic}) => {
    return <div className="row musicPlayerMobileControls" style={{backgroundColor: COLORS.grey}}>
        {!isPlaying && <PlayButton playMusic={playMusic} />}
        {isPlaying && <PauseButton pauseMusic={pauseMusic} />}
    </div>;
}

export default MusicPlayerMobileControls;