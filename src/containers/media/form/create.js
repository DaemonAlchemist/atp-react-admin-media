/**
 * Created by Andy on 4/22/2017.
 */

import {reduxForm} from "redux-form";
import {Media} from "../../../reducer/media";
import NewMediaForm from "../../../components/media/form/create";
import {encodeFile} from 'atp-ui';

export default reduxForm({
    form: 'new-media-form-' + Math.random(),
    onSubmit: (data, dispatch, props) => dispatch((dispatch, getState) => {
        encodeFile(data.file).then(file => {
            Media().action.create(file)(dispatch, getState).then(([data]) => {
                (props.onUpload || (() => {}))(data);
            });
        });

    })
})(NewMediaForm);
