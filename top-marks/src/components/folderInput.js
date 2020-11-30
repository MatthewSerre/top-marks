import React from 'react';
import {connect} from 'react-redux'
import {addFolder} from '../actions/addFolder'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FolderInput extends React.Component {

    state = {name: ''}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addFolder(this.state)
        this.setState({name: "", description: ''})
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Create a New Folder</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOnChange} placeholder="Folder Name" value={this.state.name}/><br />
                        <Form.Control as="textarea" rows="3" name="description" onChange={this.handleOnChange} placeholder="Folder Description" value={this.state.description}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Folder
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addFolder})(FolderInput)