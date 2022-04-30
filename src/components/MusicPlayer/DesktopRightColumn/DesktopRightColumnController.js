import { useState } from 'react';
import useApi from '../../../shared/hooks/useApi';

const DesktopRightColumnController = () => {
    const [apiGet] = useApi();
    const [errorLoadingAlbumSongs, setErrorLoadingAlbumSongs] = useState(false);
    const [isLoadingAlbumSongs, setIsLoadingAlbumSongs] = useState(false);
    const [albumSongs, setAlbumSongs] = useState([]);

    const loadAlbumSongs = async (collectionId) => {
        try {
            setErrorLoadingAlbumSongs(false);
            setIsLoadingAlbumSongs(true);

            const response = await apiGet(`lookup?id=${collectionId}&entity=song`);

            setAlbumSongs(response.results.filter((song) => song.wrapperType === 'track'));
        } catch(error) {
            console.error(error);

            setErrorLoadingAlbumSongs(true);
        }
        setIsLoadingAlbumSongs(false);
    }

    return [loadAlbumSongs, isLoadingAlbumSongs, errorLoadingAlbumSongs, albumSongs];
}

export default DesktopRightColumnController;