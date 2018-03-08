
import React from 'react';
import {Row, Col, InputGroup, Button, Panel} from 'react-bootstrap';
import NewMediaForm from '../../containers/media/form/create';
import Image from "../../containers/image";
import {Icon} from 'react-font-awesome-5';

export default ({title, imageId, image, loginToken, onSave, width, height}) =>
    <Panel>
        <Panel.Heading>
            <Icon.Image /> {title}
            <div style={{float: "right"}}>
                <Button bsStyle="link" type="submit" style={{marginTop: "-4px"}} onClick={() => {alert("Not implemented yet. :(");}}>
                    <Icon.Search fixedWidth />
                </Button>
                <NewMediaForm showText={false} onUpload={data => onSave(data.results.id)} />
            </div>
        </Panel.Heading>
        <Panel.Body>
            <Row>
                <Col xs={12}>
                    {imageId && image &&
                    <div>
                        <Image imageId={image.id} width={width} height={height} />
                        <span>{image.name}</span>
                    </div>
                    }
                    {!imageId && <Icon.Image size="5x" />}
                </Col>
            </Row>
        </Panel.Body>
    </Panel>;
