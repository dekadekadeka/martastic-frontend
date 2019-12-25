export const fetchPics = () => dispatch => {
    fetch("https://martastic.herokuapp.com/pics")
    .then(resp => resp.json())
    .then(pics => dispatch({
        type: 'FETCH_PICS',
        payload: pics
    }))
}

export const createPic = (picData) => dispatch => {
    const token = localStorage.token;
    fetch("https://martastic.herokuapp.com/pics", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({pic: picData})
    })
    .then(resp => resp.json())
    .then(pic => {
        if (pic.error) {
            dispatch({
                type: 'PIC_FAIL',
                payload: pic.error
            })
        } else {
            dispatch({
                type: "NEW_PIC",
                payload: pic
            })
        }
    })
}