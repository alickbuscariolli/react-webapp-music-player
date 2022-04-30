import React, { useState } from 'react';
import DesktopAndMobileLeftColumn from '../../components/MusicPlayer/DesktopAndMobileLeftColumn/DesktopAndMobileLeftColumn';
import DesktopRightColumn from '../../components/MusicPlayer/DesktopRightColumn/DesktopRightColumn';
import DesktopRightColumnController from '../../components/MusicPlayer/DesktopRightColumn/DesktopRightColumnController';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import '../../shared/css/Theme.css';

import './MusicPlayer.css';
import MusicPlayerController from './MusicPlayerController';

const MusicPlayer = () => {
    const [isPlaying, playMusic, pauseMusic, onChangeMusic, onLoadMusic] = useAudioPlayer();
    const [onSearch, musicList, setMusicList, isLoading, errorLoadingMusics, isSmallScreen, setIsSelectedToFalseForAllMusics] = MusicPlayerController();
    const [selectedMusic, setSelectedMusic] = useState();
    const [isMusicSelected, setIsMusicSelected] = useState(false);
    const [loadAlbumSongs, isLoadingAlbumSongs, errorLoadingAlbumSongs, albumSongs] = DesktopRightColumnController();

    const onClickCard = (trackId) => {
        if (!isMusicSelected) {
            setIsMusicSelected(true);
        }
        const musicToPlay = musicList.find((music) => music.trackId === trackId);

        setIsSelectedToFalseForAllMusics();

        musicToPlay.isSelected = true;

        if (musicToPlay) {
            setSelectedMusic(musicToPlay);
            if (isSmallScreen) {
                onChangeMusic(musicToPlay.previewUrl);
            } else {
                onLoadMusic(musicToPlay.previewUrl);
                loadAlbumSongs(musicToPlay.collectionId);
            }
            setMusicList(oldMusicList => [...oldMusicList]);
        }
    }

    return <div className="row musicPlayer">
        <DesktopAndMobileLeftColumn 
            musicList={musicList} 
            onSearch={onSearch} 
            onClickCard={onClickCard} 
            errorLoadingMusics={errorLoadingMusics} 
            musicSelected={isMusicSelected} 
            isPlaying={isPlaying} 
            playMusic={playMusic} 
            pauseMusic={pauseMusic}
            isSmallScreen={isSmallScreen} 
            isLoading={isLoading}/>

        {isMusicSelected && !isSmallScreen && selectedMusic && <DesktopRightColumn 
                                artworkUrl100={selectedMusic.artworkUrl100} 
                                isPlaying={isPlaying} 
                                playMusic={playMusic} 
                                pauseMusic={pauseMusic}
                                trackName={selectedMusic.trackName}
                                collectionName={selectedMusic.collectionName}
                                artistName={selectedMusic.artistName}
                                isLoadingAlbumSongs={isLoadingAlbumSongs} 
                                errorLoadingAlbumSongs={errorLoadingAlbumSongs} 
                                albumSongs={albumSongs} />
                            }
    </div>
}

export default MusicPlayer;