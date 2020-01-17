import {LOGIN} from "./actionTypes";

export const login = (currentUser) => {
    return {type: LOGIN, currentUser: currentUser}
}



