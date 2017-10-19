/**
 * Created by Andy on 4/22/2017.
 */

import {connect} from "react-redux";
import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";
import {getLoginToken} from 'atp-uac';

export default connect(
    state => ({
        media: Media().select.all(() => state, {}),
        loginToken: getLoginToken(() => state)
    }),
    (dispatch, getState) => ({

    })
)(MediaList);