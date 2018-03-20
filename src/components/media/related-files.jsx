
import React from 'react';
import {Panel, Table} from 'react-bootstrap';
import {DeleteButton} from 'atp-ui';
import filesize from 'filesize';
import {Icon} from 'react-font-awesome-5';

export default ({files}) =>
    <Panel>
        <Panel.Heading>
            <Icon.Image stack /> Related S3 Files
        </Panel.Heading>
        <Table>
            <thead>
            <tr>
                <th>File name</th>
                <th>Size</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {files.map((file, index) =>
                    <tr key={file.ETag} className={index === 0 ? "text-info" : ""}>
                        <td>{file.Key} {index === 0 ? "(base file)" : ""}</td>
                        <td>{filesize(file.Size, {round: 0})}</td>
                        <td>
                            <DeleteButton
                                id={`s3FileDeleteBtn${file.ETag}`}
                                message="Are you sure you want to delete this media file from S3?  This cannot be undone."
                                confirmText="Yes, delete it"
                                cancelText="No, keep it"
                                width="250px"
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    </Panel>;