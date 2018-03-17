
import {connectWithLifecycle} from 'react-lifecycle-component';
import RelatedFiles from "../../components/media/related-files";
import {File} from '../../reducer/file';

const mainPrefix = media => `${media.s3Prefix ? media.s3Prefix + " - " : ""}${media.fileName}.${media.fileExtension}`;
const otherPrefix = media => `${media.s3Prefix ? media.s3Prefix + " - " : ""}${media.fileName} - `;

export default connectWithLifecycle(
    (state, {media}) => ({
        files: File().select.byList(() => state, {prefix: mainPrefix(media)}).concat(
            File().select.byList(() => state, {prefix: otherPrefix(media)})
        )
    }),
    (dispatch, {media}) => ({
        componentDidMount: () => {
            dispatch(File().action.collection.get({prefix: otherPrefix(media)}));
            dispatch(File().action.collection.get({prefix: mainPrefix(media)}));
        },
        componentWillReceiveProps: function(newProps) {
            if(newProps.media !== media) {
                dispatch(File().action.collection.get({prefix: otherPrefix(newProps.media)}));
                dispatch(File().action.collection.get({prefix: mainPrefix(newProps.media)}));
            }
        }
    })
)(RelatedFiles);