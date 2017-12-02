import React from 'react';

export default ({image, width, height}) =>
    image
        ? <img
            src={image.url}
            className="img-responsive"
            width={width}
            height={height}
          />
        : <i className="fa fa-picture-o fa-5x" />;
