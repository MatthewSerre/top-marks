export const deleteFolder = (folderId) => {

    return (dispatch) => {
        fetch(`http://0.0.0.0:3000/api/v1/folders/${folderId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(folder => dispatch({type: 'DELETE_FOLDER', payload: folder}))
    }

}