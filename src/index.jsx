/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {combineReducers} from 'redux';
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import MediaList from "./containers/media/list";
import NewMediaForm from "./containers/media/form/create";
import ImageSelector from "./containers/image/selector";
import Image from "./containers/image";

import uploads, {uploadStart, uploadComplete, isUploading} from "./reducer/uploads";

const MediaSelector = {
    Image: ImageSelector
};

export {NewMediaForm, MediaSelector, Image, uploadStart, uploadComplete, isUploading};

export default {
    reducers: {
        media: combineReducers({
            uploads
        })
    },
    routes: [
        <Route path="/media" key="/media" exact render={() => <MediaList />} />
    ],
    init: {
        ui: {
            menus: {
                main: {
                    media: {
                        label: <span><i className="fa fa-picture-o"></i> Media</span>,
                        sortOrder: 0,
                        children: {
                            dashboard: {
                                label: <Link to="/media" label="Files" target="new"><i className="fa fa-picture-o"></i> Files</Link>,
                                noAnchor: true,
                                sortOrder: 0
                            }
                        }
                    }
                }
            }
        }
    },
};
