export const addInterceptors = (axios, store) => {
  axios.interceptors.request.use(config => {
    store.commit("INCREASE_ACTIVE_REQUESTS");
    if (store.state.activeRequests > 0 && !store.state.loading) {
      store.commit("SET_LOADING", true);
    }
    return config;
  });
  axios.interceptors.response.use(
    config => {
      store.commit("DECREASE_ACTIVE_REQUESTS");
      if (store.state.activeRequests === 0) {
        store.commit("SET_LOADING", false);
      }
      return config;
    },
    error => {
      store.commit("DECREASE_ACTIVE_REQUESTS");
      if (store.state.activeRequests === 0) {
        store.commit("DECREASE_ACTIVE_REQUESTS", false);
      }
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : "Something went wrong: \\";
      store.commit("SET_SITE_ALERT", message);
      return Promise.reject(error);
    }
  );
};
