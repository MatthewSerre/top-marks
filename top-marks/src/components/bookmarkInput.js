import React from 'react';
import {connect} from 'react-redux'
import {addBookmark} from '../actions/addBookmark'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class BookmarkInput extends React.Component {

    state = {name: '', url: '', notes: ''}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addBookmark(this.state, this.props.folder.id)
        this.setState({name: '', url: '', notes: ''})
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                    <ListGroup>
                    <ListGroup.Item><strong>Add a New Bookmark</strong></ListGroup.Item><br />
                        </ListGroup>
   <Form.Control type="text" name="name" onChange={this.handleOnChange} placeholder="Name" value={this.state.name}/><br/>
                        <Form.Control type="text" name="url" onChange={this.handleOnChange} placeholder="URL" value={this.state.url}/><br/>
                        <Form.Control as="textarea" rows="3" name="notes" onChange={this.handleOnChange} placeholder="Notes" value={this.state.notes}/><br/>
                        <Button variant="primary" type="submit">
                            Add Bookmark
                        </Button>

                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addBookmark})(BookmarkInput)