import React from 'react';
import BackgroundShape from './BackgroundShape';
import BackgroundCircleShapes from './BackgroundCircleShapes';
import BackgroundCirlceShapeLeft from './BackgroundCirlceShapeLeft';

const Background = () => {
  return (
    <>
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2">
        {/* Backround Shape */}
        <BackgroundShape />
      </div>

      {/* Background Circles right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <BackgroundCircleShapes />
      </div>

      {/* Background Circles left */}
      <div className="absolute left-0 top-5">
        <BackgroundCirlceShapeLeft />
      </div>
    </>
  );
};

export default Background;
