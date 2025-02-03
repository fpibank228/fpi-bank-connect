import { useEffect, useState } from 'react';

const RotatingCoin = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="coin-container">
            <video className="absolute object-contain self-center w-full "
                   autoPlay loop playsInline src="https://fpibank.com/assets/img/output.webm"></video>
        </div>
    );
};

export default RotatingCoin;