
import React from 'react';
import {Row, Col, InputGroup, Button, Panel} from 'react-bootstrap';
import NewMediaForm from '../../../containers/media/form/create';
import {restUrl} from "atp-rest-client";

export default ({title, mediaId, image, loginToken, onSave}) =>
    <Panel header={<span>
        <i className="fa fa-picture-o"></i> {title}
        <div style={{float: "right"}}>
            <Button bsStyle="primary" bsSize="xsmall" type="submit" onClick={() => {alert("Not implemented yet. :(");}}>
                <i className="fa fa-search fa-fw" title="Search"/>
            </Button>
            <NewMediaForm bsSize="xsmall" showText={false} onUpload={data => onSave(data.results.id)} />
        </div>
    </span>}>
        <Row>
            <Col xs={12}>
                {mediaId && image &&
                <div>
                    <img src={restUrl("media/" + image.id + "/download?width=300&height=300&format=png&loginToken=" + loginToken)} className="img-responsive"/>
                    <span>{image.name}</span>
                </div>
                }
                {!mediaId && <i className="fa fa-picture-o fa-5x"></i>}
            </Col>
        </Row>
    </Panel>
