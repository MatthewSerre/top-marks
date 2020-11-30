import React from 'react'
import {Link} from 'react-router-dom'
import {Button, ListGroup} from "react-bootstrap";
import {deleteFolder} from '../actions/deleteFolder'
import {connect} from 'react-redux'

const Folders = (props) => { 

    const handleDelete = (folder) => {
        props.deleteFolder(folder.id)
    }

    return (
        <div className="container">
            {props.folders.map(folder =>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5><Link to={`/folders/${folder.id}`}>{folder.name}</Link></h5>
                            <h6>{folder ? folder.bookmarks.length === 1 ? `${folder.bookmarks.length} Bookmark` : `${folder.bookmarks.length} Bookmarks` : null}</h6>
                            <p><i>{folder.description}</i></p>
                            <Button variant="danger" onClick={e =>
                                    window.confirm('Delete folder and all associated bookmarks?') &&
                                    handleDelete(folder)
                                } type="submit">Delete Folder
                            </Button>
                            </ListGroup.Item>
                            <br />
                    </ListGroup>
            )}

        </div>
    )

}

export default connect(null, {deleteFolder})(Folders)