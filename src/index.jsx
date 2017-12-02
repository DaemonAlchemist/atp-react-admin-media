/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import MediaList from "./containers/media/list";
import NewMediaForm from "./containers/media/form/create";
import ImageSelector from "./containers/image/selector";
import Image from "./containers/image";

const MediaSelector = {
    Image: ImageSelector
};

export {NewMediaForm, MediaSelector, Image};

export default {
    reducers: {},
    routes: [
        <Route path="/media" exact render={() => <MediaList />} />
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
                                sortOrder: 0
                            }
                        }
                    }
                }
            }
        }
    },
};
