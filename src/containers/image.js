/**
 * Created by Andrea on 11/2/2017.
 */

import {connect} from 'react-redux';
import Image from "../components/image";
import imageConnector from "./image/connector";

export default connect(
    (state, props) => ({
        width: props.width || false,
        height: props.height || false,
    })
)(imageConnector(Image));
