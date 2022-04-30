import { useEffect, useState } from "react";
import useApi from "../../shared/hooks/useApi";

const MusicPlayerController = () => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [errorLoadingMusics, setErrorLoadingMusics] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [apiGet] = useApi();

    useEffect(() => {
        window.addEventListener('resize', checkSmallScreen);

        return () => window.removeEventListener('resize', checkSmallScreen);
    }, []);

    const checkSmallScreen = () => 
        setIsSmallScreen(window.innerWidth < 700);
    
    /// Search preview musics
    const onSearch = async (search) => {
        setErrorLoadingMusics(false);
        setIsLoading(true);

        const searchString = search.target.value;

        if (searchString) {
            searchString.replace(/\s/g, '+');

            try {
                const response = await apiGet(`search?term=${searchString}`);

                if (response.results.length > 0) {
                    setMusicList([...response.results]);
                }

            } catch(error) {
                setMusicList([]);
                setErrorLoadingMusics(true);
            }
        }
        setIsLoading(false);
        
    }

    const setIsSelectedToFalseForAllMusics = () => {
        const selectedMusic = musicList.find((music) => music.isSelected);
        if (selectedMusic) {
            selectedMusic.isSelected = false;
        }
    }

    return [onSearch, musicList, setMusicList, isLoading, errorLoadingMusics, isSmallScreen, setIsSelectedToFalseForAllMusics];
}

export default MusicPlayerController;