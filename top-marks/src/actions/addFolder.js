export function addFolder(data) {
    return (dispatch) => {
        fetch(`http://0.0.0.0:3000/api/v1/folders`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(folder => dispatch({type: 'ADD_FOLDER', payload: folder}))
    }
}
