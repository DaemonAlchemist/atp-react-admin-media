import React from 'react';

export default ({fileName, width, height, host}) =>
    image
        ? <img
            src={`http://${host}/${fileName}`}
            className="img-responsive"
            width={width}
            height={height}
          />
        : <i className="fa fa-picture-o fa-5x" />;
