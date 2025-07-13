import React, { useState } from 'react';

const LazyImage = ({ src, alt = '', styleApplied}) => {
  const [loaded, setLoaded] = useState(false);
  console.log(styleApplied)
  return (
    <>
      {!loaded && (
        <div className='w-full h-full'>
          <div className={`skeleton-box ${styleApplied}`}>
              
          </div>
        </div>
      )}
      <img
        className={`${!loaded ? 'hidden' : ''} ${styleApplied}`}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default LazyImage;
