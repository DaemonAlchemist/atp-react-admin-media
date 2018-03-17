import React from 'react';
import {connect} from 'react-redux';
import {connectWithLifecycle} from 'react-lifecycle-component';
import {Link} from 'atp-react-tab-router';
import {Media} from "../reducer/media";
import {get} from 'atp-pointfree';
import {Icon} from 'react-font-awesome-5';

export const MediaLink = props =>
    <Link
        {...props}
        to={`/media/file/${props.media.id}`}
        label={<span><Icon.Image /> Media "{props.media.fileName}.{props.media.fileExtension}"</span>}
        target="new"
    />;

export const MediaLinkFull = connect(
    (state, props) => ({
        page: Media().select.one(get(state), props.mediaId)
    })
)(({media}) =>
    <MediaLink media={media}>
        <span  style={{whiteSpace: "nowrap"}}>
            <Icon.Image /> {media.fileName}.{media.extension}
        </span>
    </MediaLink>
);
