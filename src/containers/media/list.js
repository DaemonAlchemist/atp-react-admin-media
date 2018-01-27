
import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";
import {connectWithLifecycle} from 'react-lifecycle-component';

export default connectWithLifecycle(
    state => ({
        media: Media().select.all(() => state, {}),
    }),
    (dispatch, getState) => ({
        componentDidMount: () => {
            dispatch(Media().action.collection.get({}));
        },
        onUpload: data => {
            Media().action.collection.get({})(dispatch, getState);
            dispatch(Media().action.select(data.results.id));
        },
        onMediaDelete: id => () => {dispatch(Media().action.delete(id));}
    })
)(MediaList);