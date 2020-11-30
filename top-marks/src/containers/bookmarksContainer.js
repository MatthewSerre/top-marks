import React from 'react'
import BookmarkInput from '../components/bookmarkInput'
import Bookmarks from '../components/bookmarks'
import {Row, Col, Container} from "react-bootstrap";
import {Route, Switch} from 'react-router-dom'
import AllBookmarks from '../components/allBookmarks'
import {connect} from 'react-redux';
import {fetchFolders} from '../actions/fetchFolders'

class BookmarksContainer extends React.Component {

    componentDidMount() {
        this.props.fetchFolders()
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/bookmarks" render={() => <AllBookmarks folders={this.props.folders}/>}/>
                    <Route exact path="/folders/:id" render={(routerProps) =>
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <BookmarkInput {...routerProps} folder={this.props.folder}/>
                                </Col>
                                <Col>
                                    <Container>
                                        <Bookmarks {...routerProps} bookmarks={this.props.folder && this.props.folder.bookmarks}/>
                                    </Container>
                                </Col>
                            </Row>
                        </React.Fragment>}
                    />
                </Switch>
                </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        folders: state.folders
    }
}

export default connect(mapStateToProps, {fetchFolders})(BookmarksContainer);