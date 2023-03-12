// const initialState = {
//     success: false,
//     user: {},
//     feedRequest: false,
//     feedFailed: false,
// }

// export function loginReducer(state = initialState, action) {
//     switch (action.type) {
//         case LOGIN_REQUEST: {
//             return {
//                 ...state,
//                 feedRequest: true,
//                 feedFailed: false,
//             }
//         }
//         case LOGIN_SUCCESS: {
//             return {
//                 ...state,
//                 success: action.payload.success,
//                 user: action.payload.user,
//                 feedRequest: false
//             }
//         }
//         case LOGIN_ERROR: {
//             return {
//                 ...state,
//                 feedRequest: false,
//                 feedFailed: true,
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }