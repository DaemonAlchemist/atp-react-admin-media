/**
 * Created by Andrea on 11/2/2017.
 */

import {connect} from 'react-redux';
import Image from "../../components/media/image";
import {getLoginToken} from 'atp-uac';

export default connect(
    (state, props) => ({
        imageId: props.mediaId || null,
        width: props.width || false,
        height: props.height || false,
        loginToken: getLoginToken(() => state)
    })
)(Image);