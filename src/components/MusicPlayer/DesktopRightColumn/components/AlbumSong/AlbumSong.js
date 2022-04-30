import React from 'react';
import './AlbumSong.css';
import '../../../../../shared/css/Theme.css';

const AlbumSong = ({trackName, isLastSong}) => {
    return <div className={`albumSong ${isLastSong && 'pb-30'}`}>
            <hr/>
            <p>{trackName}</p>
            {isLastSong && <hr />}
        </div>;
}

export default AlbumSong;