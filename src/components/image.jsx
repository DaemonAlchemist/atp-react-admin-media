import React from 'react';
import {Icon} from 'react-font-awesome-5';

export default ({image, resize, width, height, host}) =>
    image
        ? <img
            src={`http://${host}/${image.fileName}${resize}.${image.fileExtension}`}
            className="img-responsive"
            width={width ? width : undefined}
            height={height ? height : undefined}
          />
        : <Icon.Image size="5x" />;
