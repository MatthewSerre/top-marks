export function fetchFolders() {
    return (dispatch) => {
    fetch(`/api/v1/folders`)
    .then(res => res.json())
    .then(folders => dispatch({
        type: 'FETCH_FOLDERS',
        payload: folders
    }))
    }
}