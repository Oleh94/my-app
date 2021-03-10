const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let firstState = {
    postData: [
        {message: "нюхай бебру", likesAmount: 15, id: 1},
        {message: "сосай бибу", likesAmount: 20, id: 2},
        {message: "tiazhko", likesAmount: 58999, id: 3},
    ],
    newPostText: "2021",
    profile: null
}

const reducerProfile = (state = firstState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likesAmount: 0,
                id: 4
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type : ADD_POST});
export const changePostTextActionCreator = (text) => ({ type : UPDATE_NEW_POST_TEXT, newText : text});
export const setUserProfile = (profile) => ({ type : SET_USER_PROFILE, profile});

export default reducerProfile;