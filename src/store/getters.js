export default {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    user(state) {
      return state.profile;
    }
  };