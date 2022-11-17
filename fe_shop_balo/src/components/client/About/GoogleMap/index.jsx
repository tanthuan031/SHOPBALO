import React from 'react';

const GoogleMap = (props) => {
  return (
    <div>
      <iframe
        // className="gmap_iframe"
        frameBorder="0"
        {...props}
        src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=đại học sài gòn&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >ShopBalo</iframe>
    </div>
  );
};

export default GoogleMap;
