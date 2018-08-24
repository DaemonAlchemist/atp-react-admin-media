
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import RelatedFiles from "../../containers/media/related-files";
import {DeleteButton, Markdown} from 'atp-ui';
import {MediaSelector} from "atp-media";
import {Tags} from 'atp-tags';
import {HasPermission} from "atp-uac";
import {InlineEdit} from 'atp-inline-edit';
import {Icon} from 'react-font-awesome-5';

const CanEdit = props => <HasPermission yes permissions={["media.file.update"]} {...props} />;
const CantEdit = props => <HasPermission no permissions={["media.file.update"]} {...props} />;

export default ({media, onMediaDelete, updateImage}) =>
    <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} xl={6} xlOffset={3}>
            <Row>
                <Col xs={12}>
                    <CanEdit>
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
                    </CanEdit>
                    <h1>
                        <CanEdit>
                            <InlineEdit.Text
                                id={"media.title.edit" + media.id}
                                inline
                                value={media.title}
                                name="title"
                                placeHolder="No title set"
                                onSave={updateImage}
                            />
                        </CanEdit>
                        <CantEdit>
                            {media.title}
                        </CantEdit>
                        <br/>
                        <small>{media.fileName}.{media.fileExtension}</small>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <MediaSelector.Image title="Image" imageId={media.id} onSave={() => {}} uploadOnly width={false} height={false} />
                </Col>
                <Col xs={12} sm={6}>
                    <Panel>
                        <Panel.Heading>
                            <Icon.File /> Description
                        </Panel.Heading>
                        <Panel.Body>
                            <CanEdit>
                                <InlineEdit.Wysiwyg
                                    id={"media.description.edit" + media.id}
                                    value={media.description}
                                    name="description"
                                    rows={10}
                                    onSave={updateImage}
                                />
                            </CanEdit>
                            <CantEdit>
                                <Markdown markdown={media.description} />
                            </CantEdit>
                        </Panel.Body>
                    </Panel>

                    <RelatedFiles media={media} />

                    <Tags entityType="mediaFile" entityId={media.id} />
                </Col>
            </Row>
        </Col>
    </Row>;
