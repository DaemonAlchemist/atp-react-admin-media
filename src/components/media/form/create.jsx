/**
 * Created by Andy on 4/22/2017.
 */

import React from "react";
import {Button, InputGroup} from "react-bootstrap";
import {Field} from "redux-form";

const adaptFileEventToValue = delegate =>
    e => delegate(e.target.files[0])

const FileInput = ({
    input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps,
    },
    meta: omitMeta,
    ...props,
}) =>
    <input
        className="form-control"
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
    />;

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="file" placeholder="Upload file" component={FileInput} className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-upload"/> Upload</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
