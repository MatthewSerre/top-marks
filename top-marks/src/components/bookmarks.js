import React from 'react'
import {connect} from 'react-redux'
import {deleteBookmark} from '../actions/deleteBookmark'
import {Button, ListGroup} from "react-bootstrap";

const Bookmarks = (props) => { 

    const handleDelete = (bookmark) => {
        props.deleteBookmark(bookmark.id, bookmark.folder_id)
    }

    return (
        <div>
            {props.bookmarks && props.bookmarks.map(bookmark =>
                <div>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>{bookmark.name}</strong><br />
                            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">Link</a><br />
                            <p><i>{bookmark.notes}</i></p>
                            <Button variant="danger" onClick={e =>
                                window.confirm('Delete bookmark?') &&
                                handleDelete(bookmark)
                                }
                            >Delete</Button>
                        </ListGroup.Item>
                    </ListGroup>
                    <br/>
                </div>
            )}
        </div>
    )

}

export default connect(null, {deleteBookmark})(Bookmarks)