/**
 * Created by Andy on 10/24/2017.
 */

import {connect} from 'react-redux';
import {connectWithLifecycle} from "react-lifecycle-component";
import ImageSelector from '../../../components/media/selector/image';
import {Media} from "../../../reducer/media";
import {getLoginToken} from 'atp-uac';

const imageLoader = (props, dispatch) => () => {
    if(props.mediaId && !props.image) {
        dispatch(Media().action.fetch(props.mediaId));
    }
};

export default connect(
    (state, props) => ({
        image: props.mediaId ? Media().select.one(() => state, props.mediaId) : null,
        loginToken: getLoginToken(() => state)
    })
)(connectWithLifecycle(
    null,
    (dispatch, props) => ({
        componentDidMount: imageLoader(props, dispatch),
        componentDidUpdate: imageLoader(props, dispatch),
    })
)(ImageSelector));
