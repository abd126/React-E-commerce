

const setPost = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SETPOST", data: data
        })
        console.log("Running")
    }
}
 

export {
    setPost
}