export const fetchPics = () => {
    return async dispatch => {
        const resp = await fetch("http://localhost:3000/pics");
        const pics = await resp.json();
        dispatch({
            type: 'FETCH_PICS',
            payload: pics
        })
    }
}