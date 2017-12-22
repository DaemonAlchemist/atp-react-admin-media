
import React from "react";
import {Button, InputGroup} from "react-bootstrap";
import {Field} from "redux-form";
import {FileInput} from 'atp-ui';
import {Icon} from 'react-font-awesome-5';

export default props =>
    <form
        onChange={() => setTimeout(props.handleSubmit, 0)}
        style={{display: "inline", position: "relative"}}
    >
        <Field
            name="file"
            placeholder="Upload file"
            component={FileInput}
            style={{
                position: "absolute",
                top: "-9px",
                left: 0,
                display: "block",
                height: "35px",
                width: props.showText ? "84px" : "20px",
                opacity: 0,
                zIndex: 999
            }}/>
        <Button
            bsStyle="primary"
            bsSize={props.bsSize || "large"}
            onClick={() => {}}
            enabled={!props.isUploading}
        >
            {props.isUploading
                ? <Icon.Spinner spin fixedWidth />
                : <Icon.Upload fixedWidth />
            }
            {props.showText ? "Upload" : ""}
        </Button>
    </form>;
