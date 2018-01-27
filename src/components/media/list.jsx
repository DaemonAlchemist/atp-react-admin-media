
import React from "react";
import {Row, Col, Panel} from "react-bootstrap";
import NewMediaForm from "../../containers/media/form/create";
import Image from "../../containers/image";
import Masonry from 'react-masonry-component';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import {DeleteButton} from 'atp-ui';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

export default ({onUpload, media, onMediaDelete}) =>
    <Row>
        <Col xs={12} className="text-right">
            <NewMediaForm showText={true} onUpload={onUpload} />
        </Col>
        <Col xs={12} style={{paddingTop: "15px"}}>
            <Row>
                <Masonry>
                    {media.map(item =>
                        <Col key={item.id} xs={6} sm={3} md={2}>
                            <Panel footer={<ResponsiveEllipsis
                                text={item.fileName + "." + item.fileExtension}
                                maxLine={2}
                            />}>
                                <DeleteButton onClick={onMediaDelete(item.id)} />
                                <Image imageId={item.id} width={300} height={300} />
                            </Panel>
                        </Col>
                    )}
                </Masonry>
            </Row>
        </Col>
    </Row>;
