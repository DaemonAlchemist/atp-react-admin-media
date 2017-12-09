/**
 * Created by Andrea on 11/2/2017.
 */

import {connect} from 'react-redux';
import Image from "../components/image";
import imageConnector from "./image/connector";
import config from 'atp-config';

export default connect(
    (state, props) => ({
        width: props.width || false,
        height: props.height || false,
        resize: (props.height && props.width) ? ` - ${props.width}x${props.height}` : "",
        host: config.get('media.staticHost')
    })
)(imageConnector(Image));
