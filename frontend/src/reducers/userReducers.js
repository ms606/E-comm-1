
function userSigninReducer(state={}, action) {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
          return { loading: true};
    }
}