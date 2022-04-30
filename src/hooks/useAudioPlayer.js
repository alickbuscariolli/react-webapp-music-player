import { useState, useEffect } from "react";

const useAudioPlayer = () => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
      if (!isPlaying) {
          setIsPlaying(true);
      }
  }

  const pauseMusic = () => {
      if (isPlaying) {
          setIsPlaying(false);
      }
  }

  const onChangeMusic = (musicUrl) => {
    audio.pause();
    audio.src = musicUrl;
    audio.load();
    audio.play();
    setIsPlaying(true);
  }

  const onLoadMusic = (musicUrl) => {
    audio.pause();
    setIsPlaying(false);
    audio.src = musicUrl;
    audio.load();
  }

  useEffect(() => {
      isPlaying ? audio.play() : audio.pause();
    },
    [isPlaying]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return [isPlaying, playMusic, pauseMusic, onChangeMusic, onLoadMusic];
};

export default useAudioPlayer;