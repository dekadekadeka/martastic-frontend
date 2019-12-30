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

export const deleteFriend = (user, friend) => dispatch => {
    const token = localStorage.token;
    fetch("https://martastic.herokuapp.com/friendships")
    .then(resp => resp.json())
    .then(data => {
        let toBeDeleted = (data.find(friendObj => friendObj.user_id === user && friendObj.friend_id === friend))
        fetch(`https://martastic.herokuapp.com/friendships/${toBeDeleted.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(
            dispatch({
                type: 'DELETE_FRIEND'
            })
        )
    })
}
