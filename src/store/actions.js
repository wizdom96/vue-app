export default {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
    updInfo(context, payload) {
      context.commit('updInfo', payload);
    }
  };
  