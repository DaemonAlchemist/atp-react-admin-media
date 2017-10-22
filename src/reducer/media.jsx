/**
 * Created by Andy on 4/19/2017.
 */

import {entityBoilerplate} from "atp-redux-entity";
import {o} from "atp-sugar";

//Entity types
export const mediaType = 'mediaFile';
export const mediaName = 'media';

//Action types
export const SELECT_MEDIA = "atp-media/media/select";

//REST selectors and actions
export const Media = () => o(entityBoilerplate(mediaType, mediaName))
    .merge({
        action: {
            select: mediaId => ({type: SELECT_MEDIA, mediaId})
        }
    }).raw;
