/**
 * Created by Andy on 4/22/2017.
 */

import {connect} from "react-redux";
import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";

export default connect(
    state => ({
        media: Media().select.all(() => state, {}),
    }),
    (dispatch, getState) => ({
        onUpload: data => {
            Media().action.collection.get({columns: ['id', 'name']})(dispatch, getState);
            dispatch(Media().action.select(data.results.id));
        }
    })
)(MediaList);