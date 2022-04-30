import React from 'react';
import './SongCard.css';
import '../../../../../shared/css/Theme.css';
import { COLORS } from '../../../../../shared/theme/Colors';
import frequency from '../../../../../assets/music-player/frequency.gif';

const SongCard = ({artistName, trackName, collectionName, artworkUrl100, onClickCard, trackId, isPlaying, isSelected}) => {
    return <button onClick={() => onClickCard(trackId)} style={{border: 'none', padding: 0, width: '100%'}}>
        <div className="songCard p-30 row" style={{backgroundColor: isSelected ? COLORS.darkGrey400 : COLORS.grey}}>
            <img className="songImg" src={artworkUrl100} alt="Album cover"></img>
            <div className="songInfo col">
                {trackName && <p className="songName text-align-start" style={{color: COLORS.darkGreyText}}>{trackName}</p>}
                {artistName && <p className="songArtist text-align-start">{artistName}</p>}
                {collectionName && <p className="songAlbum text-align-start">{collectionName}</p>}
            </div>
            {isPlaying && 
            <img src={frequency} alt="playing audio" className="frequency" />}
        </div>
    </button>
}

export default SongCard;