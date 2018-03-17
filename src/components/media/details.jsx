
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import Image from "../../containers/image";
import RelatedFiles from "../../containers/media/related-files";
import {DeleteButton} from 'atp-ui';

export default ({media, onMediaDelete}) =>
    <Row>
        <Col xs={8} xsOffset={2}>
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
                <Col xs={6}>
                    <Image imageId={media.id} width={false} height={false} />
                </Col>
                <Col xs={6}>
                    <RelatedFiles media={media} />
                </Col>
            </Row>
        </Col>
    </Row>;
