export const editUser = (userHash) => {
    console.log(userHash)
    return async dispatch => {
        const token = localStorage.token;
        if (token) {
        const resp = await fetch(`https://martastic.herokuapp.com/users/${userHash.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
                body: JSON.stringify({ user: userHash })
        });
        const user = await resp.json();
        if (user.error) {
            console.log(user.error)
        }
        else {
            dispatch({
                type: 'EDIT_USER',
                payload: user
            });
        }
    }
    }
}