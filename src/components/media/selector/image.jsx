
import React from 'react';
import {Row, Col, InputGroup, Button, Panel} from 'react-bootstrap';
import NewMediaForm from '../../../containers/media/form/create';
import {restUrl} from "atp-rest-client";

export default ({mediaId, image, loginToken, onSave}) =>
    <Row>
        <Col xs={12}>
            {mediaId && image &&
                <Panel>
                    <img src={restUrl("media/" + image.id + "/download?width=300&height=300&format=png&loginToken=" + loginToken)} className="img-responsive"/>
                    <span>{image.name}</span>
                </Panel>
            }
            {!mediaId && <i className="fa fa-picture-o fa-5x"></i>}
        </Col>
        <Col xs={12} className="text-right">
            <Button bsStyle="primary" bsSize="lg" type="submit" onClick={() => {alert("Not implemented yet. :(");}}>
                <i className="fa fa-search" /> Search
            </Button>
            <NewMediaForm onUpload={data => onSave(data.results.id)} />
        </Col>
    </Row>;
