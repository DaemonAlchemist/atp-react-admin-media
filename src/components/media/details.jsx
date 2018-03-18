
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import RelatedFiles from "../../containers/media/related-files";
import {DeleteButton} from 'atp-ui';
import {MediaSelector} from "atp-media";

export default ({media, onMediaDelete, updateImage}) =>
    <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} xl={6} xlOffset={3}>
            <Row>
                <Col xs={12}>
                    <div style={{float: "right"}}>
                        <DeleteButton
                            id={`mediaDeleteBtn${media.id}`}
                            text="Delete media"
                            size="lg"
                            message={`Are you sure you want to delete the image "${media.fileName}.${media.fileExtension}?"  This cannot be undone.`}
                            confirmText="Yes, delete it"
                            cancelText="No, keep it."
                            width="250px"
                            onClick={onMediaDelete}
                        />
                    </div>
                    <h1>
                        {media.fileName}.{media.fileExtension}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <MediaSelector.Image title="Image" imageId={media.id} onSave={updateImage} uploadOnly width={false} height={false} />
                </Col>
                <Col xs={12} sm={6}>
                    <RelatedFiles media={media} />
                </Col>
            </Row>
        </Col>
    </Row>;
