
import React from 'react';
import {Row, Col, InputGroup, Button, Panel} from 'react-bootstrap';
import NewMediaForm from '../../containers/media/form/create';
import Image from "../../containers/image";

export default ({title, imageId, image, loginToken, onSave, width, height}) =>
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
                {imageId && image &&
                <div>
                    <Image imageId={image.id} width={width} height={height} />
                    <span>{image.name}</span>
                </div>
                }
                {!imageId && <i className="fa fa-picture-o fa-5x"></i>}
            </Col>
        </Row>
    </Panel>
