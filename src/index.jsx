/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {Row} from "react-bootstrap";

import MediaList from "./containers/media/list";
import {addTab} from "atp-ui";
import {Media} from "./reducer/media";

export default {
    reducers: {},
    init: {
        ui: {
            menus: {
                main: {
                    media: {
                        label: <span><i className="fa fa-picture-o"></i> Media</span>,
                        sortOrder: 0,
                        children: {
                            dashboard: {
                                label: <span><i className="fa fa-picture-o"></i> Files</span>,
                                sortOrder: 0,
                                onClick: dispatch => {
                                    dispatch(Media().action.list({}));
                                    dispatch(addTab({
                                        title: <span><i className="fa fa-pictur-o" /> Files</span>,
                                        id: () => 'media-files',
                                        controller: () => <MediaList/>
                                    }));
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};
