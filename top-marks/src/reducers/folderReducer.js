export default function folderReducer(state = {folders: []}, action) {
    switch (action.type) {
        case 'FETCH_FOLDERS':
            return {folders: action.payload}
        case 'ADD_FOLDER':
            return {...state, folders: [...state.folders, action.payload]}
        case 'ADD_BOOKMARK':
            let folders = state.folders.map(folder => {
                if (folder.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return folder
                }
            })
            return {...state, folders: folders}
        case 'DELETE_BOOKMARK':
            let foldersAfterBookmarkDelete = state.folders.map(folder => {
                if (folder.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return folder
                }
            })
            return {...state, folders: foldersAfterBookmarkDelete}
        case 'DELETE_FOLDER':
            let foldersAfterDelete = state.folders.filter(folder => {
                if (folder.id !== action.payload.id) {
                    return folder
                }
            })
            return {...state, folders: foldersAfterDelete}
        default:
            return state
    }
}