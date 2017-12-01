/**
 * Created by Andrea on 11/2/2017.
 */

import {connect} from 'react-redux';
import Image from "../../components/media/image";
import {Media} from "../../reducer/media";

export default connect(
    (state, props) => ({
        image: Media().select.one(() => state, props.mediaId),
        width: props.width || false,
        height: props.height || false,
    })
)(Image);