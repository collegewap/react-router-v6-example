export const fakeAuth = {
  isAuthenticated: false,
  login(callBack) {
    fakeAuth.isAuthenticated = true;
    callBack();
  },
  logout(cb) {
    fakeAuth.isAuthenticated = false;
    cb();
  },
};
