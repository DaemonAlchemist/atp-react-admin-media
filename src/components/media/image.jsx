import React from 'react';
import {restUrl} from "atp-rest-client";

export default ({imageId, width, height, loginToken}) =>
    <div>
        {imageId && <img src={restUrl(
                "media/"
                + imageId
                + "/download?"
                + "format=png"
                + "&loginToken=" + loginToken
                + (width ? "&width=" + width : "")
                + (height ? "&height=" + height : "")
            )} className="img-responsive"/>}
        {!imageId && <i className="fa fa-picture-o fa-5x" />}
    </div>
