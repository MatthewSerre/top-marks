
import React from 'react';
import FoldersContainer from './containers/foldersContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import About from './components/about'
import Home from './components/home'
import BookmarksContainer from './containers/bookmarksContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Top Marks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/folders/new">Create a New Folder</Nav.Link>
              <Nav.Link as={Link} to="/bookmarks">All Bookmarks</Nav.Link>
              <Nav.Link as={Link} to="/folders">My Folders</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar><br />
        <Route path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <FoldersContainer />
        <Route exact path="/bookmarks" component={BookmarksContainer}/>
     </div>
    );
  }
}

export default App;