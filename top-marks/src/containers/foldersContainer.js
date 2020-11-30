import React from 'react';
import Folders from '../components/folders'
import {Route, Switch} from 'react-router-dom'
import FolderInput from '../components/folderInput'
import Folder from '../components/folder'
import {fetchFolders} from '../actions/fetchFolders'
import {connect} from 'react-redux';

class FoldersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchFolders()
    }

    render() {
        return (
            <Switch>
                <Route exact path="/folders/new" component={FolderInput}/>
                <Route path="/folders/:id" render={(routerProps) => <Folder {...routerProps} folders={this.props.folders}/>} />
                <Route exact path="/folders" render={() => <Folders folders={this.props.folders}/>} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        folders: state.folders
    }
}

export default connect(mapStateToProps, {fetchFolders})(FoldersContainer);