import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'antd-mobile';
import PropTypes from 'prop-types';

function ImageWithSkeleton({ src, alt, width, height, ...props }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ width, height, position: 'relative' }}>
      {loading && <Skeleton animated style={{ width, height }} />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        placeholder = 'empty'
        style={{ opacity: loading ? 0 : 1 , position: 'absolute', top: 0, left: 0 }}
        loading="lazy"
        {...props}
      />
    </div>
  );
}

ImageWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ImageWithSkeleton;
