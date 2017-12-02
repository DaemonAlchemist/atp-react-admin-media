/**
 * Created by Andy on 4/22/2017.
 */

import React from "react";
import {Row, Col, Panel} from "react-bootstrap";
import NewMediaForm from "../../containers/media/form/create";
import Image from "../../containers/image";

export default props =>
    <Row>
        <Col xs={12} className="text-right">
            <NewMediaForm showText={true} onUpload={props.onUpload} />
        </Col>
        <Col xs={12} style={{paddingTop: "15px"}}>
            <Row>
                {props.media.map(item =>
                    <Col key={item.id} xs={6} sm={4} md={2}>
                        <Panel>
                            <Image imageId={item.id} width={300} height={300} />
                            <span>{item.name}</span>
                        </Panel>
                    </Col>
                )}
            </Row>
        </Col>
    </Row>;
