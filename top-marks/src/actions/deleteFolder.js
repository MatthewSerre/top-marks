export const deleteFolder = (folderId) => {

    return (dispatch) => {
        // localhost
        fetch(`/api/v1/folders/${folderId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(folder => dispatch({type: 'DELETE_FOLDER', payload: folder}))
    }

}