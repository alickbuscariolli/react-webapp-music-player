import React from 'react';
import ErrorLoading from '../../../../../shared/components/Errors/ErrorLoading';
import Loading from '../../../../../shared/components/Loading/Loading';
import AlbumSong from '../AlbumSong/AlbumSong';

const AlbumInfo = ({trackName, artistName, collectionName, errorLoadingAlbumSongs, isLoadingAlbumSongs, albumSongs}) => {
    return <>
        <p className="pt-30">{trackName}</p>
        <p>{artistName}</p>
        <p className="pb-30">{collectionName}</p>
        {errorLoadingAlbumSongs && !isLoadingAlbumSongs && <ErrorLoading item="album tracks" />}
        {isLoadingAlbumSongs && <Loading item="tracks" />}
        {albumSongs && !isLoadingAlbumSongs && albumSongs.map((song, index) => {
            return <AlbumSong trackName={song.trackName} key={index} isLastSong={index === albumSongs.length - 1} />
        })}
    </>
}

export default AlbumInfo;