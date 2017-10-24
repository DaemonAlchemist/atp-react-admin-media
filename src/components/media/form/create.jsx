/**
 * Created by Andy on 4/22/2017.
 */

import React from "react";
import {Button, InputGroup} from "react-bootstrap";
import {Field} from "redux-form";
import {FileInput} from 'atp-ui';

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup bsSize="lg">
            <Field name="file" placeholder="Upload file" component={FileInput} className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-upload"/> Upload</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
