
import React from "react";
import {Row, Col, Panel, Button} from "react-bootstrap";
import NewMediaForm from "../../containers/media/form/create";
import Image from "../../containers/image";
import Masonry from 'react-masonry-component';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import {DeleteButton, Paginator} from 'atp-ui';
import {Icon} from 'react-font-awesome-5';
import {MediaLink} from "../links";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

export default ({pagerId, onUpload, media, onMediaDelete}) =>
    <Row>
        <Col xs={12} className="text-right">
            <NewMediaForm showText={true} bsSize="lg" onUpload={onUpload} />
        </Col>
        <Col xs={12}>
            <div style={{textAlign: "center"}}>
                <Paginator name={pagerId} pagesToShow={{outer: 2, inner: 2}}/>
            </div>
        </Col>
        <Col xs={12} style={{paddingTop: "15px"}}>
            <Row>
                <Masonry>
                    {media.map(item =>
                        <Col key={item.id} xs={6} sm={3} md={2}>
                            <Panel>
                                <Panel.Heading>
                                    <div style={{float: "right"}}>
                                        <DeleteButton
                                            id={`mediaDeleteBtn${item.id}`}
                                            text="Delete"
                                            message={`Are you sure you want to delete the image "${item.fileName}.${item.fileExtension}?"  This cannot be undone.`}
                                            confirmText="Yes, delete it"
                                            cancelText="No, keep it."
                                            width="250px"
                                            onClick={onMediaDelete(item.id)}
                                        />
                                    </div>
                                    <ResponsiveEllipsis
                                        text={item.fileName + "." + item.fileExtension}
                                        maxLine={2}
                                    />
                                </Panel.Heading>
                                <MediaLink media={item}>
                                    <Image imageId={item.id} width={300} height={300} />
                                </MediaLink>
                            </Panel>
                        </Col>
                    )}
                </Masonry>
            </Row>
        </Col>
        <Col xs={12}>
            <div style={{textAlign: "center"}}>
                <Paginator name={pagerId} pagesToShow={{outer: 2, inner: 2}}/>
            </div>
        </Col>
    </Row>;
