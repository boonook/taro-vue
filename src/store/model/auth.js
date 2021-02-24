const auth ={
  state:{
    isLogin:false
  },
  mutations:{
    setIsLogin(state,isLogin){
      state.isLogin=isLogin
    }
  },
  actions:{
    handle({commit,dispatch},isLogin){
      return new Promise((resolve,reject)=>{
        commit('setIsLogin',isLogin);
        resolve(true)
      })
    }
  },
};
export default auth
