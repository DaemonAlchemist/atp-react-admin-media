import React from 'react';

export default ({image, resize, width, height, host}) =>
    image
        ? <img
            src={`http://${host}/${image.fileName}${resize}.${image.fileExtension}`}
            className="img-responsive"
            width={width}
            height={height}
          />
        : <i className="fa fa-picture-o fa-5x" />;
