// @flow
import * as React from 'react';
import imageDefault from '../../../../asset/images/imagedefault.jpg';
export default function ImageCustom(props) {
  const [image, setImage] = React.useState();
  const [error, setError] = React.useState();
  const handleImageLoaded = () => {
    setImage('loaded');
    setError(false);
  };

  const handleImageError = () => {
    setImage('failed to load');
    setError(true);
  };

  return (
    <img
      src={error ? imageDefault : props.src}
      // onLoad={handleImageLoaded.bind(this)}
      onError={handleImageError.bind(this)}
      className={`d-block app-border-8px d-flex justify-content-center ${props.className}`}
    />
  );
}
