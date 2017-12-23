
import React from "react";
import {Row, Col, Panel} from "react-bootstrap";
import NewMediaForm from "../../containers/media/form/create";
import Image from "../../containers/image";
import Masonry from 'react-masonry-component';

export default props =>
    <Row>
        <Col xs={12} className="text-right">
            <NewMediaForm showText={true} onUpload={props.onUpload} />
        </Col>
        <Col xs={12} style={{paddingTop: "15px"}}>
            <Row>
                <Masonry>
                    {props.media.map(item =>
                        <Col key={item.id} xs={6} sm={3} md={2}>
                            <Panel footer={<span style={{overflow: "ellipsis"}}>{item.fileName}.{item.fileExtension}</span>}>
                                <Image imageId={item.id} width={300} height={300} />
                            </Panel>
                        </Col>
                    )}
                </Masonry>
            </Row>
        </Col>
    </Row>;
