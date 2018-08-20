
import {Media} from "../../reducer/media";
import MediaList from "../../components/media/list";
import {connectWithLifecycle} from 'react-lifecycle-component';
import {paginator} from 'basic-reducers';
import {get} from 'atp-pointfree';
import {input, set} from "basic-reducers";

const pagerId = "mediaListPager";
const perPage = 10;
const filterId = "mediaListMainFilter";
const fileNameFilterId = filterId + "FileName";
const tagFilterId = filterId + "Tag";

const fetchMedia = (dispatch, props, filters = {}) => {
    dispatch(Media().action.collection.get({
        ...filters,
        offset: props.offset,
        perPage
    }, data => {
        dispatch(paginator.setPageCount(pagerId, Math.ceil(data.meta.totalRecords / perPage)));
    }));
}

export default connectWithLifecycle(
    (state, props) => ({
        pagerId,
        offset: (paginator.get(get(state), pagerId).page - 1) * perPage,
        fileNameFilter: input.value(get(state), fileNameFilterId),
        tagFilter: set.values(get(state), tagFilterId),
        perPage,
        media: Media().select.byList(() => state, {
            offset: (paginator.get(get(state), pagerId).page - 1) * perPage,
            fileName: input.value(get(state), fileNameFilterId),
            tag: [...set.values(get(state), tagFilterId).values()],
            perPage
        }),
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            console.log("Mount");
            dispatch(Media().action.collection.get({
                offset: 0,
                fileName: null,
                tag: [],
                perPage
            }, data => {
                dispatch(paginator.setPageCount(pagerId, Math.ceil(data.meta.totalRecords / perPage)));
            }));
        },
        componentWillReceiveProps: function(newProps) {
            if(
                newProps.offset !== this.props.offset ||
                newProps.fileNameFilter !== this.props.fileNameFilter ||
                newProps.tagFilter !== this.props.tagFilter
            ) {
                console.log("Recieve props");
                console.log(newProps);
                dispatch(Media().action.collection.get({
                    offset: newProps.offset,
                    fileName: newProps.fileNameFilter,
                    tag: [...newProps.tagFilter.values()],
                    perPage
                }, data => {
                    dispatch(paginator.setPageCount(pagerId, Math.ceil(data.meta.totalRecords / perPage)));
                }));
            }
        },
        onNameFilterChange: e => {
            dispatch(input.set(fileNameFilterId, e.target.value));
        },
        onAddTag: tag => {
            console.log("Adding tag: " + tag);
            dispatch(set.add(tagFilterId, tag));
        },
        onRemoveTag: tag => () => {
            dispatch(set.remove(tagFilterId, tag));
        },
        onUpload: data => {
            Media().action.collection.get({})(dispatch, props);
            dispatch(Media().action.select(data.results.id));
        },
        onMediaDelete: id => () => {dispatch(Media().action.delete(id));}
    })
)(MediaList);
