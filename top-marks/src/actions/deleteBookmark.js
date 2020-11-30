export const deleteBookmark = (bookmarkId, folderId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/folders/${folderId}/bookmarks/${bookmarkId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(folder => dispatch({type: 'DELETE_BOOKMARK', payload: folder}))
    }

}