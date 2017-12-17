
import {o} from 'atp-sugar';
import {splice} from 'atp-pointfree';

//Action types
export const UPLOAD_MEDIA_START = "atp-media/media/upload/start";
export const UPLOAD_MEDIA_COMPLETE = "atp-media/media/upload/complete";

//Action creators
export const uploadStart = uploadId => ({type: UPLOAD_MEDIA_START, uploadId});
export const uploadComplete = uploadId => ({type: UPLOAD_MEDIA_COMPLETE, uploadId});

//Selectors
export const isUploading = (getState, uploadId) => getState().media.uploads.indexOf(uploadId) !== -1;

//Reducer
export default (state = [], action) => o(action.type).switch({
    [UPLOAD_MEDIA_START]: () => state.concat(action.uploadId),
    [UPLOAD_MEDIA_COMPLETE]: () => splice(state.indexOf(action.uploadId), 1)(state),
   default: () => state
});
