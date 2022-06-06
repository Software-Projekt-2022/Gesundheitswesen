

export const login = (formData, history) => async (dispatch) => {
    try {
        // log in
        history.push('/')
    } catch (e) {
        console.log.apply(e);
    }
}

export const logout = (formData, history) => async (dispatch) => {
    try {
        // log in
        history.push('/')
    } catch (e) {
        console.log.apply(e);
    }
}