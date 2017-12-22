
import {connect} from 'react-redux';
import {reduxForm} from "redux-form";
import {Media} from "../../../reducer/media";
import NewMediaForm from "../../../components/media/form/create";
import {encodeFile} from 'atp-ui';
import {compose, get} from 'atp-pointfree';
import {isUploading, uploadStart, uploadComplete} from "../../../reducer/uploads";

const redux = connect(
    (state, props) => ({
        isUploading: isUploading(get(state), props.id)
    }),
    (dispatch, props) => ({

    })
);

const form = reduxForm({
    form: 'new-media-form-' + Math.random(),
    onSubmit: (data, dispatch, props) => dispatch((dispatch, getState) => {
        dispatch(uploadStart(props.id));
        encodeFile(data.file).then(file => {
            Media().action.create(file)(dispatch, getState).then(([data]) => {
                dispatch(uploadComplete(props.id));
                (props.onUpload || (() => {}))(data);
            }).catch(() => {
                dispatch(uploadComplete(props.id));
            });
        });

    })
});

export default compose(redux, form)(NewMediaForm);
