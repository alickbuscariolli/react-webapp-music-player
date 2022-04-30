import React from 'react';
import './DesktopRightColumn.css';
import '../../../shared/css/Theme.css'
import PlayButton from '../../../shared/buttons/PlayButton';
import PauseButton from '../../../shared/buttons/PauseButton';
import AlbumInfo from './components/AlbumInfo/AlbumInfo';

const DesktopRightColumn = ({   artworkUrl100, 
                                isPlaying, 
                                playMusic, 
                                pauseMusic, 
                                trackName, 
                                collectionName, 
                                artistName, 
                                errorLoadingAlbumSongs, 
                                isLoadingAlbumSongs, 
                                albumSongs}) => {
    return <div className="col col-6 defaultScreen desktopRightColumn px-30">
        {artworkUrl100 && <img className="desktopRightColumnAlbumCoverImg pt-30" src={artworkUrl100} alt="Album cover"></img>}
        {!isPlaying && <PlayButton playMusic={playMusic} />}
        {isPlaying && <PauseButton pauseMusic={pauseMusic} />}
        <AlbumInfo  trackName={trackName} 
                    artistName={artistName} 
                    collectionName={collectionName} 
                    errorLoadingAlbumSongs={errorLoadingAlbumSongs} 
                    isLoadingAlbumSongs={isLoadingAlbumSongs} 
                    albumSongs={albumSongs} />
    </div>
}

export default DesktopRightColumn;