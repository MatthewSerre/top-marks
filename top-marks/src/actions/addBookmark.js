export function addBookmark(bookmark, folderId) {
    return (dispatch) => {
        fetch(`http://0.0.0.0:3000/api/v1/folders/${folderId}/bookmarks`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookmark)
        })
        .then(res => res.json())
        .then(bookmark => dispatch({type: 'ADD_BOOKMARK', payload: bookmark}))
    }
}
