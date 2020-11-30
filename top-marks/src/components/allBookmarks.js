import React from 'react'
import Bookmarks from './bookmarks'

const AllBookmarks = (props) => {
    return (
        <div className="container">
            {props.folders.map(folder =>
                <Bookmarks bookmarks={folder.bookmarks}/>
            )}
        </div>
    )
}

export default AllBookmarks