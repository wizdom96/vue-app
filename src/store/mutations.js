export default {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },

    updInfo(state, payload) {
      state.profile = payload
    }
  };
  