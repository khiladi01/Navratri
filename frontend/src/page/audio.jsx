import { useRef, useEffect } from 'react';

function Audio (){
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log('Autoplay prevented:', error);
                });
            }
        };

        // Play on first user interaction (click anywhere)
        const handleClick = () => {
            playAudio();
            document.removeEventListener('click', handleClick);
        };

        document.addEventListener('click', handleClick, { once: true });

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return(
        <>
            <audio ref={audioRef} src="/maaaudio.mp3" />
        </>
    )
}

export default Audio;
