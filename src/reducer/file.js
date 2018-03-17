
import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";

export const fileType = 's3File';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const File = () => entityBoilerplate(fileType, 'file', 'ETag');
