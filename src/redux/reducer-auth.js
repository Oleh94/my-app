const SET_USER_AUTH_PROFILE = "SET_USER_AUTH_PROFILE";

let firstState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}

const reducerAuth = (state = firstState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_PROFILE: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUserAuthProfile = (id, email, login) => ({ type : SET_USER_AUTH_PROFILE, data : {id, email, login}});

export default reducerAuth;