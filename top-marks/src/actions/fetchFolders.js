export function fetchFolders() {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/folders`)
    .then(res => res.json())
    .then(folders => dispatch({
        type: 'FETCH_FOLDERS',
        payload: folders
    }))
    }
}