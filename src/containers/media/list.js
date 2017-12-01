/**
 * Created by Andy on 4/22/2017.
 */

import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";
import {connectWithLifecycle} from 'react-lifecycle-component';

export default connectWithLifecycle(
    state => ({
        media: Media().select.all(() => state, {}),
    }),
    (dispatch, getState) => ({
        componentDidMount: () => {
            dispatch(Media().action.collection.get({columns: ['id', 'name', 'url']}));
        },
        onUpload: data => {
            Media().action.collection.get({columns: ['id', 'name']})(dispatch, getState);
            dispatch(Media().action.select(data.results.id));
        }
    })
)(MediaList);