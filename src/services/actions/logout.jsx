// import { logout } from "../../utils/MainAPI";
// import { deleteCookie } from "../../utils/token";

// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_ERROR = 'LOGOUT_ERROR';


// export function logoutActions( email, password){
//     return function (dispatch){
//         dispatch({
//             type: LOGOUT_REQUEST
//         })
//         logout( email, password)
//         .then(({ success }) => {
//             if (success) {
//                 deleteCookie('access');
//                 localStorage.removeItem('refresh');
//             }
//                 dispatch({
//                     type: LOGOUT_SUCCESS,
//                     payload: success
//                 });
//             })
//             .catch((e) => {
//                 dispatch({
//                     type: LOGOUT_ERROR
//                 })
//             })
//     }
// }