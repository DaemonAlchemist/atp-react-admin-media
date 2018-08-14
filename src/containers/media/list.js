
import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";
import {connectWithLifecycle} from 'react-lifecycle-component';
import {paginator} from 'basic-reducers';
import {get} from 'atp-pointfree';

const pagerId = "mediaListPager";
const perPage = 10;

export default connectWithLifecycle(
    (state, props) => ({
        pagerId,
        offset: (paginator.get(get(state), pagerId).page - 1) * perPage,
        perPage,
        media: Media().select.byList(() => state, {
            offset: (paginator.get(get(state), pagerId).page - 1) * perPage,
            perPage
        }),
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Media().action.collection.get({
                offset: 0,
                perPage
            }, data => {
                dispatch(paginator.setPageCount(pagerId, Math.ceil(data.meta.totalRecords / perPage)));
            }));
        },
        componentWillReceiveProps: function(newProps) {
            if(newProps.offset !== this.props.offset) {
                dispatch(Media().action.collection.get({
                    offset: newProps.offset,
                    perPage
                }, data => {
                    dispatch(paginator.setPageCount(pagerId, Math.ceil(data.meta.totalRecords / perPage)));
                }));
            }
        },
        onUpload: data => {
            Media().action.collection.get({})(dispatch, props);
            dispatch(Media().action.select(data.results.id));
        },
        onMediaDelete: id => () => {dispatch(Media().action.delete(id));}
    })
)(MediaList);