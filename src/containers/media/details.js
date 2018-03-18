
import {connectWithLifecycle} from "react-lifecycle-component";
import FileDetails from '../../components/media/details';
import {Media} from "../../reducer/media";
import {get} from "atp-pointfree";

export default connectWithLifecycle(
    (state, props) => ({
        media: Media().select.one(get(state), props.fileId),
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Media().action.fetch(props.fileId));
        },
        onMediaDelete: () => {dispatch(Media().action.delete(props.fileId));},
        updateImage: () => {}
    })
)(FileDetails);
