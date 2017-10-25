/**
 * Created by Andy on 10/24/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import ImageSelector from '../../../components/media/selector/image';
import {Media} from "../../../reducer/media";
import {getLoginToken} from 'atp-uac';

export default connectWithLifecycle(
    (state, props) => ({
        image: props.mediaId ? Media().select.one(() => state, props.mediaId) : null,
        loginToken: getLoginToken(() => state)
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            if(props.mediaId) {
                dispatch(Media().action.fetch(props.mediaId));
            }
        }
    })
)(ImageSelector);
