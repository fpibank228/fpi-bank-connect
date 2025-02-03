import { useEffect, useState } from 'react';

const RotatingCoin = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="coin-container">
      <div className={`coin ${isLoaded ? 'animate-spin-slow' : ''}`}>
        <img
          src="/placeholder.svg"
          alt="FPI Coin"
          className="w-full h-full object-contain"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default RotatingCoin;