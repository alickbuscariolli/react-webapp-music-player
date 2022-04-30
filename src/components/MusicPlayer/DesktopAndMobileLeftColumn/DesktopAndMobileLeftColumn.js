import React from 'react';
import './DesktopAndMobileLeftColumn.css';
import { COLORS } from '../../../shared/theme/Colors';
import SearchInput from './components/SearchInput/SearchInput';
import '../../../shared/css/Theme.css';
import SongCard from './components/SongCard/SongCard';
import NoSongsToDisplay from './components/Texts/NoSongsToDisplay';
import MusicPlayerMobileControls from './components/MusicPlayerMobileControls/MusicPlayerMobileControls';
import Loading from '../../../shared/components/Loading/Loading';
import ErrorLoading from '../../../shared/components/Errors/ErrorLoading';

const DesktopAndMobileLeftColumn = ({musicList, onSearch, onClickCard, musicSelected, isPlaying, playMusic, pauseMusic, isSmallScreen, isLoading, errorLoadingMusics}) => {
    return <div className={`col ${musicSelected && !isSmallScreen ? 'col-4' : 'w-100'} desktopAndMobileLeftColumn defaultScreen`} style={{backgroudColor: COLORS.grey}}>
        <div className={`pt-30 ${isSmallScreen && 'pb-50'}`}>
            <SearchInput onSearch={onSearch} /> 
            {!isLoading && errorLoadingMusics && <ErrorLoading item="musics" />}
            {isLoading && !errorLoadingMusics && <Loading item="tracks" />}
            {!isLoading && !errorLoadingMusics && musicList.length === 0 && <NoSongsToDisplay />}
            {!isLoading && !errorLoadingMusics && musicList.length > 0 &&
                musicList.map((music, index) => {
                    return <SongCard    key={index} 
                                        artistName={music.artistName} 
                                        trackName={music.trackName} 
                                        collectionName={music.collectionName} 
                                        artworkUrl100={music.artworkUrl100} 
                                        onClickCard={onClickCard}
                                        trackId={music.trackId} 
                                        isPlaying={music.isSelected && isPlaying}
                                        isSelected={music.isSelected}
                            />;
                })
            }
        </div>
        {isSmallScreen &&
        <MusicPlayerMobileControls isPlaying={isPlaying} playMusic={playMusic} pauseMusic={pauseMusic}/>}
    </div>
}

export default DesktopAndMobileLeftColumn;