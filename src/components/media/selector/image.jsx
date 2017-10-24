
import React from 'react';
import {Row, Col, InputGroup, Button} from 'react-bootstrap';
import NewMediaForm from '../../../containers/media/form/create';

export default props =>
    <Row>
        <Col xs={12}>
            <i className="fa fa-picture-o fa-5x"></i>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-right">
            <Button bsStyle="primary" bsSize="lg" type="submit" onClick={() => {alert("Not implemented yet. :(");}}>
                <i className="fa fa-search" /> Search
            </Button>
        </Col>
        <Col xs={12} sm={6} md={9}>
            <NewMediaForm onUpload={() => {alert('Not implemented yet. :(');}} />
        </Col>
    </Row>;
