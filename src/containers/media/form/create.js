/**
 * Created by Andy on 4/22/2017.
 */

import {reduxForm} from "redux-form";
import {Media} from "../../../reducer/media";
import NewMediaForm from "../../../components/media/form/create";
import {o} from "atp-sugar";

function encodeFile(data) {
    return new Promise((resolve, reject) => {
        const reader  = new FileReader();

        reader.addEventListener("load", () => resolve(
            o(/^data:(.*);base64,(.*)$/.exec(reader.result)).as(match => ({
                name: data.file.name,
                size: data.file.size,
                type: data.file.type,
                mime: match[1],
                data: match[2]
            })))
        , false);

        reader.readAsDataURL(data.file);
    });
}

export default reduxForm({
    form: 'new-media-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        encodeFile(data).then(file => {
            Media().action.post(file)(dispatch, getState).then(data => {
                Media().action.list({})(dispatch, getState);
                dispatch(Media().action.select(data.results.id));
            });
        });

    })
})(NewMediaForm);
