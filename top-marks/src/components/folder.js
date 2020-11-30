
import React from 'react'
import {deleteFolder} from '../actions/deleteFolder'
import {connect} from 'react-redux'
import {Row, Col, ListGroup} from "react-bootstrap";
import BookmarksContainer from '../containers/bookmarksContainer'

const Folder = (props) => {

    let folder = props.folders.filter(folder => folder.id == props.match.params.id)[0]

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5><strong>{folder ? folder.name : null}</strong></h5>
                            <h6>{folder ? folder.bookmarks.length === 1 ? `${folder.bookmarks.length} Bookmark` : `${folder.bookmarks.length} Bookmarks` : null}</h6>
                            <p><i>{folder ? folder.description : null}</i></p>
                        </ListGroup.Item>
                    </ListGroup><br />
                </Col>
            </Row>
            <BookmarksContainer folder={folder}/>
        </React.Fragment>
    )
}

export default connect(null, {deleteFolder})(Folder)