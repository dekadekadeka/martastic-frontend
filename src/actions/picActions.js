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

export const createPic = (picData) => dispatch => {
    console.log(picData)
    const token = localStorage.token;
    fetch("http://localhost:3000/pics", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({pic: picData})
    })
    .then(resp => resp.json())
    .then(pic => dispatch({
        type: "NEW_PIC",
        payload: pic
    }))
}