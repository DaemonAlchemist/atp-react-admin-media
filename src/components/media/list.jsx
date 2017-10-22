/**
 * Created by Andy on 4/22/2017.
 */

import React from "react";
import {Row, Col, Panel} from "react-bootstrap";
import NewMediaForm from "../../containers/media/form/create";
import {restUrl} from "atp-rest-client";

export default props =>
    <Row>
        <Col xs={12}>
            <NewMediaForm />
        </Col>
        <Col xs={12} style={{paddingTop: "15px"}}>
            <Row>
                {props.media.map(item =>
                    <Col key={item.id} xs={6} sm={4} md={2}>
                        <Panel>
                            <img src={restUrl("media/" + item.id + "/download?width=300&height=300&format=png&loginToken=" + props.loginToken)} className="img-responsive"/>
                            <span>{item.name}</span>
                        </Panel>
                    </Col>
                )}
            </Row>
        </Col>
    </Row>;
