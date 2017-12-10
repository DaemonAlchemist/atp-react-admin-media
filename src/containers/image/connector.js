/**
 * Created by Andy on 10/24/2017.
 */

import {connect} from 'react-redux';
import {connectWithLifecycle} from "react-lifecycle-component";
import {Media} from "../../reducer/media";

const imageLoader = (props, dispatch) => () => {
    if(props.imageId && !props.image) {
        dispatch(Media().action.fetch(props.imageId));
    }
};

export default component => connect(
    (state, props) => ({
        image: props.imageId ? Media().select.one(() => state, props.imageId) : null,
        width: typeof props.width !== 'undefined' ? props.width : 300,
        height: typeof props.height !== 'undefined' ? props.height : 300
    })
)(connectWithLifecycle(
    null,
    (dispatch, props) => ({
        componentDidMount: imageLoader(props, dispatch),
        componentDidUpdate: imageLoader(props, dispatch),
    })
)(component));
